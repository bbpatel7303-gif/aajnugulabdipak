/**
 * Gujarati date conversion and formatting utilities
 */

const GUJARATI_DIGITS = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];

export function toGujaratiNumerals(num: number | string): string {
  return String(num).replace(/[0-9]/g, (digit) => GUJARATI_DIGITS[parseInt(digit, 10)]);
}

export const GUJARATI_MONTHS = [
  'જાન્યુઆરી',
  'ફેબ્રુઆરી',
  'માર્ચ',
  'એપ્રિલ',
  'મે',
  'જૂન',
  'જુલાઈ',
  'ઓગસ્ટ',
  'સપ્ટેમ્બર',
  'ઓક્ટોબર',
  'નવેમ્બર',
  'ડિસેમ્બર',
];

export const GUJARATI_DAYS = [
  'રવિવાર',
  'સોમવાર',
  'મંગળવાર',
  'બુધવાર',
  'ગુરુવાર',
  'શુક્રવાર',
  'શનિવાર',
];

export function getTodayGujaratiDate(): string {
  const now = new Date();
  const dateNum = toGujaratiNumerals(now.getDate());
  const monthName = GUJARATI_MONTHS[now.getMonth()];
  const yearNum = toGujaratiNumerals(now.getFullYear());
  const dayName = GUJARATI_DAYS[now.getDay()];

  return `${dateNum} ${monthName} ${yearNum}, ${dayName}`;
}
