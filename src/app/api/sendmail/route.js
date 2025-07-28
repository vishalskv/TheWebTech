import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: body.email,
      subject: body.subject || "New message",
      html: `<p>${body.message}</p>`,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
