import { useContext } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarDay } from "./CalendarDay";

import * as S from "./styles";
import { useCalendarDays } from "src/hooks/useCalendarDays";
import { ICalendarDay } from "src/helpers/calendar";
import { CalendarDatePicker } from "./CalendarDatePicker";
import { JournalContext } from "src/hooks/useJournalContext";
import { CalendarWeekDays } from "./CalendarWeekDays";

export default function Calendar() {
  // https://engineering.deptagency.com/how-to-build-a-full-page-calendar-with-react

  const {
    state: { month, year },
  } = useContext(JournalContext);

  const calendarDays: ICalendarDay[] = useCalendarDays(month, year);

  // TODO: Fix calendar flickering at load

  return (
    <S.Calendar>
      <div>Calendário</div>
      <CalendarDatePicker />
      <CalendarWeekDays />
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
