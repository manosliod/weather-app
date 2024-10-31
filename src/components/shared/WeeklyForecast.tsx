import '@mantine/carousel/styles.css'
import { useRef, useState, useEffect, CSSProperties } from 'react'
import { Text, ActionIcon, Flex } from '@mantine/core'
import { Carousel, Embla } from '@mantine/carousel'
import { FaCloudSun } from 'react-icons/fa'
import { WiDayHail } from 'react-icons/wi'
import {
  IconCloudRain,
  IconCloudFilled,
  IconSun,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'
import { weeklyForecast } from '../../data/weather'
import { useMediaQuery } from '@mantine/hooks'

// Icon function
function getIcon(iconName: string) {
  switch (iconName) {
    case 'sun':
      return <IconSun size={30} />
    case 'cloudy':
      return <IconCloudFilled size={30} />
    case 'cloudy-sun':
      return <FaCloudSun size={30} />
    case 'rainy':
      return <IconCloudRain size={30} />
    case 'rainy-sun':
      return <WiDayHail size={30} />
    default:
      return null
  }
}

interface WeeklyForecastProps {
  style?: CSSProperties
}

export function WeeklyForecast({ style }: WeeklyForecastProps) {
  const emblaRef = useRef<Embla | null>(null)
  const [activeSlide, setActiveSlide] = useState(3) // Initialize with the 4th slide as active
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    const embla = emblaRef.current
    if (embla) {
      // Update active slide index initially and on every scroll change
      const updateActiveSlide = () => setActiveSlide(embla.selectedScrollSnap())
      embla.on('select', updateActiveSlide)
      updateActiveSlide() // Set initial slide after initialization

      // Cleanup listener on unmount
      return () => embla.off('select', updateActiveSlide)
    }
  }, [])

  const handlePrev = () => {
    if (emblaRef.current) emblaRef.current.scrollPrev()
  }

  const handleNext = () => {
    if (emblaRef.current) emblaRef.current.scrollNext()
  }

  return (
    <div style={{ position: 'relative', ...style }}>
      <Carousel
        h={80}
        w="100%"
        slideGap="xs"
        slideSize="14%"
        initialSlide={3}
        dragFree
        loop
        withControls={false}
        getEmblaApi={(embla) => (emblaRef.current = embla)}
      >
        {weeklyForecast.map((item, index) => (
          <Carousel.Slide
            key={index}
            style={{
              transform: activeSlide === index ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            <Flex direction="column" justify="center">
              <Text>{item.date}</Text>
              {getIcon(item.weatherType)}
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel>
      <ActionIcon
        onClick={handlePrev}
        variant="transparent"
        color="yellow"
        size="lg"
        radius="100px"
        style={{
          position: 'absolute',
          top: 12,
          left: isDesktop ? -24 : 0,
          transform: 'translateY(-50%)',
          outline: 'none',
          border: 'unset',
        }}
      >
        <IconChevronLeft size={28} />
      </ActionIcon>
      <ActionIcon
        onClick={handleNext}
        variant="transparent"
        color="yellow"
        size="lg"
        radius="100px"
        style={{
          position: 'absolute',
          top: 12,
          right: isDesktop ? -24 : 0,
          transform: 'translateY(-50%)',
          outline: 'none',
          border: 'unset',
        }}
      >
        <IconChevronRight size={28} />
      </ActionIcon>
    </div>
  )
}
