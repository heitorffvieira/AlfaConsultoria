import Header from './components/Header'
import Hero from './components/Hero'
import { Services, Pillars, About, Process, Segments, Cta, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pillars />
        <About />
        <Process />
        <Segments />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
