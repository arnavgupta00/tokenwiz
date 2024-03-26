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
                <a href="index.html">
                  <em className="ikon ikon-dashboard"></em> Dashboard
                </a>
              </li>
              <li>
                <a href="buy-token.html">
                  <em className="ikon ikon-coins"></em> Buy Tokens
                </a>
              </li>
              <li>
                <a href="ico-distribution.html">
                  <em className="ikon ikon-distribution"></em> ICO Distribution
                </a>
              </li>
              <li>
                <a href="transactions.html">
                  <em className="ikon ikon-transactions"></em> Transactions
                </a>
              </li>
              <li>
                <a href="profile.html">
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
                        <a href="index.html">Dashboard v1</a>
                      </li>
                      <li>
                        <a href="index-v2.html">
                          Dashboard v2{" "}
                          <span className="badge badge-warning">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      UI Elements
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="form-elements.html">Form Elements</a>
                      </li>
                      <li>
                        <a href="form-layout.html">Form Layout</a>
                      </li>
                      <li>
                        <a href="form-validation.html">
                          Form Validation{" "}
                          <span className="badge badge-danger">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="form-wizard.html">
                          Form Wizard{" "}
                          <span className="badge badge-danger">Hot</span>
                        </a>
                      </li>
                      <li>
                        <a href="buttons.html">Button</a>
                      </li>
                      <li>
                        <a href="badges.html">Badge</a>
                      </li>
                      <li>
                        <a href="cards.html">Cards</a>
                      </li>
                      <li>
                        <a href="tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="accordions.html">Accordions</a>
                      </li>
                      <li>
                        <a href="modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="alerts.html">Alerts</a>
                      </li>
                      <li>
                        <a href="alert-toastr.html">Toastr Alerts</a>
                      </li>
                      <li>
                        <a href="alert-sweat.html">
                          Sweat Alerts{" "}
                          <span className="badge badge-danger">Hot</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      Misc Pages
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="404-error.html">404 Error</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign In / Login</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign Up / Registration</a>
                      </li>
                      <li>
                        <a href="signup-success.html">Signup Success</a>
                      </li>
                      <li>
                        <a href="email-verified.html">Email Verified</a>
                      </li>
                      <li>
                        <a href="forgot.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="faq-page.html">Faq Page</a>
                      </li>
                      <li>
                        <a href="regular-page.html">Regular Page - v1</a>
                      </li>
                      <li>
                        <a href="regular-page-v2.html">Regular Page - v2</a>
                      </li>
                      <li>
                        <a href="timeline.html">
                          Timeline{" "}
                          <span className="badge badge-warning">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="thank-you.html">Thank You</a>
                      </li>
                      <li>
                        <a href="_blank.html">Blank Page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      KYC / AML
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="kyc-application.html">KYC Default</a>
                      </li>
                      <li>
                        <a href="kyc-form.html">KYC Form</a>
                      </li>
                      <li>
                        <a href="kyc-thank-you.html">KYC Thank You</a>
                      </li>
                      <li>
                        <a href="kyc-list.html">KYC Lists - Admin</a>
                      </li>
                      <li>
                        <a href="kyc-details.html">KYC Details - Admin</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      User Pages
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="profile.html">Profile Page</a>
                      </li>
                      <li>
                        <a href="activity.html">
                          User Activity{" "}
                          <span className="badge badge-warning">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="user-list-sidebar.html">
                          User List - Sidebar{" "}
                          <span className="badge badge-warning">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="user-list.html">User List - Admin</a>
                      </li>
                      <li>
                        <a href="user-details.html">User Details - Admin</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a className="drop-toggle" href="#">
                      Transactions
                    </a>
                    <ul className="navbar-dropdown">
                      <li>
                        <a href="transactions.html">Transactions - User</a>
                      </li>
                      <li>
                        <a href="admin-transactions.html">
                          Transactions - Admin
                        </a>
                      </li>
                      <li>
                        <a href="transaction-details.html">
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
                        <a href="buy-token.html">Buy Token - Modern</a>
                      </li>
                      <li>
                        <a href="buy-token-s2.html">Buy Token - Simple</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="chat.html">
                      Chat App <span className="badge badge-warning">New</span>{" "}
                      <span className="badge badge-danger">Hot</span>
                    </a>
                  </li>
                  <li>
                    <a href="email-templates.html">
                      Email Templates{" "}
                      <span className="badge badge-success">Free</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-btns">
              <li>
                <a
                  href="kyc-application.html"
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
