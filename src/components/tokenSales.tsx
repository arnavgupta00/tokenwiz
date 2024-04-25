import imageLogo from "@/components/images/logo-light-sm.png"
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";
import { tokenPerMode } from "./tokenConversion";

export default function TokenSales() {
    return <div className="token-sales card">
    <div className="card-innr">
        <div className="card-head">
            <h5 className="card-title card-title-sm">Pre-Sale Token Sales</h5>
        </div>
        <div className="token-rate-wrap row">
            <div className="token-rate col-md-6 col-lg-12">
                <span className="card-sub-title">TWZ Token Price</span>
                <h4 className="font-mid text-dark">1 ETH = <span>{tokenPerMode.ETH} TWZ</span></h4>
            </div>
            <div className="token-rate col-md-6 col-lg-12">
                <span className="card-sub-title">Exchange Rate</span>
                <span>1 ETH = {tokenPerMode.ETH/tokenPerMode.USD} USD = {(tokenPerMode.ETH/tokenPerMode.BTC).toFixed(3)} BTC</span>
            </div>
        </div>
        <div className="token-bonus-current">
            <div className="fake-class">
                <span className="card-sub-title">Current Bonus</span>
                <div className="h3 mb-0">0 %</div>
            </div>
            <div className="token-bonus-date">End at <br /> 10 Nov, 2024</div>
        </div>
    </div>
    <div className="sap"></div>
    
    
</div>
}