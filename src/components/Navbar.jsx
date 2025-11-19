import { useState } from 'react'
import { Menu, Sun, Moon, Globe, LogIn, UserPlus } from 'lucide-react'
import { useSettings } from '../store/useSettings'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useSettings()

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-700/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-800" aria-label="Open Menu" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5 text-blue-200" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md" />
            <span className="text-white font-semibold">AeroCast</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
          <a href="#forecast" className="hover:text-white transition">Forecast</a>
          <a href="#maps" className="hover:text-white transition">Maps</a>
          <a href="#alerts" className="hover:text-white transition">Alerts</a>
          <a href="#widgets" className="hover:text-white transition">Widgets</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-slate-800" aria-label="Toggle Theme" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-blue-200" />}
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-blue-100">
            <Globe className="w-4 h-4" /> EN
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white">
            <LogIn className="w-4 h-4" /> Login
          </button>
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-400/40 text-blue-100 hover:bg-blue-500/10">
            <UserPlus className="w-4 h-4" /> Sign up
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-700/40 px-4 py-3 space-y-2 bg-slate-900/90">
          <a href="#forecast" className="block text-blue-100/90">Forecast</a>
          <a href="#maps" className="block text-blue-100/90">Maps</a>
          <a href="#alerts" className="block text-blue-100/90">Alerts</a>
          <a href="#widgets" className="block text-blue-100/90">Widgets</a>
        </div>
      )}
    </header>
  )
}
