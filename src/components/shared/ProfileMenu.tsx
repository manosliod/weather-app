import avatarPng from '@assets/avatar.png'
import { Avatar, Menu } from '@mantine/core'
import { IconSettings, IconPower } from '@tabler/icons-react'
import { WiDayHail } from 'react-icons/wi'
import { FaCompass } from 'react-icons/fa'
import { IoMdPin } from 'react-icons/io'
import MyMenuItem from '@components/shared/MyMenuItem.tsx'

export default function ProfileMenu() {
  return (
    <Menu shadow="md" width="auto">
      {/* Menu.Target defines the clickable avatar icon that opens the menu */}
      <Menu.Target>
        <Avatar src={avatarPng} size={30} style={{ cursor: 'pointer' }} />
      </Menu.Target>

      {/* Menu.Dropdown holds the menu items displayed when the menu is opened */}
      <Menu.Dropdown
        style={{
          borderRadius: 20,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(30px)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          border: '1px #9c9e98 solid',
        }}
      >
        {/* MyMenuItem component representing different menu options */}
        <MyMenuItem
          leftSection={<WiDayHail size={18} />} // Weather icon
          style={{ borderRadius: 20 }} // Consistent border radius with dropdown
        >
          Weather
        </MyMenuItem>

        <MyMenuItem leftSection={<FaCompass size={18} />}>Explore</MyMenuItem>
        <MyMenuItem leftSection={<IoMdPin size={18} />}>Cities</MyMenuItem>
        <MyMenuItem leftSection={<IconSettings size={18} />}>
          Settings
        </MyMenuItem>
        <Menu.Divider style={{ borderColor: '#9c9e98' }} />
        <MyMenuItem logout color="red" leftSection={<IconPower size={18} />}>
          Logout
        </MyMenuItem>
      </Menu.Dropdown>
    </Menu>
  )
}
