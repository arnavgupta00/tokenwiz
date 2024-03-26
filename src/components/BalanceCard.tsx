import { tokenPerUSD } from "@/components/tokenConversion";
import imageLogo from "@/components/images/logo-light-sm.png"
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function BalanceCard() {

    const tokenBalance = 12000;

    return <div className="w-full p-0 m-0 ">
    <div className="token-statistics card card-token height-auto shadow-md w-full	">
        <div className="card-innr">
            <div className="token-balance token-balance-with-icon">
                <div className="token-balance-icon">
                    <img src={imageLogo.src} alt="logo" />
                </div>
                <div className="token-balance-text">
                    <h6 className="card-sub-title">Tokens Balance</h6>
                    <span className="lead">120,000,000 <span>TWZ</span></span>
                </div>
            </div>
            <div className="token-balance token-balance-s2">
                <h6 className="card-sub-title">Your Contribution</h6>
                <ul className="token-balance-list">
                    <li className="token-balance-sub">
                        <span className="lead">2.646</span>
                        <span className="sub">ETH</span>
                    </li>
                    <li className="token-balance-sub">
                        <span className="lead">1.265</span>
                        <span className="sub">BTC</span>
                    </li>
                    <li className="token-balance-sub">
                        <span className="lead">6.506</span>
                        <span className="sub">LTC</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
}