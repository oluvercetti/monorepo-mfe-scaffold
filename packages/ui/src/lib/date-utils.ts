/**
 * Helper functions to format dates without relying on direct imports of date-fns
 */

/**
 * Format a date as DD/MM/YYYY
 */
export function formatDate(date: Date | undefined): string {
  if (!date) return "";

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

/**
 * Format a date as month and year (e.g., "January 2023")
 */
export function formatMonthYear(date: Date): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Get short weekday names (e.g., "Mo", "Tu", etc.)
 */
export function getWeekdayNames(): string[] {
  return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
}

/**
 * Check if a date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

/**
 * Get all days in a month as Date objects
 */
export function getDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  return days;
}

/**
 * Get days for the previous month to fill in the calendar
 */
export function getPreviousMonthDays(year: number, month: number, firstDayOfWeek: number): Date[] {
  const days: Date[] = [];
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysToFill = (firstDayOfMonth - firstDayOfWeek + 7) % 7;

  const previousMonth = month === 0 ? 11 : month - 1;
  const previousMonthYear = month === 0 ? year - 1 : year;
  const previousMonthDays = new Date(previousMonthYear, previousMonth + 1, 0).getDate();

  for (let i = previousMonthDays - daysToFill + 1; i <= previousMonthDays; i++) {
    days.push(new Date(previousMonthYear, previousMonth, i));
  }

  return days;
}

/**
 * Get days for the next month to fill in the calendar
 */
export function getNextMonthDays(year: number, month: number, lastDayOfWeek: number): Date[] {
  const days: Date[] = [];
  const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
  const daysToFill = (7 - lastDayOfMonth + lastDayOfWeek) % 7;

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  for (let i = 1; i <= daysToFill; i++) {
    days.push(new Date(nextMonthYear, nextMonth, i));
  }

  return days;
}
