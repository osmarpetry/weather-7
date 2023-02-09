import Image from 'next/image'
import {
  CardContainer,
  CardInfo,
  CardTitle,
  CardDescription,
  CardDetails,
  Label,
  Span,
  CardInfoDetails
} from './PeriodStyled'

export interface PeriodType {
  detailedForecast: string
  name: string
  temperature: string
  windSpeed: string
  windDirection: string
  icon: string
}

function Period({ weather }: { weather: PeriodType }) {
  const {
    detailedForecast,
    name,
    temperature,
    windSpeed,
    windDirection,
    icon
  } = weather
  return (
    <CardContainer>
      <Image
        src={icon}
        alt={`Card Image: ${name}`}
        width={300}
        height={180}
        style={{ objectFit: 'cover' }}
      />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{detailedForecast}</CardDescription>
        <CardDetails>
          <CardInfoDetails>
            <Label>Temp:</Label>
            <Span>{temperature}</Span>
          </CardInfoDetails>
          <CardInfoDetails>
            <Label>Wind Dir:</Label>
            <Span>{windDirection}</Span>
          </CardInfoDetails>
          <CardInfoDetails>
            <Label>Wind Speed:</Label>
            <Span>{windSpeed}</Span>
          </CardInfoDetails>
        </CardDetails>
      </CardInfo>
    </CardContainer>
  )
}

export default Period
