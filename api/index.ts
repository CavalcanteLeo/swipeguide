import { z } from 'zod';
import { detailedGuideSchema, guideListSchema } from './schema/schema';
import { zodFetcher } from '@/utils/zodFetcher/zodFetcher';

export const getGuides = async (): Promise<z.infer<typeof guideListSchema>[]> =>
  zodFetcher({
    url: '/assesment/guides',
    schema: z.array(guideListSchema),
  });

export const getGuide = async (
  id: number
): Promise<z.infer<typeof detailedGuideSchema>> =>
  zodFetcher({
    url: `/assesment/guides/${id}`,
    schema: detailedGuideSchema,
  });
