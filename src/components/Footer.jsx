export default function Footer(){
  return (
    <footer className="border-t border-slate-800/60 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-blue-300/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} AeroCast. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
