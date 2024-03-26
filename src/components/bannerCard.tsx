import { tokenPerUSD } from "@/components/tokenConversion";
import imageLogo from "@/components/images/logo-sm.png"
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function BannerCard() {
  return (
    <div className="col-lg-8">
      <div className="token-information card card-full-height shadow-md	">
        <div className="row no-gutters height-100">
          <div className="col-md-6 text-center">
            <div className="token-info">
              <img
                className="token-info-icon"
                src={imageLogo.src}
                alt="logo-sm"
              />
              <div className="gaps-2x"></div>
              <h1 className="token-info-head text-light">1 ETH = 1000 TWZ</h1>
              <h5 className="token-info-sub">1 ETH = 254.05 USD</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="token-info bdr-tl">
              <div>
                <ul className="token-info-list">
                  <li>
                    <span>Token Name:</span>TokenWiz
                  </li>
                  <li>
                    <span>Ticket Symbol:</span>TWZ
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  <em className="fas fa-download mr-3"></em>Download Whitepaper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
