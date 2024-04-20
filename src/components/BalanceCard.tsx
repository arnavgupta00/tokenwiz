"use client";
import { tokenPerMode, tokenPerUSD } from "@/components/tokenConversion";
import imageLogo from "@/components/images/logo-light-sm.png"
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";
import getUserData, { User, getFullUserData } from "@/serverActions/actions";
import {useState , useEffect} from "react";

export default function BalanceCard() {

    const [userData, setUserData] = useState<any>(null);


    useEffect(() => {
        async function fetchData() {
            const data = await getUserData();
            const userDataFetch = await getFullUserData(data.session.user.email);
            setUserData(userDataFetch);
        }
        fetchData();
    
    })

  


    return <div className="w-full p-0 m-0 ">
    <div className="token-statistics card card-token height-auto shadow-md w-full	">
        <div className="card-innr">
            <div className="token-balance token-balance-with-icon">
                <div className="token-balance-icon">
                    <img src={imageLogo.src} alt="logo" />
                </div>
                <div className="token-balance-text">
                    <h6 className="card-sub-title">Tokens Balance</h6>
                    <span className="lead">{userData?.totalToken} <span>TWZ</span></span>
                </div>
            </div>
            <div className="token-balance token-balance-s2">
                <h6 className="card-sub-title">Your Contribution</h6>
                <ul className="token-balance-list gap-0">
                    <li className="token-balance-sub ">
                        <span className="lead">{((1/tokenPerMode.ETH)* (userData?.totalToken || 1)).toFixed(3)}</span>
                        <span className="sub w-fit">ETH</span>
                    </li>
                    <li className="token-balance-sub">
                        <span className="lead">{((1/tokenPerMode.BTC)* (userData?.totalToken || 1)).toFixed(3)}</span>
                        <span className="sub">BTC</span>
                    </li>
                    
                    <li className="token-balance-sub">
                        <span className="lead">{((1/tokenPerMode.USD)* (userData?.totalToken || 1)).toFixed(3)}</span>
                        <span className="sub">USD</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
}