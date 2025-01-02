process.env.EXPO_PUBLIC_API_URL = 'http://localhost:3000';
process.env.EXPO_PUBLIC_CUSTOMER_ID = '1234567890';
process.env.EXPO_PUBLIC_CUSTOMER_NAME = 'Customer 2';
process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER = 'com.swipeguide.customer2';
process.env.EXPO_PUBLIC_ANDROID_PACKAGE_NAME = 'com.swipeguide.customer2';
process.env.EXPO_PUBLIC_EAS_PROJECT_ID = '11111111-1111-1111-1111-111111111111';
process.env.EXPO_PUBLIC_EAS_PROJECT_SLUG = 'customerName';

import { z } from 'zod';
import { zodFetcher } from '../zodFetcher';

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe('zodFetcher', () => {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
  });

  it('should fetch data and parse it according to the schema', async () => {
    const mockData = { id: 1, name: 'Test' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await zodFetcher({
      url: '/test',
      schema,
      options: {},
    });

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('/test'),
      {}
    );
  });

  it('should throw an error if the response is not ok', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(
      zodFetcher({
        url: '/test',
        schema,
        options: {},
      })
    ).rejects.toThrow('Not Found');
  });

  it('should throw an error if the data does not match the schema', async () => {
    const invalidData = { id: 'not-a-number', name: 'Test' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => invalidData,
    });

    await expect(
      zodFetcher({
        url: '/test',
        schema,
        options: {},
      })
    ).rejects.toThrow();
  });
});
