import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Consult from '@/components/Consult'

import { fetchRevenue } from '../lib/data'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'

export default async function Home() {
  const test = await fetchRevenue()
  console.log('server log;;;', test)
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Portfolio />
        <Team />
        <Testimonials />
        <Pricing />
        <Consult />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
