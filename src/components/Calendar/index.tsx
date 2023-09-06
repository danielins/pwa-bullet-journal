import { useEffect, useState } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarDay } from "./CalendarDay";

import * as S from "./styles";
import { CalendarWeekDaysGrid } from "./CalendarGrid/styles";
import { useCalendarDays } from "src/hooks/useCalendarDays";
import dayjs from "dayjs";
import { ICalendarDay } from "src/helpers/calendar";
import { CalendarDatePicker } from "./CalendarDatePicker";

export default function Calendar() {
  // https://engineering.deptagency.com/how-to-build-a-full-page-calendar-with-react

  const [month, setMonth] = useState<number>(7);
  const [year, setYear] = useState<number>(2023);
  const calendarDays: ICalendarDay[] = useCalendarDays(month, year);

  // TODO: Fix calendar flickering at load
  useEffect(() => {
    setMonth(dayjs().month() + 1);
    setYear(dayjs().year());
  }, []);

  return (
    <S.Calendar>
      <div>Calendário</div>
      <CalendarDatePicker />
      <CalendarWeekDaysGrid />
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
