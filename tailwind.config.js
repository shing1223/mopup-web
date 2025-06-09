/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // App Router 頁面與元件
    './components/**/*.{js,ts,jsx,tsx}', // 自訂元件（若有）
    './pages/**/*.{js,ts,jsx,tsx}',      // 若有舊 pages 目錄
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
      },
    },
  },
  plugins: [],
}
