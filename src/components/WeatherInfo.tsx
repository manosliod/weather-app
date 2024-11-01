import { Card, Text, Flex } from '@mantine/core'
import { FaCloudSun } from 'react-icons/fa'
import { IoMdPin } from 'react-icons/io'
import { useMediaQuery } from '@mantine/hooks'
import { weatherInfo } from '../data/weather'
import dayjs from 'dayjs'

export function WeatherInfo() {
  // Check if the screen width is at least 768px for desktop view
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <Card bg="transparent" py="xl" style={{ minHeight: '308px' }}>
      <Flex direction="row">
        <Flex>
          {/* Location section */}
          <Text
            size={isDesktop ? '24px' : '18px'}
            style={{
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IoMdPin size={24} style={{ marginInlineEnd: 8 }} />
            {weatherInfo.location}
          </Text>
        </Flex>
      </Flex>
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
          <Text
            size={isDesktop ? '48px' : '24px'}
            mt="sm"
            style={{ fontWeight: 500 }}
          >
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
            <FaCloudSun size={280} />
          </Flex>
        )}
      </Flex>
    </Card>
  )
}
