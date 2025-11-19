import { useState } from 'react'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'

const ranges = [
  { key: 'hourly', label: 'Hourly' },
  { key: 'daily', label: 'Daily' },
  { key: '7d', label: '7 Days' },
  { key: '14d', label: '14 Days' }
]

function Card({ children }) {
  return <div className="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-4 text-blue-100">{children}</div>
}

export default function ForecastTabs() {
  const [active, setActive] = useState('hourly')

  return (
    <section id="forecast" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {ranges.map((r) => (
          <button key={r.key} onClick={() => setActive(r.key)} className={`px-4 py-2 rounded-xl border ${active===r.key?'bg-blue-600 text-white border-blue-400/50':'bg-slate-800/60 text-blue-100 border-slate-700/50 hover:bg-slate-700/60'}`}>
            {r.label}
          </button>
        ))}
      </div>

      <Card>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} key={active}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-slate-900/40 p-4 text-center">
                <div className="text-sm text-blue-300/80">{dayjs().add(i, active==='hourly'?'hour':'day').format(active==='hourly'?'ha':'ddd')}</div>
                <div className="mt-2 text-2xl text-white font-semibold">{Math.round(10+Math.random()*15)}°</div>
                <div className="text-blue-300/80 text-sm">Cloudy</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Card>
    </section>
  )
}
