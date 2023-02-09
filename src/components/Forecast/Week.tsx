import Day, { DayType } from './Day'
import styled from 'styled-components'

const WeekWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  //flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`

function Week({ forecast }: { forecast: DayType[] }) {
  return (
    <WeekWrapper>
      {forecast.map((day, i: number) => {
        return (
          <DayWrapper key={i}>
            <Day day={day} />
          </DayWrapper>
        )
      })}
    </WeekWrapper>
  )
}

export default Week
