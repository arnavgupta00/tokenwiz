import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function IdVerification() {
  return (
    <div className="kyc-info card">
      <div className="card-innr">
        <h6 className="card-title card-title-sm">
          Identity Verification - KYC
        </h6>
        <p>
          To comply with regulation, participant will have to go through
          indentity verification.
        </p>
        <p className="lead text-light pdb-0-5x">
          You have not submitted your KYC application to verify your indentity.
        </p>
        <a href="#" className="btn btn-primary btn-block">
          Click to Proceed
        </a>
        <h6 className="kyc-alert text-danger">
          * KYC verification required for purchase token
        </h6>
      </div>
    </div>
  );
}
