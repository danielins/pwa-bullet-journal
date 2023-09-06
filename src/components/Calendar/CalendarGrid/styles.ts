import styled from '@emotion/styled'

export const CalendarGrid = styled.div`
  width: 100%;
  background: ${({theme}) => theme.calendar.grid.background};
  border: ${({theme}) => `2px solid ${theme.calendar.grid.borderColor}`};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: ${({theme}) => theme.calendar.grid.columnGap};
  grid-row-gap: ${({theme}) => theme.calendar.grid.rowGap};
`

export const CalendarWeekDaysGrid = styled(CalendarGrid)`
  margin-bottom: ${({theme}) => theme.calendar.weekDays.marginBottom};
`