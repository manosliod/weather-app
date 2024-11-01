import { Card, Flex, Text } from '@mantine/core'
import { IoMdPin } from 'react-icons/io'
import { weatherInfo } from '@data/weather'
import { useMediaQuery } from '@mantine/hooks'

export function BaseHeader() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <Card bg="transparent" pt="xl" pb={0}>
      <Flex direction="row">
        <Flex>
          {/* Location section */}
          <Text
            size={isDesktop ? '24px' : '18px'}
            c="#fff"
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
    </Card>
  )
}
