
import About from '@/components/about'
import Facilities from '@/components/facilities'
import { Footer } from '@/components/footer'
import Hero from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'


export default function Home() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-neutral-50">
        <Navbar />
        <Hero/>
        <About />
        <Services />
        <Facilities />
         <Footer />
      </div>
    </>
  )
}