import { tokenPerUSD } from "@/components/tokenConversion";

export default function BalanceCard() {

    const tokenBalance = 12000;

    return <div className="h-48 bg-blue-600 w-72 flex flex-col col justify-center items-center gap-8 rounded-lg">
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-blue-200 text-xs">Token's Balance</p>
            <p className="text-white text-sm">
              {tokenBalance} TWZ
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-blue-200 text-xs">Your Balance</p>
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-start">
              <p className="text-white text-sm">
              {tokenBalance / tokenPerUSD}
              </p>
              <p className="text-blue-200 text-xs">USD</p>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-white text-sm">
              {tokenBalance / tokenPerUSD}
              </p>
              <p className="text-blue-200 text-xs">USD</p>
            </div>
          </div>
        </div>
      </div>
}