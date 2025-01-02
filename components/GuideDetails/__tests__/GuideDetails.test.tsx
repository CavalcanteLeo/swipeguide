const { config } = require('dotenv-cra');
config({ env: process.env.NODE_ENV ?? 'test' });

import React from 'react';
import { render } from '@testing-library/react-native';
import GuideDetails from '../GuideDetails';
import { detailedGuideSchema } from '@/api/schema/schema';

const mockGuide = {
  Id: 1,
  MainTask: 'Sample Task',
  Time: 1696156800,
  URL: 'http://example.com',
  Categories: ['Category1', 'Category2'],
  MainTaskSummary: 'This is a summary of the main task.',
  Steps: [
    { Headline: 'Step 1', Description: 'Description 1', Links: [] },
    { Headline: 'Step 2', Description: 'Description 2', Links: [] },
  ],
  Ingredients: [],
  Requirements: [],
  Tips: [],
};

const validMockGuide = detailedGuideSchema.parse(mockGuide);

describe('GuideDetails Component', () => {
  it('renders correctly with given guide data', () => {
    const { getByText } = render(<GuideDetails guide={validMockGuide} />);

    expect(getByText('Sample Task')).toBeTruthy();
    expect(getByText('This is a summary of the main task.')).toBeTruthy();
    expect(getByText('Category1')).toBeTruthy();
    expect(getByText('Category2')).toBeTruthy();
    expect(getByText('Step 1')).toBeTruthy();
    expect(getByText('Step 2')).toBeTruthy();
  });
});