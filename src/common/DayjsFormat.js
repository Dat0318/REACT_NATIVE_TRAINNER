// dateUtils.js

import dayjs from 'dayjs';
// install dayjs replace moment to save traffic

// Function to format a date
export function formatDate(date, format = 'YYYY-MM-DD') {
    return dayjs(date).format(format);
}

// Function to add days to a date
export function addDays(date, days) {
    return dayjs(date).add(days, 'day');
}

// Function to subtract days from a date
export function subtractDays(date, days) {
    return dayjs(date).subtract(days, 'day');
}

// Function to check if a date is before another date
export function isBefore(date1, date2) {
    return dayjs(date1).isBefore(date2);
}

// Function to check if a date is after another date
export function isAfter(date1, date2) {
    return dayjs(date1).isAfter(date2);
}

// Function to get the difference in days between two dates
export function diffInDays(date1, date2) {
    return dayjs(date1).diff(date2, 'day');
}

// Function to get the start of a unit of time (day, month, year) for a given date
export function startOf(date, unit = 'day') {
    return dayjs(date).startOf(unit);
}

// Function to get the end of a unit of time (day, month, year) for a given date
export function endOf(date, unit = 'day') {
    return dayjs(date).endOf(unit);
}

// Function to check if a year is a leap year
export function isLeapYear(year) {
    return dayjs().isLeapYear(year);
}

// Function to get the current date and time
export function now() {
    return dayjs();
}
