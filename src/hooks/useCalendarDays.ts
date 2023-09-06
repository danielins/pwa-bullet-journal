import { useEffect, useState } from 'react';
import { ICalendarDay, createDaysForCurrentMonth, createDaysForNextMonth, createDaysForPreviousMonth } from 'src/helpers/calendar';

function useCalendarDays(currentMonth: number, currentYear: number): ICalendarDay[] {
  const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>([]);

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
  }, []);

  return calendarDays
}

export { useCalendarDays }