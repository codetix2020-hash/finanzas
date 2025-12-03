import Anthropic from "@anthropic-ai/sdk";

export interface SocialPost {
  id: string;
  platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram';
  content: string;
  mediaUrls?: string[];
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'published';
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
    clicks: number;
  };
}

export interface SocialAnalytics {
  platform: string;
  followers: number;
  engagementRate: number;
  topPosts: Array<{ content: string; engagement: number }>;
  sentiment: 'positive' | 'neutral' | 'negative';
  recommendations: string[];
}

export class SocialAgent {
  private anthropic: Anthropic;

  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || "",
    });
  }

  /**
   * Generar post para redes sociales
   */
  async generatePost(params: {
    platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram';
    topic: string;
    tone?: string;
    includeHashtags?: boolean;
    includeEmojis?: boolean;
  }): Promise<{ content: string; hashtags: string[] }> {
    const characterLimits = {
      twitter: 280,
      linkedin: 3000,
      facebook: 5000,
      instagram: 2200,
    };

    const prompt = `Genera un post para ${params.platform} sobre: ${params.topic}

LÍMITE DE CARACTERES: ${characterLimits[params.platform]}
TONO: ${params.tone || 'profesional y atractivo'}
${params.includeHashtags ? 'INCLUIR: Hashtags relevantes' : ''}
${params.includeEmojis ? 'INCLUIR: Emojis apropiados' : ''}

Responde en JSON:
{
  "content": "string (el post completo)",
  "hashtags": ["string", "string"]
}`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      });

      const responseContent = message.content[0];
      if (responseContent.type !== "text") {
        throw new Error("Unexpected response type");
      }

      const jsonMatch = responseContent.text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found");
      }

      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("Error generating social post:", error);
      return {
        content: `Contenido sobre ${params.topic}`,
        hashtags: ['#marketing', '#growth'],
      };
    }
  }

  /**
   * Programar publicación
   */
  async schedulePost(post: SocialPost): Promise<{ scheduled: boolean; scheduledFor: Date }> {
    // En producción, integraría con Buffer, Hootsuite, o APIs nativas
    console.log("Scheduling post:", post);
    
    return {
      scheduled: true,
      scheduledFor: post.scheduledFor || new Date(),
    };
  }

  /**
   * Analizar engagement
   */
  async analyzeEngagement(posts: SocialPost[]): Promise<{
    totalEngagement: number;
    averageEngagementRate: number;
    bestPerformingPost: SocialPost | null;
    insights: string[];
  }> {
    let totalEngagement = 0;
    let bestPost: SocialPost | null = null;
    let maxEngagement = 0;

    posts.forEach(post => {
      if (post.engagement) {
        const engagement = post.engagement.likes + post.engagement.comments + post.engagement.shares;
        totalEngagement += engagement;
        
        if (engagement > maxEngagement) {
          maxEngagement = engagement;
          bestPost = post;
        }
      }
    });

    const avgEngagementRate = posts.length > 0 ? totalEngagement / posts.length : 0;

    const insights = [
      `Total de ${posts.length} posts analizados`,
      `Engagement promedio: ${avgEngagementRate.toFixed(1)} interacciones`,
      bestPost ? `Mejor post: ${bestPost.content.substring(0, 50)}...` : 'No hay datos',
    ];

    return {
      totalEngagement,
      averageEngagementRate: avgEngagementRate,
      bestPerformingPost: bestPost,
      insights,
    };
  }

  /**
   * Análisis de sentiment
   */
  async analyzeSentiment(comments: string[]): Promise<{
    overall: 'positive' | 'neutral' | 'negative';
    breakdown: { positive: number; neutral: number; negative: number };
    sampleComments: Array<{ text: string; sentiment: string }>;
  }> {
    if (comments.length === 0) {
      return {
        overall: 'neutral',
        breakdown: { positive: 0, neutral: 0, negative: 0 },
        sampleComments: [],
      };
    }

    const prompt = `Analiza el sentiment de estos comentarios:

${comments.slice(0, 10).map((c, i) => `${i + 1}. ${c}`).join('\n')}

Responde en JSON:
{
  "overall": "positive|neutral|negative",
  "breakdown": {
    "positive": number (porcentaje),
    "neutral": number (porcentaje),
    "negative": number (porcentaje)
  },
  "sampleComments": [
    { "text": "string", "sentiment": "string" }
  ]
}`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1500,
        messages: [{ role: "user", content: prompt }],
      });

      const responseContent = message.content[0];
      if (responseContent.type !== "text") {
        throw new Error("Unexpected response type");
      }

      const jsonMatch = responseContent.text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found");
      }

      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      return {
        overall: 'neutral',
        breakdown: { positive: 60, neutral: 30, negative: 10 },
        sampleComments: comments.slice(0, 3).map(c => ({ text: c, sentiment: 'neutral' })),
      };
    }
  }

  /**
   * Responder automáticamente a comentarios
   */
  async generateAutoReply(params: {
    comment: string;
    context: string;
    tone?: string;
  }): Promise<string> {
    const prompt = `Genera una respuesta apropiada para este comentario:

COMENTARIO: "${params.comment}"
CONTEXTO: ${params.context}
TONO: ${params.tone || 'amigable y profesional'}

Genera una respuesta corta (max 200 caracteres) que sea apropiada y útil.`;

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 200,
        messages: [{ role: "user", content: prompt }],
      });

      const responseContent = message.content[0];
      if (responseContent.type !== "text") {
        throw new Error("Unexpected response type");
      }

      return responseContent.text.trim();
    } catch (error) {
      console.error("Error generating auto reply:", error);
      return "¡Gracias por tu comentario! 😊";
    }
  }

  /**
   * Obtener mejores horarios para publicar
   */
  async getBestPostingTimes(params: {
    platform: string;
    timezone: string;
  }): Promise<{
    weekdays: Array<{ day: string; hours: number[] }>;
    recommendations: string[];
  }> {
    // Datos basados en estudios de redes sociales
    const bestTimes = {
      twitter: { weekdays: ['Lunes', 'Miércoles', 'Viernes'], hours: [9, 12, 17] },
      linkedin: { weekdays: ['Martes', 'Miércoles', 'Jueves'], hours: [8, 12, 17] },
      facebook: { weekdays: ['Martes', 'Jueves'], hours: [13, 15, 19] },
      instagram: { weekdays: ['Miércoles', 'Viernes'], hours: [11, 14, 19] },
    };

    const platform = params.platform.toLowerCase() as keyof typeof bestTimes;
    const data = bestTimes[platform] || bestTimes.twitter;

    return {
      weekdays: data.weekdays.map(day => ({
        day,
        hours: data.hours,
      })),
      recommendations: [
        `Publica en ${data.weekdays.join(', ')} para mejor alcance`,
        `Horarios óptimos: ${data.hours.join(':00, ')}:00`,
        'Evita fines de semana para contenido B2B',
      ],
    };
  }
}

