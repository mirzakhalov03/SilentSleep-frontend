import Hero from '../components/sections/Hero'
import ApneaInfo from '../components/sections/ApneaInfo'
import AboutProcess from '../components/sections/AboutProcess'
import WhyUs from '../components/sections/WhyUs'
import Services from '../components/sections/Services'
import Branches from '../components/sections/Branches'
import Blog from '../components/sections/Blog'
import SleepTest from '../components/sections/SleepTest'
import Faq from '../components/sections/Faq'
import LocationContact from '../components/sections/LocationContact'
import ContactForm from '../components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <ApneaInfo />
      <AboutProcess />
      <WhyUs />
      <Services />
      <Branches />
      <Blog />
      <SleepTest />
      <Faq />
      <LocationContact />
      <ContactForm />
    </>
  )
}
