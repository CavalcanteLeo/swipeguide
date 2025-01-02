import { timestampToDate } from '../timestapToDate';

describe('timestampToDate', () => {
  it('formats the timestamp into a 24-hour time and date string', () => {
    const timestamp = new Date('2023-10-10T14:48:00').getTime();
    const formatted = timestampToDate(timestamp);

    expect(formatted).toBe('14:48, Oct 10, 2023');
  });
});
