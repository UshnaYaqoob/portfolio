import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set");
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to send contact email:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
