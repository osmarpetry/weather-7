import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

import { getDashboardPalette } from './helpers'
import { DashboardPalette } from './palette'
import { useDashboardStoryMode } from './storybook-mode'
import { paletteVariables } from './sections/shared'

type StoryFrameProps = {
  children: ReactNode
  palette?: DashboardPalette
}

const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(3.2rem, -2rem, 0) scale(1.08);
  }
`

const Frame = styled.div<{ $palette: DashboardPalette }>`
  ${paletteVariables};
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 3.2rem;
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

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: auto;
    border-radius: 999px;
    filter: blur(4rem);
    pointer-events: none;
    animation: ${drift} 24s ease-in-out infinite;
  }

  &::before {
    width: 30rem;
    height: 30rem;
    left: 6%;
    top: 10%;
    background: radial-gradient(
      circle,
      ${({ $palette }) => $palette.highlight} 0%,
      transparent 68%
    );
  }

  &::after {
    width: 42rem;
    height: 42rem;
    right: -4%;
    bottom: -12%;
    animation-duration: 32s;
    background: radial-gradient(
      circle,
      ${({ $palette }) => $palette.glow} 0%,
      transparent 70%
    );
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

export function StoryFrame({ children, palette }: StoryFrameProps) {
  const mode = useDashboardStoryMode()
  const resolvedPalette = palette || getDashboardPalette(undefined, mode)

  return (
    <Frame $palette={resolvedPalette}>
      <Content>{children}</Content>
    </Frame>
  )
}
