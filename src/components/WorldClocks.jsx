import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { useEffect, useState } from 'react'

dayjs.extend(utc)
dayjs.extend(timezone)

const cities = [
  { name: 'San Francisco', tz: 'America/Los_Angeles' },
  { name: 'New York', tz: 'America/New_York' },
  { name: 'London', tz: 'Europe/London' },
  { name: 'Dubai', tz: 'Asia/Dubai' },
  { name: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', tz: 'Australia/Sydney' }
]

export default function WorldClocks() {
  const [now, setNow] = useState(dayjs())
  useEffect(() => {
    const id = setInterval(() => setNow(dayjs()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-white text-2xl font-semibold mb-4">Global Time</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cities.map((c) => (
          <div key={c.tz} className="rounded-xl bg-slate-800/60 border border-slate-700/50 p-4">
            <div className="text-blue-200/80 text-sm">{c.name}</div>
            <div className="text-white text-xl font-bold mt-1">{now.tz(c.tz).format('HH:mm:ss')}</div>
            <div className="text-blue-300/70 text-xs">{now.tz(c.tz).format('ddd, MMM D')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
