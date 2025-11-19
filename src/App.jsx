import Navbar from './components/Navbar'
import AlertsTicker from './components/AlertsTicker'
import Hero from './components/Hero'
import ForecastTabs from './components/ForecastTabs'
import WorldClocks from './components/WorldClocks'
import WeatherScene from './components/WeatherScene'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <AlertsTicker />
      <Navbar />
      <Hero />
      <ForecastTabs />
      <WorldClocks />
      <WeatherScene />
      <Footer />
    </div>
  )
}

export default App
