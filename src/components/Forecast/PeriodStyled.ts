import styled from 'styled-components'

const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px #00000029;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const CardInfo = styled.div`
  padding: 20px 5px;
  margin-top: 10px;
`

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`

const CardDescription = styled.p`
  font-size: 16px;
  color: #00000061;
  padding: 0 20px;
  margin-bottom: 20px;
`

const CardDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`

const CardInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  text-align: center;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 14px;
  color: #00000061;
`

const Span = styled.span`
  font-size: 18px;
  font-weight: bold;
`

export {
  CardContainer as CardContainer,
  CardInfo,
  CardTitle,
  CardDescription,
  CardDetails,
  CardInfoDetails,
  Label,
  Span
}
