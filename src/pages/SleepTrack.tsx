import { useState } from 'react'
import SleepTrackHero from '../components/sections/sleeptrack/SleepTrackHero'
import SleepTrackLayout, { type SleepTrackTab } from '../components/sections/sleeptrack/SleepTrackLayout'

export default function SleepTrack() {
  const [activeTab, setActiveTab] = useState<SleepTrackTab>('doctors')

  return (
    <>
      <SleepTrackHero />
      <SleepTrackLayout activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  )
}
