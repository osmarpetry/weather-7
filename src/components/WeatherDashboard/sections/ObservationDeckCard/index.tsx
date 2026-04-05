import * as S from './styles'
import {
  buildObservationDetails,
  ObservationDeckCardProps
} from '../../helpers'

export default function ObservationDeckCard({
  palette,
  location,
  current
}: ObservationDeckCardProps) {
  const details = buildObservationDetails(location, current)

  return (
    <S.Card $palette={palette}>
      <S.SectionHeader>
        <div>
          <S.SectionKicker>Live Details</S.SectionKicker>
          <S.SectionHeading>Observation deck</S.SectionHeading>
        </div>
        <S.SectionCopy>
          Ground truth from the nearest observation station, paired with the
          forecast gridpoint.
        </S.SectionCopy>
      </S.SectionHeader>

      <S.Grid>
        {details.map((detail) => (
          <S.DetailCard key={detail.label} $palette={palette}>
            <S.DetailLabel>{detail.label}</S.DetailLabel>
            <S.DetailValue>{detail.value}</S.DetailValue>
            <S.DetailNote>{detail.note}</S.DetailNote>
          </S.DetailCard>
        ))}
      </S.Grid>
    </S.Card>
  )
}
