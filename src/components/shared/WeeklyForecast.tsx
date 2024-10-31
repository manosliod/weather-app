import { Carousel } from '@mantine/carousel'

export function WeeklyForecast() {
  return (
    <Carousel
      height={80}
      slideGap="xs"
      slideSize="100%"
      controlsOffset="xs"
      controlSize={31}
      slidesToScroll={1}
      dragFree
      loop
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>
      <Carousel.Slide>5</Carousel.Slide>
      <Carousel.Slide>6</Carousel.Slide>
      <Carousel.Slide>7</Carousel.Slide>
    </Carousel>
  )
}
