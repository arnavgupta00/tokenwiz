import Link from "next/link";
import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { Transaction, getTransactions } from "@/serverActions/paymentActions";
import getUserData from "@/serverActions/actions";
import { Clipboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Buy Token's",
  description: "Token Wiz Buy Token's Page",
};

export default async function Page() {
  var transactions: Transaction[] = [];
  const data = await getUserData();
  transactions = await getTransactions(data.session?.user?.email || "");
  transactions.reverse();
  return (
    <div
      className="flex flex-col justify-center items-center gap-8 bg-gray-300 "
      style={{ overflowX: "hidden" }}
    >
      <div className="pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="w-full pl-28 pr-28">
        <div className="card content-area">
          <div className="card-innr">
            <div className="card-head">
              <h4 className="card-title">User Transactions</h4>
            </div>
            <table className="data-table dt-init user-tnx">
              <thead>
                <tr className="data-item data-head">
                  <th className="data-col dt-tnxno ">Tranx NO</th>
                  <th className="data-col dt-token">Tokens</th>
                  <th className="data-col dt-amount">Amount</th>
                  <th className="data-col dt-usd-amount">Session ID</th>
                  <th className="data-col dt-account">Type</th>
                  <th className="data-col dt-type">
                    <div className="dt-type-text">More Details</div>
                  </th>
                  <th className="data-col"></th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction: Transaction) => {
                  return (
                    <tr className="data-item">
                      <td className="data-col dt-tnxno">
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
                          >
                            <span className="d-none">{transaction.Status}</span>
                          </div>
                          <div className="fake-class">
                            <span className="lead tnx-id">
                              2024-{transaction.id}
                            </span>
                            <span className="sub sub-date text-xs">
                              <p className="text-xs">{transaction.createdAt?.toLocaleString()}</p>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="data-col dt-token">
                        <span className="lead token-amount">
                          {transaction.Tokens}
                        </span>
                        <span className="sub sub-symbol">TWZ</span>
                      </td>
                      <td className="data-col dt-amount">
                        <span className="lead amount-pay">
                          {transaction.amount}
                        </span>
                        <span className="sub sub-symbol">
                          {transaction.modeOfPayment}
                          
                        </span>
                      </td>

                      <td className="data-col dt-account">
                        <span className="lead user-info">
                          {transaction.sessionID.slice(0, 10) + "..."}
                        </span>
                      </td>
                      <td className="data-col dt-type">
                        <span className="dt-type-md badge badge-outline badge-success badge-md">
                          Purchase
                        </span>
                        <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                          P
                        </span>
                      </td>
                      <td className="data-col text-center ">
                        <a
                          href={"/transactions/" + transaction.sessionID}
                          className="btn btn-light-alt btn-xs btn-icon"
                        >
                          <em className="ti ti-eye"></em>
                        </a>
                      </td>
                    </tr>
                  );
                })}
                {/* <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-pending">
                        <span className="d-none">Pending</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <div className="relative d-inline-block d-md-none">
                      <a
                        href="#"
                        className="btn btn-light-alt btn-xs btn-icon toggle-tigger"
                      >
                        <em className="ti ti-more-alt"></em>
                      </a>
                      <div className="toggle-class dropdown-content dropdown-content-center-left pd-2x">
                        <ul className="data-action-list">
                          <li>
                            <a
                              href="#"
                              className="btn btn-auto btn-primary btn-xs"
                            >
                              <span>
                                Pay{" "}
                                <span className="d-none d-xl-inline-block">
                                  Now
                                </span>
                              </span>
                              <em className="ti ti-wallet"></em>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="btn btn-danger-alt btn-xs btn-icon"
                            >
                              <em className="ti ti-trash"></em>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="data-action-list d-none d-md-inline-flex">
                      <li>
                        <a href="#" className="btn btn-auto btn-primary btn-xs">
                          <span>
                            Pay{" "}
                            <span className="d-none d-xl-inline-block">
                              Now
                            </span>
                          </span>
                          <em className="ti ti-wallet"></em>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="btn btn-danger-alt btn-xs btn-icon"
                        >
                          <em className="ti ti-trash"></em>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-approved">
                        <span className="d-none">Approved</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-canceled">
                        <span className="d-none">Canceled</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-progress">
                        <span className="d-none">Progress</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-approved">
                        <span className="d-none">Approved</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">1,050</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">0.85</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">2.54</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">Bounty Bonus</span>
                    <span className="sub sub-date">Campaign Name</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-info badge-md">
                      Bonus
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-info badge-md">
                      B
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-progress">
                        <span className="d-none">Progress</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-canceled">
                        <span className="d-none">Canceled</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr>
                <tr className="data-item">
                  <td className="data-col dt-tnxno">
                    <div className="d-flex align-items-center">
                      <div className="data-state data-state-progress">
                        <span className="d-none">Progress</span>
                      </div>
                      <div className="fake-class">
                        <span className="lead tnx-id">TNX1002</span>
                        <span className="sub sub-date">2018-08-24 10:45PM</span>
                      </div>
                    </div>
                  </td>
                  <td className="data-col dt-token">
                    <span className="lead token-amount">18,750</span>
                    <span className="sub sub-symbol">TWZ</span>
                  </td>
                  <td className="data-col dt-amount">
                    <span className="lead amount-pay">50.00</span>
                    <span className="sub sub-symbol">
                      ETH{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 1250 TWZ"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-usd-amount">
                    <span className="lead amount-pay">245.52</span>
                    <span className="sub sub-symbol">
                      USD{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="1 ETH = 350.54 USD"
                      ></em>
                    </span>
                  </td>
                  <td className="data-col dt-account">
                    <span className="lead user-info">1F1T....4XQX</span>
                    <span className="sub sub-date">08 Jul, 18 10:20PM</span>
                  </td>
                  <td className="data-col dt-type">
                    <span className="dt-type-md badge badge-outline badge-success badge-md">
                      Purchase
                    </span>
                    <span className="dt-type-sm badge badge-sq badge-outline badge-success badge-md">
                      P
                    </span>
                  </td>
                  <td className="data-col text-right">
                    <a
                      href="/transactions/1"
                      className="btn btn-light-alt btn-xs btn-icon"
                    >
                      <em className="ti ti-eye"></em>
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full p-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
