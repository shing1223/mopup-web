// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className="w-full max-w-4xl bg-cover bg-center rounded-3xl overflow-hidden text-white text-center p-10 relative"
        style={{
          backgroundImage: "url('/hero-banner.png')",
        }}
      >
        <div className="backdrop-brightness-75 py-10">
          <h1 className="text-5xl font-extrabold mb-4">Mopup毛伴</h1>
          <p className="text-lg mb-6">The ultimate pet care companion. Download the app today!</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
