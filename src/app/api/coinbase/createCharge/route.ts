import { Client, resources } from "coinbase-commerce-node";
import { NextResponse } from "next/server";

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
    },
  };

  console.log(chargeData)

  try {
    const charge = await resources.Charge.create(chargeData);
    return NextResponse.json({ charge }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create charge" },
      { status: 500 }
    );
  }
}
