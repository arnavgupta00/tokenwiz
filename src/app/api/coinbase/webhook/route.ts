import { Webhook } from "coinbase-commerce-node";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  const secret = process.env.COINBASE_SECRET || "";

  const nextReq = new NextRequest(req);
  const rawBody = await nextReq.text();
  const webhookSignature = nextReq.headers.get("x-cc-webhook-signature") || "";

  console.log("Webhook signature:", rawBody, webhookSignature);

  try {
    const event = Webhook.verifyEventBody(rawBody, webhookSignature, secret);

    console.log("Webhook event:", event);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error verifying webhook:", error);

    return NextResponse.json({ message: "Invalid webhook" }, { status: 400 });
  }
}
