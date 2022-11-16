import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import PacoteList from '../components/PacoteList'
import Testimonials from '../components/Testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yellow Connect</title>
        <meta name="description" content="Yellow Connect Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pb-10'>
        <div className="md:h-screen px-10 pb-20 bg-[#181818] mb-20">
          <Header />
          <Hero />
        </div>
        <About />
        <PacoteList />
        <Testimonials />
      </main>

    </div>
  )
}
