import { Webhook } from "coinbase-commerce-node";
import { NextRequest, NextResponse } from "next/server";
import {
  getTransaction,
  updateToken,
  updateTransaction,
  createTransactions,
} from "@/serverActions/paymentActions";

export async function POST(req: any) {
  const secret = process.env.COINBASE_SECRET || "";

  const nextReq = new NextRequest(req);
  const rawBody = await nextReq.text();
  const webhookSignature = nextReq.headers.get("x-cc-webhook-signature") || "";

  console.log("Webhook signature:", rawBody, webhookSignature);

  try {
    const event = Webhook.verifyEventBody(rawBody, webhookSignature, secret);

    console.log("Webhook event:", event);
    const transaction = await getTransaction(event.data.id);

    if (event.type === "charge:created") {
      if (transaction) {
        await updateTransaction(event.data.id, "Created");
      }

      console.log("Charge created");

    } else if (event.type === "charge:pending") {
      if (transaction) {
        await updateTransaction(event.data.id, "Pending");
      }

      console.log("Charge pending");
      
    } else if (event.type === "charge:confirmed") {
      if (transaction) {
        await updateTransaction(event.data.id, "Suceess");
        await updateToken(transaction.userEmail, transaction.Tokens);
      }
    } else if (event.type === "charge:failed") {
      if (transaction) {
        await updateTransaction(event.data.id, "Failed");
      }
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error verifying webhook:", error);

    return NextResponse.json({ message: "Invalid webhook" }, { status: 400 });
  }
}
