import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";

export default function ProfileCard() {
    return <div className="content-area card">
    <div className="card-innr">
        <div className="card-head">
            <h4 className="card-title">Profile Details</h4>
        </div>
        <ul className="nav nav-tabs nav-tabs-line" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#personal-data">Personal Data</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#settings">Settings</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#password">Password</a>
            </li>
        </ul>
        <div className="tab-content" id="profile-details">
            <div className="tab-pane fade show active" id="personal-data">
                <form action="#">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-item input-with-label">
                                <label htmlFor="full-name" className="input-item-label">Full Name</label>
                                <input className="input-bordered" type="text" id="full-name" name="full-name" value="Stefan Harary"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-item input-with-label">
                                <label htmlFor="email-address" className="input-item-label">Email Address</label>
                                <input className="input-bordered" type="text" id="email-address" name="email-address" value="info@softnio.com" disabled/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-item input-with-label">
                                <label htmlFor="mobile-number" className="input-item-label">Mobile Number</label>
                                <input className="input-bordered" type="text" id="mobile-number" name="mobile-number"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-item input-with-label">
                                <label htmlFor="date-of-birth" className="input-item-label">Date of Birth</label>
                                <input className="input-bordered date-picker-dob" type="text" id="date-of-birth" name="date-of-birth"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-item input-with-label">
                                <label htmlFor="nationality" className="input-item-label">Nationality</label>
                                <select className="select-bordered select-block" name="nationality" id="nationality">
                                    <option value="us">United State</option>
                                    <option value="uk">United KingDom</option>
                                    <option value="fr">France</option>
                                    <option value="ch">China</option>
                                    <option value="cr">Czech Republic</option>
                                    <option value="cb">Colombia</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="gaps-1x"></div>
                    <div className="d-sm-flex justify-content-between align-items-center">
                        <button className="btn btn-primary">Update Profile</button>
                        <div className="gaps-2x d-sm-none"></div>
                        <span className="text-success"><em className="ti ti-check-box"></em> All Changes are saved</span>
                    </div>
                </form>
            </div>
            <div className="tab-pane fade" id="settings">
                <div className="pdb-1-5x">
                    <h5 className="card-title card-title-sm text-dark">Security Settings</h5>    
                </div>
                <div className="input-item">
                    <input type="checkbox" className="input-switch input-switch-sm" id="save-log" checked/>
                    <label htmlFor="save-log">Save my Activities Log</label>
                </div>
                <div className="input-item">
                    <input type="checkbox" className="input-switch input-switch-sm" id="pass-change-confirm"/>
                    <label htmlFor="pass-change-confirm">Confirm me through email before password change</label>
                </div>
                <div className="pdb-1-5x">
                    <h5 className="card-title card-title-sm text-dark">Manage Notification</h5>    
                </div>
                <div className="input-item">
                    <input type="checkbox" className="input-switch input-switch-sm" id="latest-news" checked/>
                    <label htmlFor="latest-news">Notify me by email about sales and latest news</label>
                </div>
                <div className="input-item">
                    <input type="checkbox" className="input-switch input-switch-sm" id="activity-alert" checked/>
                    <label htmlFor="activity-alert">Alert me by email for unusual activity.</label>
                </div>
                <div className="gaps-1x"></div>
                <div className="d-flex justify-content-between align-items-center">
                    <span></span>
                    <span className="text-success"><em className="ti ti-check-box"></em> Setting has been updated</span>
                </div>
            </div>

            <div className="tab-pane fade" id="password">
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-item input-with-label">
                            <label htmlFor="old-pass" className="input-item-label">Old Password</label>
                            <input className="input-bordered" type="password" id="old-pass" name="old-pass"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-item input-with-label">
                            <label htmlFor="new-pass" className="input-item-label">New Password</label>
                            <input className="input-bordered" type="password" id="new-pass" name="new-pass"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-item input-with-label">
                            <label htmlFor="confirm-pass" className="input-item-label">Confirm New Password</label>
                            <input className="input-bordered" type="password" id="confirm-pass" name="confirm-pass"/>
                        </div>
                    </div>
                </div>
                <div className="note note-plane note-info pdb-1x">
                    <em className="fas fa-info-circle"></em>
                    <p>Password should be minmum 8 letter and include lower and uppercase letter.</p>
                </div>
                <div className="gaps-1x"></div>
                <div className="d-sm-flex justify-content-between align-items-center">
                    <button className="btn btn-primary">Update</button>
                    <div className="gaps-2x d-sm-none"></div>
                    <span className="text-success"><em className="ti ti-check-box"></em>  Changed Password</span>
                </div>
            </div>
        </div>
    </div>
</div>
}