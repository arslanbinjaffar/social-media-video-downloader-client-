import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import UserInput from "./components/UserInput/UserInput";
import IndexMessage from "./components/Layout/IndexMessage";
import Footer from "./components/Layout/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className={styles["main-div"]}>
        <Header />
        <Routes>
          <Route index element={<>
            <>
        <IndexMessage />
        <UserInput />
            </>
          </>} />
          <Route path="/about" element={ <></>} />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
