import { useEffect } from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'

// Simple embedded Lottie JSON (a tiny animated sun) for demo purposes
const tinySun = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "sun",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "sun-shape",
      sr: 1,
      ks: { o: { a: 0, k: 100 }, r: { a: 0, k: 0 }, p: { a: 0, k: [100, 100, 0] }, a: { a: 0, k: [0, 0, 0] }, s: { a: 0, k: [100, 100, 100] } },
      shapes: [
        { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [80, 80] }, d: 1, nm: 'circle' },
        { ty: 'st', c: { a: 0, k: [1, 0.847, 0.4, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 8 }, lc: 2, lj: 2, ml: 10 },
        { ty: 'fl', c: { a: 0, k: [1, 0.894, 0.510, 1] }, o: { a: 0, k: 100 } }
      ],
      ao: 0,
      ip: 0,
      op: 60,
      st: 0
    }
  ]
}

export default function WeatherScene() {
  useEffect(() => {}, [])
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-white text-2xl font-semibold mb-2">Animated weather scenes</h2>
        <p className="text-blue-200/80">Delightful micro-animations enhance understanding of conditions and transitions.</p>
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6">
          <div className="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-slate-900/50 p-4 flex items-center justify-center"><Lottie animationData={tinySun} loop={true} /></div>
              <div className="rounded-xl bg-slate-900/50 p-4 flex items-center justify-center text-blue-200">More scenes…</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-slate-700/50 p-6 text-blue-100">
        <ul className="list-disc ml-6 space-y-2">
          <li>Stateful scenes per condition (clear, rain, snow, storm)</li>
          <li>Transitions synced to forecast timelines</li>
          <li>Reduced motion fallback with prefers-reduced-motion</li>
        </ul>
      </div>
    </section>
  )
}
