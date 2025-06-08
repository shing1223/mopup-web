// app/privacy/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PrivacyContent() {
    const searchParams = useSearchParams();
    const lang = searchParams.get('en') !== null ? 'en' : 'zh';

    return (
        <div className="max-w-3xl mx-auto">
            {lang === 'en' ? (
                <>
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                    <p className="mb-4">
                        This Privacy Policy explains how the “MoPup” mobile application (hereafter "the App") collects, uses, stores, and protects your personal data. We are committed to complying with applicable privacy and data protection laws in Hong Kong, Taiwan, Macau, and other relevant regions.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                    <p className="mb-2">We may collect the following information:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>User registration details: email address, nickname, account type (user/merchant/admin)</li>
                        <li>Pet information: pet name, breed, age, gender, location, personality tags</li>
                        <li>Activity records: posts, comments, likes, family invitations, chat records, etc.</li>
                        <li>Region settings, theme preferences, and app usage preferences</li>
                        <li>Device information and Firebase Analytics data (device model, OS, usage duration)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>To provide core features: registration/login, wall and forum access, chats, families, etc.</li>
                        <li>To send notifications, suggest matches, and personalize pet profiles</li>
                        <li>To enhance user experience and interface based on usage patterns and themes</li>
                        <li>To monitor platform safety, including user reporting and account/IP blocking</li>
                        <li>To respond to user inquiries, reports, or contact requests</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Storage and Protection</h2>
                    <p className="mb-4">
                        All user data is stored securely using Firebase Cloud Firestore and Firebase Authentication, with encryption and security measures provided by Google Cloud. We use appropriate technical safeguards and access control to prevent unauthorized access or data leakage.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
                    <p className="mb-4">
                        The App integrates Firebase (by Google) for authentication and data storage, and may also use Google Analytics for behavioral tracking. We do not sell your personal data to third parties.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>You may update or delete your personal information at any time</li>
                        <li>You may request to view the data we have collected about you</li>
                        <li>You may deactivate or delete your account and associated data</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">6. Children’s Privacy</h2>
                    <p className="mb-4">
                        The App is not intended for children under the age of 13. If we discover that we have inadvertently collected such data, we will delete it immediately.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">7. Policy Updates</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy as features evolve or laws change. Significant updates will be announced within the App.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <strong>support@mopupapp.com</strong>
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4">私隱政策</h1>
                    <p className="mb-4">
                        本私隱政策旨在說明「MoPup 毛伴」應用程式（以下簡稱「本應用程式」）如何收集、使用、儲存及保護您的個人資料。我們承諾遵守香港、台灣、澳門等地的相關私隱及資料保障法律。
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">1. 資料收集項目</h2>
                    <p className="mb-2">我們可能收集以下資料：</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>用戶註冊資料：包括電郵地址、暱稱、帳號類型（使用者／商戶／管理員）</li>
                        <li>寵物資訊：包括寵物名字、品種、年齡、性別、地區、個性標籤</li>
                        <li>使用紀錄：動態牆貼文、留言、讚好、家族邀請、聊天室對話記錄等</li>
                        <li>地區設定、主題風格選擇及使用偏好</li>
                        <li>裝置資訊與 Firebase Analytics 數據（如裝置型號、OS、使用時間）</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">2. 資料使用方式</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>提供基本功能：註冊登入、建立及瀏覽動態牆與討論區、聊天室、建立家族等功能</li>
                        <li>推送通知、配對建議與寵物主頁推薦</li>
                        <li>改善用戶體驗與功能設計（根據主題切換、使用統計資料）</li>
                        <li>進行平台內容審查與安全防護（如封鎖帳戶/IP）</li>
                        <li>處理用戶回報、檢舉、或與我們的聯絡需求</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">3. 資料儲存與保護</h2>
                    <p className="mb-4">
                        所有用戶資料儲存於 Firebase Cloud Firestore 及 Firebase Authentication，由 Google Cloud 提供加密與安全保障。我們採取合理技術手段保護資料，並限制內部存取權限，避免資料外洩。
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">4. 第三方服務</h2>
                    <p className="mb-4">
                        本應用程式使用 Firebase（由 Google 提供）作為身份驗證與數據儲存平台，並可能整合 Google Analytics 作為行為分析工具。我們不會將您的資料售予第三方。
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">5. 用戶權利</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>您可隨時更新或刪除您的個人資料</li>
                        <li>您可要求查閱我們所保存的任何您的個人資料</li>
                        <li>您可隨時停用帳戶或刪除所有帳號相關資料</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">6. 兒童保護政策</h2>
                    <p className="mb-4">
                        本應用程式不特意針對13歲以下兒童。如發現我們意外收集此類資料，將立即刪除。
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">7. 政策更新</h2>
                    <p className="mb-4">
                        本私隱政策可能因應功能更新或法例更改而進行修訂。我們會於應用內公告重大更動。
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2">8. 聯絡我們</h2>
                    <p>
                        如有任何關於私隱的問題，請電郵至：<strong>support@mopupapp.com</strong>
                    </p>
                </>
            )}
        </div>
    );
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen p-8 bg-white text-gray-800">
            <Suspense fallback={<div>Loading...</div>}>
                <PrivacyContent />
            </Suspense>
        </main>
    );
}
