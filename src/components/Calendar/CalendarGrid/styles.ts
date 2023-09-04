import styled from '@emotion/styled'

export const CalendarGrid = styled.div`
  width: 100%;
  background: #BB2525;
  border: 2px solid #BB2525;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`