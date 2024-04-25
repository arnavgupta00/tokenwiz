"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import ReactStickyNode from "react-stickynode";

import imageLogo from "@/components/images/logo-light2x.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignIn from "./signin";
import SignUp from "./signup";
import { signOut } from "next-auth/react";
import getUserData from "@/serverActions/actions";

export default function Nav() {
  const router = useRouter();
  const [showmenuSignUp, setShowMenuSignUp] = useState(false);
  const [showmenuSignIn, setShowMenuSignIn] = useState(false);
  const [data, setData] = useState({
    authenticated: false,
    user: "Guest",
    session: null,
  });

  var user = data.user;

  useEffect(() => {
    async function fetchData() {
      const data = await getUserData();
      setData(data);
      if (!data.authenticated) {
        setShowMenuSignIn(true);
      }
    }

    fetchData();
  }, []);

  return (
    <ReactStickyNode className="topbar-wrap w-screen p-0 m-0 relative sticky top-0 z-20	">
      <AnimatePresence>
        {showmenuSignIn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex flex-row items-center justify-center "
          >
            <SignIn showMenu={showmenuSignIn} setShowMenu={setShowMenuSignIn} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showmenuSignUp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex flex-row items-center justify-center "
          >
            <SignUp showMenu={showmenuSignUp} setShowMenu={setShowMenuSignUp} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="topbar is-sticky sticky top-0 ">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="topbar-nav d-lg-none">
              <li className="topbar-nav-item relative">
                <Dropdown>
                  <DropdownTrigger>
                    <a className="toggle-nav" href="#">
                      <div className="toggle-icon">
                        <span className="toggle-line"></span>
                        <span className="toggle-line"></span>
                        <span className="toggle-line"></span>
                        <span className="toggle-line"></span>
                      </div>
                    </a>
                  </DropdownTrigger>
                  <div className="border-none">
                    <DropdownMenu
                      aria-label="Static Actions"
                      className="w-fit h-fit p-2 bg-gray-50 rounded border-none text-blue-500 shadow"
                    >
                      <DropdownItem
                        className="w-full h-full p-2 pl-8 pr-8 bg-gray-50 hover:bg-gray-300 active:bg-black active:text-gray-50 text-blue-500 rounded-t-3xl text-lg font-sans font-semibold"
                        key="user-dashboard"
                        variant="solid"
                        onClick={() => router.push("/user-dashboard")}
                      >
                        <em className="ikon ikon-dashboard"></em> Dashboard
                      </DropdownItem>
                      <DropdownItem
                        className="w-full h-fit p-2 pl-8 pr-8 bg-gray-50 hover:bg-gray-300 active:bg-black active:text-gray-50 text-blue-500  text-lg font-sans  font-semibold "
                        key="buy-tokens"
                        variant="solid"
                        onClick={() => router.push("/purchase")}
                      >
                        <em className="ikon ikon-coins"></em> Buy Tokens
                      </DropdownItem>
                      <DropdownItem
                        className="w-full h-fit p-2 pl-8 pr-8 bg-gray-50 hover:bg-gray-300 active:bg-black active:text-gray-50 text-blue-500  text-lg font-sans  font-semibold "
                        key="ico-distribution"
                        variant="solid"
                        onClick={() => router.push("/ico-distribution")}
                      >
                        <em className="ikon ikon-distribution"></em> ICO Distribution
                      </DropdownItem>
                      <DropdownItem
                        className="w-full h-fit p-2 pl-8 pr-8 bg-gray-50 hover:bg-gray-300 active:bg-black active:text-gray-50 text-blue-500  text-lg font-sans  font-semibold "
                        key="transactions"
                        variant="solid"
                        onClick={() => router.push("/transactions")}
                      >
                        <em className="ikon ikon-transactions"></em> Transactions
                      </DropdownItem>
                      <DropdownItem
                        className="w-full h-fit p-2 pl-8 pr-8 bg-gray-50 hover:bg-gray-300 active:bg-black active:text-gray-50 text-blue-500  text-lg font-sans  font-semibold "
                        key="profile"
                        variant="solid"
                        onClick={() => router.push("/profile")}
                      >
                        <em className="ikon ikon-user"></em> Profile
                      </DropdownItem>
                      
                    </DropdownMenu>
                  </div>
                </Dropdown>
              </li>
            </ul>
            <a className="topbar-logo" href="/">
              <img
                src={imageLogo.src}
                srcSet={imageLogo.src + " 2x"}
                alt="logo"
              />
            </a>
            <ul className="topbar-nav">
              <Dropdown className="topbar-nav-item relative ">
                <DropdownTrigger className="toggle-tigger user-thumb">
                  <Button
                    className="text-white border p-2 rounded-xl"
                    variant="bordered"
                  >
                    Welcome {user}
                  </Button>
                </DropdownTrigger>

                {data.authenticated ? (
                  <DropdownMenu
                    className=" toggle-className dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown drop-shadow-md w-full"
                    style={{ minWidth: "250px" }}
                  >
                    <DropdownItem as="div" className="p-4 pr-4 user-status w-full">
                      <h6 className="user-status-title">
                        {user}'s token balance
                      </h6>
                      <div className="user-status-balance">
                        12,000,000 <small>TWZ</small>
                      </div>
                    </DropdownItem>
                    <DropdownItem as="ul" className="user-links w-full">
                      <li className="text-blue-500 cursor-pointer">
                        <a href="/profile">
                          <i className="ti ti-id-badge"></i>My Profile
                        </a>
                      </li>
                      <li className="text-blue-500 cursor-pointer">
                        <a href="/profile">
                          <i className="ti ti-infinite"></i>Referral
                        </a>
                      </li>
                      <li className="text-blue-500 cursor-pointer">
                        <a href="/">
                          <i className="ti ti-eye"></i>Activity
                        </a>
                      </li>
                    </DropdownItem>
                    <DropdownItem as="ul" className="user-links bg-light">
                      <li className="text-red-500">
                        <a
                          onClick={() => {
                            signOut();
                          }}
                          className="text-red-500"
                        >
                          <i className="ti ti-power-off text-red-500"></i>
                          Logout
                        </a>
                      </li>
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu
                    className=" toggle-className dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown drop-shadow-md

"
                    style={{ minWidth: "250px" }}
                  >
                    <DropdownItem as="ul" className="user-links">
                      <li className="text-blue-500 cursor-pointer">
                        <a
                          onClick={() => {
                            setShowMenuSignIn(!showmenuSignIn);
                          }}
                        >
                          <i className="ti ti-id-badge"></i>Login
                        </a>
                      </li>
                      <li className="text-blue-500 cursor-pointer">
                        <a
                          onClick={() => {
                            setShowMenuSignUp(!showmenuSignUp);
                          }}
                        >
                          <i className="ti ti-infinite"></i>SignUp
                        </a>
                      </li>
                      <li className="text-blue-500 cursor-pointer">
                        <a href="/profile">
                          <i className="ti ti-infinite"></i>About
                        </a>
                      </li>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
    </ReactStickyNode>
  );
}
