import Link from "next/link";
import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
interface Transaction {
  id: number;
  amountTWZ: number;
  amountUSD: number;
  form: string;
  status: string;
  date: string;
  type: "Purchase" | "Bonus";
}

export default function Page() {
  const transactions: Transaction[] = [];
  for (let i = 0; i < 8; i++) {
    transactions.push({
      id: i,
      amountTWZ: 18750,
      amountUSD: 245.52,
      form: "1F1T...4XQX",
      status: "Completed",
      date: "2018-08-24 10:20 PM",
      type: "Purchase",
    });
  }

  return (
    <div
      className="flex flex-col justify-center items-center gap-8 bg-gray-300 pb-16"
      style={{ overflowX: "hidden" }}
    >
      <div>
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="w-full p-8">
        <div className="container mx-auto h-full bg-gray-100 w-full p-8  rounded-xl flex flex-col gap-8 justify-between ">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-500">
              User Transactions
            </h1>

            <table className="w-full text-sm text-left text-gray-500 rounded-xl ">
              <thead className="text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Tranx No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tokens
                  </th>

                  <th scope="col" className="px-6 py-4">
                    USD Amount
                  </th>
                  <th scope="col" className="px-6 py-4">
                    From
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Info
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => {
                  if (index < 8) {
                    return (
                        <tr key={index} className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {transaction.id}
                          </th>
                          <td className="px-6 py-4">{transaction.amountTWZ}</td>
                          <td className="px-6 py-4">
                            {transaction.amountUSD} USD
                          </td>
                          <td className="px-6 py-4">{transaction.form}</td>
                          <td className="px-6 py-4">{transaction.type}</td>
                          <td className="px-6 py-4">{transaction.status}</td>
                          <td className="px-6 py-4 text-blue-500"><Link href={`transactions/${index}`}>Details</Link></td>
                          
                        </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
              Prev
            </button>
            <span className="text-gray-500">1-5 of 8</span>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
