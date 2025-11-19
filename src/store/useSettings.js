import { create } from 'zustand'

export const useSettings = create((set) => ({
  theme: 'dark',
  rtl: false,
  locale: 'en',
  setLocale: (locale) => set({ locale }),
  toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
  toggleRtl: () => set((s) => ({ rtl: !s.rtl }))
}))
