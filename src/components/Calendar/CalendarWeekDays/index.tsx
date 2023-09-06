import * as S from "../CalendarGrid/styles";
import { CalendarWeekDay } from "./CalendarWeekDay";

export const CalendarWeekDays = () => {
  return (
    <S.CalendarWeekDaysGrid>
      <CalendarWeekDay>Dom</CalendarWeekDay>
      <CalendarWeekDay>Seg</CalendarWeekDay>
      <CalendarWeekDay>Ter</CalendarWeekDay>
      <CalendarWeekDay>Qua</CalendarWeekDay>
      <CalendarWeekDay>Qui</CalendarWeekDay>
      <CalendarWeekDay>Sex</CalendarWeekDay>
      <CalendarWeekDay>Sab</CalendarWeekDay>
    </S.CalendarWeekDaysGrid>
  );
};
