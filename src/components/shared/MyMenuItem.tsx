import React, { FC } from 'react'
import { Menu, MenuItemProps } from '@mantine/core'

interface MyMenuItemProps extends MenuItemProps {
  logout?: boolean // Optional logout prop to adjust styling for a logout item
  children: React.ReactNode
}

const MyMenuItem: FC<MyMenuItemProps> = ({ children, logout, ...props }) => {
  return (
    <Menu.Item
      {...props} // Spreads any additional props passed to MyMenuItem onto Menu.Item
      style={{
        borderRadius: 20,
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={(e) => {
        // Applies conditional hover background color based on the logout prop
        ;(e.currentTarget as HTMLElement).style.background = logout
          ? 'rgb(250, 82, 82, 0.35)'
          : 'rgba(255, 255, 255, 0.35)'
        ;(e.currentTarget as HTMLElement).style.backdropFilter = 'blur(30px)'
      }}
      onMouseLeave={(e) => {
        // Resets styles when the mouse leaves the item
        ;(e.currentTarget as HTMLElement).style.background = ''
        ;(e.currentTarget as HTMLElement).style.backdropFilter = ''
      }}
    >
      {children} {/* Renders the child elements inside Menu.Item */}
    </Menu.Item>
  )
}

export default MyMenuItem
