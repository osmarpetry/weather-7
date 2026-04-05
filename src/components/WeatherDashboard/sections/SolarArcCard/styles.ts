import styled from 'styled-components'

import { cardShell, PaletteProps } from '../shared'

export const Card = styled.section<PaletteProps>`
  ${cardShell};
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }
`

export const Title = styled.h2`
  font-size: 2.4rem;
  margin: 0 0 0.8rem;
  color: var(--dashboard-text-primary);
`

export const Copy = styled.p`
  margin: 0;
  line-height: 1.6;
  color: var(--dashboard-text-secondary);
`

export const SunTrack = styled.div<PaletteProps>`
  position: relative;
  height: 18rem;
  overflow: hidden;
`

export const SunArc = styled.div<PaletteProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 18rem;
  border: 1px solid ${({ $palette }) => $palette.border};
  border-bottom: 0;
  border-radius: 18rem 18rem 0 0;
`

export const SunGlow = styled.div<PaletteProps>`
  position: absolute;
  left: 50%;
  top: 65%;
  width: 14rem;
  height: 14rem;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: ${({ $palette }) => $palette.glow};
  filter: blur(2rem);
`

export const SunNode = styled.div<PaletteProps>`
  position: absolute;
  bottom: 0;
  width: 2rem;
  height: 2rem;
  transform: translateX(-50%);
  border-radius: 999px;
  background: ${({ $palette }) => $palette.accent};
  box-shadow: 0 0 2rem ${({ $palette }) => $palette.accentSoft};
`

export const Times = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const TimeCard = styled.div<PaletteProps>`
  border-radius: 2rem;
  padding: 1.6rem;
  background: ${({ $palette }) => $palette.panelStrong};
  border: 1px solid ${({ $palette }) => $palette.border};
`

export const TimeLabel = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dashboard-text-muted);
  margin-bottom: 0.8rem;
`

export const TimeValue = styled.div`
  font-size: 2rem;
  color: var(--dashboard-text-primary);
`
