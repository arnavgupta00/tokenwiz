import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import BalanceCard from "@/components/BalanceCard";
import TransactionCard from "@/components/TransactionCard";
import ConversionToken from "@/components/conversionToken";
import NotificationsCard from "@/components/notificationsCard";
import RecentUsers from "@/components/recentUsers";
import { tokenPerUSD } from "@/components/tokenConversion";
import BannerCard from "@/components/bannerCard";
import Footer from "@/components/footer";
export default function Page() {
  const tokenBalance = 12000;

  return (
    <div
      className="flex flex-col justify-center items-center gap-0 bg-gray-300 pl-20 pr-20"
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center  bg-gray-300 pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>

      <div className="page-header page-header-kyc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7 text-center">
              <h2 className="page-title">KYC Verification</h2>
              <p className="large">
                To comply with regulation each participant will have to go
                through indentity verification (KYC/AML) to prevent fraud
                causes. Please, complete our fast and secure verification
                process to participate in our token sale.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="page-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9">
                <div className="kyc-status card mx-lg-4">
                  <div className="card-innr">
                    <div className="status status-empty">
                      <div className="status-icon">
                        <em className="ti ti-files"></em>
                      </div>
                      <span className="status-text text-dark">
                        You have not submitted your necessary documents to
                        verify your identity. In order to purchase our tokens,
                        please verify your identity.
                      </span>
                      <a href="/kyc/kyc-form" className="btn btn-primary">
                        Click here to complete your KYC
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-light text-center">
                  If you have any question, please contact our support team{" "}
                  <a href="#">info@tokenwiz.com</a>.
                </p>
                <div className="gaps-1x"></div>
                <div className="gaps-3x d-none d-sm-block"></div>
              </div>
            </div>
          </div>
        </div>

      <div className="w-full p-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
