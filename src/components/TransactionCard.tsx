import imageLogo from "@/components/images/logo-light-sm.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

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
      amountUSD: 18750 / 15,
      date: "2018-08-24 10:20 PM",
      type: "Purchase",
    },
    {
      id: 2,
      amountTWZ: 8052,
      amountUSD: 8052 / 15,
      date: "2018-08-24 10:20 PM",
      type: "Bonus",
    },
  ];

  return (
    <div className="w-full p-0 m-0">
      <div className="token-transaction card card-full-height shadow-md	">
        <div className="card-innr">
          <div className="card-head has-aside">
            <h4 className="card-title">Transaction</h4>
            <div className="card-opt">
              <a href="/transactions" className="link ucap">
                View ALL <em className="fas fa-angle-right ml-2"></em>
              </a>
            </div>
          </div>
          <table className="table tnx-table">
            <thead>
              <tr>
                <th>TWZ Tokens</th>
                <th>Amount</th>
                <th className="d-none d-sm-table-cell tnx-date">Date</th>
                <th className="tnx-type">
                  <div className="tnx-type-text"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="data-state data-state-pending"></div>
                    <span className="lead">18,750</span>
                  </div>
                </td>
                <td>
                  <span>
                    <span className="lead">3.543</span>
                    <span className="sub">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="1 ETH = 590.54 USD"
                      ></em>
                    </span>
                  </span>
                </td>
                <td className="d-none d-sm-table-cell tnx-date">
                  <span className="sub sub-s2">2018-08-24 10:20 PM</span>
                </td>
                <td className="tnx-type">
                  <span className="tnx-type-md badge badge-outline badge-success badge-md">
                    Purchase
                  </span>
                  <span className="tnx-type-sm badge badge-sq badge-outline badge-success badge-md">
                    P
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="data-state data-state-progress"></div>
                    <span className="lead">8,052</span>
                  </div>
                </td>
                <td>
                  <span>
                    <span className="lead">0.165</span>
                    <span className="sub">
                      BTC{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="1 BTC = 5450.54 USD"
                      ></em>
                    </span>
                  </span>
                </td>
                <td className="d-none d-sm-table-cell tnx-date">
                  <span className="sub sub-s2">2018-08-24 10:20 PM</span>
                </td>
                <td className="tnx-type">
                  <span className="tnx-type-md badge badge-outline badge-warning badge-md">
                    Bonus
                  </span>
                  <span className="tnx-type-sm badge badge-sq badge-outline badge-warning badge-md">
                    B
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="data-state data-state-approved"></div>
                    <span className="lead">19,000</span>
                  </div>
                </td>
                <td>
                  <span>
                    <span className="lead">3.141</span>
                    <span className="sub">
                      LTC{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="1 LTC = 180.54 USD"
                      ></em>
                    </span>
                  </span>
                </td>
                <td className="d-none d-sm-table-cell tnx-date">
                  <span className="sub sub-s2">2018-08-24 10:20 PM</span>
                </td>
                <td className="tnx-type">
                  <span className="tnx-type-md badge badge-outline badge-warning badge-md">
                    Bonus
                  </span>
                  <span className="tnx-type-sm badge badge-sq badge-outline badge-warning badge-md">
                    B
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
