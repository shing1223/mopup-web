'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const faqList = [
    {
        question: '如何新增寵物？',
        answer: '請在主頁點擊「＋ 新增寵物」按鈕，並填寫寵物資料。',
    },
    {
        question: '如何編輯個人資料？',
        answer: '在個人頁面中點擊 ✏️ 按鈕可進行編輯。',
    },
    {
        question: '我無法發布貼文，該怎麼辦？',
        answer: '請確認您是否尚有貼文點數，或重新啟動應用程式。',
    },
    {
        question: '我的資料會被公開嗎？',
        answer: '只有您發布的貼文和寵物資料會被其他人看到，個人聯絡資料不會公開。',
    },
];

export default function HelpPage() {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0); // Optional: Scroll to top on mount
    }, []);

    return (
        <main className="min-h-screen bg-white text-gray-800 p-6 sm:p-12">
            <h1 className="text-3xl font-bold text-[#004B97] mb-8">🆘 幫助中心</h1>

            <div className="space-y-8">
                {faqList.map((item, index) => (
                    <div key={index}>
                        <p className="text-lg font-semibold text-gray-900">Q：{item.question}</p>
                        <p className="text-base text-gray-600 mt-1">A：{item.answer}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
