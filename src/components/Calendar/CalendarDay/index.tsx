import { ICalendarDay } from "src/helpers/calendar";
import { CalendarDayHeader } from "./CalendarDayHeader";
import * as S from "./styles";

type CalendarDayProps = {
  children: React.ReactNode;
  day: ICalendarDay;
};

export const CalendarDay: React.FC<any> = ({
  children,
  day,
}: CalendarDayProps) => {
  const { isCurrentMonth } = day;

  return (
    <S.CalendarDay isCurrentMonth={isCurrentMonth}>
      <CalendarDayHeader day={day} />
      {children}
    </S.CalendarDay>
  );
};
