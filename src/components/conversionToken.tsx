"use client";
import React, { useCallback, useState } from "react";
import { tokenPerMode } from "./tokenConversion";

export default function ConversionToken() {
  const [amount, setAmount] = useState(1);
  const [mode, setMode] = useState("USD");
  const [tokens, setTokens] = useState(0);
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
    priceCalculator(Number(event.target.value), mode);
  };

  const priceCalculator = useCallback(
    (amount: number, modeOfPayment: string) => {
      let tokens = 0;
      if (modeOfPayment === "ETH") {
        tokens = amount * tokenPerMode.ETH;
      } else if (modeOfPayment === "BTC") {
        tokens = amount * tokenPerMode.BTC;
      } else if (modeOfPayment === "LTC") {
        tokens = amount * tokenPerMode.LTC;
      } else if (modeOfPayment === "USD") {
        tokens = amount * tokenPerMode.USD;
      }
      return setTokens(tokens);
    },
    [amount, mode]
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
      <h2 className="text-xl font-bold mb-4 text-blue-500">
        Token Calculation
      </h2>
      <p className="mb-6 text-blue-500">Enter amount to calculate token.</p>
      <div className="flex flex-col md:flex-row w-full mb-4">
        <div className="flex flex-row items-center mb-4 w-5/5">
          <input
            type="number"
            className="w-2/3 text-blue-500 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={amount}
            onChange={handleAmountChange}
          />
          <select
            value={mode}
            onChange={(e) => {
              setMode(e.target.value);
              priceCalculator(amount, e.target.value);
            }}
            className="w-1/3 ml-2 px-3 py-2 text-blue-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="USD">USD</option>
            <option value="ETH">ETH</option>
            <option value="BTC">BTC</option>
            <option value="LTC">LTC</option>
          </select>
          <span className="ml-2 text-gray-500"></span>
        </div>
        <div className="w-5/5 ml-2 font-bold text-blue-500 text-right sm:mr-4">
          {tokens} TWZ
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        ⓘ Amount calculated based on current tokens price
      </p>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        <a
          className="text-white"
          style={{ textDecoration: "none" }}
          href="/purchase"
        >
          Buy Tokens
        </a>
      </button>
    </div>
  );
}
