import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function NotificationsCard() {
  return (
    <div className="col-lg-6 ">
      <div className="card card-timeline card-full-height shadow-md	">
        <div className="card-innr">
          <div className="card-head has-aside">
            <h4 className="card-title">Notifications</h4>
          </div>
          <div className="timeline-wrap" id="timeline-notify">
            <div data-simplebar="init">
              <div
                className="simplebar-track vertical hidden"
              >
                <div className="simplebar-scrollbar"></div>
              </div>
              <div
                className="simplebar-track horizontal hidden"
              >
                <div className="simplebar-scrollbar"></div>
              </div>
              <div
                className="simplebar-scroll-content "
                style={{paddingRight: "17px", marginBottom: "-34px"}}

              >
                <div
                  className="simplebar-content"
                  style={{paddingBottom: "17px", marginRight: "-17px"}}
                >
                  <div className="timeline-innr">
                    <div className="timeline">
                      <div className="timeline-line"></div>
                      <div className="timeline-item">
                        <div className="timeline-time">09:30 AM</div>
                        <div className="timeline-content">
                          <p>
                            Each member have a unique TWZ referral link to share
                            with friends and family and receive a bonus - 15% of
                            the value of their contribution.
                          </p>
                        </div>
                      </div>
                      <div className="timeline-item success">
                        <div className="timeline-time">12:27 AM</div>
                        <div className="timeline-content">
                          <div className="chat-users">
                            <div className="chat-users-stack">
                              <div className="chat-avatar circle">
                                <img src="images/user-a.jpg" alt="" />
                              </div>
                              <div className="chat-avatar circle">
                                <img src="images/user-b.jpg" alt="" />
                              </div>
                              <div className="chat-avatar circle">
                                <img src="images/user-c.jpg" alt="" />
                              </div>
                            </div>
                            <span>+14</span>
                          </div>
                          <span className="timeline-content-info">
                            New User Added
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item secondary">
                        <div className="timeline-time">07:45 PM</div>
                        <div className="timeline-content">
                          <a href="#" className="timeline-content-url">
                            Now You can send payment directly to our address or
                            you may pay online
                          </a>
                          <span className="timeline-content-info">
                            New Article on Blog
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item secondary">
                        <div className="timeline-time">07:45 PM</div>
                        <div className="timeline-content">
                          <p>500 TWZ referral bonues added</p>
                          <span className="timeline-content-info">
                            into @Abc
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item hidden success">
                        <div className="timeline-time">03:45 PM</div>
                        <div className="timeline-content">
                          <h5 className="timeline-content-title">
                            Get bonus - 15% of the value of your contribution
                          </h5>
                          <span className="timeline-content-info">
                            Latest Offers
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item hidden light">
                        <div className="timeline-time">02:30 PM</div>
                        <div className="timeline-content">
                          <p>
                            Each member have a unique TWZ referral link to share
                            with friends and family and receive a bonus - 15% of
                            the value of their contribution.
                          </p>
                          <span className="timeline-content-info">
                            Announcements
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item hidden light">
                        <div className="timeline-time">02:30 PM</div>
                        <div className="timeline-content">
                          <p>
                            Each member have a unique TWZ referral link to share
                            with friends and family and receive a bonus - 15% of
                            the value of their contribution.
                          </p>
                          <span className="timeline-content-info">
                            Announcements
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item hidden danger">
                        <div className="timeline-time">12:17 AM</div>
                        <div className="timeline-content">
                          <p>
                            You can buy our TWZ tokens using ETH, BTC, LTC or
                            USD.
                          </p>
                          <span className="timeline-content-info">
                            Announcements
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item hidden primary">
                        <div className="timeline-time">09:31 AM</div>
                        <div className="timeline-content">
                          <div className="chat-users">
                            <div className="chat-users-stack">
                              <div className="chat-avatar circle">
                                <img src="images/user-a.jpg" alt="" />
                              </div>
                              <div className="chat-avatar circle">
                                <img src="images/user-c.jpg" alt="" />
                              </div>
                              <div className="chat-avatar circle">
                                <img src="images/user-b.jpg" alt="" />
                              </div>
                              <div className="chat-avatar circle">
                                <img src="images/user-d.jpg" alt="" />
                              </div>
                            </div>
                            <span>+122</span>
                          </div>
                          <span className="timeline-content-info">
                            New User Added
                          </span>
                        </div>
                      </div>
                      <div className="timeline-item hidden warning">
                        <div className="timeline-time">08:57 AM</div>
                        <div className="timeline-content">
                          <p>
                            Enter your amount, you would like to contribute and
                            calculate the amount of token you will received. To
                            get tokens please make a payment. You can send
                            payment directly to our address or you may pay
                            online. Once you paid, you will receive an email
                            about the successfull deposit.
                          </p>
                          <span className="timeline-content-info">
                            Announcements
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-load">
              <a
                href=""
                className="link load-timeline"
                data-target="timeline-notify"
                data-show="2"
              >
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
