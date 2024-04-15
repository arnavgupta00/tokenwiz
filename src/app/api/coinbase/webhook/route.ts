import { Webhook } from "coinbase-commerce-node";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  const data = await req.body;
  const secret = process.env.COINBASE_SECRET || "";

  try {
    const event = Webhook.verifyEventBody(
      req.rawBody,
      req.headers["x-cc-webhook-signature"],
      secret
    );

    console.log("Webhook event:", event);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error verifying webhook:", error);

    return NextResponse.json({ message: "Invalid webhook" }, { status: 400 });
  }
}
