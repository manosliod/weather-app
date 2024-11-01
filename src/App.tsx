import '@mantine/core/styles.css'
import './App.css'

import { AppShell } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import rainyJpg from '@assets/rainy.jpeg'
import MainProvider from '@providers/MainProvider.tsx'
import { BaseHeader } from '@components/base/BaseHeader.tsx'
import { BaseLayout } from '@components/base/BaseLayout.tsx'
import { WeatherInfo } from '@components/WeatherInfo.tsx'
import { Activities } from '@components/Activities.tsx'
import { Forecast } from '@components/Forecast.tsx'

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <MainProvider>
      <AppShell
        padding="md"
        styles={() => ({
          root: {
            minHeight: '100dvh',
            color: 'white',
          },
          main: {
            width: '100%',
            height: '100%',
            paddingInline: isDesktop ? '2rem' : '1rem',
          },
        })}
      >
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${rainyJpg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)', // Apply blur here
            zIndex: 0,
          }}
        />
        <AppShell.Main>
          <BaseHeader />
          <WeatherInfo />
          <BaseLayout>
            {isDesktop && <Activities />}
            <Forecast />
          </BaseLayout>
        </AppShell.Main>
      </AppShell>
    </MainProvider>
  )
}

export default App
