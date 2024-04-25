import { EmailTemplate } from "@/components/sub/email-template";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { fullname, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "ACK ME <onboarding@resend.dev>",
      to: ["gopalsasmal1806@gmail.com"],
      subject: "Portfolio Message",
      react: EmailTemplate({ fullname, email, message }) as ReactElement,
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

export async function GET() {
  try {
    return Response.json({
      message: "Hello word",
    });
  } catch (error) {
    return Response.json({ error });
  }
}
