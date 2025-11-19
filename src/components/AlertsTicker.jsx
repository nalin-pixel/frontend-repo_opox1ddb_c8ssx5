import { AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const sample = [
  'Severe Thunderstorm Warning until 6:30 PM',
  'Flash Flood Watch in effect for your area',
  'Heat Advisory: Stay hydrated and limit outdoor activity'
]

export default function AlertsTicker() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % sample.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <div id="alerts" className="bg-gradient-to-r from-rose-600 via-amber-500 to-yellow-400 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5" />
        <div className="relative h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0 flex items-center font-medium">
              {sample[idx]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
