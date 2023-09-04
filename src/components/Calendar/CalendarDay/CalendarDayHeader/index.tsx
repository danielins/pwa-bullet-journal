import { ICalendarDay } from "src/helpers/calendar";
import * as S from "./styles";
import dayjs from "dayjs";

export const CalendarDayHeader: React.FC<any> = ({
  day,
}: {
  day: ICalendarDay;
}) => {
  const monthString = dayjs(day.dateString).format("MMM");

  return (
    <S.CalendarDayHeader>
      <span>
        {monthString} {day.dayOfMonth}
      </span>
    </S.CalendarDayHeader>
  );
};
