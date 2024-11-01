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
import { weeklyForecast } from '@data/weather'
import { useMediaQuery } from '@mantine/hooks'

// Function to select the appropriate weather icon based on weather type
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

// Define properties for the WeeklyForecast component
interface WeeklyForecastProps {
  style?: CSSProperties // Optional style prop to customize component styling
}

// Main component to display a weekly weather forecast carousel
export function WeeklyForecast({ style }: WeeklyForecastProps) {
  const emblaRef = useRef<Embla | null>(null)
  const [activeSlide, setActiveSlide] = useState(3) // Default to the 4th slide
  const isDesktop = useMediaQuery('(min-width: 768px)')

  // useEffect to initialize Embla API and set active slide listener
  useEffect(() => {
    const embla = emblaRef.current
    if (embla) {
      // Update active slide index on initialization and every scroll event
      const updateActiveSlide = () => setActiveSlide(embla.selectedScrollSnap())
      embla.on('select', updateActiveSlide)
      updateActiveSlide() // Set the initial active slide

      // Cleanup listener on component unmount
      return () => embla.off('select', updateActiveSlide)
    }
  }, [])

  // Handlers for navigating to the previous and next slides
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
        slideGap="lg"
        slideSize="14%"
        initialSlide={3}
        dragFree
        loop
        withControls={false}
        getEmblaApi={(embla) => (emblaRef.current = embla)} // Store Embla API instance in ref
      >
        {weeklyForecast.map((item, index) => (
          <Carousel.Slide
            key={index} // Unique key for each slide
            style={{
              transform: activeSlide === index ? 'scale(1.2)' : 'scale(1)', // Scale active slide
              transition: 'transform 0.3s ease', // Smooth scale transition
            }}
          >
            <Flex direction="column" justify="center">
              <Text>{item.date}</Text> {/* Display the date */}
              {getIcon(item.weatherType)}{' '}
              {/* Display the relevant weather icon */}
            </Flex>
          </Carousel.Slide>
        ))}
      </Carousel>
      <ActionIcon
        onClick={handlePrev} // Navigate to previous slide on click
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
        onClick={handleNext} // Navigate to next slide on click
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
