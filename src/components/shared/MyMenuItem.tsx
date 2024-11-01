import React, { FC } from 'react'
import { Menu, MenuItemProps } from '@mantine/core'

interface MyMenuItemProps extends MenuItemProps {
  logout?: boolean
  children: React.ReactNode
}

const MyMenuItem: FC<MyMenuItemProps> = ({ children, logout, ...props }) => {
  return (
    <Menu.Item
      {...props}
      style={{
        borderRadius: 20,
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.background = logout
          ? 'rgb(250, 82, 82, 0.35)'
          : 'rgba(255, 255, 255, 0.35)'
        ;(e.currentTarget as HTMLElement).style.backdropFilter = 'blur(30px)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.background = ''
        ;(e.currentTarget as HTMLElement).style.backdropFilter = ''
      }}
    >
      {children}
    </Menu.Item>
  )
}

export default MyMenuItem
