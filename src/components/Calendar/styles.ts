import styled from '@emotion/styled'

// https://colorhunt.co/palette/fff5e0ff6969bb2525141e46

export const Calendar = styled.div`
  background: ${({theme}) => theme.calendar.background};
  border-radius: ${({theme}) => theme.calendar.borderRadius};
  padding: ${({theme}) => theme.calendar.padding};
  margin: 0 auto;
  width: ${({theme}) => theme.calendar.width};
`