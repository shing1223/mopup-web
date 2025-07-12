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
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        setLoading(true);

        try {
            const res = await fetch('/api/send-feedback', {
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
        } catch (error) {
            alert('寄送失敗，請稍後再試');
            console.error(error);
        } finally {
            setLoading(false);
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
                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? '送出中…' : '送出建議'}
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
