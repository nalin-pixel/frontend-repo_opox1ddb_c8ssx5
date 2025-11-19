import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.35)]"
        >
          Weather, reimagined.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-blue-100"
        >
          Hyperlocal forecasts, global clocks, live maps, and severe weather alerts — all in one beautiful, fast, and accessible app.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#forecast" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium">Check forecast</a>
          <a href="#widgets" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium">Customize widgets</a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
    </section>
  )
}
