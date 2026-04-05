import * as S from './styles'
import { formatEnds, WeatherHighlightsCardProps } from '../../helpers'

export default function WeatherHighlightsCard({
  palette,
  headline,
  forecastOffice,
  alerts,
  timeZone
}: WeatherHighlightsCardProps) {
  return (
    <S.Card $palette={palette}>
      <S.Header>
        <div>
          <S.Title>{headline}</S.Title>
          <S.Copy>
            {alerts.length
              ? 'Active advisories are surfaced below.'
              : 'No active advisories at this point right now.'}
          </S.Copy>
        </div>
        <S.ForecastBadge $palette={palette}>
          Forecast office {forecastOffice}
        </S.ForecastBadge>
      </S.Header>

      {alerts.length ? (
        <S.AlertList>
          {alerts.map((alert) => (
            <S.AlertItem key={alert.id} $palette={palette}>
              <S.AlertMeta>
                <S.AlertBadge $palette={palette}>{alert.severity}</S.AlertBadge>
                <S.AlertBadge $palette={palette}>{alert.urgency}</S.AlertBadge>
              </S.AlertMeta>
              <S.AlertHeadline>{alert.headline}</S.AlertHeadline>
              <S.AlertDescription>
                {alert.description || alert.area}
              </S.AlertDescription>
              <S.HelperText>
                Ends {formatEnds(alert.ends, timeZone)}
              </S.HelperText>
            </S.AlertItem>
          ))}
        </S.AlertList>
      ) : (
        <S.AlertItem $palette={palette}>
          <S.AlertHeadline>Quiet weather signal</S.AlertHeadline>
          <S.AlertDescription>
            The point forecast currently has no active watches, warnings, or
            advisories attached to it.
          </S.AlertDescription>
        </S.AlertItem>
      )}
    </S.Card>
  )
}
