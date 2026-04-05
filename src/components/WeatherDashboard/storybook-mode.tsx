import { ReactNode, createContext, useContext } from 'react'

import { WeatherResponse } from 'types/weather'

import { getDashboardPalette } from './helpers'
import { DashboardStoryMode } from './palette'

const DashboardStoryModeContext = createContext<DashboardStoryMode>('auto')

type DashboardStoryModeProviderProps = {
  children: ReactNode
  mode?: DashboardStoryMode
}

export function DashboardStoryModeProvider({
  children,
  mode = 'auto'
}: DashboardStoryModeProviderProps) {
  return (
    <DashboardStoryModeContext.Provider value={mode}>
      {children}
    </DashboardStoryModeContext.Provider>
  )
}

export function useDashboardStoryMode() {
  return useContext(DashboardStoryModeContext)
}

export function useStoryPalette(data?: WeatherResponse) {
  const mode = useDashboardStoryMode()
  return getDashboardPalette(data, mode)
}
