import BalanceCard from "@/components/BalanceCard";
import AccountStatus from "@/components/accountStatusCard";
import Footer from "@/components/footer";
import IdVerification from "@/components/idVerificationCard";
import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import ProfileCard from "@/components/profileCard";
import ReferralCard from "@/components/referralCard";
import TokenSales from "@/components/tokenSales";
import TwoFactor from "@/components/twoFactorCard";
import getUserData,{User, getFullUserData} from "@/serverActions/actions";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Profile Page",
  description: "Token Wiz Profile Page Page",
};


export default async function Page() {
  

  const data = await getUserData();
  const userFullData = await getFullUserData(data.session?.user.email);


  return (
    <div
      className="flex flex-col justify-center items-center gap-0 bg-gray-300 "
      style={{ overflowX: "hidden" }}
    >
      <div className="flex flex-col justify-center items-center  bg-gray-300 pb-8">
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:pr-20 md:pl-20">
        <div className="w-12/12 md:w-8/12 flex flex-col justify-between items-center p-8">
          <ProfileCard userFullData={userFullData}  ></ProfileCard>
          {/* <TwoFactor></TwoFactor> */}
        </div>

        <div className="w-12/12 md:w-4/12 flex flex-col justify-between items-center p-8 m-0">
          <AccountStatus userFullData={userFullData}></AccountStatus>
          {/* <ReferralCard></ReferralCard> */}
          <IdVerification></IdVerification>
        </div>
        <div></div>
      </div>
      <div className="w-full p-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
