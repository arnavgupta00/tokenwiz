
import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function AccountStatus(props: { userFullData: any }) {
    return <div className="account-info card w-full">
    <div className="card-innr">
        <h6 className="card-title card-title-sm">Your Account Status</h6>
        <ul className="btn-grp">
            <li><a href="#" className="btn btn-auto btn-xs btn-success">Email Verified</a></li>
            <li><a href="#" className="btn btn-auto btn-xs btn-warning">KYC Pending</a></li>
        </ul>
        <div className="gaps-2-5x"></div>
        
    </div>
</div>
}