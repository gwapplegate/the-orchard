import { NextResponse } from "next/server";

// TODO: wire this up to a real email provider (e.g. Resend, Postmark) or
// forward to a form service (e.g. Formspree) before launch. Right now this
// only logs submissions on the server — nothing is actually emailed.
export async function POST(request: Request) {
  const body = await request.json();

  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
