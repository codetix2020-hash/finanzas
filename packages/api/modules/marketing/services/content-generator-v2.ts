import Anthropic from "@anthropic-ai/sdk";
import { 
  VIRAL_HOOKS, 
  POST_STRUCTURES, 
  CTAS, 
  HASHTAGS, 
  PLATFORM_RULES 
} from "../data/content-templates";

interface ProductContext {
  name: string;
  description: string;
  targetAudience: string;
  usp: string;
  pricing?: any;
  competitors?: string[];
}

interface GeneratedPost {
  platform: string;
  content: string;
  hook: string;
  type: string;
  hashtags: string[];
  estimatedEngagement: string;
}

interface ContentBatch {
  posts: GeneratedPost[];
  tokensUsed: number;
  generatedAt: string;
}

// Seleccionar hashtags relevantes
function selectHashtags(nicho: string, platform: string): string[] {
  const rules = PLATFORM_RULES[platform as keyof typeof PLATFORM_RULES];
  const count = rules?.hashtagCount || 5;
  
  const nichoTags = HASHTAGS[nicho as keyof typeof HASHTAGS] || HASHTAGS.business;
  const reservasTags = HASHTAGS.reservas;
  
  // Mezclar hashtags del nicho + reservas
  const allTags = [...nichoTags, ...reservasTags];
  const shuffled = allTags.sort(() => Math.random() - 0.5);
  
  return shuffled.slice(0, count);
}

// Seleccionar hook aleatorio de una categoría
function selectHook(category: keyof typeof VIRAL_HOOKS): string {
  const hooks = VIRAL_HOOKS[category];
  return hooks[Math.floor(Math.random() * hooks.length)];
}

// Seleccionar CTA
function selectCTA(type: 'engagement' | 'conversion' | 'seguimiento'): string {
  const ctas = CTAS[type];
  return ctas[Math.floor(Math.random() * ctas.length)];
}

// GENERADOR PRINCIPAL - BATCH DE 7 POSTS
export async function generateWeeklyContent(
  product: ProductContext,
  nicho: string = "peluqueria"
): Promise<ContentBatch> {
  console.log("📝 Generando contenido semanal para:", product.name);
  
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  
  // Definir los 7 tipos de posts de la semana
  const weekPlan = [
    { dia: "Lunes", tipo: "educativo", objetivo: "valor" },
    { dia: "Martes", tipo: "problema_solucion", objetivo: "awareness" },
    { dia: "Miércoles", tipo: "testimonio", objetivo: "social proof" },
    { dia: "Jueves", tipo: "educativo", objetivo: "valor" },
    { dia: "Viernes", tipo: "promotional", objetivo: "conversión" },
    { dia: "Sábado", tipo: "carrusel_hook", objetivo: "engagement" },
    { dia: "Domingo", tipo: "problema_solucion", objetivo: "awareness" },
  ];

  // UN SOLO PROMPT para generar los 7 posts (ahorra 80% tokens)
  const prompt = `Eres un experto en social media para negocios de ${nicho}.

PRODUCTO: ${product.name}
DESCRIPCIÓN: ${product.description}
AUDIENCIA: ${product.targetAudience}
USP: ${product.usp}
COMPETIDORES: ${product.competitors?.join(", ") || "No especificados"}

GENERA 7 POSTS (uno por día de la semana) siguiendo este plan:

${weekPlan.map((p, i) => `${i + 1}. ${p.dia} - Tipo: ${p.tipo} - Objetivo: ${p.objetivo}`).join("\n")}

REGLAS CRÍTICAS:
- Cada post MÁXIMO 150 caracteres (sin contar hashtags)
- Empezar SIEMPRE con un hook potente (pregunta, dato, POV, etc)
- Usar emojis estratégicamente (2-4 por post)
- Tono: cercano, profesional, español de España
- NO usar palabras en inglés innecesarias
- El CTA debe ser natural, no forzado
- Cada post debe poder funcionar solo (sin contexto)

USA ESTAS FÓRMULAS DE HOOKS:
- Problema: "¿Todavía X?", "El error que comete el 90%..."
- Curiosidad: "Lo que nadie te cuenta sobre..."
- Social proof: "X+ negocios ya..."
- Urgencia: "Si no X ahora..."

FORMATO DE RESPUESTA (JSON):
{
  "posts": [
    {
      "dia": "Lunes",
      "tipo": "educativo",
      "hook": "el hook usado",
      "contenido": "texto completo del post SIN hashtags",
      "cta": "call to action",
      "engagement_estimado": "alto/medio/bajo"
    }
  ]
}

Responde SOLO con el JSON, nada más.`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }]
  });

  const tokensUsed = response.usage.input_tokens + response.usage.output_tokens;
  const responseText = response.content[0].type === "text" ? response.content[0].text : "";

  // Parsear respuesta
  let parsedPosts: any[] = [];
  try {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      parsedPosts = parsed.posts || [];
    }
  } catch (e) {
    console.error("❌ Error parseando respuesta:", e);
    parsedPosts = [];
  }

  // Procesar y añadir hashtags
  const posts: GeneratedPost[] = parsedPosts.map((post: any) => {
    const hashtags = selectHashtags(nicho, "instagram");
    const hashtagString = hashtags.map(h => h.startsWith("#") ? h : `#${h}`).join(" ");
    
    return {
      platform: "instagram", // Generamos para IG, adaptamos para TikTok después
      content: `${post.contenido}\n\n${post.cta}\n\n${hashtagString}`,
      hook: post.hook,
      type: post.tipo,
      hashtags,
      estimatedEngagement: post.engagement_estimado || "medio"
    };
  });

  console.log(`✅ Generados ${posts.length} posts con ${tokensUsed} tokens`);

  return {
    posts,
    tokensUsed,
    generatedAt: new Date().toISOString()
  };
}

// Adaptar post de Instagram a TikTok
export function adaptToTikTok(instagramPost: GeneratedPost): GeneratedPost {
  const rules = PLATFORM_RULES.tiktok;
  
  // Extraer solo el hook y contenido principal (sin hashtags)
  let content = instagramPost.content.split("\n\n")[0]; // Primera parte
  
  // Acortar si es necesario
  if (content.length > rules.maxLength) {
    content = content.substring(0, rules.maxLength - 20) + "...";
  }
  
  // Hashtags reducidos para TikTok
  const tiktokHashtags = instagramPost.hashtags.slice(0, rules.hashtagCount);
  const hashtagString = tiktokHashtags.join(" ");
  
  return {
    ...instagramPost,
    platform: "tiktok",
    content: `${content}\n\n${hashtagString}`,
    hashtags: tiktokHashtags
  };
}

// Generar un solo post rápido (para tests o urgencias)
export async function generateSinglePost(
  product: ProductContext,
  tipo: string = "educativo",
  platform: string = "instagram"
): Promise<GeneratedPost> {
  console.log(`📝 Generando post ${tipo} para ${platform}...`);
  
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  
  const rules = PLATFORM_RULES[platform as keyof typeof PLATFORM_RULES] || PLATFORM_RULES.instagram;
  
  const prompt = `Genera UN post de ${tipo} para ${platform}.

PRODUCTO: ${product.name} - ${product.usp}
AUDIENCIA: ${product.targetAudience}

REGLAS:
- Máximo ${rules.idealLength} caracteres
- Hook potente al inicio
- ${rules.hashtagCount} hashtags máximo
- Tono cercano, español de España
- Emojis estratégicos

Responde SOLO con el texto del post (incluye hashtags al final).`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 256,
    messages: [{ role: "user", content: prompt }]
  });

  const content = response.content[0].type === "text" ? response.content[0].text : "";
  const hashtags = selectHashtags("peluqueria", platform);

  return {
    platform,
    content,
    hook: content.split("\n")[0],
    type: tipo,
    hashtags,
    estimatedEngagement: "medio"
  };
}

