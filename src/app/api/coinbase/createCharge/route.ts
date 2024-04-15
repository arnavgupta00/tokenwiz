import { createTransactions } from "@/serverActions/paymentActions";
import { Client, resources } from "coinbase-commerce-node";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { item } = body;

  Client.init(process.env.COINBASE_API_KEY || "");

  const chargeData = {
    name: item.name,
    description: item.description,
    local_price: {
      amount: item.price,
      currency: item.modeOfPayment,
    },
    pricing_type: "fixed_price" as const,
    metadata: {
      customer_email: item.userEmail,
      token_quantity: item.quantity,
    },
  };

  console.log(chargeData);

  try {
    const charge = await resources.Charge.create(chargeData);

    await createTransactions({
      amount: parseFloat(item.price),
      sessionID: charge.id,
      Tokens: item.quantity,
      Status: "Initiated",
      modeOfPayment: item.modeOfPayment,
      description: item.description,
      userEmail: item.userEmail,
    });

    return NextResponse.json({ charge }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create charge" },
      { status: 500 }
    );
  }
}
