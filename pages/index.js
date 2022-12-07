import Head from 'next/head'
import ContactForm from '../components/ConctactForm'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import PacoteList from '../components/PacoteList'
import Testimonials from '../components/Testimonial'

export default function Home() {
  return (
    <div className='pb-10'>
        <div className="pt-8 md:h-screen px-10 bg-no-repeat bg-cover bg-center bg-[url('/background-hero-mobile.png')] xl:bg-[url('/background-hero.png')]">
          <Header />
          <Hero />
        </div>
        <PacoteList />
        <ContactForm />
        {/*<Lead />
        <Testimonials />*/}
    </div>
  )
}
