import * as S from './styles'
import { SolarArcCardProps, formatTime } from '../../helpers'

export default function SolarArcCard({
  palette,
  timeZone,
  sun,
  sunProgress
}: SolarArcCardProps) {
  return (
    <S.Card $palette={palette}>
      <div>
        <S.Title>Solar arc</S.Title>
        <S.Copy>
          Daylight pacing is mapped from the forecast point itself, so sunrise
          and sunset stay local to the place you searched.
        </S.Copy>
      </div>

      <S.SunTrack $palette={palette}>
        <S.SunGlow $palette={palette} />
        <S.SunArc $palette={palette} />
        <S.SunNode $palette={palette} style={{ left: `${sunProgress}%` }} />
      </S.SunTrack>

      <S.Times>
        <S.TimeCard $palette={palette}>
          <S.TimeLabel>Sunrise</S.TimeLabel>
          <S.TimeValue>{formatTime(sun.sunrise, timeZone)}</S.TimeValue>
        </S.TimeCard>
        <S.TimeCard $palette={palette}>
          <S.TimeLabel>Solar Noon</S.TimeLabel>
          <S.TimeValue>{formatTime(sun.solarNoon, timeZone)}</S.TimeValue>
        </S.TimeCard>
        <S.TimeCard $palette={palette}>
          <S.TimeLabel>Sunset</S.TimeLabel>
          <S.TimeValue>{formatTime(sun.sunset, timeZone)}</S.TimeValue>
        </S.TimeCard>
      </S.Times>
    </S.Card>
  )
}
