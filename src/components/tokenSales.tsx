import imageLogo from "@/components/images/logo-light-sm.png"
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function TokenSales() {
    return <div className="token-sales card">
    <div className="card-innr">
        <div className="card-head">
            <h5 className="card-title card-title-sm">Pre-Sale Token Sales</h5>
        </div>
        <div className="token-rate-wrap row">
            <div className="token-rate col-md-6 col-lg-12">
                <span className="card-sub-title">TWZ Token Price</span>
                <h4 className="font-mid text-dark">1 ETH = <span>12500 TWZ</span></h4>
            </div>
            <div className="token-rate col-md-6 col-lg-12">
                <span className="card-sub-title">Exchange Rate</span>
                <span>1 ETH = 196.98 USD = 0.032 BTC</span>
            </div>
        </div>
        <div className="token-bonus-current">
            <div className="fake-class">
                <span className="card-sub-title">Current Bonus</span>
                <div className="h3 mb-0">20 %</div>
            </div>
            <div className="token-bonus-date">End at <br /> 10 Jan, 2019</div>
        </div>
    </div>
    <div className="sap"></div>
    <div className="card-innr">
        <div className="card-head">
            <h5 className="card-title card-title-sm">Token Sales Progress</h5>
        </div>
        <ul className="progress-info">
            <li><span>Raised</span> 2,758 TWZ</li>
            <li className="text-right"><span>TOTAL</span> 1,500,000 TWZ</li>
        </ul>
        <div className="progress-bar">
            <div className="progress-hcap" data-percent="83">
                <div>Hard cap <span>1,400,000</span></div>
            </div>
            <div className="progress-scap" data-percent="24">
                <div>Soft cap <span>40,000</span></div>
            </div>
            <div className="progress-percent" data-percent="28"></div>
        </div>
        
        <span className="card-sub-title mgb-0-5x">Sales END IN</span>
        <div className="countdown-clock" data-date="2019/02/05"></div>
    </div>
    
</div>
}