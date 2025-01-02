import { z } from 'zod';
import { env } from '@/utils/env/env';

interface FetchOptions {
  url: `/${string}`;
  schema: z.ZodTypeAny;
  options?: RequestInit;
}

export const zodFetcher = async <T extends z.ZodTypeAny>({
  url,
  schema,
  options,
}: FetchOptions) => {
  try {
    const response = await fetch(env.apiUrl + url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return schema.parse(data);
  } catch (error) {
    throw error;
  }
};
