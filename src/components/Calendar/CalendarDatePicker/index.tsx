import {
  getMonthSelectOptions,
  getYearSelectOptions,
} from "src/helpers/calendar";
import * as S from "./styles";

export const CalendarDatePicker = () => {
  return (
    <S.CalendarDatePicker>
      <select>
        {getMonthSelectOptions().map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
      <select>
        {getYearSelectOptions(2023).map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </S.CalendarDatePicker>
  );
};
