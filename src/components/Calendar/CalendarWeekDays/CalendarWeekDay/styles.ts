import styled from '@emotion/styled'

export const CalendarWeekDay = styled.div`
  background: ${({theme}) => theme.calendar.day.background};
  border-radius: ${({theme}) => theme.calendar.day.borderRadius};
  padding: ${({theme}) => theme.calendar.day.padding};
  text-align: center;
`