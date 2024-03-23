import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import BalanceCard from "@/components/BalanceCard";
import TransactionCard from "@/components/TransactionCard";
import ConversionToken from "@/components/conversionToken";
import { tokenPerUSD } from "@/components/tokenConversion";
import BannerCard from "@/components/bannerCard";
export default function Page() {
  const tokenBalance = 12000;

  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-gray-300 pb-16" style={{overflowX:"hidden"}}>
      <div>
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="flex flex-row justify-between items-center gap-16 w-full p-8 " >
        <BalanceCard></BalanceCard>
        <BannerCard></BannerCard>
      </div>
      <div className="flex flex-row justify-between items-center gap-16 w-full p-8">
        <TransactionCard></TransactionCard>
        <ConversionToken></ConversionToken>
      </div>
    </div>
  );
}
