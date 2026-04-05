import styled from 'styled-components'

import { cardShell, PaletteProps } from '../shared'

export const HeroCard = styled.section<PaletteProps>`
  ${cardShell};
  padding: 3.2rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }
`

export const Eyebrow = styled.div`
  font-size: 1.2rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dashboard-text-muted);
  margin-bottom: 1.6rem;
`

export const SearchForm = styled.form`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const SearchInput = styled.input<PaletteProps>`
  flex: 1;
  min-width: 0;
  border-radius: 1.8rem;
  border: 1px solid ${({ $palette }) => $palette.border};
  background: var(--dashboard-input-background);
  color: var(--dashboard-input-text);
  padding: 1.6rem 1.8rem;
  font-size: 1.6rem;
  outline: none;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: var(--dashboard-input-placeholder);
  }

  &:focus {
    border-color: ${({ $palette }) => $palette.accent};
    transform: translateY(-0.1rem);
  }
`

export const SearchButton = styled.button<PaletteProps>`
  border: 0;
  border-radius: 1.8rem;
  padding: 0 2rem;
  min-height: 5.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--dashboard-text-on-accent);
  background: linear-gradient(
    135deg,
    ${({ $palette }) => $palette.accent} 0%,
    rgba(255, 255, 255, 0.94) 100%
  );
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 1.2rem 3rem rgba(255, 255, 255, 0.12);

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

export const HelperText = styled.p`
  margin: 0 0 2rem;
  color: var(--dashboard-text-secondary);
  line-height: 1.6;
`

export const ErrorText = styled(HelperText)`
  color: var(--dashboard-text-error);
  background: rgba(181, 60, 37, 0.12);
  border: 1px solid rgba(181, 60, 37, 0.24);
  border-radius: 1.4rem;
  padding: 1.2rem 1.4rem;
`

export const LocationLine = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 2.4rem;
`

export const LocationBadge = styled.span<PaletteProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: ${({ $palette }) => $palette.accentSoft};
  color: ${({ $palette }) => $palette.accent};
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const MatchedAddress = styled.span`
  color: var(--dashboard-text-secondary);
`

export const CurrentGrid = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 2rem;
  align-items: center;
  margin-bottom: 2.4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const HeroIconWrap = styled.div<PaletteProps>`
  width: 12.4rem;
  height: 12.4rem;
  border-radius: 2.4rem;
  display: grid;
  place-items: center;
  background: ${({ $palette }) => $palette.panelStrong};
`

export const CurrentSummary = styled.div`
  min-width: 0;
`

export const LocationName = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5.6rem);
  line-height: 1;
  margin: 0 0 1rem;
  color: var(--dashboard-text-primary);
`

export const Temperature = styled.div`
  font-size: clamp(4.2rem, 12vw, 8rem);
  line-height: 1;
  margin-bottom: 0.8rem;
  color: var(--dashboard-text-primary);
`

export const ForecastText = styled.p`
  margin: 0 0 1rem;
  font-size: 1.8rem;
  color: var(--dashboard-text-emphasis);
`

export const Narrative = styled.p`
  margin: 0;
  max-width: 56rem;
  color: var(--dashboard-text-secondary);
  line-height: 1.7;
`

export const MetricChips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const MetricChip = styled.div<PaletteProps>`
  border-radius: 2rem;
  padding: 1.6rem;
  background: ${({ $palette }) => $palette.panelStrong};
  border: 1px solid ${({ $palette }) => $palette.border};
`

export const ChipLabel = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dashboard-text-muted);
  margin-bottom: 0.8rem;
`

export const ChipValue = styled.div`
  font-size: 2rem;
  color: var(--dashboard-text-primary);
`

export const EmptyState = styled.div<PaletteProps>`
  min-height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2.4rem;
  padding: 2.4rem;
  background: ${({ $palette }) => $palette.panelStrong};
`

export const EmptyTitle = styled.h2`
  font-size: 2.8rem;
  margin: 0 0 1rem;
  color: var(--dashboard-text-primary);
`

export const EmptyCopy = styled.p`
  margin: 0;
  max-width: 54rem;
  line-height: 1.7;
  color: var(--dashboard-text-secondary);
`
