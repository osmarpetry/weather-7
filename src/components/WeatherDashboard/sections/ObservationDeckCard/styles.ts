import styled from 'styled-components'

import {
  cardShell,
  PaletteProps,
  SectionCopy,
  SectionHeader,
  SectionHeading,
  SectionKicker
} from '../shared'

export { SectionCopy, SectionHeader, SectionHeading, SectionKicker }

export const Card = styled.section<PaletteProps>`
  ${cardShell};
  padding: 3.2rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const DetailCard = styled.div<PaletteProps>`
  border-radius: 2rem;
  padding: 1.6rem;
  background: ${({ $palette }) => $palette.panelStrong};
  border: 1px solid ${({ $palette }) => $palette.border};
`

export const DetailLabel = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dashboard-text-muted);
  margin-bottom: 0.8rem;
`

export const DetailValue = styled.div`
  font-size: 2rem;
  margin-bottom: 0.8rem;
  color: var(--dashboard-text-primary);
`

export const DetailNote = styled.div`
  color: var(--dashboard-text-secondary);
  line-height: 1.5;
`
