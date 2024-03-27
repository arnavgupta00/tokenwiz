import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import BalanceCard from "@/components/BalanceCard";
import TransactionCard from "@/components/TransactionCard";
import ConversionToken from "@/components/conversionToken";
import NotificationsCard from "@/components/notificationsCard";
import RecentUsers from "@/components/recentUsers";
import { tokenPerUSD } from "@/components/tokenConversion";
import BannerCard from "@/components/bannerCard";
import TokenSales from "@/components/tokenSales";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transaction Details",
  description: "Token Wiz Transaction Details Page",
};


export default function Page() {
  const tokenBalance = 12000;

  return (
    <div
      className="flex flex-col justify-center items-center gap-0 bg-gray-300 "
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center  bg-gray-300 pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="flex flex-row justify-between items-start pr-20 pl-20">
        <div className="w-8/12 flex flex-col justify-between items-center p-8">
          <div className="main-content w-full ">
            <div className="d-lg-none">
              <a
                href="#"
                data-toggle="modal"
                data-target="#add-wallet"
                className="btn btn-danger btn-xl btn-between w-100 mgb-1-5x"
              >
                Add your wallet address before buy{" "}
                <em className="ti ti-arrow-right"></em>
              </a>
              <div className="gaps-1x mgb-0-5x d-lg-none d-none d-sm-block"></div>
            </div>
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <span className="card-sub-title text-primary font-mid">
                    Step 1
                  </span>
                  <h4 className="card-title">
                    Choose currency and calculate TWZ tokens price
                  </h4>
                </div>
                <div className="card-text">
                  <p>
                    You can buy our TWZ tokens using ETH, BTC, LTC or USD to
                    become part of Our project.
                  </p>
                </div>

                <div className="token-currency-choose">
                  <div className="row guttar-15px">
                    <div className="col-6">
                      <div className="pay-option">
                        <input
                          className="pay-option-check"
                          type="radio"
                          id="payeth"
                          name="payOption"
                          checked
                        />
                        <label className="pay-option-label" htmlFor="payeth">
                          <span className="pay-title">
                            <em className="pay-icon cf cf-eth"></em>
                            <span className="pay-cur">ETH</span>
                          </span>
                          <span className="pay-amount">0.000800</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pay-option">
                        <input
                          className="pay-option-check"
                          type="radio"
                          id="paylte"
                          name="payOption"
                        />
                        <label className="pay-option-label" htmlFor="paylte">
                          <span className="pay-title">
                            <em className="pay-icon cf cf-ltc"></em>
                            <span className="pay-cur">LTC</span>
                          </span>
                          <span className="pay-amount">0.001201</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pay-option">
                        <input
                          className="pay-option-check"
                          type="radio"
                          id="paybtc"
                          name="payOption"
                        />
                        <label className="pay-option-label" htmlFor="paybtc">
                          <span className="pay-title">
                            <em className="pay-icon cf cf-btc"></em>
                            <span className="pay-cur">BTC</span>
                          </span>
                          <span className="pay-amount">0.000015</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pay-option">
                        <input
                          className="pay-option-check"
                          type="radio"
                          id="payusd"
                          name="payOption"
                        />
                        <label className="pay-option-label" htmlFor="payusd">
                          <span className="pay-title">
                            <em className="pay-icon fas fa-dollar-sign"></em>
                            <span className="pay-cur">USD</span>
                          </span>
                          <span className="pay-amount">0.25</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-head">
                  <span className="card-sub-title text-primary font-mid">
                    Step 2
                  </span>
                  <h4 className="card-title">Amount of contribute</h4>
                </div>
                <div className="card-text">
                  <p>
                    Enter your amount, you would like to contribute and
                    calculate the amount of token you will received. The
                    calculator helps to convert required currency to tokens.
                  </p>
                </div>
                <div className="token-contribute">
                  <div className="token-calc">
                    <div className="token-pay-amount">
                      <input
                        id="token-base-amount"
                        className="input-bordered input-with-hint"
                        type="text"
                        value="1"
                      />

                      <div className="token-pay-currency">
                        <span className="input-hint input-hint-sap">ETH</span>
                      </div>
                    </div>
                    <div className="token-received">
                      <div className="token-eq-sign">=</div>
                      <div className="token-received-amount">
                        <h5 className="token-amount">123,500.84</h5>
                        <div className="token-symbol">TWZ</div>
                      </div>
                    </div>
                  </div>
                  <div className="token-calc-note note note-plane">
                    <em className="fas fa-times-circle text-danger"></em>
                    <span className="note-text text-light">
                      0.35 ETH minimum contribution require.
                    </span>
                  </div>
                </div>

                <div className="token-bonus-ui">
                  <div className="bonus-bar">
                    <div className="bonus-base">
                      <span className="bonus-base-title">Bonus</span>
                      <span className="bonus-base-amount">On Sale</span>
                      <span className="bonus-base-percent">20%</span>
                    </div>
                    <div className="bonus-extra">
                      <div
                        className="bonus-extra-item active"
                        data-percent="10"
                      >
                        <span className="bonus-extra-amount">0.5 ETH</span>
                        <span className="bonus-extra-percent">10%</span>
                      </div>
                      <div
                        className="bonus-extra-item active"
                        data-percent="20"
                      >
                        <span className="bonus-extra-amount">1 ETH</span>
                        <span className="bonus-extra-percent">30%</span>
                      </div>
                      <div
                        className="bonus-extra-item active"
                        data-percent="20"
                      >
                        <span className="bonus-extra-amount">5 ETH</span>
                        <span className="bonus-extra-percent">50%</span>
                      </div>
                      <div className="bonus-extra-item" data-percent="20">
                        <span className="bonus-extra-amount">10 ETH</span>
                        <span className="bonus-extra-percent">70%</span>
                      </div>
                      <div className="bonus-extra-item" data-percent="30">
                        <span className="bonus-extra-amount">20 ETH</span>
                        <span className="bonus-extra-percent">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="token-overview-wrap">
                  <div className="token-overview">
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="token-bonus token-bonus-sale">
                          <span className="token-overview-title">
                            + 20% Sale Bonus
                          </span>
                          <span className="token-overview-value bonus-on-sale">
                            15,000.00
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="token-bonus token-bonus-amount">
                          <span className="token-overview-title">
                            + 30% Amount Bonus
                          </span>
                          <span className="token-overview-value bonus-on-amount">
                            5,000.00
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="token-total">
                          <span className="token-overview-title font-bold">
                            Total TWZ
                          </span>
                          <span className="token-overview-value token-total-amount text-primary">
                            1,823,500.84
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="note note-plane note-danger note-sm pdt-1x pl-0">
                    <p>
                      Your Contribution will be calculated based on exchange
                      rate at the moment your transaction is confirm.
                    </p>
                  </div>
                </div>
                <div className="card-head">
                  <span className="card-sub-title text-primary font-mid">
                    Step 3
                  </span>
                  <h4 className="card-title">Make a payment</h4>
                </div>
                <div className="card-text">
                  <p>
                    To get tokens please make a payment. You can send payment
                    directly to our address or you may pay online. Once you
                    paid, you will receive an email about the successfull
                    deposit.{" "}
                  </p>
                </div>
                <div className="pay-buttons">
                  <div className="pay-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#get-pay-address"
                      className="btn btn-light-alt btn-between w-100"
                    >
                      Get Address for Payment <em className="ti ti-wallet"></em>
                    </a>
                  </div>
                  <div className="pay-button-sap">or</div>
                  <div className="pay-button">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#pay-online"
                      className="btn btn-primary btn-between w-100"
                    >
                      Make Online Payment{" "}
                      <em className="ti ti-arrow-right"></em>
                    </a>
                  </div>
                </div>
                <div className="pay-notes">
                  <div className="note note-plane note-light note-md font-italic">
                    <em className="fas fa-info-circle"></em>
                    <p>
                      Tokens will appear in your account after payment
                      successfully made and approved by our team.{" "}
                      <br className="d-none d-lg-block" /> Please note that, TWZ
                      tokens will distributed end of ICO Token Sales.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12 flex flex-col justify-between items-center p-8 m-0">
          <BalanceCard></BalanceCard>
          <TokenSales></TokenSales>
        </div>
        <div></div>
      </div>
      <div className="w-full p-0">
        <Footer></Footer>
      </div>
      
    </div>
  );
}
