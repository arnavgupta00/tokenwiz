interface Transaction {
  id: number;
  amountTWZ: number;
  amountUSD: number;
  date: string;
  type: "Purchase" | "Bonus";
}

export default function TransactionCard() {
  const transactions: Transaction[] = [
    {
      id: 1,
      amountTWZ: 18750,
      amountUSD: 18750/15,
      date: "2018-08-24 10:20 PM",
      type: "Purchase",
    },
    {
      id: 2,
      amountTWZ: 8052,
      amountUSD: 8052/15,
      date: "2018-08-24 10:20 PM",
      type: "Bonus",
    },
    
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-72 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-blue-800">Transaction</h3>
        <a href="#" className="text-blue-500 hover:underline">
          VIEW ALL{" "}
        </a>
      </div>

      <table className="w-full text-sm text-left text-gray-500 " style={{ overflowY: "scroll" }}>
        <thead className="text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4">
              TWZ TOKENS
            </th>
            <th scope="col" className="px-6 py-4">
              AMOUNT
            </th>
            <th scope="col" className="px-6 py-4">
              DATE
            </th>
            <th scope="col" className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="max-h-8" >
          {transactions.map((transaction,index) => {
            return (
              <tr key={index} className="bg-white border-b max-h-8">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠</span>
                    <span>{transaction.amountTWZ}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {transaction.amountUSD} USD <span className="text-gray-400">ⓘ</span>
                </td>
                <td className="px-6 py-4">{transaction.date}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    {transaction.type}
                  </button>
                </td>
              </tr>
            );
          })}

        
        </tbody>
      </table>
    </div>
  );
}
