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
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        setLoading(true);

        try {
            const res = await fetch('/api/send-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!res.ok) {
                throw new Error('寄送失敗');
            }

            setSubmitted(true);
            window.ReactNativeWebView?.postMessage('submitted');
        } catch (err) {
            console.error('🐞 發送錯誤:', err);
            alert('寄送失敗，請稍後再試');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={styles.container}>
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
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? '送出中…' : '回報！'}
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
