/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import LandingPage from "views/LandingPage";
import AcountType from "views/AcountType";
import UserVerification from "views/UserVerification";
import OtpVerification from "views/OtpVerification";
import TermsConditions from "views/Terms&Conditions";
import Documentation from "views/Documentation";
import ScanYouId from "views/ScanYouId";
import ScanYouaddress from "views/ScanYouaddress";
import Imagecapture from "views/Imagecapture";
import { UserDetails } from "views/UserDetails";
import { EmploymentFinancialDetails } from "views/EmploymentFinancialDetails";
import { Fatca } from "views/Fatca";
import { RelativeOfABC } from "views/RelativeOfABC";
import { LoanDetails } from "views/LoanDetails";
import LoanAgreement from "views/LoanAgreement";
import { WelcomeToABC } from "views/WelcomeToABC";
import SetPassword from "views/SetPassword";
import { Login } from "views/Login";
import imageCaptureDocumentation from "views/imageCaptureDocumentation";
import ScanYourID from "views/ScanYourID";
import ScanAddress from "views/ScanAddress";

import { LoanAvailment } from "views/LoanAvailment";
import { LoanSummary } from "views/LoanSummary";
import { Congratulation } from "views/Congratulation";
import { Authentication } from "views/Authentication";
import { ForgotPassword } from "views/ForgotPassword";
const dashboardRoutes = [
  {
    path: "/landingPage",
    name: "Landing Page",
    icon: "nc-icon nc-bank",
    component: LandingPage,
    layout: "/admin"
  },
  {
    path: "/acountType",
    name: "Acount Type",
    icon: "nc-icon nc-chart-pie-35",
    component: AcountType,
    layout: "/admin"
  },
  {
    path: "/userverification",
    name: "User Verification",
    icon: "nc-icon nc-circle-09",
    component: UserVerification,
    layout: "/admin"
  },
  {
    path: "/otpverification",
    name: "Otp Verification",
    icon: "nc-icon nc-circle-09",
    component: OtpVerification,
    layout: "/admin"
  },
  {
    path: "/terms&conditions",
    name: "Terms & Conditions",
    icon: "nc-icon nc-notes",
    component: TermsConditions,
    layout: "/admin"
  },
  {
    path: "/documentation",
    name: "Documentation",
    icon: "nc-icon nc-paper-2",
    component: Documentation,
    layout: "/admin"
  },
  {
    path: "/scanyouid",
    name: "Sacan Your ID",
    icon: "nc-icon nc-atom",
    component: ScanYouId,
    layout: "/admin"
  },
  {
    path: "/scanyourid",
    name: "Sacan Pan Card",
    icon: "nc-icon nc-atom",
    component: ScanYourID,
    layout: "/admin"
  },

  {
    path: "/scanyouraddress",
    name: "Scanyour Address",
    icon: "nc-icon nc-circle-09",
    component: ScanYouaddress,
    layout: "/admin"
  },
  {
    path: "/scanaddress",
    name: "Scan Address",
    icon: "nc-icon nc-circle-09",
    component: ScanAddress,
    layout: "/admin"
  },
  {
    path: "/imagedocumentation",
    name: "Image Document",
    icon: "nc-icon nc-notes",
    component: imageCaptureDocumentation,
    layout: "/admin"
  },
  {
    path: "/imagecapture",
    name: "Capture Image",
    icon: "nc-icon nc-notes",
    component: Imagecapture,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserDetails,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/employmentFinancialDetails",
    component: EmploymentFinancialDetails,
    layout: "/admin",
  },
  {
    path: "/fatca",
    component: Fatca,
    layout: "/admin",
  },
  {
    path: "/relativeOfAbc",
    component: RelativeOfABC,
    layout: "/admin",
  },
  {
    path: "/loanDetails",
    component: LoanDetails,
    layout: "/admin",
  },
  { path: "/loanAgreement", component: LoanAgreement, layout: "/admin" },
  { path: "/welcome", component: WelcomeToABC, layout: "/admin" },
  { path: "/setPassword", component: SetPassword, layout: "/admin" },
  { path: "/login", component: Login, layout: "/admin" },
    {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin"
  },
  {path:"/loanAvailment",component:LoanAvailment,layout:"/admin"},
  {path:"/loanSummary",component:LoanSummary,layout:"/admin"},
  {path:"/forgotPassword",component:ForgotPassword,layout:"/admin"},
  {path:"/authentication",component:Authentication,layout:"/admin"},
  {path:"/congratulations",component:Congratulation,layout:"/admin"},
  
];

export default dashboardRoutes;
