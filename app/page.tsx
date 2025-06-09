'use client';

export default function HomePage() {
  return (
    <main className="relative h-screen w-full text-white font-['Plus Jakarta Sans','Noto Sans',sans-serif']">
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
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Mopup毛伴
        </h1>
        <h2 className="text-base md:text-lg font-normal mb-6">
          The ultimate pet care companion. Download the app today!
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 rounded-full bg-[#607afb] text-white font-bold text-sm md:text-base flex items-center"
          >
            Download on the App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 rounded-full bg-white text-[#0d0f1c] font-bold text-sm md:text-base flex items-center"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </main>
  );
}
