import styled from '@emotion/styled'

export const Calendar = styled.div`
  background: ${({theme}) => theme.calendar.background};
  border-radius: ${({theme}) => theme.calendar.borderRadius};
  padding: ${({theme}) => theme.calendar.padding};
  margin: 0 auto;
  width: ${({theme}) => theme.calendar.width};
`