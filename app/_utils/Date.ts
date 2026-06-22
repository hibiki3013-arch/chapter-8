export const formatDate = (isoString: string): string => {
  if (!isoString) return '----年--月--日';
  const [year, month, day] = isoString.split('T')[0].split('-');
  return `${year}年${month}月${day}日`;
};