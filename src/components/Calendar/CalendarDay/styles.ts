import styled from '@emotion/styled'

export const CalendarDay = styled.div<{isCurrentMonth: boolean}>`
  background: ${({theme}) => theme.calendar.day.background};
  border-radius: ${({theme}) => theme.calendar.day.borderRadius};
  padding: ${({theme}) => theme.calendar.day.padding};
  opacity: ${props => props.isCurrentMonth ? 1 : 0.5};
`