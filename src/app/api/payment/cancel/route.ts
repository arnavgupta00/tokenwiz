import {
  getTransaction,
  updateTransaction,
} from "@/serverActions/paymentActions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    
  const param = req.nextUrl.searchParams.get("session_id");
  const sessionID = param; 
  console.log(sessionID);

  if (!sessionID) {
    return NextResponse.json({ error: "Missing User Data" }, { status: 400 });
  }

  try {
    const transaction = await getTransaction(sessionID);

    if (!transaction) return console.error("Transaction not found");

    if (transaction.Status === "Cancelled") {
      return console.log("Transaction already updated");
    }

    await updateTransaction(sessionID, "Cancelled");
    console.log("Transaction status updated");
  } catch (error) {
    console.error("Error updating transaction status", error);
  }

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/purchase`);

};
