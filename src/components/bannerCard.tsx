import { tokenPerUSD } from "@/components/tokenConversion";

export default function BannerCard() {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 w-full">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 mr-8">
        <img
          src="/path/to/your/logo.png"
          alt="Logo"
          className="w-20 h-20 mb-4"
        />
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500 text-xl">
            1 USD = {tokenPerUSD} TWZ
          </p>
          <p className="text-gray-500 text-sm ">1 TWZ = {(1/tokenPerUSD).toFixed(3)}$</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ml-8 w-full md:w-1/2 mt-6 md:mt-0">
        <div className="text-center">
          <p className="text-xl font-bold text-blue-500 text-base">
            Token Name: TokenWiz
          </p>
          <p className="text-gray-500 text-sm">Ticket Symbol: TWZ</p>
        </div>
        <a
          href="/path/to/your/whitepaper.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Download Whitepaper
        </a>
      </div>
    </div>
  );
}
