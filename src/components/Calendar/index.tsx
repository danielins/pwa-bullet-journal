import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  ICalendarDay,
  createDaysForCurrentMonth,
  createDaysForNextMonth,
  createDaysForPreviousMonth,
} from "src/helpers/calendar";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarDay } from "./CalendarDay";

import * as S from "./styles";
import { CalendarWeekDays } from "./CalendarWeekDays";
import { CalendarWeekDaysGrid } from "./CalendarGrid/styles";

export default function Calendar() {
  // https://engineering.deptagency.com/how-to-build-a-full-page-calendar-with-react

  const [calendarDays, setCalendarDays] = useState<ICalendarDay[]>([]);

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
    <S.Calendar>
      <div>Calendário</div>
      <CalendarWeekDaysGrid>
        <CalendarWeekDays />
      </CalendarWeekDaysGrid>
      <CalendarGrid>
        {calendarDays.map((day) => (
          <CalendarDay key={day.dateString} day={day}>
            {day.dateString}
          </CalendarDay>
        ))}
      </CalendarGrid>
    </S.Calendar>
  );
}
