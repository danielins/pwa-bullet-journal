import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  CalendarDay,
  createDaysForCurrentMonth,
  createDaysForNextMonth,
  createDaysForPreviousMonth,
} from "src/helpers/calendar";

export default function Calendar() {
  // https://engineering.deptagency.com/how-to-build-a-full-page-calendar-with-react

  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

  useEffect(() => {
    const currentYear = dayjs().year();
    const currentMonth = dayjs().month() + 1;

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

  return (
    <>
      <div>Calendário</div>
      <ul>
        {calendarDays.map((day) => (
          <li key={day.dateString}>{day.dateString}</li>
        ))}
      </ul>
    </>
  );
}
