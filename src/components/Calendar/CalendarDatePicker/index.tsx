import {
  getMonthSelectOptions,
  getYearSelectOptions,
} from "src/helpers/calendar";
import { useState, useContext } from "react";
import * as S from "./styles";
import { JournalContext } from "src/hooks/useJournalContext";
import { INITIAL_YEAR_STATE } from "src/reducers";

export const CalendarDatePicker = () => {
  const {
    state: { month, year },
    dispatch,
  } = useContext(JournalContext);

  const [currentMonth, setCurrentMonth] = useState<number>(month);
  const [currentYear, setCurrentYear] = useState<number>(year);

  const onMonthChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(event.currentTarget.value);
    setCurrentMonth(newMonth);
    dispatch({
      type: "MONTH_UPDATE",
      payload: newMonth,
    });
  };

  const onYearChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.currentTarget.value);
    setCurrentYear(newYear);
    dispatch({
      type: "YEAR_UPDATE",
      payload: newYear,
    });
  };

  return (
    <S.CalendarDatePicker>
      <select value={currentMonth} onChange={onMonthChangeHandler}>
        {getMonthSelectOptions().map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      <select value={currentYear} onChange={onYearChangeHandler}>
        {getYearSelectOptions(INITIAL_YEAR_STATE).map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </S.CalendarDatePicker>
  );
};
