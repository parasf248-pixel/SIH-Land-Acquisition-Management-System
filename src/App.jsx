import React, { useState } from "react";
import Home from "./Component/Multipage/Home";
import About from "./Component/Multipage/About";
import Contact from "./Component/Multipage/Contact";
import DaskBoard from "./Component/Multipage/DaskBoard";
import Resources from './Component/Multipage/Resources';
import Header from "./Component/first_second/header";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "./Component/first_second/foother";
import Login from "./Component/Login";
import LandInformationForm from "./Component/Multipage/LandInformationForm";
import HowItWorks from "./Component/Multipage/How";
import FAQ from "./Component/Multipage/Faq";
import Projects from "./Component/Multipage/Project";
import Dask1 from "./DaskBoard/Dask1";
import Dask3 from "./DaskBoard/Dask3";
import Dask4 from "./DaskBoard/Dask4";
import Dask5 from "./DaskBoard/Dask5";
import PlotMap from "./Component/PlotMap";
import Dask6 from "./DaskBoard/Dask6";
import Profile from "./DaskBoard/profile";
import SellProperty from "./DaskBoard/SellProperty";

const App = () => {

  // Login data
  const [val, setVal] = useState(false);

  // Land data
  const [usedata, setUsedata] = useState(null);

  // Receive login data
  const receiveData = (data) => {
    console.log("LOGIN DATA RECEIVED IN APP:", data);
    setVal(data);
  };

  // Receive land form data
  const funData = (data) => {
    console.log("LAND DATA RECEIVED IN APP:", data);

    // THIS stores the form data in App
    setUsedata(data);
  };

  console.log("App Login:", val);
  console.log("App Land Data:", usedata);

  return (
    <div className="bg-white text-black min-h-screen text-white">

      <Header data={val} />

      <ErrorBoundary fallback={<div>Something went wrong.</div>}>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* LOGIN */}
          <Route
            path="/Login"
            element={
              <Login sendData={receiveData} />
            }
          />
          <Route
            path="/Dask1"
            element={
              <Dask1 />
            }
          />
          <Route
            path="/Dask3"
            element={
              <Dask3/>
            }
          />
          <Route
            path="/Dask4"
            element={
              <Dask4/>
            }
          />
          <Route
            path="/Dask5"
            element={
              <Dask5/>
            }
          />
          
          <Route
            path="/Dask5"
            element={
              <Dask5/>
            }
          />
          <Route
            path="/Profile"
            element={
              <Profile/>
            }
          />
          <Route
            path="/sell"
            element={
              <SellProperty />
            }
          />
          <Route
            path="/Dask6"
            element={
              <Dask6/>
            }
          />
          {/* Map */}
            <Route
            path="/PlotMap"
            element={
              <PlotMap />
            }
          />
          {/* LAND FORM */}
          <Route
            path="/land-information"
            element={
              <LandInformationForm
                sendData={funData}
              />
            }
          />

          {/* DASHBOARD */}
          <Route
            path="/DaskBoard"
            element={
              <DaskBoard
                login={val}
                useda={usedata}
              />
            }
          />

          {/* RESOURCES */}
          <Route
            path="/Resources"
            element={<Resources />}
          />

          {/* ABOUT */}
          <Route
            path="/About"
            element={<About />}
          />

          {/* CONTACT */}
          <Route
            path="/Contact"
            element={<Contact />}
          />
          <Route
            path="/How"
            element={<HowItWorks/>}
          />
           <Route
            path="/FAQ"
            element={<FAQ/>}
          />
          <Route
          path="/Projects"
          element={<Projects />}/>

        </Routes>

      </ErrorBoundary>

      <Footer />

    </div>
  );
};

export default App;