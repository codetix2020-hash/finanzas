import Anthropic from "@anthropic-ai/sdk";

const PUBLER_API_KEY = process.env.PUBLER_API_KEY;
const PUBLER_BASE_URL = "https://app.publer.io/api/v1";

interface PublerAccount {
  id: string;
  name: string;
  platform: string;
}

interface PostResult {
  success: boolean;
  postId?: string;
  error?: string;
  platform: string;
}

// Obtener cuentas conectadas
export async function getPublerAccounts(): Promise<PublerAccount[]> {
  console.log("📱 Obteniendo cuentas de Publer...");
  
  if (!PUBLER_API_KEY) {
    console.error("❌ PUBLER_API_KEY no configurada");
    return [];
  }

  try {
    const response = await fetch(`${PUBLER_BASE_URL}/accounts`, {
      headers: {
        "Authorization": `Bearer ${PUBLER_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      console.error("❌ Error obteniendo cuentas:", response.status);
      return [];
    }

    const accounts = await response.json();
    console.log("✅ Cuentas encontradas:", accounts.length);
    return accounts;
  } catch (error: any) {
    console.error("❌ Error en Publer:", error.message);
    return [];
  }
}

// Publicar en redes sociales
export async function publishToSocial(params: {
  content: string;
  imageUrl?: string;
  platforms: string[]; // ["instagram", "tiktok"]
  scheduleAt?: Date;
}): Promise<PostResult[]> {
  console.log("📤 Publicando en redes sociales...");
  console.log("  📝 Contenido:", params.content.substring(0, 50) + "...");
  console.log("  📱 Plataformas:", params.platforms.join(", "));

  if (!PUBLER_API_KEY) {
    console.error("❌ PUBLER_API_KEY no configurada");
    return params.platforms.map(p => ({
      success: false,
      error: "API key not configured",
      platform: p
    }));
  }

  try {
    // Obtener cuentas
    const accounts = await getPublerAccounts();
    
    // Filtrar cuentas por plataforma solicitada
    const targetAccounts = accounts.filter((acc: any) => 
      params.platforms.some(p => 
        acc.platform?.toLowerCase().includes(p.toLowerCase()) ||
        acc.type?.toLowerCase().includes(p.toLowerCase())
      )
    );

    if (targetAccounts.length === 0) {
      console.error("❌ No se encontraron cuentas para las plataformas:", params.platforms);
      return params.platforms.map(p => ({
        success: false,
        error: "No account found for platform",
        platform: p
      }));
    }

    console.log("✅ Cuentas objetivo:", targetAccounts.map((a: any) => a.name || a.id));

    // Crear el post
    const postData: any = {
      text: params.content,
      account_ids: targetAccounts.map((a: any) => a.id),
    };

    // Agregar imagen si existe
    if (params.imageUrl) {
      postData.media = [{ url: params.imageUrl }];
    }

    // Programar si se especifica fecha
    if (params.scheduleAt) {
      postData.scheduled_at = params.scheduleAt.toISOString();
    }

    const response = await fetch(`${PUBLER_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PUBLER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error publicando:", response.status, errorText);
      return params.platforms.map(p => ({
        success: false,
        error: `API error: ${response.status}`,
        platform: p
      }));
    }

    const result = await response.json();
    console.log("✅ Post creado:", result.id || result);

    return params.platforms.map(p => ({
      success: true,
      postId: result.id,
      platform: p
    }));

  } catch (error: any) {
    console.error("❌ Error en publishToSocial:", error.message);
    return params.platforms.map(p => ({
      success: false,
      error: error.message,
      platform: p
    }));
  }
}

// Generar contenido y publicar automáticamente
export async function generateAndPublish(params: {
  productName: string;
  productDescription: string;
  topic: string;
  platforms: string[];
  imageUrl?: string;
}): Promise<{
  content: string;
  results: PostResult[];
}> {
  console.log("🤖 Generando contenido para publicar...");

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Generar contenido optimizado para redes
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: `Genera un post para redes sociales (Instagram/TikTok) sobre:

Producto: ${params.productName}
Descripción: ${params.productDescription}
Tema específico: ${params.topic}

REGLAS:
- Máximo 280 caracteres
- Incluir 3-5 hashtags relevantes
- Tono cercano y profesional
- Call to action claro
- Usar emojis apropiados
- En español

Responde SOLO con el texto del post, nada más.`
    }]
  });

  const content = response.content[0].type === "text" 
    ? response.content[0].text 
    : "";

  console.log("✅ Contenido generado:", content.substring(0, 100) + "...");

  // Publicar
  const results = await publishToSocial({
    content,
    imageUrl: params.imageUrl,
    platforms: params.platforms
  });

  return { content, results };
}

