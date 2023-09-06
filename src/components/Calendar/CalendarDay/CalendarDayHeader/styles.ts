import styled from '@emotion/styled'

export const CalendarDayHeader = styled.div`
  border-bottom: ${({theme}) => `${theme.calendar.day.header.borderWidth} solid ${theme.calendar.day.header.borderColor}`};
  margin-bottom: ${({theme}) => theme.calendar.day.header.marginBottom};
  padding-bottom: ${({theme}) => theme.calendar.day.header.paddingBottom};
`