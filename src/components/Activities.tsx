import { Card, Image, Text, Flex } from '@mantine/core'
import { weatherActivities } from '../data/weather'
import { MyCard } from './common/MyCard.tsx'

export function Activities() {
  return (
    <MyCard px={48} style={{ maxWidth: 885 }}>
      <Text size="lg">Activities in your area</Text>
      <Flex>
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
}
