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

export const List = styled.div`
  display: grid;
  gap: 1.2rem;
`

export const Row = styled.article<PaletteProps>`
  display: grid;
  grid-template-columns:
    minmax(11rem, 0.7fr)
    minmax(0, 1.2fr)
    minmax(16rem, 1fr)
    minmax(10rem, 0.7fr);
  gap: 1.2rem;
  align-items: center;
  padding: 1.4rem 1.6rem;
  border-radius: 2rem;
  background: ${({ $palette }) => $palette.panelStrong};
  border: 1px solid ${({ $palette }) => $palette.border};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Day = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dashboard-text-primary);
`

export const Summary = styled.div`
  color: var(--dashboard-text-secondary);
`

export const Range = styled.div`
  min-width: 0;
`

export const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  color: var(--dashboard-text-primary);
`

export const RangeTrack = styled.div`
  position: relative;
  height: 0.8rem;
  border-radius: 999px;
  background: var(--dashboard-track-background);
`

export const RangeFill = styled.div<
  PaletteProps & { $offset: number; $width: number }
>`
  position: absolute;
  left: ${({ $offset }) => `${$offset}%`};
  width: ${({ $width }) => `${$width}%`};
  min-width: 8%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    ${({ $palette }) => $palette.highlight} 0%,
    ${({ $palette }) => $palette.accent} 100%
  );
`

export const Extras = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--dashboard-text-secondary);
`
