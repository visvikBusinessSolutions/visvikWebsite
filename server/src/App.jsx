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
import Admin from "./Admin/ADMIN.JSX";
import AboutUs from "./component/pages/AboutUs.jsx";
import Devops from "./component/pages/devops.jsx";
import Software from "./component/pages/software.jsx";
import Native from "./component/pages/native_app.jsx";
import Aws from "./component/pages/aws.jsx";
import Cyber from "./component/pages/cybersecurity.jsx";

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
          <Route path="Careers" element={""} />
          <Route path="Team" element={""} />
          <Route path="contact" element={<Contact />} />
          <Route path="devops" element={<Devops />} />
          <Route path="website" element={<Website />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="software" element={<Software />} />
          <Route path="app" element={<Native />} />
          <Route path="aws" element={<Aws />} />
          <Route path="cyber" element={<Cyber />} />
        </Route>

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
