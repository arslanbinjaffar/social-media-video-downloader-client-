import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import {
  Blog,
  ContactUs,
  AboutUs,
  FAQs,
  TermsAndConditions,
  PrivacyPolicy,
  Home,
} from "./Pages/index";
import Footer from "./components/Layout/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <div className={styles["main-div"]}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blog/:title" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
