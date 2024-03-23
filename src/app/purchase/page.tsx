import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";
import BalanceCard from "@/components/BalanceCard";
import BannerCard from "@/components/bannerCard";
export default function Page() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-8 bg-gray-300 pb-16"
      style={{ overflowX: "hidden" }}
    >
      <div>
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="flex flex-row justify-center items-center gap-8 bg-gray-300 h-10/12 w-full p-8 rounded-xl">
        <div className="bg-gray-200 h-full w-9/12  flex flex-col justify-center gap-12 items-center p-8 rounded-xl rounded-xl">
            <h1 className="text-4xl text-blue-500 font-bold  text-center">Strip Payment gateway to be added !!</h1>
        </div>
        <div className="bg-gray-200 h-full w-3/12 max-w-96 flex flex-col justify-center gap-12 items-center p-8 rounded-xl">
          <BalanceCard></BalanceCard>
          <BannerCard></BannerCard>

        </div>
      </div>
    </div>
  );
}
