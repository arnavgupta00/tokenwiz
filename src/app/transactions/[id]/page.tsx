import Link from "next/link";
import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { Transaction, getTransaction } from "@/serverActions/paymentActions";

export default async function Page({ params }: { params: { id: string } }) {
  const transaction: Transaction | null = await getTransaction(params.id);
  if (transaction) {
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
              <div className="card-head d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Transaction Details</h4>
                <a
                  href="/transactions"
                  className="btn btn-sm btn-auto btn-primary d-sm-block d-none"
                >
                  <em className="fas fa-arrow-left mr-3"></em>Back
                </a>
                <a
                  href="/transactions"
                  className="btn btn-icon btn-sm btn-primary d-sm-none"
                >
                  <em className="fas fa-arrow-left"></em>
                </a>
              </div>
              <div className="gaps-1-5x"></div>
              <div className="data-details d-md-flex">
                <div className="fake-class">
                  <span className="data-details-title">Tranx Date</span>
                  <span className="data-details-info">
                    {transaction.createdAt
                      ? transaction.createdAt.toLocaleString()
                      : ""}
                  </span>
                </div>
                <div className="fake-class">
                  <span className="data-details-title">Tranx Status</span>
                  <span
                    className={
                      "badge ucap " +
                      (transaction.Status === "Initiated" ||
                      transaction.Status === "Created" ||
                      transaction.Status === "Pending"
                        ? "bg-yellow-500"
                        : transaction.Status === "Progress"
                        ? "bg-blue-500"
                        : transaction.Status === "Failed" ||
                          transaction.Status === "Cancelled"
                        ? "bg-red-500"
                        : transaction.Status === "Success"
                        ? "bg-green-500"
                        : "")
                    }
                  >
                    {transaction.Status}
                  </span>
                </div>
                <div className="fake-class">
                  <span className="data-details-title">
                    Tranx Approved Note
                  </span>
                  <span className="data-details-info">
                    By <strong>Admin</strong> at 24 Jul, 2018 10:12PM
                  </span>
                </div>
              </div>
              <div className="gaps-3x"></div>
              <h6 className="card-sub-title">Transaction Info</h6>
              <ul className="data-details-list">
                <li>
                  <div className="data-details-head">Transaction Type</div>
                  <div className="data-details-des">
                    <strong>Purchase</strong>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Payment Getway</div>
                  <div className="data-details-des">
                    <strong>
                      {transaction.modeOfPayment}{" "}
                      <small>
                        {transaction.modeOfPayment == "USD"
                          ? "Stripe"
                          : "Coinbase"}
                      </small>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Session ID</div>
                  <div className="data-details-des">
                    <strong>{transaction.sessionID}</strong>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Transaction ID</div>
                  <div className="data-details-des">
                    <span>{new Date().getFullYear()}-{transaction.id}</span> <span></span>
                  </div>
                </li>

                <li>
                  <div className="data-details-head">Details</div>
                  <div className="data-details-des">Tokens Purchase</div>
                </li>
              </ul>
              <div className="gaps-3x"></div>
              <h6 className="card-sub-title">Token Details</h6>
              <ul className="data-details-list">
                <li>
                  <div className="data-details-head">Stage Name</div>
                  <div className="data-details-des">
                    <strong>ICO Phase 3</strong>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Contribution</div>
                  <div className="data-details-des">
                    <span>
                      <strong>
                        {transaction.amount} {transaction.modeOfPayment}
                      </strong>{" "}
                      <em
                        className="fas fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="1 ETH = 100 TWZ"
                      ></em>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Tokens Added To</div>
                  <div className="data-details-des">
                    <strong>{transaction.userEmail}</strong>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Token (T)</div>
                  <div className="data-details-des">
                    <span>{transaction.Tokens}</span>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Bonus Tokens (B)</div>
                  <div className="data-details-des">
                    <span>0</span>
                  </div>
                </li>
                <li>
                  <div className="data-details-head">Total Tokens</div>
                  <div className="data-details-des">
                    <span>
                      <strong>{transaction.Tokens}</strong>
                    </span>
                    <span>(T+B)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full p-0">
          <Footer></Footer>
        </div>
      </div>
    );
  } else {
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
            <div className="card-innr">Transaction Not Found.</div>
          </div>
        </div>
        <div className="w-full p-0">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
