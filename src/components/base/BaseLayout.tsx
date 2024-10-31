import { ReactNode } from 'react'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { LeftSidebar } from './LeftSidebar.tsx'
import { RightSidebar } from './RightSidebar.tsx'
import { WeeklyForecast } from '../WeeklyForecast.tsx'

interface SidebarProps {
  children: ReactNode
}

export function BaseLayout({ children }: SidebarProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <Flex>
        {isDesktop && (
          <Flex direction="column" me={24}>
            <LeftSidebar />
          </Flex>
        )}
        <Flex
          direction="column"
          me={isDesktop ? 24 : undefined}
          w={!isDesktop ? '100%' : undefined}
        >
          {!isDesktop && <WeeklyForecast />}
          {children}
        </Flex>
        {isDesktop && (
          <Flex direction="column">
            <RightSidebar />
          </Flex>
        )}
      </Flex>
    </>
  )
}
