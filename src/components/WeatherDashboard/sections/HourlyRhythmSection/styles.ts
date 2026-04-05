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
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }
`

export const Rail = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(9rem, 1fr));
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.4rem;
`

export const HourCard = styled.article<PaletteProps>`
  border-radius: 2rem;
  padding: 1.4rem;
  background: ${({ $palette }) => $palette.panelStrong};
  border: 1px solid ${({ $palette }) => $palette.border};
  min-width: 9rem;
`

export const Time = styled.div`
  font-size: 1.3rem;
  color: var(--dashboard-text-secondary);
  margin-bottom: 0.8rem;
`

export const Temp = styled.div`
  font-size: 2rem;
  margin: 1rem 0;
  color: var(--dashboard-text-primary);
`

export const Bar = styled.div`
  height: 10rem;
  display: flex;
  align-items: end;
  margin-bottom: 1rem;
`

export const BarFill = styled.div<PaletteProps & { $height: number }>`
  width: 100%;
  height: ${({ $height }) => `${$height}%`};
  min-height: 2.4rem;
  border-radius: 999px 999px 1rem 1rem;
  background: linear-gradient(
    180deg,
    ${({ $palette }) => $palette.accent} 0%,
    ${({ $palette }) => $palette.highlight} 100%
  );
`

export const Label = styled.div`
  min-height: 4rem;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: var(--dashboard-text-primary);
`

export const Stats = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--dashboard-text-secondary);
`
