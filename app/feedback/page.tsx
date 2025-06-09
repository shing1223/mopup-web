'use client';

import { useState } from 'react';

declare global {
    interface Window {
        ReactNativeWebView?: {
            postMessage: (message: string) => void;
        };
    }
}


export default function FeedbackPage() {
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        // ✅ 可以改成你自己的 API 寫入 Firestore 或寄 Email 等
        console.log('📝 使用者建議：', message);

        setSubmitted(true);

        // ✅ 傳送成功訊息給 React Native WebView
        if (typeof window !== 'undefined' && window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage('submitted');
        }
    };

    return (
        <main style={styles.container}>
            {!submitted ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2>💡 意見回饋</h2>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="請輸入您的建議內容"
                        rows={6}
                        style={styles.textarea}
                    />
                    <button type="submit" style={styles.button}>
                        送出建議
                    </button>
                </form>
            ) : (
                <div style={styles.thankyou}>
                    <h3>🎉 謝謝您的建議！</h3>
                    <p>我們會認真考慮 ❤️</p>
                </div>
            )}
        </main>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: 480,
        margin: '40px auto',
        padding: 20,
        fontFamily: 'sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    textarea: {
        width: '100%',
        padding: 12,
        fontSize: 16,
        borderRadius: 8,
        border: '1px solid #ccc',
        resize: 'vertical',
    },
    button: {
        padding: '10px 16px',
        fontSize: 16,
        borderRadius: 8,
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
    thankyou: {
        textAlign: 'center',
        marginTop: 60,
    },
};
