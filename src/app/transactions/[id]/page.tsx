import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";

interface Transaction {
  id: number;
  amountUSD: number;
  form: string;
  status: string;
  approvedNote: string;
  date: string;
  type: "Purchase" | "Bonus";
  paymentGateway: string;
  depositedFrom: string;
  depositedTo: string;
  stageName: string;
  tokenReceiverMail: string;
  amountTWZ: number;
  bonusToken: number;
  totalToken: number;
}

export default function Page() {
const transaction: Transaction = 
    {
        id: 8,
        amountTWZ: 15000,
        amountUSD: 200.25,
        form: "3D2T...9Z8Y",
        status: "Pending",
        approvedNote: "",
        date: "2022-09-15 09:30 AM",
        type: "Bonus",
        paymentGateway: "Stripe",
        depositedFrom: "john@example.com",
        depositedTo: "mike@example.com",
        stageName: "Phase 2",
        tokenReceiverMail: "mike@example.com",
        bonusToken: 1000,
        totalToken: 6000,
    };


  return (
    <div style={{ overflowX: "hidden" }}>
      <Nav></Nav>
      <NavbarNav></NavbarNav>
      <div className="bg-gray-100 p-8">
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-500">
                Transaction Details
              </h2>
              <a href="/transactions" className="text-blue-500 hover:underline">
                Back
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-bold">Tranx Date</p>
                <p className="text-blue-500">{transaction.date}</p>
              </div>
              <div>
                <p className="text-gray-600 font-bold">Tranx Status</p>
                <p className="text-green-500 font-bold">{transaction.status}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 font-bold">Tranx Approved Note</p>
              <p className="text-sm text-gray-500">
                {transaction.approvedNote}
              </p>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-bold mb-2 text-blue-500">
                TRANSACTION INFO
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 font-bold">Transaction Type</p>
                  <p className="text-blue-500">{transaction.type}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-bold ">Payment Gateway</p>
                  <p className="text-blue-500">{transaction.paymentGateway}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-gray-600 font-bold">Deposit From</p>
                  <p className="text-blue-500">
                    {transaction.depositedFrom}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 font-bold">Receiver</p>
                  <p className="text-blue-500">
                    {transaction.depositedTo}
                  </p>
                </div>
              </div>

              
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-bold mb-2 text-blue-500">
                TOKEN DETAILS
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 font-bold">Stage Name</p>
                  <p className="text-blue-500">{transaction.stageName}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-bold">Contribution</p>
                  <p className="text-blue-500">
                    {transaction.amountUSD}{" "} $
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-gray-600 font-bold">Tokens Added To</p>
                <p className="text-blue-500">{transaction.tokenReceiverMail}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-gray-600 font-bold">Token (T)</p>
                  <p className="text-blue-500">
                    {transaction.amountTWZ}{" "}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 font-bold">Bonus Tokens (B)</p>
                  <p className="text-blue-500">
                    {transaction.bonusToken}{" "}
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-gray-600 font-bold">Total Tokens</p>
                <p className="text-blue-500">{transaction.totalToken}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
