"use client";

// export default function Success({ params }: { params: { sessionID: string } }) {
//   const session_id = params.sessionID;

//   const copyToClipboard = () => {
//     const textToCopy = `${session_id}`;
//     navigator.clipboard.writeText(textToCopy);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div className="w-full h-full flex flex-col justify-center items-center bg-gray-50 p-8 gap-8">
//       <h1 className="text-black font-light text-3xl">Payment Successful✅</h1>
//       <p className="text-black font-light text-3xl">
//         Thank you for your purchase
//       </p>
//       <p className="text-black font-light text-xl">Session ID: {session_id}</p>
//       <p className="text-black font-light text-3xl">
//         In case of any problem share your Email and Session ID{" "}
//       </p>
//       <button className="bg-blue-500 p-4 rounded-3xl" onClick={copyToClipboard}>
//         Copy Session ID
//       </button>
//     </div>
//   );
// }

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
import { Clipboard } from "lucide-react";

export default function Success({ params }: { params: { sessionID: string } }) {
  const session_id = params.sessionID;

  const copyToClipboard = () => {
    const textToCopy = `${session_id}`;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard!");
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-0 bg-gray-300 md:pl-20 md:pr-20 pl-4 pr-4"
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center  bg-gray-300 pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>

      <div className="page-content w-full">
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
                      Payment Successful
                    </span>
                    <span className="status-text large text-dark">
                      Thank you for your purchase
                    </span>
                    <p className="px-md-5">Session ID : {session_id}</p>
                    <p className="px-md-5 flex flex-row justify-center">
                      <Clipboard className="ml-2" onClick={copyToClipboard} />
                    </p>
                    <a href="/" className="btn btn-primary">
                      Back to Dashboard
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-light text-center mgmt-1x">
                In case of any problem share your Email and Session ID . If you
                have any question, please contact our support team{" "}
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
