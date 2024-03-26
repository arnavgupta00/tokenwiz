
import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function TwoFactor() {
    return <div className="content-area card">
    <div className="card-innr">
        <div className="card-head">
            <h4 className="card-title">Two-Factor Verification</h4>
        </div>
        <p>Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.</p>
        <div className="d-sm-flex justify-content-between align-items-center pdt-1-5x">
            <span className="text-light ucap d-inline-flex align-items-center">
                <span className="mb-0"><small>Current Status:</small></span> 
                <span className="badge badge-disabled ml-2">Disabled</span>
            </span>
            <div className="gaps-2x d-sm-none"></div>
            <button className="order-sm-first btn btn-primary">Enable 2FA</button>
        </div>
    </div>
</div>
}