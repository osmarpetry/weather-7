import * as S from './styles'
import DashboardImage from '../../DashboardImage'
import {
  formatPercent,
  formatSpeed,
  formatTemperature,
  getHourlyTemperatureScale,
  HourlyRhythmSectionProps
} from '../../helpers'

export default function HourlyRhythmSection({
  palette,
  hourly
}: HourlyRhythmSectionProps) {
  const { min, spread } = getHourlyTemperatureScale(hourly)

  return (
    <S.Card $palette={palette}>
      <S.SectionHeader>
        <div>
          <S.SectionKicker>Next 12 Hours</S.SectionKicker>
          <S.SectionHeading>Hourly rhythm</S.SectionHeading>
        </div>
        <S.SectionCopy>
          A tighter read on temperature drift, precipitation odds, and the
          incoming sky state.
        </S.SectionCopy>
      </S.SectionHeader>

      <S.Rail>
        {hourly.map((hour) => {
          const barHeight = 24 + ((hour.temperatureF - min) / spread) * 76

          return (
            <S.HourCard key={hour.time} $palette={palette}>
              <S.Time>{hour.label}</S.Time>
              <DashboardImage
                src={hour.icon}
                alt={hour.shortForecast}
                width={44}
                height={44}
              />
              <S.Temp>{formatTemperature(hour.temperatureF)}</S.Temp>
              <S.Bar>
                <S.BarFill $palette={palette} $height={barHeight} />
              </S.Bar>
              <S.Label>{hour.shortForecast}</S.Label>
              <S.Stats>
                {formatPercent(hour.precipitationChance)} precip
                <br />
                {formatSpeed(hour.windSpeedMph)} {hour.windDirection}
              </S.Stats>
            </S.HourCard>
          )
        })}
      </S.Rail>
    </S.Card>
  )
}
