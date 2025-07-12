// app/api/send-feedback/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { message } = await req.json();

    if (!message) {
        return NextResponse.json({ error: 'Empty message' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // 你也可以用 Mailgun, SMTP, SendGrid 等
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"回饋表單" <${process.env.SMTP_USER}>`,
            to: 'support@mopup.app',
            subject: '💡 使用者回饋',
            text: message,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('寄信錯誤:', error);
        return NextResponse.json({ error: '寄送失敗' }, { status: 500 });
    }
}
