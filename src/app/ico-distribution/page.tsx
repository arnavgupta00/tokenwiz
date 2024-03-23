import BalanceCard from "@/components/BalanceCard";
import BannerCard from "@/components/bannerCard";
import Nav from "@/components/navbar";
import NavbarNav from "@/components/navbarNavigate";

export default function Page() {
  return (
    <div className=" bg-gray-300">
      <div style={{ overflowX: "hidden" }}>
        <Nav></Nav>
        <NavbarNav></NavbarNav>
      </div>
      <div className="flex flex-row items-center justify-center w-full p-8 gap-8 ">
        <div className="flex flex-col items-center justify-center w-9/12 bg-gray-200 rounded-xl p-8">
          <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              ICO Distribution, Rate & Sales Info
            </h2>
            <p className="mb-4 text-black">
              To become a part of TokenWiz project, you can find all details of
              ICO. You can contribute and buy TWZ tokens.
            </p>
            <p className="mb-4 text-black">
              You can get a quick response and chat with our team in Telegram:{" "}
              <a href="https://t.me/tokenwiz" className="text-blue-500">
                https://t.me/tokenwiz
              </a>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-500">
                  Pre-Sale ICO
                </h3>
                <p className="mb-2 text-black">
                  Start at Dec 02, 2018 - 11:00 AM
                </p>
                <p className="mb-2 text-black">
                  End at Jan 15, 2019 - 11:00 AM
                </p>
                <p className="mb-2 text-black">Min purchase: 0.35 ETH</p>
                <p className="mb-2 text-black">Token Distribute - 250,000</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  20% Bonus
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-500">
                  Main ICO Sale
                </h3>
                <p className="mb-2 text-black">
                  Start at Dec 02, 2018 - 11:00 AM
                </p>
                <p className="mb-2 text-black">
                  End at Jan 15, 2019 - 11:00 AM
                </p>
                <p className="mb-2 text-black">Min purchase: 0.35 ETH</p>
                <p className="mb-2 text-black">Token Distribute - 250,000</p>
              </div>
            </div>

            <p className="mb-4 text-black">
              * Time zone set in GMT (+6) Dhaka, Bangladesh
            </p>

            <h3 className="text-xl font-bold mb-4 text-blue-500">
              Invite your friends and family and receive free tokens
            </h3>
            <p className="mb-4 text-black">
              Each member have a unique TWZ referral link to share with friends
              and family and receive a bonus - 15% of the value of their
              contribution. If any one sign-up with this link, will be added to
              your referral program. The referral link may be used during a
              token sales running.
            </p>
            <div className="flex flex-row w-full gap-4">
              <p className="mb-4 text-black">Referral URL:</p>
              <a
                href="https://demo.themenio.com/tokenwiz/?ref=7d26490653733592"
                className="text-blue-500"
              >
                https://demo.themenio.com/tokenwiz/?ref=7d26490653733592
              </a>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
              SEE YOUR REFERRAL
            </button>
          </div>
        </div>
        <div className="bg-gray-200 h-full w-3/12 max-w-96 flex flex-col justify-center gap-12 items-center p-8 rounded-xl">
          <BalanceCard></BalanceCard>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
}
