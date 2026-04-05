import styled, { css, keyframes } from 'styled-components'

import { DashboardPalette } from './palette'
import { paletteVariables } from './sections/shared'

type PaletteProps = {
  $palette: DashboardPalette
}

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(2.4rem, -1.8rem, 0) scale(1.08);
  }
`

const glow = keyframes`
  0%, 100% {
    opacity: 0.55;
  }

  50% {
    opacity: 0.9;
  }
`

const pillShell = css<PaletteProps>`
  border: 1px solid ${({ $palette }) => $palette.border};
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 0%,
    ${({ $palette }) => $palette.panel} 100%
  );
  box-shadow: 0 2.4rem 8rem rgba(4, 8, 18, 0.36);
  backdrop-filter: blur(2.4rem);
`

export const Page = styled.main<PaletteProps>`
  ${paletteVariables};
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: var(--dashboard-text-primary);
  background: radial-gradient(
      circle at 12% 18%,
      ${({ $palette }) => $palette.glow} 0,
      transparent 30%
    ),
    radial-gradient(
      circle at 82% 0%,
      ${({ $palette }) => $palette.highlight} 0,
      transparent 30%
    ),
    linear-gradient(
      135deg,
      ${({ $palette }) => $palette.base} 0%,
      ${({ $palette }) => $palette.mid} 46%,
      ${({ $palette }) => $palette.deep} 100%
    );
`

export const Atmosphere = styled.div<PaletteProps>`
  position: absolute;
  inset: -12%;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 999px;
    filter: blur(4rem);
    animation: ${drift} 24s ease-in-out infinite;
  }

  &::before {
    width: 32rem;
    height: 32rem;
    left: 6%;
    top: 8%;
    background: radial-gradient(
      circle,
      ${({ $palette }) => $palette.highlight} 0%,
      transparent 68%
    );
  }

  &::after {
    width: 42rem;
    height: 42rem;
    right: 0;
    bottom: 0;
    animation-duration: 30s;
    background: radial-gradient(
      circle,
      ${({ $palette }) => $palette.glow} 0%,
      transparent 70%
    );
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 128rem;
  margin: 0 auto;
  padding: 3.2rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 2.4rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.3rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--dashboard-text-secondary);
`

export const BrandMark = styled.span<PaletteProps>`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 999px;
  background: ${({ $palette }) => $palette.accent};
  box-shadow: 0 0 2rem ${({ $palette }) => $palette.accentSoft};
  animation: ${glow} 4s ease-in-out infinite;
`

export const StatusPill = styled.div<PaletteProps>`
  ${pillShell};
  border-radius: 999px;
  padding: 1rem 1.4rem;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dashboard-text-emphasis);
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(32rem, 0.85fr);
  gap: 2.4rem;
  margin-bottom: 2.4rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const LowerGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(32rem, 0.8fr);
  gap: 2.4rem;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
