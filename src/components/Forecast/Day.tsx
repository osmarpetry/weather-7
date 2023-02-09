import styled from 'styled-components'
import Period, { PeriodType } from './Period'

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  margin-bottom: 20px;
`

export type DayType = [morning: PeriodType, evening: PeriodType]

function Day({ day }: { day: DayType }) {
  const [morning, evening] = day
  return (
    <PeriodWrapper>
      <Period weather={morning} />
      <Period weather={evening} />
    </PeriodWrapper>
  )
}

export default Day
