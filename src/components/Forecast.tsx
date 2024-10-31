import { LineChart } from '@mantine/charts'
import { weatherForecast } from '../data/weather'
import { MyCard } from './common/MyCard.tsx'
import { Flex, Text } from '@mantine/core'
import { IconClockHour3Filled } from '@tabler/icons-react'

export function Forecast() {
  const data = weatherForecast.map((point) => ({
    time: point.time,
    temp: point.temp,
    airSpeed: point.airSpeed,
    icon: point.icon,
  }))

  return (
    <MyCard px={40} style={{ maxWidth: 892 }}>
      <Text
        size="lg"
        style={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}
      >
        <IconClockHour3Filled size={24} style={{ marginInlineEnd: 8 }} />
        24-hour forecast
      </Text>
      <Flex style={{ paddingTop: 16 }}>
        <LineChart
          data={data}
          h={150}
          w="100%"
          curveType="natural"
          withXAxis={false}
          withYAxis={false}
          withDots={false}
          dataKey="temp"
          series={[{ name: 'Temperature', color: '#FFC355' }]}
          valueFormatter={() =>
            `<div>
          <span style={{ color: '#FFC355', fontWeight: 600 }}>
            Temp: 24°
          </span>
          <span>
            Air Speed: 24 m/s
          </span>
        </div>`
          }
        />
      </Flex>
    </MyCard>
  )
}
