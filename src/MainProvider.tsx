import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import { ReactNode } from 'react'

const theme: MantineThemeOverride = {
  fontFamily: 'Roboto, sans-serif',
  headings: { fontFamily: 'Roboto, sans-serif' },
}

interface MainProviderProps {
  children: ReactNode
}

export default function MainProvider({ children }: MainProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
