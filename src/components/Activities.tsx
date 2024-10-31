import { weatherActivities } from '../data/weather'
import { Card, Image, Text, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconHeartFilled } from '@tabler/icons-react'
import { MyCard } from './common/MyCard.tsx'

export function Activities() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    isDesktop && (
      <MyCard px={48} style={{ maxWidth: 892 }}>
        <Text size="lg" style={{ display: 'flex', alignItems: 'center' }}>
          <IconHeartFilled size={24} style={{ marginInlineEnd: 8 }} />
          Activities in your area
        </Text>
        <Flex wrap="wrap">
          {weatherActivities.map((activity, index) => (
            <Card
              key={index}
              bg="transparent"
              px="12px"
              ps={index === 0 ? 0 : 12}
            >
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
          ))}
        </Flex>
      </MyCard>
    )
  )
}
