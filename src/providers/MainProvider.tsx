import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import { ReactNode } from 'react'

const theme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Inter, sans-serif' },
  colors: {
    dark: [
      '#fff',
      '#f8f9fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529',
    ],
  },
  primaryColor: 'dark', // Ensure that white color is used as the primary color
}

interface MainProviderProps {
  children: ReactNode
}

export default function MainProvider({ children }: MainProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
