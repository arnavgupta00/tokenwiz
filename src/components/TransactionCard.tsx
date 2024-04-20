import imageLogo from "@/components/images/logo-light-sm.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";
import {
  Transaction,
  getTop3Transactions,
} from "@/serverActions/paymentActions";
import { get } from "http";

export default async function TransactionCard(props: { email: string }) {
  const transactions = await getTop3Transactions(props.email);

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
              {transactions.map((transaction: Transaction) => {
                return (
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className={
                            "data-state " +
                            (transaction.Status === "Initiated" ||
                            transaction.Status === "Created" ||
                            transaction.Status === "Pending"
                              ? "data-state-pending"
                              : transaction.Status === "Progress"
                              ? "data-state-progress"
                              : transaction.Status === "Failed" ||
                                transaction.Status === "Cancelled"
                              ? "data-state-canceled"
                              : transaction.Status === "Success"
                              ? "data-state-approved"
                              : "")
                          }
                        ></div>
                        <span className="lead">{transaction.Tokens}</span>
                      </div>
                    </td>
                    <td>
                      <span>
                        <span className="lead">{transaction.amount}</span>
                        <span className="sub">
                          {transaction.modeOfPayment}
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
                      <span className="sub sub-s2">
                        {transaction.createdAt?.toLocaleString()}
                      </span>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
