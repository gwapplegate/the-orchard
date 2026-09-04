import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const CONTACT_EMAIL = "gwapplegate@gmail.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, business, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { env } = getCloudflareContext();
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("Contact form submission (RESEND_API_KEY not set):", body);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "The Orchard Website <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business || "(not provided)"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
