// pages/terms.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TermsContent() {
    const searchParams = useSearchParams();
    const lang = searchParams.get('en') !== null ? 'en' : 'zh';

    return (
        <div className="max-w-3xl mx-auto">
            {lang === 'en' ? (
                <>
                    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                    <p className="mb-4">
                        Welcome to MoPup! By using our mobile application and related services ("the App"), you agree to be bound by the following Terms of Service. Please read them carefully.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">1. User Accounts</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>You must provide accurate registration information and keep your account secure.</li>
                        <li>You are responsible for all activities that occur under your account.</li>
                        <li>You must be at least 13 years old to use the App.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">2. Acceptable Use</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Do not post harmful, illegal, or offensive content.</li>
                        <li>Do not impersonate others or misrepresent your identity.</li>
                        <li>Respect the privacy and rights of other users.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">3. Content Ownership</h2>
                    <p className="mb-4">
                        You retain ownership of any content you post, but grant us a license to use, modify, and display that content to provide the service.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data and Privacy</h2>
                    <p className="mb-4">
                        Please refer to our Privacy Policy for how we collect, use, and store personal data.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">5. Platform Modifications</h2>
                    <p className="mb-4">
                        We may update, modify, or discontinue features of the App at any time without prior notice.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">6. Termination</h2>
                    <p className="mb-4">
                        We reserve the right to suspend or terminate your account if you violate these terms or engage in harmful behavior.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">7. Liability Disclaimer</h2>
                    <p className="mb-4">
                        The App is provided "as is" without warranties of any kind. We are not responsible for content posted by users or any damages arising from use of the App.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
                    <p className="mb-4">
                        We may revise these terms from time to time. Continued use of the App constitutes acceptance of the revised terms.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact</h2>
                    <p>
                        If you have any questions about these Terms, contact us at: <strong>support@mopupapp.com</strong>
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4">使用條款</h1>
                    <p className="mb-4">
                        歡迎使用 MoPup！當您使用我們的應用程式與相關服務（以下簡稱「本應用程式」）時，即表示您同意遵守以下使用條款，請您仔細閱讀。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">1. 用戶帳號</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>您必須提供正確的註冊資料，並妥善保管帳號安全。</li>
                        <li>您需對帳號下的所有行為負責。</li>
                        <li>使用者需年滿13歲。</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">2. 可接受使用</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>請勿發佈有害、違法或冒犯性內容。</li>
                        <li>請勿冒充他人或虛構身份。</li>
                        <li>請尊重其他用戶的私隱與權益。</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">3. 內容所有權</h2>
                    <p className="mb-4">
                        您保留您發佈內容的所有權，但同意授權我們在提供服務過程中使用、修改與展示該內容。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">4. 資料與私隱</h2>
                    <p className="mb-4">
                        請參閱我們的私隱政策，了解我們如何收集、使用與儲存個人資料。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">5. 平台調整</h2>
                    <p className="mb-4">
                        我們可能不經通知就更新、修改或停止本應用程式的部分功能。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">6. 終止使用</h2>
                    <p className="mb-4">
                        如您違反使用條款或進行有害行為，我們保留暫停或終止您帳號的權利。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">7. 責任免除聲明</h2>
                    <p className="mb-4">
                        本應用程式以「現況」提供，無任何明示或默示保證。我們不對用戶發佈的內容或因使用應用程式導致的任何損害負責。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">8. 條款更新</h2>
                    <p className="mb-4">
                        我們可能不時修訂本條款，您持續使用本應用程式即表示接受修訂內容。
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">9. 聯絡方式</h2>
                    <p>
                        如對本使用條款有任何疑問，請聯絡：<strong>support@mopupapp.com</strong>
                    </p>
                </>
            )}
        </div>
    );
}

export default function TermsPage() {
    return (
        <main className="min-h-screen p-8 bg-white text-gray-800">
            <Suspense fallback={<div>Loading...</div>}>
                <TermsContent />
            </Suspense>
        </main>
    );
}
