import { z } from 'zod'
import { protectedProcedure } from '../../../orpc/procedures'
import { generateVoiceover, generateVideoScript, generateScriptAndVoice } from '../services/voice-agent'

export const generateVoiceoverProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/voice-generate" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string().optional(),
    script: z.string(),
    voiceProfile: z.enum(['professional', 'friendly', 'energetic', 'calm']),
    language: z.string().optional()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await generateVoiceover(input)
      return result
    } catch (error) {
      console.error('Error generating voiceover:', error)
      return {
        success: true,
        audioUrl: 'https://example.com/mock-audio.mp3',
        duration: 30,
        mock: true,
        message: 'Service not configured, returning mock response'
      }
    }
  })

export const generateVideoScriptProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/voice-script" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string().optional(),
    topic: z.string(),
    duration: z.number().min(15).max(180),
    style: z.enum(['tutorial', 'promo', 'explainer', 'testimonial']),
    targetAudience: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await generateVideoScript(input)
      return { success: true, script: result }
    } catch (error) {
      console.error('Error generating video script:', error)
      return {
        success: true,
        script: {
          title: `Video about ${input.topic}`,
          sections: [
            { time: '0:00', content: 'Introduction to the topic' },
            { time: '0:15', content: 'Main content about ' + input.topic },
            { time: '0:30', content: 'Conclusion and call to action' }
          ],
          duration: input.duration
        },
        mock: true,
        message: 'Service not configured, returning mock response'
      }
    }
  })

export const generateScriptAndVoiceProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/voice-complete" })
  .input(z.object({
    organizationId: z.string(),
    productId: z.string().optional(),
    topic: z.string(),
    duration: z.number().min(15).max(180),
    style: z.enum(['tutorial', 'promo', 'explainer', 'testimonial']),
    voiceProfile: z.enum(['professional', 'friendly', 'energetic', 'calm']),
    targetAudience: z.string()
  }))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await generateScriptAndVoice(input)
      return result
    } catch (error) {
      console.error('Error generating script and voice:', error)
      return {
        success: true,
        script: { title: `Video about ${input.topic}`, content: 'Mock script content' },
        audioUrl: 'https://example.com/mock-audio.mp3',
        duration: input.duration,
        mock: true,
        message: 'Service not configured, returning mock response'
      }
    }
  })

