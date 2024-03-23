"use client";
import {useRouter} from "next/navigation";
export default function NavbarNav() {
  var isloggedin: boolean = true;

  const router = useRouter();

  return (
    <nav className="bg-gray-200 h-12 w-screen flex justify-between items-center shadow-md">
      <div className="flex flex-row justify-between items-center ml-8 w-2/5 ">
        <button className="text-blue-500  h-12 border-4 border-transparent hover:border-b-blue-800 text-sm hover:text-base" onClick={() => router.push("user-dashboard")}>Dashboard</button>
        <button className="text-blue-500  h-12 border-4 border-transparent hover:border-b-blue-800 text-sm hover:text-base" onClick={() => router.push('purchase')}>Buy Tokens</button>
        <button className="text-blue-500  h-12 border-4 border-transparent hover:border-b-blue-800 text-xs hover:text-base" onClick={() => router.push('ico-distribution')}>ICO Distribution</button>
        <button className="text-blue-500  h-12 border-4 border-transparent hover:border-b-blue-800 text-sm hover:text-base" onClick={() => router.push('transactions')}>Transactions</button>
        <button className="text-blue-500  h-12 border-4 border-transparent hover:border-b-blue-800 text-sm hover:text-base" onClick={() => router.push('profile')}>Profile</button>
        <button className="text-blue-500  h-12 border-4 border-transparent hover:border-b-blue-800 text-sm hover:text-base" onClick={() => router.push('pages')}>Pages</button>
      </div>
    </nav>
  );
}
