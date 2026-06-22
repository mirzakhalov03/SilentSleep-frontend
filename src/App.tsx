import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Fab from './components/layout/Fab'
import Home from './pages/Home'
import Treatment from './pages/Treatment'
import About from './pages/About'
import SleepTrack from './pages/SleepTrack'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPostPage'

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
      <Fab />
    </div>
  )
}
