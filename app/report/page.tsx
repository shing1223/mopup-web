'use client';

import { useState } from 'react';

declare global {
    interface Window {
        ReactNativeWebView?: {
            postMessage: (message: string) => void;
        };
    }
}

export default function ReportPage() {
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        console.log('🐞 回報問題：', message);

        setSubmitted(true);

        window.ReactNativeWebView?.postMessage('submitted');
    };

    return (
        <main style={styles.container}>
            {/* 🔙 返回按鈕 */}

            {!submitted ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2>🐞 回報問題</h2>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="請輸入您發現的問題"
                        rows={6}
                        style={styles.textarea}
                    />
                    <button type="submit" style={styles.button}>
                        回報！
                    </button>
                </form>
            ) : (
                <div style={styles.thankyou}>
                    <h3>🎉 謝謝您的回報！</h3>
                    <p>我們會盡快處理 ❤️</p>
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
        backgroundColor: 'transparent',
        border: 'none',
        color: '#0070f3',
        fontSize: 16,
        cursor: 'pointer',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
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
