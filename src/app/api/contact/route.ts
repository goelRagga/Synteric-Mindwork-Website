import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Synteric Mindworks <noreply@syntericmindworks.com>",
      to: ["info@syntericmindworks.com"],
      replyTo: email,
      subject: `New Strategy Session Request — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a2e;">
          <div style="background: #c92e8e; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: #fff; font-size: 20px;">New Strategy Session Request</h1>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">via syntericmindworks.com</p>
          </div>
          <div style="background: #f9f9fb; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e8e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px; color: #111;"><a href="mailto:${email}" style="color: #c92e8e;">${email}</a></td>
              </tr>
              ${
                company
                  ? `<tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Company</td>
                <td style="padding: 10px 0; font-size: 14px; color: #111;">${company}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #888; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; font-size: 14px; color: #111; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <p style="text-align: center; font-size: 12px; color: #aaa; margin-top: 20px;">
            Synteric Mindworks 
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email failed to send." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}