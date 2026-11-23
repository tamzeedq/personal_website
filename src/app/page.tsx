import Hero from '@/components/home/Hero'
import Skills from '@/components/home/Skills'
import About from '@/components/home/About'
import WorkIndex from '@/components/home/WorkIndex'
import Experience from '@/components/home/Experience'
import HashScroll from '@/components/home/HashScroll'

export default function Home() {
  return (
    <section>
      <HashScroll />
      <Hero />
      {/* Everything below the full-bleed hero sits in the centred content column. */}
      <div className="mx-auto w-[calc(100%-36px)] md:w-[85%]">
        <Skills />
        <About />
        <Experience />
        <WorkIndex />
      </div>
    </section>
  )
}
