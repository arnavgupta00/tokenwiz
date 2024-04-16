"use client";
import imageLogo from "@/components/images/user-a.jpg";
import "@/components/assets/css/vendor.bundle.css";
import "@/components/assets/css/style.css";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getFullUserData, updateUser, User } from "@/serverActions/actions";
import { useEffect, useState } from "react";
export default function ProfileCard(props: { userData: any }) {
  const [userData, setUserData] = useState<any | null>({
    name: "",
    email: "",
    mobile: "",
    dateOfBirth: Dayjs,
    address: "",
    city: "",
    state: "",
    country: "",
    password: "",
  });

  const [change, setChange] = useState(false);
  const [updateReview, setUpdateReview] = useState("");
  const [loading, setLoading] = useState(false);
  const data = props.userData;

  var userDataInit;

  const countryOptions = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Åland Islands", label: "Åland Islands" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "American Samoa", label: "American Samoa" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Bouvet Island", label: "Bouvet Island" },
    { value: "Brazil", label: "Brazil" },
    {
      value: "British Indian Ocean Territory",
      label: "British Indian Ocean Territory",
    },
    { value: "Brunei Darussalam", label: "Brunei Darussalam" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Cape Verde", label: "Cape Verde" },
    { value: "Cayman Islands", label: "Cayman Islands" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Christmas Island", label: "Christmas Island" },
    { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo", label: "Congo" },
    {
      value: "Congo, The Democratic Republic of The",
      label: "Congo, The Democratic Republic of The",
    },
    { value: "Cook Islands", label: "Cook Islands" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Cote D'ivoire", label: "Cote D'ivoire" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Curaçao", label: "Curaçao" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Ethiopia", label: "Ethiopia" },
    {
      value: "Falkland Islands (Malvinas)",
      label: "Falkland Islands (Malvinas)",
    },
    { value: "Faroe Islands", label: "Faroe Islands" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "French Guiana", label: "French Guiana" },
    { value: "French Polynesia", label: "French Polynesia" },
    {
      value: "French Southern Territories",
      label: "French Southern Territories",
    },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Gibraltar", label: "Gibraltar" },
    { value: "Greece", label: "Greece" },
    { value: "Greenland", label: "Greenland" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guadeloupe", label: "Guadeloupe" },
    { value: "Guam", label: "Guam" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guernsey", label: "Guernsey" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-bissau", label: "Guinea-bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    {
      value: "Heard Island and Mcdonald Islands",
      label: "Heard Island and Mcdonald Islands",
    },
    {
      value: "Holy See (Vatican City State)",
      label: "Holy See (Vatican City State)",
    },
    { value: "Honduras", label: "Honduras" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran, Islamic Republic of", label: "Iran, Islamic Republic of" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Isle of Man", label: "Isle of Man" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jersey", label: "Jersey" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    {
      value: "Korea, Democratic People's Republic of",
      label: "Korea, Democratic People's Republic of",
    },
    { value: "Korea, Republic of", label: "Korea, Republic of" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    {
      value: "Lao People's Democratic Republic",
      label: "Lao People's Democratic Republic",
    },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libyan Arab Jamahiriya", label: "Libyan Arab Jamahiriya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Macao", label: "Macao" },
    {
      value: "Macedonia, The Former Yugoslav Republic of",
      label: "Macedonia, The Former Yugoslav Republic of",
    },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Martinique", label: "Martinique" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mayotte", label: "Mayotte" },
    { value: "Mexico", label: "Mexico" },
    {
      value: "Micronesia, Federated States of",
      label: "Micronesia, Federated States of",
    },
    { value: "Moldova, Republic of", label: "Moldova, Republic of" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Montserrat", label: "Montserrat" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar", label: "Myanmar" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Caledonia", label: "New Caledonia" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Niger", label: "Niger" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Niue", label: "Niue" },
    { value: "Norfolk Island", label: "Norfolk Island" },
    { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    {
      value: "Palestinian Territory, Occupied",
      label: "Palestinian Territory, Occupied",
    },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Pitcairn", label: "Pitcairn" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Puerto Rico", label: "Puerto Rico" },
    { value: "Qatar", label: "Qatar" },
    { value: "Reunion", label: "Reunion" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Helena", label: "Saint Helena" },
    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
    {
      value: "Saint Vincent and The Grenadines",
      label: "Saint Vincent and The Grenadines",
    },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "South Africa", label: "South Africa" },
    {
      value: "South Georgia and The South Sandwich Islands",
      label: "South Georgia and The South Sandwich Islands",
    },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
    { value: "Eswatini", label: "Eswatini" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syrian Arab Republic", label: "Syrian Arab Republic" },
    { value: "Taiwan (ROC)", label: "Taiwan (ROC)" },
    { value: "Tajikistan", label: "Tajikistan" },
    {
      value: "Tanzania, United Republic of",
      label: "Tanzania, United Republic of",
    },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-leste", label: "Timor-leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tokelau", label: "Tokelau" },
    { value: "Tonga", label: "Tonga" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    {
      value: "United States Minor Outlying Islands",
      label: "United States Minor Outlying Islands",
    },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Virgin Islands, British", label: "Virgin Islands, British" },
    { value: "Virgin Islands, U.S.", label: "Virgin Islands, U.S." },
    { value: "Wallis and Futuna", label: "Wallis and Futuna" },
    { value: "Western Sahara", label: "Western Sahara" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
  ];

  function isOver18(dateOfBirth: Date) {
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return dateOfBirth <= eighteenYearsAgo;
  }
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const userCall = await getFullUserData(data.session.user.email);
      userDataInit = userCall;
      setUserData(userCall);
      setLoading(false);
    };

    fetchUserData();
  }, []);
  if(loading) return <div>Loading...</div>
  return (
    <div className="content-area card">
      <div className="card-innr">
        <div className="card-head">
          <h4 className="card-title">Profile Details</h4>
        </div>
        <ul className="nav nav-tabs nav-tabs-line" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#personal-data"
            >
              Personal Data
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#settings">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#password">
              Password
            </a>
          </li>
        </ul>
        <div className="tab-content" id="profile-details">
          <div className="tab-pane fade show active" id="personal-data">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-item input-with-label">
                    <label htmlFor="full-name" className="input-item-label">
                      Full Name
                    </label>
                    <input
                      className="input-bordered"
                      type="text"
                      id="full-name"
                      name="full-name"
                      value={userData?.name}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-item input-with-label">
                    <label htmlFor="email-address" className="input-item-label">
                      Email Address
                    </label>
                    <input
                      className="input-bordered"
                      type="text"
                      id="email-address"
                      name="email-address"
                      value={userData?.email}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-item input-with-label">
                    <label htmlFor="mobile-number" className="input-item-label">
                      Mobile Number (Country Code + Area Code + Number)
                    </label>
                    <input
                      className="input-bordered"
                      type="text"
                      id="mobile-number"
                      name="mobile-number"
                      value={userData?.mobile}
                      onChange={(e) => {
                        setUserData({ ...userData, mobile: e.target.value });
                        setChange(true);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-item input-with-label">
                    <label htmlFor="date-of-birth" className="input-item-label">
                      Date of Birth
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          className="p-0 m-0 h-16"
                          value={dayjs(userData?.dateOfBirth)}
                          onChange={(newValue) => {
                            console.log(newValue?.toDate());
                            setUserData({
                              ...userData,
                              dateOfBirth: newValue,
                            });
                            setChange(true);
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-item input-with-label">
                    <label htmlFor="nationality" className="input-item-label">
                      Nationality
                    </label>
                    <select
                      className="select-bordered select-    block"
                      name="nationality"
                      id="nationality"
                      value={userData?.country}
                      onChange={(e) => {
                        setUserData({ ...userData, country: e.target.value });
                        setChange;
                      }}
                    >
                      {countryOptions.map((country) => (
                        <option value={country.value}>{country.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="gaps-1x"></div>
              <div className="d-sm-flex justify-content-between align-items-center">
                <button
                  className="btn btn-primary"
                  onClick={async () => {
                    if (!isOver18(userData.dateOfBirth.toDate())) {
                      setUpdateReview("You must be over 18 years old");
                      return;
                    } else {
                      await updateUser(data.session.user.email, {
                        mobile: userData.mobile,
                        country: userData.country,
                        dateOfBirth: userData.dateOfBirth.toDate(),
                      });
                    }
                  }}
                >
                  Update Profile
                </button>
                <div className="gaps-2x d-sm-none"></div>
                {updateReview && (
                  <span className="text-red-500">{updateReview}</span>
                )}
                {!change && (
                  <span className="text-success">
                    <em className="ti ti-check-box"></em> All Changes are saved
                  </span>
                )}
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="settings">
            <div className="pdb-1-5x">
              <h5 className="card-title card-title-sm text-dark">
                Security Settings
              </h5>
            </div>
            <div className="input-item">
              <input
                type="checkbox"
                className="input-switch input-switch-sm"
                id="save-log"
                checked
              />
              <label htmlFor="save-log">Save my Activities Log</label>
            </div>
            <div className="input-item">
              <input
                type="checkbox"
                className="input-switch input-switch-sm"
                id="pass-change-confirm"
              />
              <label htmlFor="pass-change-confirm">
                Confirm me through email before password change
              </label>
            </div>
            <div className="pdb-1-5x">
              <h5 className="card-title card-title-sm text-dark">
                Manage Notification
              </h5>
            </div>
            <div className="input-item">
              <input
                type="checkbox"
                className="input-switch input-switch-sm"
                id="latest-news"
                checked
              />
              <label htmlFor="latest-news">
                Notify me by email about sales and latest news
              </label>
            </div>
            <div className="input-item">
              <input
                type="checkbox"
                className="input-switch input-switch-sm"
                id="activity-alert"
                checked
              />
              <label htmlFor="activity-alert">
                Alert me by email for unusual activity.
              </label>
            </div>
            <div className="gaps-1x"></div>
            <div className="d-flex justify-content-between align-items-center">
              <span></span>
              <span className="text-success">
                <em className="ti ti-check-box"></em> Setting has been updated
              </span>
            </div>
          </div>

          <div className="tab-pane fade" id="password">
            <div className="row">
              <div className="col-md-6">
                <div className="input-item input-with-label">
                  <label htmlFor="old-pass" className="input-item-label">
                    Old Password
                  </label>
                  <input
                    className="input-bordered"
                    type="password"
                    id="old-pass"
                    name="old-pass"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-item input-with-label">
                  <label htmlFor="new-pass" className="input-item-label">
                    New Password
                  </label>
                  <input
                    className="input-bordered"
                    type="password"
                    id="new-pass"
                    name="new-pass"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-item input-with-label">
                  <label htmlFor="confirm-pass" className="input-item-label">
                    Confirm New Password
                  </label>
                  <input
                    className="input-bordered"
                    type="password"
                    id="confirm-pass"
                    name="confirm-pass"
                  />
                </div>
              </div>
            </div>
            <div className="note note-plane note-info pdb-1x">
              <em className="fas fa-info-circle"></em>
              <p>
                Password should be minmum 8 letter and include lower and
                uppercase letter.
              </p>
            </div>
            <div className="gaps-1x"></div>
            <div className="d-sm-flex justify-content-between align-items-center">
              <button className="btn btn-primary">Update</button>
              <div className="gaps-2x d-sm-none"></div>
              <span className="text-success">
                <em className="ti ti-check-box"></em> Changed Password
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
