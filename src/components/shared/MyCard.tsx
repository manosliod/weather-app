import { ReactNode } from 'react'
import { Card, CardProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

// Define the properties for the custom card component, extending Mantine's CardProps
interface MyCardProps extends CardProps {
  children: ReactNode // children are required to display content within the card
}

// A reusable Card component that adapts styling based on screen size
export function MyCard({ children, style, ...props }: MyCardProps) {
  // Detect if the current viewport width is at least 768px (Desktop breakpoint)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <Card
      mb="lg"
      radius={isDesktop ? 40 : 20}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(30px)',
        padding: '1.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        ...style, // Merge any additional custom styles passed in props
      }}
      {...props} // Spread the remaining props onto Mantine's Card component
    >
      {children} {/* Render any nested elements passed as children */}
    </Card>
  )
}
