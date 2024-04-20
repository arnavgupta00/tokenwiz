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
import { Metadata } from "next";
import getUserData from "@/serverActions/actions";



export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Token Wiz User Dashboard Page",
};

export default async function Page() {
  const tokenBalance = 12000;

  const data =await getUserData();

  

  return (
    <div
      className="flex flex-col justify-center items-center gap-0 bg-gray-300 md:pl-20 md:pr-20 pl-4 pr-4 "
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center  bg-gray-300 pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="md:flex md:flex-row justify-between items-center md:gap-8 w-full md:p-8  ">
        <div className="md:w-1/3 w-full">
          <BalanceCard></BalanceCard>
        </div>
        <div className="md:w-2/3 w-full">
        <TransactionCard email={data.session.user.email} ></TransactionCard>

        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full md:p-8">
      <ConversionToken></ConversionToken>
        {/* <NotificationsCard></NotificationsCard> */}
        <RecentUsers></RecentUsers>
      </div>
      <div className="flex flex-row justify-between items-center gap-8 w-full md:p-8">
      <BannerCard></BannerCard>

      </div>
      <div className="w-full p-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
