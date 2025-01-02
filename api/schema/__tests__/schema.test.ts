import { guideListSchema, detailedGuideSchema } from '../schema';
import { z } from 'zod';

describe('Schema Validation', () => {
  it('validates guideListSchema correctly', () => {
    const validData = {
      Time: 1234567890,
      URL: 'https://example.com',
      MainTask: 'Task',
      MainTaskSummary: 'Summary',
      Categories: ['Category1', 'Category2'],
      Ingredients: ['Ingredient1', 'Ingredient2'],
      Requirements: ['Requirement1', 'Requirement2'],
      Tips: ['Tip1', 'Tip2'],
      Views: 100,
      AuthorsCount: 2,
      Id: 1,
    };

    expect(() => guideListSchema.parse(validData)).not.toThrow();

    const invalidData = { ...validData, Time: 'invalid' };
    expect(() => guideListSchema.parse(invalidData)).toThrow(z.ZodError);
  });

  it('validates detailedGuideSchema correctly', () => {
    const validData = {
      Time: 1234567890,
      URL: 'https://example.com',
      MainTask: 'Task',
      MainTaskSummary: 'Summary',
      Steps: [
        {
          Headline: 'Step 1',
          Description: 'Description 1',
          Links: ['https://link1.com'],
        },
      ],
      Categories: ['Category1', 'Category2'],
      Ingredients: ['Ingredient1', 'Ingredient2'],
      Requirements: ['Requirement1', 'Requirement2'],
      Tips: ['Tip1', 'Tip2'],
      Id: 1,
    };

    expect(() => detailedGuideSchema.parse(validData)).not.toThrow();

    const invalidData = { ...validData, Steps: 'invalid' };
    expect(() => detailedGuideSchema.parse(invalidData)).toThrow(z.ZodError);
  });
});
