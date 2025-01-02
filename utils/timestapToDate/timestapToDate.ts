export const timestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp);

  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24-hour format
  });

  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return `${formattedTime}, ${formattedDate}`;
};
