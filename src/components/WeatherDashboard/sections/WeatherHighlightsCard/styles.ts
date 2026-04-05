import styled from 'styled-components'

import { cardShell, PaletteProps } from '../shared'

export const Card = styled.section<PaletteProps>`
  ${cardShell};
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Title = styled.h3`
  font-size: 2.6rem;
  margin: 0 0 0.8rem;
  color: var(--dashboard-text-primary);
`

export const Copy = styled.p`
  margin: 0;
  color: var(--dashboard-text-secondary);
`

export const ForecastBadge = styled.span<PaletteProps>`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: ${({ $palette }) => $palette.accentSoft};
  color: ${({ $palette }) => $palette.accent};
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const AlertList = styled.div`
  display: grid;
  gap: 1.2rem;
`

export const AlertItem = styled.article<PaletteProps>`
  border-radius: 2rem;
  padding: 1.8rem;
  background: ${({ $palette }) => $palette.panelStrong};
  border: 1px solid ${({ $palette }) => $palette.border};
`

export const AlertMeta = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export const AlertBadge = styled.span<PaletteProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  background: ${({ $palette }) => $palette.accentSoft};
  color: ${({ $palette }) => $palette.accent};
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const AlertHeadline = styled.h4`
  font-size: 1.8rem;
  margin: 0 0 0.8rem;
  color: var(--dashboard-text-primary);
`

export const AlertDescription = styled.p`
  margin: 0 0 0.8rem;
  line-height: 1.6;
  color: var(--dashboard-text-secondary);
`

export const HelperText = styled.p`
  margin: 0;
  color: var(--dashboard-text-muted);
`
