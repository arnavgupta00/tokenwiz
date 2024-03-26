"use client";
import {useRouter} from "next/navigation";
import imageLogo from "@/components/images/logo-light2x.png";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";


export default function NavbarNav() {
  var isloggedin: boolean = true;

  const router = useRouter();

  return (
    <div className="navbar ">
        <div className="container">
          <div className="navbar-innr">
            <ul className="navbar-menu">
              <li>
                <a href="/">
                  <em className="ikon ikon-dashboard"></em> Dashboard
                </a>
              </li>
              <li>
                <a href="purchase">
                  <em className="ikon ikon-coins"></em> Buy Tokens
                </a>
              </li>
              <li>
                <a href="ico-distribution">
                  <em className="ikon ikon-distribution"></em> ICO Distribution
                </a>
              </li>
              <li>
                <a href="transactions">
                  <em className="ikon ikon-transactions"></em> Transactions
                </a>
              </li>
              <li>
                <a href="profile">
                  <em className="ikon ikon-user"></em> Profile
                </a>
              </li>
              <li className="has-dropdown page-links-all">
                <a className="drop-toggle" href="#">
                  <em className="ikon ikon-exchange"></em> Pages
                </a>
                <ul className="navbar-dropdown">
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      Dashboards
                    </a>
                    <ul className="navbar-dropdown">
                      
                      <li>
                        <a href="/">
                          User Dashboard {" "}
                          <span className="badge badge-warning">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      KYC / AML
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="kyc-application">KYC Default</a>
                      </li>
                      
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      User Pages
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="profile">Profile Page</a>
                      </li>
                      
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      Transactions
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="transactions">Transactions - User</a>
                      </li>
                      <li>
                        <a href="admin-transactions">
                          Transactions - Admin <span className="badge badge-warning">Not yet Made</span>
                        </a>
                      </li>
                      <li>
                        <a href="transactions/1">
                          Transaction Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      Token Purchase
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="purchase">Buy Token </a>
                      </li>
                      
                    </ul>
                  </li>
                  {/* <li>
                    <a href="chat">
                      Chat App <span className="badge badge-warning">New</span>{" "}
                      <span className="badge badge-danger">Hot</span>
                    </a>
                  </li> */}
                  
                </ul>
              </li>
            </ul>
            <ul className="navbar-btns">
              <li>
                <a
                  href="kyc-application"
                  className="btn btn-sm btn-outline btn-light"
                >
                  <em className="text-primary ti ti-files"></em>
                  <span>KYC Application</span>
                </a>
              </li>
              <li className="d-none">
                <span className="badge badge-outline badge-success badge-lg">
                  <em className="text-success ti ti-files mgr-1x"></em>
                  <span className="text-success">KYC Approved</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
