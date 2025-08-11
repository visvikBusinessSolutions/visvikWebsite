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
          <Route path="aws" element={<Aws />} />
          <Route path="devops" element={<Devops />} />
          <Route path="website" element={<Website />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="software" element={<Software />} />
          <Route path="app" element={<Native />} />
          <Route path="cybersercurity" element={<Cyber />} />
          {/* <Route path="genrativeai" element={<Genrative />} /> */}
          <Route path="digitalmarketing" element={<Digital_marketing />} />
          <Route path="ui&ux" element={<UI />} />

          {/* temprary work */}
          <Route path="temp" element={<Desing_Page />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms&conditons" element={<Tremscondition />} />
        </Route>

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
