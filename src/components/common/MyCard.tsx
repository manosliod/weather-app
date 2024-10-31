import { Card, CardProps } from '@mantine/core'
import { ReactNode } from 'react'

interface MyCardProps extends CardProps {
  children: ReactNode
}

export function MyCard({ children, ...props }: MyCardProps) {
  return (
    <Card
      mb="lg"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(30px)',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
      {...props}
    >
      {children}
    </Card>
  )
}
