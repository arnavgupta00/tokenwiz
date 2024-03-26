
import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function AccountStatus() {
    return <div className="account-info card w-full">
    <div className="card-innr">
        <h6 className="card-title card-title-sm">Your Account Status</h6>
        <ul className="btn-grp">
            <li><a href="#" className="btn btn-auto btn-xs btn-success">Email Verified</a></li>
            <li><a href="#" className="btn btn-auto btn-xs btn-warning">KYC Pending</a></li>
        </ul>
        <div className="gaps-2-5x"></div>
        <h6 className="card-title card-title-sm">Receiving Wallet</h6>
        <div className="d-flex justify-content-between">
            <span><span>0x39deb3.....e2ac64rd</span> <em className="fas fa-info-circle text-exlight" data-toggle="tooltip" data-placement="bottom" title="1 ETH = 100 TWZ"></em></span>
            <a href="#" data-toggle="modal" data-target="#edit-wallet" className="link link-ucap">Edit</a>
        </div>
    </div>
</div>
}