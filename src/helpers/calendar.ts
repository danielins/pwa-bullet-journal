import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { range } from './array';

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const YEAR_SELECTION_THRESHOLD: number = 4;

export interface ICalendarDay {
  dateString: string;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  isPreviousMonth?: boolean;
  isNextMonth?: boolean;
}

export interface IDateSelectOption {
  label: string;
  value: number;
}

export function getYearSelectOptions(year: number): IDateSelectOption[] {
  return range(year - YEAR_SELECTION_THRESHOLD, year + YEAR_SELECTION_THRESHOLD).map(yearOption => {
    return {
      label: yearOption.toString(),
      value: yearOption,
    }
  })
}

export function getMonthSelectOptions(): IDateSelectOption[] {
  return range(1, 12).map(monthOption => {
    return {
      label: dayjs().month(monthOption - 1).format("MMMM"),
      value: monthOption,
    }
  })
}

export function _getWeekDay(dateString: string): number {
  return dayjs(dateString).weekday();
}

export function _isWeekendDay(dateString: string): boolean {
  return [6, 0].includes(_getWeekDay(dateString));
}

export function getNumberOfDaysInMonth(year: number, month: number): number {
  return dayjs(`${year}-${month}-01`).daysInMonth();
}

export function createDaysForCurrentMonth(year: number, month: number): ICalendarDay[] {
  return [...Array(getNumberOfDaysInMonth(year, month))].map((_, index) => {
    return {
      dateString: dayjs(`${year}-${month}-${index + 1}`).format('YYYY-MM-DD'),
      dayOfMonth: index + 1,
      isCurrentMonth: true,
    }
  })
}

export function createDaysForPreviousMonth(year: number, month: number, currentMonthDays: ICalendarDay[]): ICalendarDay[] {
  const weekdayFirstDayOfMonth: number = _getWeekDay(currentMonthDays[0].dateString);
  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, 'month');
  const visibleNumberOfDaysFromPreviousMonth = weekdayFirstDayOfMonth;
  const previousMonthLastMonday: number = dayjs(currentMonthDays[0].dateString).subtract(visibleNumberOfDaysFromPreviousMonth, 'day').date();

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((_, index) => {
    return {
      dateString: dayjs(`${previousMonth.year()}-${previousMonth.month() + 1}-${previousMonthLastMonday + index}`).format('YYYY-MM-DD'),
      dayOfMonth: previousMonthLastMonday + index,
      isCurrentMonth: false,
      isPreviousMonth: true,
    }
  })
}

export function createDaysForNextMonth(year: number, month: number, currentMonthDays: ICalendarDay[]): ICalendarDay[] {
  const weekdayLastDayOfMonth: number = _getWeekDay(`${year}-${month}-${currentMonthDays.length}`);
  const nextMonth = dayjs(`${year}-${month}-01`).add(1, 'month');
  const visibleNumberOfDaysFromNextMonth = 6 - weekdayLastDayOfMonth;

  return [...Array(visibleNumberOfDaysFromNextMonth)].map((_, index) => {
    return {
      dateString: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format('YYYY-MM-DD'),
      dayOfMonth: index + 1,
      isCurrentMonth: false,
      isNextMonth: true,
    }
  })
}