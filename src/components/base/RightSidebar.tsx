import { Flex, Stack, Text } from '@mantine/core'

import { WiThermometer } from 'react-icons/wi'
import { IconWind, IconDropletFilled, IconSun } from '@tabler/icons-react'

import { MyCard } from '../shared/MyCard.tsx'
import { WeeklyForecast } from '../shared/WeeklyForecast.tsx'

export function RightSidebar() {
  return (
    <MyCard
      px={24}
      py={32}
      style={{ height: '100%', minWidth: 280, width: '100%' }}
    >
      <Flex>
        <WeeklyForecast />
      </Flex>
      <Flex direction="column">
        <Text size="14px">AIR CONDITIONS</Text>
        <Stack gap="xl" justify="space-evenly">
          <Stack mt={16}>
            <Flex>
              <Flex direction="column">
                <WiThermometer size={22} style={{ marginInlineEnd: 4 }} />
              </Flex>
              <Flex direction="column">
                <Text>Real Feel</Text>
                <Text size="16px">30o</Text>
              </Flex>
            </Flex>
          </Stack>
          <Stack mt={24}>
            <Flex>
              <Flex direction="column">
                <IconWind size={22} style={{ marginInlineEnd: 4 }} />
              </Flex>
              <Flex direction="column">
                <Text>Wind Speed</Text>
                <Text size="16px">0.8 km/hr</Text>
              </Flex>
            </Flex>
          </Stack>
          <Stack mt={24}>
            <Flex>
              <Flex direction="column">
                <IconDropletFilled size={22} style={{ marginInlineEnd: 4 }} />
              </Flex>
              <Flex direction="column">
                <Text>Chance of Rain</Text>
                <Text size="16px">2%</Text>
              </Flex>
            </Flex>
          </Stack>
          <Stack mt={24}>
            <Flex>
              <Flex direction="column">
                <IconSun size={22} style={{ marginInlineEnd: 4 }} />
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
