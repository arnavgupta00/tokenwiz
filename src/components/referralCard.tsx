import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function ReferralCard() {
  return (
    <div className="referral-info card">
      <div className="card-innr">
        <h6 className="card-title card-title-sm">Earn with Referral</h6>
        <p className=" pdb-0-5x">
          Invite your friends &amp; family and receive a{" "}
          <strong>
            <span className="text-primary">bonus - 15%</span> of the value of
            contribution.
          </strong>
        </p>
        <div className="copy-wrap mgb-0-5x">
          <span className="copy-feedback"></span>
          <em className="fas fa-link"></em>
          <input
            type="text"
            className="copy-address"
            value="https://demo.themenio.com/ico?ref=7d264f90653733592"
            disabled
          />
          <button
            className="copy-trigger copy-clipboard"
            data-clipboard-text="https://demo.themenio.com/ico?ref=7d264f90653733592"
          >
            <em className="ti ti-files"></em>
          </button>
        </div>
      </div>
    </div>
  );
}
