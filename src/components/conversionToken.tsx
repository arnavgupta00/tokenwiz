"use client";
import React, { useState } from "react";
import { tokenPerUSD } from "./tokenConversion";

export default function ConversionToken() {
    const [amount, setAmount] = useState(1);

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <h2 className="text-xl font-bold mb-4 text-blue-500">
                Token Calculation
            </h2>
            <p className="mb-6 text-blue-500">Enter amount to calculate token.</p>

            <div className="flex items-center mb-4">
                <input
                    type="text"
                    className="w-full text-blue-500 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={amount}
                    onChange={handleAmountChange}
                />
                <select className="ml-2 px-3 py-2 text-blue-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option value="USD">USD</option>
                </select>
                <span className="ml-2 text-gray-500">=</span>
                <span className="ml-2 font-bold text-blue-500">
                    {amount * tokenPerUSD} TWZ
                </span>
            </div>

            <p className="text-sm text-gray-500 mb-6">
                ⓘ Amount calculated based on current tokens price
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <a className="text-white" style={{textDecoration:"none"}} href="/purchase">Buy Tokens</a>
            </button>
        </div>
    );
}
