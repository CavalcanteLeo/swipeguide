import { z } from 'zod';

export const guideListSchema = z.object({
  Time: z.number(),
  URL: z.string(),
  MainTask: z.string(),
  MainTaskSummary: z.string(),
  Categories: z.array(z.string()),
  Ingredients: z.array(z.any()),
  Requirements: z.array(z.any()),
  Tips: z.array(z.string()),
  Views: z.number().optional(),
  AuthorsCount: z.number().optional(),
  Id: z.number(),
});

export const detailedGuideSchema = z.object({
  Time: z.number(),
  URL: z.string(),
  MainTask: z.string(),
  MainTaskSummary: z.string(),
  Steps: z.array(
    z.object({
      Headline: z.string(),
      Description: z.string(),
      Links: z.array(z.string()),
    })
  ),
  Categories: z.array(z.string()),
  Ingredients: z.array(z.any()),
  Requirements: z.array(z.any()),
  Tips: z.array(z.string()),
  Id: z.number(),
});
