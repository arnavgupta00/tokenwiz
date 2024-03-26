"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import ReactStickyNode from 'react-stickynode';

import imageLogo from "@/components/images/logo-light2x.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function Nav() {
  var isloggedin: boolean = true;

  return (
    <ReactStickyNode className="topbar-wrap w-screen p-0 m-0 relative sticky top-0 z-20	" >
      <div className="topbar is-sticky sticky top-0 ">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="topbar-nav d-lg-none">
              <li className="topbar-nav-item relative">
                <a className="toggle-nav" href="#">
                  <div className="toggle-icon">
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                  </div>
                </a>
              </li>
            </ul>
            <a className="topbar-logo" href="./">
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
                    Welcome Steven
                  </Button>
                </DropdownTrigger>

                <DropdownMenu
                  className=" toggle-className dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown drop-shadow-md

"
                  style={{ minWidth: "250px" }}
                >
                  <DropdownItem as="div" className="p-4 pr-4 user-status">
                    <h6 className="user-status-title">Token balance</h6>
                    <div className="user-status-balance">
                      12,000,000 <small>TWZ</small>
                    </div>
                  </DropdownItem>
                  <DropdownItem as="ul" className="user-links">
                    <li>
                      <a href="profile">
                        <i className="ti ti-id-badge"></i>My Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti ti-infinite"></i>Referral
                      </a>
                    </li>
                    <li>
                      <a href="activity">
                        <i className="ti ti-eye"></i>Activity
                      </a>
                    </li>
                  </DropdownItem>
                  <DropdownItem as="ul" className="user-links bg-light">
                    <li>
                      <a href="sign-in">
                        <i className="ti ti-power-off"></i>Logout
                      </a>
                    </li>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
      
    </ReactStickyNode>
  );
}
