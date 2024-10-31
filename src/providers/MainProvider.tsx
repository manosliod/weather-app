import {
  Container,
  MantineProvider,
  createTheme,
  MantineThemeOverride,
  rem,
} from '@mantine/core'
import { ReactNode } from 'react'

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(380),
  xs: rem(480),
  sm: rem(576),
  md: rem(640),
  lg: rem(768),
  xl: rem(900),
  xxl: rem(1200),
}

const theme: MantineThemeOverride = createTheme({
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
  primaryColor: 'dark', // Ensures that white color is used as the primary color
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
})

interface MainProviderProps {
  children: ReactNode
}

export default function MainProvider({ children }: MainProviderProps) {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxl">{children} </Container>
    </MantineProvider>
  )
}
