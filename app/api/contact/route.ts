import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, preferredContact, budgetRange, phone } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof company !== "string" ||
      typeof message !== "string" ||
      typeof preferredContact !== "string"
    ) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    if (!name.trim() || !email.trim() || !company.trim() || !message.trim()) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // TODO: forward to CRM, email service (Resend, SendGrid), or Slack webhook
    console.info("[contact]", {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      message: message.trim(),
      preferredContact,
      budgetRange: typeof budgetRange === "string" ? budgetRange : "",
      phone: typeof phone === "string" ? phone : "",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
