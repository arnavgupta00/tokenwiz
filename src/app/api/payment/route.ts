import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { createTransactions } from "@/serverActions/paymentActions";
import { tokenPerMode } from "@/components/tokenConversion";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-04-10",
});

export async function POST(req: any) {
  if (req.method === "POST") {
    const body = await req.json();
    const { item } = body; // Replace with your product data structure
    console.log(item);

    if (!item.name || !item.description || !item.price || !item.quantity || item.userEmail == "W") {
      return NextResponse.json({ error: "Missing User Data" }, { status: 400 });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                description: item.description,
              },
              unit_amount: (1 / tokenPerMode.USD) * 100, // Convert to cents
            },
            quantity: item.quantity,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_URL}/api/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/api/payment/cancel?session_id={CHECKOUT_SESSION_ID}`,
      });
      console.log("Session ID: ", session.id);
      await createTransactions({
        amount: item.price,
        sessionID: session.id,
        Tokens: item.quantity,
        Status: "Pending",
        description: item.description,
        modeOfPayment: item.modeOfPayment,
        userEmail: item.userEmail,
      });
      return NextResponse.json({ sessionId: session.id }, { status: 200 });
    } catch (e) {
        console.log("Api error ",e);
      return NextResponse.json(
        { error: "Failed to make payment", details: e },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json("Method Not Allowed", { status: 405 });
  }
}
