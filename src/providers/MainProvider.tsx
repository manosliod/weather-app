import {
  Container,
  MantineProvider,
  createTheme,
  MantineThemeOverride,
  rem,
} from '@mantine/core'
import { ReactNode } from 'react'

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(480),
  xs: rem(576),
  sm: rem(640),
  md: rem(768),
  lg: rem(991),
  xl: rem(1200),
  xxl: rem(1500),
}

const theme: MantineThemeOverride = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Inter, sans-serif' },
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
      <Container size="xxl">{children}</Container>
    </MantineProvider>
  )
}
