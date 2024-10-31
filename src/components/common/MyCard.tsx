import { ReactNode } from 'react'
import { Card, CardProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface MyCardProps extends CardProps {
  children: ReactNode
}

export function MyCard({ children, style, ...props }: MyCardProps) {
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
        ...style,
      }}
      {...props}
    >
      {children}
    </Card>
  )
}
