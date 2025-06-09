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

        console.log('📝 使用者建議：', message);

        setSubmitted(true);

        window.ReactNativeWebView?.postMessage('submitted');
    };

    return (
        <main style={styles.container}>
            {/* 🔙 返回按鈕 */}
            <button onClick={() => window.ReactNativeWebView?.postMessage('back')} style={styles.backButton}>
                ← 返回
            </button>

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
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'transparent',
        border: 'none',
        color: '#0070f3',
        fontSize: 16,
        cursor: 'pointer',
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
