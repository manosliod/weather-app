import { Flex, Stack, Text } from '@mantine/core'

import { WiThermometer } from 'react-icons/wi'
import {
  IconWind,
  IconDropletFilled,
  IconSun,
  IconClockHour8Filled,
} from '@tabler/icons-react'

import { MyCard } from '../shared/MyCard.tsx'
import { WeeklyForecast } from '../shared/WeeklyForecast.tsx'

// RightSidebar component displaying weekly forecast, time, and air condition information
export function RightSidebar() {
  return (
    <MyCard
      px={24}
      py={32}
      style={{ height: '100%', maxWidth: 300, width: '100%' }}
    >
      <Flex direction="column">
        <WeeklyForecast />
        <Flex direction="column">
          <Text
            size="18px"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconClockHour8Filled size={24} style={{ marginInlineEnd: 4 }} />{' '}
            8:00 PM GMT
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" mt={24}>
        <Text size="14px">AIR CONDITIONS</Text>
        {/* Stack for spacing air condition items */}
        <Stack gap="xl" justify="space-evenly" mt={16}>
          {/* Real Feel Section */}
          <Stack>
            <Flex>
              <Flex direction="column">
                <WiThermometer size={22} style={{ marginInlineEnd: 4 }} />{' '}
              </Flex>
              <Flex direction="column">
                <Text>Real Feel</Text>
                <Text size="16px">30o</Text>{' '}
              </Flex>
            </Flex>
          </Stack>
          {/* Wind Speed Section */}
          <Stack>
            <Flex>
              <Flex direction="column">
                <IconWind size={22} style={{ marginInlineEnd: 4 }} />{' '}
              </Flex>
              <Flex direction="column">
                <Text>Wind Speed</Text>
                <Text size="16px">0.8 km/hr</Text>
              </Flex>
            </Flex>
          </Stack>
          {/* Chance of Rain Section */}
          <Stack>
            <Flex>
              <Flex direction="column">
                <IconDropletFilled size={22} style={{ marginInlineEnd: 4 }} />{' '}
              </Flex>
              <Flex direction="column">
                <Text>Chance of Rain</Text>
                <Text size="16px">2%</Text>
              </Flex>
            </Flex>
          </Stack>
          {/* UV Index Section */}
          <Stack>
            <Flex>
              <Flex direction="column">
                <IconSun size={22} style={{ marginInlineEnd: 4 }} />{' '}
              </Flex>
              <Flex direction="column">
                <Text>UV Index</Text>
                <Text size="16px">4</Text>
              </Flex>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </MyCard>
  )
}
