import { useEffect, useState } from 'react';
import { ICalendarDay, createDaysForCurrentMonth, createDaysForNextMonth, createDaysForPreviousMonth } from 'src/helpers/calendar';

function useCalendarDays(currentMonth: number, currentYear: number): ICalendarDay[] {
  const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>([]);

  console.log('using calendar days')

  useEffect(() => {
    const currentMonthDays = createDaysForCurrentMonth(
      currentYear,
      currentMonth
    );

    const calendarForCurrentMonth = [
      ...createDaysForPreviousMonth(
        currentYear,
        currentMonth,
        currentMonthDays
      ),
      ...currentMonthDays,
      ...createDaysForNextMonth(currentYear, currentMonth, currentMonthDays),
    ];

    setCalendarDays(calendarForCurrentMonth);
  }, [currentMonth, currentYear]);

  return calendarDays
}

export { useCalendarDays }