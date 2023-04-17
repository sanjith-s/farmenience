import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import "./css/app.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import styles from "./css/general.css";
import Headroom from "react-headroom";

// import Homepage1 from "./homepage1";
// import LandingPage from "./landingPage";
// import AboutUsPage from "./aboutUsPage";
// import TermsAndCondition from "./termsAndCondition";
// import ReviewsForm from "./ReviewsForm"
// import Homepage2 from "./homepage2";
// import Navbar from "./components/navbar";
// import NavbarBefore from "./components/navbarBefore";
// import Footer from "./components/footer";
// import Footer1 from "./components/footerFinal";
// import Signup from "./signup";
// import Login from "./login";
// import ForgetPasswordGetEmail from "./forgetPasswordgetEmail"
// import VerifyOTP from "./verifyOTP"
// import ForgetEnterNewPassword from "./forgetEnterNewPassword"
// import ResetEnterNewPassword from "./resetEnterNewPassword"
// import Logout from "./logout"
// import LogoutAllDevice from "./LogoutAllDevice";
// import NGOProfile from "./NGOProfile";
// import BuyerProfile from "./BuyerProfile";
// import FarmerProfile from "./FarmerProfile";
// import PageM0 from "./Market/pageM0";
// import PageM1 from "./Market/pageM1";
// import PageM2 from "./Market/pageM2";
// import PageM3 from "./Market/pageM3";
// import PageM4 from "./Market/pageM4";
// import PageM5 from "./Market/pageM5";
// import PageM6 from "./Market/pageM6";
// import PageM7 from "./Market/pageM7";
// import PageM9 from "./Market/pageM9";
// import PageM10 from "./Market/pageM10";
// import PageM10a from "./Market/pageM10a";
// import PageM10b from "./Market/pageM10b";
// import PageM10c from "./Market/pageM10c";
// import PageM11 from "./Market/pageM11";
// import PageM12 from "./Market/pageM12";
// import PageM13 from "./Market/pageM13";
// import PageM15 from "./Market/pageM15";
// import PageM16 from "./Market/pageM16";
// import PageM17 from "./Market/pageM17";
// import PageM18 from "./Market/pageM18";
// import PageM19 from "./Market/pageM19";
// import Graph from "./components/graph";
// //import AllQueries from "./N1";
// import PageN1 from "./Ngo/pageN1";
// import PageN2 from "./Ngo/pageN2a";
// import PageN4 from "./Ngo/pageN4";
// import PageN5 from "./Ngo/pageN5";
// import PageN6 from "./Ngo/pageN6";
// import PageN7 from "./Ngo/pageN7";
// import PageN9 from "./Ngo/pageN9";
// // import PageN10 from "./Ngo/checking";
// import PageN10 from "./Ngo/pageN10";
// import PageN10a from "./Ngo/pageN10a";
// import PageN11 from "./Ngo/pageN11";
// import PageN12 from "./Ngo/pageN12";
// import PageN12a from "./Ngo/pageN12a";
// import PageN13 from "./Ngo/pageN13";
// import PageN14 from "./Ngo/pageN14";
// import PageN14a from "./Ngo/pageN14a";
// import PageN14b from "./Ngo/pageN14b";
// import Chart from "./components/chart";
// import Calendar from "./components/calender";
// import CropRecommendation from "./cropRecommendation";
// import N10Navbar from "./components/n10Navbar";
// import { display } from "@mui/system";
// import Success from "./Market/success";
// import Cancel from "./Market/cancel";
// // import PageMain from "./PageMain";
// import Web from "./Web";
// import Voicetotext from "./Voicetotext";
// import PdfPrint from "./PdfPrint";
// import LangTranslate from "./LangTranslate";
// import Vtt from "./Vtt";
// import Voice from "./Voice";
// import ImageDetection from "./Market/imageDetection"
// import Map from "./Ngo/Map";
// import MainMap from "./MainMap";

const LandingPage = lazy(() => import("./landingPage"));
const Homepage2 = lazy(() => import("./homepage2"));
const AboutUsPage = lazy(() => import("./aboutUsPage"));
const TermsAndCondition = lazy(() => import("./termsAndCondition"));
const ReviewsForm = lazy(() => import("./ReviewsForm"));
const Signup = lazy(() => import("./signup"));
const Login = lazy(() => import("./login"));
const ForgetPasswordGetEmail = lazy(() => import("./forgetPasswordgetEmail"));
const VerifyOTP = lazy(() => import("./verifyOTP"));
const ForgetEnterNewPassword = lazy(() => import("./forgetEnterNewPassword"));
const ResetEnterNewPassword = lazy(() => import("./resetEnterNewPassword"));
const Logout = lazy(() => import("./logout"));
const Chart = lazy(() => import("./components/chart"));
const NGOProfile = lazy(() => import("./NGOProfile"));
const BuyerProfile = lazy(() => import("./BuyerProfile"));
const FarmerProfile = lazy(() => import("./FarmerProfile"));
const MainMap = lazy(() => import("./MainMap"));
const Calendar = lazy(() => import("././components/calender"));
const Graph = lazy(() => import("./components/graph"));
const LogoutAllDevice = lazy(() => import("./LogoutAllDevice"));
const Voicetotext = lazy(() => import("./Voicetotext"));
const Vtt = lazy(() => import("./Vtt"));
const LangTranslate = lazy(() => import("./LangTranslate"));
const Voice = lazy(() => import("./Voice"));
const CropRecommendation = lazy(() => import("./cropRecommendation"));
const ImageDetection = lazy(() => import("./Market/imageDetection"));
const Web = lazy(() => import("./Web"));
const Success = lazy(() => import("./Market/success"));
const Cancel = lazy(() => import("./Market/cancel"));
const PdfPrint = lazy(() => import("./PdfPrint"));
const Navbar = lazy(() => import("./components/navbar"));
const Footer1 = lazy(() => import("./components/footerFinal"));
const N10Navbar = lazy(() => import("./components/n10Navbar"));

const PageM0 = lazy(() => import("./Market/pageM0"));
const PageM1 = lazy(() => import("./Market/pageM1"));
const PageM2 = lazy(() => import("./Market/pageM2"));
const PageM3 = lazy(() => import("./Market/pageM3"));
const PageM4 = lazy(() => import("./Market/pageM4"));
const PageM5 = lazy(() => import("./Market/pageM5"));
const PageM6 = lazy(() => import("./Market/pageM6"));
const PageM7 = lazy(() => import("./Market/pageM7"));
const PageM9 = lazy(() => import("./Market/pageM9"));
const PageM10 = lazy(() => import("./Market/pageM10"));
const PageM10a = lazy(() => import("./Market/pageM10a"));
const PageM10b = lazy(() => import("./Market/pageM10b"));
const PageM10c = lazy(() => import("./Market/pageM10c"));
const PageM11 = lazy(() => import("./Market/pageM11"));
const PageM12 = lazy(() => import("./Market/pageM12"));
const PageM13 = lazy(() => import("./Market/pageM13"));
const PageM15 = lazy(() => import("./Market/pageM15"));
const PageM16 = lazy(() => import("./Market/pageM16"));
const PageM17 = lazy(() => import("./Market/pageM17"));
const PageM18 = lazy(() => import("./Market/pageM18"));
const PageM19 = lazy(() => import("./Market/pageM19"));

const PageN1 = lazy(() => import("././Ngo/pageN1"));
const PageN2 = lazy(() => import("././Ngo/pageN2a"));
const PageN4 = lazy(() => import("././Ngo/pageN4"));
const PageN5 = lazy(() => import("././Ngo/pageN5"));
const PageN6 = lazy(() => import("././Ngo/pageN6"));
const PageN7 = lazy(() => import("././Ngo/pageN7"));
const PageN9 = lazy(() => import("././Ngo/pageN9"));
const PageN10 = lazy(() => import("././Ngo/pageN10"));
const PageN10a = lazy(() => import("././Ngo/pageN10a"));
const PageN11 = lazy(() => import("././Ngo/pageN11"));
const PageN12 = lazy(() => import("././Ngo/pageN12"));
const PageN13 = lazy(() => import("././Ngo/pageN13"));
const PageN14a = lazy(() => import("././Ngo/pageN14a"));
const PageN14b = lazy(() => import("././Ngo/pageN14b"));

function displayNavbar() {
  const token = Cookies.get("token");

  if (token != null)
    return <Navbar />
  else
    return null
}

function displayFooter() {
  const token = Cookies.get("token");

  if (token != null)
    return <Footer1 />
  else
    return null
}

function App() {

  const fullAnotherSpeak = (text) => {
    responsiveVoice.speak(text, "Tamil Male");
  }

  return (
    <div>
      {/* <N10Navbar /> */}
      {displayNavbar()}
      <main className="main-content" id="google_translate_element" onDoubleClick={(e) => {
        fullAnotherSpeak(e.target.innerText)
      }} >

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/homepage2" element={<Homepage2 />} />
              <Route path="/landingPage" element={<LandingPage />} />
              <Route path="/aboutUs" element={<AboutUsPage />} />
              <Route path="/termsAndCondition" element={<TermsAndCondition />} />
              <Route path="/ReviewsForm" element={<ReviewsForm />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgetPasswordGetEmail" element={<ForgetPasswordGetEmail />} />
              <Route path="/verifyOTP" element={<VerifyOTP />} />
              <Route path="/forgetEnterNewPassword" element={<ForgetEnterNewPassword />} />
              <Route path="/resetpass" element={<ResetEnterNewPassword />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/NGOProfile" element={<NGOProfile />} />
              <Route path="/BuyerProfile" element={<BuyerProfile />} />
              <Route path="/FarmerProfile" element={<FarmerProfile />} />
              <Route path="/M0" element={<PageM0 />} />
              <Route path="/M1" element={<PageM1 />} />
              <Route path="/M2" element={<PageM2 />} />
              <Route path="/M3" element={<PageM3 />} />
              <Route path="/M4" element={<PageM4 />} />
              <Route path="/M5" element={<PageM5 />} />
              <Route path="/M6" element={<PageM6 />} />
              <Route path="/M7" element={<PageM7 />} />
              <Route path="/M9" element={<PageM9 />} />
              <Route path="/M10" element={<PageM10 />} />
              <Route path="/M10a" element={<PageM10a />} />
              <Route path="/M10b" element={<PageM10b />} />
              <Route path="/M10c" element={<PageM10c />} />
              <Route path="/M11" element={<PageM11 />} />
              <Route path="/M12" element={<PageM12 />} />
              <Route path="/M13" element={<PageM13 />} />
              <Route path="/M15" element={<PageM15 />} />
              <Route path="/M16" element={<PageM16 />} />
              <Route path="/M17" element={<PageM17 />} />
              <Route path="/M18" element={<PageM18 />} />
              <Route path="/M19" element={<PageM19 />} />
              <Route path="/N1" element={<PageN1 />} />
              <Route path="/N2" element={<PageN2 />} />
              <Route path="/N4" element={<PageN4 />} />
              <Route path="/N5" element={<PageN5 />} />
              <Route path="/N6" element={<PageN6 />} />
              <Route path="/N7" element={<PageN7 />} />
              <Route path="/N9" element={<PageN9 />} />
              <Route path="/N10" element={<PageN10 />} />
              <Route path="/N10a" element={<PageN10a />} />
              <Route path="/N11" element={<PageN11 />} />
              {/* <Route path="/N12" element={<PageN12 />} /> */}
              <Route path="/N12" element={<PageN12 />} />
              <Route path="/N13" element={<PageN13 />} />
              {/* <Route path="/N14" element={<PageN14 />} /> */}
              <Route path="/N14a" element={<PageN14a />} />
              <Route path="/N14b" element={<PageN14b />} />
              {/* <Route path="/mapngo" element={<Map/>} /> */}
              <Route path="/mapngo" element={<MainMap />} />
              <Route path="/cal" element={<Calendar />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/logoutAll" element={<LogoutAllDevice />} />
              <Route path="/vtt1" element={<Voicetotext />} />
              <Route path="/vtt" element={<Vtt />} />
              <Route path="/langtrans" element={<LangTranslate />} />
              <Route path="/voice" element={<Voice />} />
              <Route path="/cropRecommendation" element={<CropRecommendation />} />
              <Route path="/imageDetection" element={<ImageDetection />} />
              <Route path="web" element={<Web />} />
              <Route path="/ordersummary" />
              <Route path="/payments/success" element={<Success />} />
              <Route path="/payments/cancel" element={<Cancel />} />
              <Route path="/pdfprint" element={<PdfPrint />} />
            </Routes>
          </BrowserRouter>

        </main>


        <Footer1 />
        {displayFooter()}
      </div >
    </Suspense>
  );
}

export default App;