import '@mantine/core/styles.css'
import './App.css'

import { AppShell } from '@mantine/core'
import rainyJpg from './assets/rainy.jpeg'
import MainProvider from './providers/MainProvider.tsx'
import { WeatherInfo } from './components/WeatherInfo.tsx'
import { Activities } from './components/Activities.tsx'
import { Forecast } from './components/Forecast.tsx'
import { AirConditions } from './components/AirConditions.tsx'

function App() {
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
            height: '100vh',
            paddingInline: '2rem',
          },
        })}
      >
        <div
          style={{
            position: 'absolute',
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
          <WeatherInfo />
        </AppShell.Main>
      </AppShell>
    </MainProvider>
  )
}

export default App
