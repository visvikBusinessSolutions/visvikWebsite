import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import Layout from "./component/layout/layout.jsx";
import Home from "./component/Home.jsx";
import Login from "./component/pages/Login.jsx";
import Contact from "./component/pages/contact/Contact.jsx";
import Website from "./component/pages/website.jsx";
import Mobile from "./component/pages/mobile.jsx";

import Admin from "./Admin/admin.jsx";
import AboutUs from "./component/pages/AboutUs.jsx";
import Devops from "./component/pages/devops.jsx";
import Software from "./component/pages/software.jsx";
import Native from "./component/pages/native_app.jsx";
import Aws from "./component/pages/aws.jsx";
import Cyber from "./component/pages/cybersecurity.jsx";
import Careers from "./component/pages/carrer.jsx";
import Digital_marketing from "./component/pages/digital-merketing.jsx";
import UI from "./component/pages/ui&ux.jsx";
import Desing_Page from "./component/pages/desing-page.jsx";
import Privacy from "./component/pages/privacy.jsx";
import Tremscondition from "./component/pages/trems&condition.jsx";
import Crossplatform from "./component/pages/crossplatform.jsx";
import Iotdevelopment from "./component/pages/iot_development.jsx";
import Digital_Transformation from "./component/pages/digital_transfromation.jsx";
import Manageitsevices from "./component/pages/manageitsevices.jsx";
import Streamingsevices from "./component/pages/streamingservices.jsx";
import Cloudservices from "./component/pages/cloudengineering.jsx";
import TeamPage from "./component/pages/TeamPage.jsx";
import Website_Contant from "./contant/website-contant.jsx";
import Mobile_contant from "./contant/mobile-contant.jsx";
import SoftwareDevelopmentServices from "./contant/software-contant.jsx";
import Digital_contant from "./contant/digital-contant.jsx";
import CloudDevOpsServices from "./contant/devops-contant.jsx";
import Seo from "./contant/seo-contant.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="Service" element={""} />
          <Route path="careers" element={<Careers />} />
          <Route path="Team" element={""} />
          <Route path="contact" element={<Contact />} />
          {/* megamenu ka ai wala */}
          <Route path="aws" element={<Aws />} />
          <Route path="cybersercurity" element={<Cyber />} />
          <Route path="devops" element={<Devops />} />
          {/* megamenu ka design wala */}
          <Route path="mobile" element={<Mobile />} />
          <Route path="app" element={<Native />} />
          <Route path="software" element={<Software />} />
          <Route
            path="cross_platform_development"
            element={<Crossplatform />}
          />
          <Route path="iot_development" element={<Iotdevelopment />} />
          <Route path="ui&ux" element={<UI />} />
          <Route path="website" element={<Website />} />
          {/* Digital and it services wala */}
          <Route
            path="digitaltransformation"
            element={<Digital_Transformation />}
          />
          <Route path="managed_it_services" element={<Manageitsevices />} />
          <Route path="streaming_services" element={<Streamingsevices />} />
          <Route
            path="digital_marketing-services"
            element={<Digital_marketing />}
          />
          <Route path="cloud_engineering" element={<Cloudservices />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms&conditons" element={<Tremscondition />} />
          <Route path="TeamPage" element={<TeamPage />} />
          {/* All contant link */}
          <Route path="website-contant" element={<Website_Contant />} />
          <Route path="mobile-contant" element={<Mobile_contant />} />
          <Route
            path="software-contant"
            element={<SoftwareDevelopmentServices />}
          />
          <Route path="digital-contant" element={<Digital_contant />} />
          <Route path="devops-contant" element={<CloudDevOpsServices />} />
          <Route path="Seo" element={<Seo />} />

          {/* temprary work */}
          <Route path="temp" element={<Desing_Page />} />
        </Route>

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
