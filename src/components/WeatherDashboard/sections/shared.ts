import styled, { css } from 'styled-components'

import { DashboardPalette } from '../palette'

export type PaletteProps = {
  $palette: DashboardPalette
}

export const paletteVariables = css<PaletteProps>`
  --dashboard-text-primary: ${({ $palette }) => $palette.textPrimary};
  --dashboard-text-secondary: ${({ $palette }) => $palette.textSecondary};
  --dashboard-text-muted: ${({ $palette }) => $palette.textMuted};
  --dashboard-text-emphasis: ${({ $palette }) => $palette.textEmphasis};
  --dashboard-text-on-accent: ${({ $palette }) => $palette.textOnAccent};
  --dashboard-text-error: ${({ $palette }) => $palette.textError};
  --dashboard-input-background: ${({ $palette }) => $palette.inputBackground};
  --dashboard-input-text: ${({ $palette }) => $palette.inputText};
  --dashboard-input-placeholder: ${({ $palette }) => $palette.inputPlaceholder};
  --dashboard-track-background: ${({ $palette }) => $palette.trackBackground};
`

export const panelShell = css<PaletteProps>`
  ${paletteVariables};
  border: 1px solid ${({ $palette }) => $palette.border};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 0%,
    ${({ $palette }) => $palette.panel} 100%
  );
  box-shadow: 0 2.4rem 8rem rgba(4, 8, 18, 0.36);
  backdrop-filter: blur(2.4rem);
`

export const cardShell = css<PaletteProps>`
  ${panelShell};
  border-radius: 3.2rem;
  overflow: hidden;
  color: var(--dashboard-text-primary);
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SectionKicker = styled.div`
  font-size: 1.2rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dashboard-text-muted);
  margin-bottom: 0.8rem;
`

export const SectionHeading = styled.h3`
  font-size: 2.4rem;
  margin: 0;
  color: var(--dashboard-text-primary);
`

export const SectionCopy = styled.p`
  margin: 0;
  max-width: 34rem;
  color: var(--dashboard-text-secondary);
  line-height: 1.6;
`
