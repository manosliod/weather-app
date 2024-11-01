import dayjs from 'dayjs'
import { Card, Text, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FaCloudSun } from 'react-icons/fa'
import { weatherInfo } from '@data/weather'

export default function WeatherInfo() {
  // Check if the screen width is at least 768px for desktop view
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <Card bg="transparent" pt={16} pb="xl">
      <Flex
        direction={isDesktop ? 'row' : 'column'}
        justify={isDesktop ? 'space-between' : 'center'}
      >
        <Flex
          direction="column"
          align={isDesktop ? 'flex-start' : 'center'}
          style={{ textAlign: isDesktop ? 'left' : 'center' }}
        >
          {/* Weather type section */}
          <Text size={isDesktop ? '48px' : '24px'} style={{ fontWeight: 500 }}>
            {weatherInfo.weatherType}
          </Text>
          {/* Display sun icon for mobile view */}
          {!isDesktop && <FaCloudSun size={180} style={{ marginTop: 12 }} />}
          {/* Temperature section */}
          <Text
            size={isDesktop ? '64px' : '32px'}
            mt={isDesktop ? 'auto' : 'sm'}
            style={{ fontWeight: 500 }}
          >
            {weatherInfo.temperature}°C
          </Text>
          {/* Date section */}
          <Text size="18px" mt="xs" style={{ fontWeight: 500 }}>
            {dayjs(weatherInfo.date).format('dddd')} |{' '}
            {dayjs(weatherInfo.date).format('DD MMM YYYY')}
          </Text>
        </Flex>

        {/* Display sun icon for desktop view */}
        {isDesktop && (
          <Flex>
            <FaCloudSun size={230} />
          </Flex>
        )}
      </Flex>
    </Card>
  )
}
