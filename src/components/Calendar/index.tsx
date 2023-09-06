import { useEffect, useState } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarDay } from "./CalendarDay";

import * as S from "./styles";
import { CalendarWeekDays } from "./CalendarWeekDays";
import { CalendarWeekDaysGrid } from "./CalendarGrid/styles";
import { useCalendarDays } from "src/hooks/useCalendarDays";

export default function Calendar() {
  // https://engineering.deptagency.com/how-to-build-a-full-page-calendar-with-react

  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(2023);
  const calendarDays = useCalendarDays(month, year);

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
