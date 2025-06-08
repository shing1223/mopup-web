// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">MoPup 毛伴</h1>
        <p className="text-lg mb-6">專為寵物愛好者設計的應用程式，幫助您與毛孩建立更緊密的連結。</p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="/appstore-badge.svg" alt="Download on the App Store" className="h-12" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/googleplay-badge.png" alt="Get it on Google Play" className="h-12" />
          </a>
        </div>

        <Link href="/privacy" className="text-blue-600 underline">
          查看私隱政策
        </Link>
      </div>
    </main>
  );
}



