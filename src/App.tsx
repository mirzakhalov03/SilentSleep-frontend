import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Treatment from './pages/Treatment'
import About from './pages/About'
import SleepTrack from './pages/SleepTrack'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/about" element={<About />} />
          <Route path="/sleeptrack" element={<SleepTrack />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
