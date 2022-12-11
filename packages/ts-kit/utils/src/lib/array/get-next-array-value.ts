export function getNextArrayValue<T>(array: T[], value: T): T | undefined {
  const currentIndex = array.indexOf(value);
  if (currentIndex === -1) return undefined;
  return array[(currentIndex + 1) % array.length];
}
