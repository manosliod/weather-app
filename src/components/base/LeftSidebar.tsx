import { Avatar, Stack, Text } from '@mantine/core'
import avatarPng from '../../assets/avatar.png'
import { WiDayHail } from 'react-icons/wi'
import { FaCompass } from 'react-icons/fa'
import { IoMdPin } from 'react-icons/io'
import { IconSettings } from '@tabler/icons-react'
import { MyCard } from '../common/MyCard.tsx'

export function LeftSidebar() {
  return (
    <MyCard style={{ height: '100%' }}>
      <Avatar src={avatarPng} size="lg" />
      <Stack align="center" mt="auto">
        <Stack align="center" gap={2}>
          <WiDayHail size={40} />
          <Text size="xs" style={{ fontWeight: 600 }}>
            weather
          </Text>
        </Stack>
        <Stack align="center" gap={2}>
          <FaCompass size={35} />
          <Text size="xs" style={{ fontWeight: 600 }}>
            explore
          </Text>
        </Stack>

        <Stack align="center" gap={2}>
          <IoMdPin size={40} />
          <Text size="xs" style={{ fontWeight: 600 }}>
            cities
          </Text>
        </Stack>
        <Stack align="center" gap={2}>
          <IconSettings size={40} />
          <Text size="xs" style={{ fontWeight: 600 }}>
            settings
          </Text>
        </Stack>
      </Stack>
    </MyCard>
  )
}
