import { weatherActivities } from '../data/weather'
import { Card, Image, Text, Flex, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconHeartFilled } from '@tabler/icons-react'
import { MyCard } from './shared/MyCard.tsx'

export function Activities() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    isDesktop && (
      <MyCard px={40} style={{ maxWidth: 888, width: '100%' }}>
        <Text size="lg" style={{ display: 'flex', alignItems: 'center' }}>
          <IconHeartFilled size={24} style={{ marginInlineEnd: 8 }} />
          Activities in your area
        </Text>
        <Flex wrap="wrap">
          {weatherActivities.map((activity, index) => (
            <Group gap="xs" key={index}>
              <Card bg="transparent" px="12px">
                <Image
                  src={activity.image}
                  alt={activity.description}
                  fit="cover"
                  radius="10"
                  width={178}
                  height={100}
                  style={{ minWidth: 178, maxHeight: 100 }}
                />
                <Text size="12px" mt="xs">
                  {activity.distance} away
                </Text>
              </Card>
            </Group>
          ))}
        </Flex>
      </MyCard>
    )
  )
}
