import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import About from '@/components/home/About'
import WorkIndex from '@/components/home/WorkIndex'
import Experience from '@/components/home/Experience'
import HashScroll from '@/components/home/HashScroll'

export default function Home() {
  return (
    <section>
      <HashScroll />
      <Hero />
      <Marquee />
      <About />
      <WorkIndex />
      <Experience />
    </section>
  )
}
