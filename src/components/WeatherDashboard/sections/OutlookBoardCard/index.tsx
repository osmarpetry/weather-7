import * as S from './styles'
import {
  formatPercent,
  formatSpeed,
  formatTemperature,
  getForecastTemperatureScale,
  OutlookBoardCardProps
} from '../../helpers'

export default function OutlookBoardCard({
  palette,
  daily
}: OutlookBoardCardProps) {
  const { min, spread } = getForecastTemperatureScale(daily)

  return (
    <S.Card $palette={palette}>
      <S.SectionHeader>
        <div>
          <S.SectionKicker>Five Days</S.SectionKicker>
          <S.SectionHeading>Outlook board</S.SectionHeading>
        </div>
        <S.SectionCopy>
          Highs, lows, and the weather story that shapes each day.
        </S.SectionCopy>
      </S.SectionHeader>

      <S.List>
        {daily.map((period) => {
          const low = period.lowF ?? period.highF ?? min
          const high = period.highF ?? period.lowF ?? min
          const rangeWidth = Math.max(((high - low || 1) / spread) * 100, 8)
          const offset = ((low - min) / spread) * 100
          const rainChance =
            period.day?.precipitationChance ||
            period.night?.precipitationChance ||
            0

          return (
            <S.Row key={period.date} $palette={palette}>
              <S.Day>{period.label}</S.Day>
              <S.Summary>{period.summary}</S.Summary>
              <S.Range>
                <S.RangeValues>
                  <span>{formatTemperature(period.lowF)}</span>
                  <span>{formatTemperature(period.highF)}</span>
                </S.RangeValues>
                <S.RangeTrack>
                  <S.RangeFill
                    $palette={palette}
                    $offset={offset}
                    $width={rangeWidth}
                  />
                </S.RangeTrack>
              </S.Range>
              <S.Extras>
                {formatPercent(rainChance)} rain
                <br />
                {period.day?.windSpeedMph
                  ? `${formatSpeed(period.day.windSpeedMph)} ${
                      period.day.windDirection
                    }`
                  : 'Wind light'}
              </S.Extras>
            </S.Row>
          )
        })}
      </S.List>
    </S.Card>
  )
}
