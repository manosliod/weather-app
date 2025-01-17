import { lazy, ReactNode } from 'react'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

// Dynamically import components
const LeftSidebar = lazy(() => import('./partials/LeftSidebar.tsx'))
const RightSidebar = lazy(() => import('./partials/RightSidebar.tsx'))
const WeeklyForecast = lazy(
  () => import('@components/shared/WeeklyForecast.tsx')
)

// Define the props for BaseLayout, accepting children as ReactNode elements
interface SidebarProps {
  children: ReactNode
}

// Base layout component that manages the layout structure, including conditional sidebar rendering
export function BaseLayout({ children }: SidebarProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <>
      {/* Main Flex container to align sidebars and content section */}
      <Flex justify="space-between">
        {isDesktop && (
          // Left sidebar displayed only on desktop screens
          <Flex direction="column" me={24}>
            <LeftSidebar />
          </Flex>
        )}
        <Flex
          direction="column"
          me={isDesktop ? 24 : undefined}
          w={!isDesktop ? '100%' : undefined}
        >
          {!isDesktop && <WeeklyForecast style={{ paddingInline: 24 }} />}
          {/* Weekly forecast displayed only on mobile, with padding for styling */}
          {children} {/* Render the main content passed as children */}
        </Flex>
        {isDesktop && (
          // Right sidebar displayed only on desktop screens
          <Flex direction="column">
            <RightSidebar />
          </Flex>
        )}
      </Flex>
    </>
  )
}
