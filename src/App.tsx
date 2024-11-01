import '@mantine/core/styles.css'
import './App.css'

import { AppShell, Loader } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Suspense, lazy } from 'react'

import rainyJpg from '@assets/rainy.jpeg'
import MainProvider from '@providers/MainProvider.tsx'
import { BaseHeader } from '@components/base/BaseHeader.tsx'
import { BaseLayout } from '@components/base/BaseLayout.tsx'

// Dynamically import components
const WeatherInfo = lazy(() => import('@components/WeatherInfo.tsx'))
const Activities = lazy(() => import('@components/Activities.tsx'))
const Forecast = lazy(() => import('@components/Forecast.tsx'))

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
          <Suspense fallback={<Loader color="rgba(255, 255, 255, 1)" />}>
            <WeatherInfo />
            <BaseLayout>
              {isDesktop && <Activities />}
              <Forecast />
            </BaseLayout>
          </Suspense>
        </AppShell.Main>
      </AppShell>
    </MainProvider>
  )
}

export default App
