import { Avatar, Stack, Text } from '@mantine/core'
import avatarPng from '../../assets/avatar.png'
import { WiDayHail } from 'react-icons/wi'
import { FaCompass } from 'react-icons/fa'
import { IoMdPin } from 'react-icons/io'
import { IconSettings } from '@tabler/icons-react'
import { MyCard } from '../shared/MyCard.tsx'

// LeftSidebar component to display user profile and navigation options
export function LeftSidebar() {
  return (
    <MyCard style={{ height: '100%' }}>
      <Avatar src={avatarPng} size="lg" />
      <Stack align="center" mt="auto" gap="lg">
        {/* Section for Weather icon and label */}
        <Stack align="center" gap={2}>
          <WiDayHail size={40} /> {/* Weather icon */}
          <Text size="xs" style={{ fontWeight: 600 }}>
            weather
          </Text>
        </Stack>

        {/* Section for Explore icon and label */}
        <Stack align="center" gap={2}>
          <FaCompass size={35} /> {/* Compass icon */}
          <Text size="xs" style={{ fontWeight: 600 }}>
            explore
          </Text>
        </Stack>

        {/* Section for Cities icon and label */}
        <Stack align="center" gap={2}>
          <IoMdPin size={40} /> {/* Pin icon */}
          <Text size="xs" style={{ fontWeight: 600 }}>
            cities
          </Text>
        </Stack>

        {/* Section for Settings icon and label */}
        <Stack align="center" gap={2}>
          <IconSettings size={40} /> {/* Settings icon */}
          <Text size="xs" style={{ fontWeight: 600 }}>
            settings
          </Text>
        </Stack>
      </Stack>
    </MyCard>
  )
}
