// app/page.tsx
'use client';

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-[#f8f9fc] text-white font-['Plus Jakarta Sans','Noto Sans',sans-serif] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-[960px] flex flex-col items-center justify-center">
        <div className="min-h-[480px] w-full flex flex-col items-center justify-center gap-6 bg-cover bg-center rounded-lg px-4 py-10 text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/hero.png')",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Mopup毛伴</h1>
          <h2 className="text-sm md:text-base font-normal leading-normal">
            The ultimate pet care companion. Download the app today!
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 rounded bg-[#607afb] text-[#f8f9fc] font-bold text-sm md:text-base flex items-center justify-center"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 rounded bg-[#e6e9f4] text-[#0d0f1c] font-bold text-sm md:text-base flex items-center justify-center"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
