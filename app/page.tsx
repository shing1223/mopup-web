'use client';

export default function HomePage() {
  return (
    <main className="relative h-screen w-full text-white font-sans">
      {/* 背景圖層 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/hero.png')",
        }}
      />

      {/* 內容層 */}
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
  {/* 半透明背景方框 */}
  <div className="bg-black/10 rounded-2xl p-8 backdrop-blur-md max-w-xl w-full">
    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
      Mopup毛伴
    </h1>

    <h2 className="text-base md:text-lg font-normal mb-6 text-white">
      The ultimate pet care companion. Download the app today!
    </h2>

    <div className="flex flex-wrap justify-center gap-3">
      <a
        href="https://apps.apple.com/hk/app/%E6%AF%9B%E4%BC%B4-mopup/id6748514354"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 px-6 rounded-full bg-[#607afb] text-white font-bold text-sm md:text-base flex items-center"
      >
        Download on the App Store
      </a>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="h-12 px-6 rounded-full bg-white text-[#0d0f1c] font-bold text-sm md:text-base flex items-center opacity-60 cursor-not-allowed"
        title="Google Play 版本仍在開發中"
      >
        Coming soon on Google Play
      </a>
    </div>
  </div>
</div>

      {/* 頁腳連結 */}
      <footer className="absolute bottom-4 left-0 right-0 z-10 flex justify-center text-xs text-white/80 space-x-4">
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:underline">
          Terms of Service
        </a>
      </footer>
    </main>
  );
}
