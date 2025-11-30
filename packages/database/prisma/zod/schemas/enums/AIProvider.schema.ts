import * as z from 'zod';

export const AIProviderSchema = z.enum(['CLAUDE_OPUS', 'CLAUDE_SONNET', 'CLAUDE_HAIKU', 'OPENAI_GPT4', 'OPENAI_GPT35'])

export type AIProvider = z.infer<typeof AIProviderSchema>;