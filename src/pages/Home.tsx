import Hero from '../components/sections/Hero'
import LocationContact from '../components/sections/LocationContact'
import ApneaInfo from '../components/sections/ApneaInfo'
import Blog from '../components/sections/Blog'
import SleepTest from '../components/sections/SleepTest'

export default function Home() {
  return (
    <>
      <Hero />
      <LocationContact />
      <ApneaInfo />
      <Blog />
      <SleepTest />
    </>
  )
}
