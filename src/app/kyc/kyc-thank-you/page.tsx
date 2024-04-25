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
      className="flex flex-col justify-center items-center gap-0 bg-gray-300 md:pl-20 md:pr-20 pl-4 pr-4"
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center  bg-gray-300 pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="kyc-status card mx-lg-4">
                <div className="card-innr">
                  <div className="status status-thank px-md-5">
                    <div className="status-icon">
                      <em className="ti ti-check"></em>
                    </div>
                    <span className="status-text large text-dark">
                      You have completed the process of KYC
                    </span>
                    <p className="px-md-5">
                      We are still waiting for your identity verification. Once
                      our team verified your indentity, you will be notified by
                      email. You can also check your KYC compliance status from
                      your profile page.
                    </p>
                    <a href="/profile" className="btn btn-primary">
                      Back to Profile
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-light text-center mgmt-1x">
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
