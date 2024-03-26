import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import BalanceCard from "@/components/BalanceCard";
import TokenSales from "@/components/tokenSales";
import Footer from "@/components/footer";
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
          <div className="main-content w-full">
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <h4 className="card-title">
                    ICO Distribution, Rate &amp; Sales Info
                  </h4>
                </div>
                <div className="card-text">
                  <p>
                    To become a part of TokenWiz project, you can found all
                    details of ICO. <br className="d-none d-sm-block" /> You can
                    contribute and <a href="#">buy TWZ tokens</a>.
                  </p>
                  <p>
                    You can get a quick response and chat with our team in
                    Telegram: <a href="#">htts://t.me/tokenwiz</a>
                  </p>
                </div>
                <div className="gaps-3x"></div>
                <div className="card-head">
                  <h5 className="card-title card-title-md">ICO Schedule</h5>
                </div>
                <div className="schedule-item">
                  <div className="row">
                    <div className="col-xl-5 col-md-5 col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>Pre-Sale ICO</span>
                          <span className="badge badge-success ucap badge-xs">
                            Running
                          </span>
                        </h5>
                        <span>Start at Dec 02, 2018 - 11:00 AM</span>
                        <span>End at Jan 15, 2019 - 11:00 AM</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>0.00080 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Token Distribute - 250,000</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-3 align-self-center text-xl-right">
                      <div className="pdb-1x">
                        <span className="schedule-bonus">20% Bonus</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule-item">
                  <div className="row">
                    <div className="col-xl-5 col-md-5 col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>Main ICO Sale</span>
                          <span className="badge badge-disabled ucap badge-xs">
                            Upcomming
                          </span>
                        </h5>
                        <span>Start at Dec 02, 2018 - 11:00 AM</span>
                        <span>End at Jan 15, 2019 - 11:00 AM</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md col-lg-6">
                      <div className="pdb-1x">
                        <h5 className="schedule-title">
                          <span>0.00080 ETH</span>
                        </h5>
                        <span>Min purchase - 0.35 ETH</span>
                        <span>Token Distribute - 250,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="text-light mb-0">
                  * Time zone set in (GMT +6) Dhaka, Bangladesh
                </h6>
              </div>
            </div>
            <div className="content-area card">
              <div className="card-innr">
                <div className="card-head">
                  <h5 className="card-title card-title-md">
                    Invite your friends and family and receive free tokens
                  </h5>
                </div>
                <div className="card-text">
                  <p>
                    Each member have a unique TWZ referral link to share with
                    friends and family and receive a{" "}
                    <strong>
                      bonus - 15% of the value of their contribution
                    </strong>
                    . If any one sign-up with this link, will be added to your
                    referral program. The referral link may be used during a
                    token sales running.
                  </p>
                </div>
                <div className="referral-form">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 font-bold">Referral URL</h5>
                    <a href="#" className="link link-primary link-ucap">
                      See Your referral
                    </a>
                  </div>
                  <div className="copy-wrap mgb-1-5x mgt-1-5x">
                    <span className="copy-feedback"></span>
                    <em className="fas fa-link"></em>
                    <input
                      type="text"
                      className="copy-address"
                      value="https://demo.themenio.com/tokenwiz?ref=7d264f90653733592"
                      disabled
                    />
                    <button
                      className="copy-trigger copy-clipboard"
                      data-clipboard-text="https://demo.themenio.com/tokenwiz?ref=7d264f90653733592"
                    >
                      <em className="ti ti-files"></em>
                    </button>
                  </div>
                </div>
                <ul className="share-links">
                  <li>Share with : </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-google-plus-g"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                </ul>
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
