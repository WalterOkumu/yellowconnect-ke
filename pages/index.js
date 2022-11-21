import Head from 'next/head'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import PacoteList from '../components/PacoteList'
import Testimonials from '../components/Testimonial'

export default function Home() {
  return (
    <div className='pb-10'>
        <div className='pt-8 md:h-screen px-10 bg-[#181818]'>
          <Header />
          <Hero />
        </div>
        <About />
        <PacoteList />
        <ContactForm />
        {/*<Lead />
        <Testimonials />*/}
    </div>
  )
}
