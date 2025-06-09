'use client';

import { useState } from 'react';

export default function FeedbackPage() {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!feedback.trim()) return alert('請輸入建議內容');

        try {
            // TODO: 你可以改成呼叫 API 或寫入 Firebase
            console.log('📩 Feedback received:', feedback);
            setSubmitted(true);
            setFeedback('');
        } catch (err) {
            alert('提交失敗，請稍後再試');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>💡 意見回饋</h1>
            <p style={styles.subtitle}>我們重視您的建議，請隨時提供意見 🙏</p>

            {submitted ? (
                <div style={styles.successBox}>✅ 謝謝您的建議！我們會認真考慮。</div>
            ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <textarea
                        placeholder="請輸入您的建議..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        style={styles.textarea}
                    />
                    <button type="submit" style={styles.button}>送出建議</button>
                </form>
            )}
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        maxWidth: 600,
        margin: '60px auto',
        padding: 24,
        border: '1px solid #ddd',
        borderRadius: 12,
        fontFamily: 'sans-serif',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        marginBottom: 12,
        color: '#004B97',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 24,
        color: '#555',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    textarea: {
        height: 160,
        padding: 12,
        fontSize: 15,
        borderRadius: 8,
        border: '1px solid #ccc',
        marginBottom: 16,
        resize: 'vertical',
    },
    button: {
        backgroundColor: '#004B97',
        color: '#fff',
        border: 'none',
        padding: '12px 16px',
        fontSize: 16,
        borderRadius: 8,
        cursor: 'pointer',
    },
    successBox: {
        padding: 16,
        backgroundColor: '#e0f7e9',
        borderRadius: 8,
        color: '#2e7d32',
        fontSize: 16,
    },
};
