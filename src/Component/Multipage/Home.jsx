import React, { useState } from "react";

import Home1 from "../Home_com/Home1";
import Home2 from "../Home_com/Home2";
import Home3 from "../Home_com/Home3";
import Home4 from "../Home_com/Home4";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import Bady from "../../assets/Bady.png";

import useScrollAnimation from "../../hooks/useScrollAnimation";

const Home = () => {
  const [val] = useState([
    {
      img: img1,
      mag1: "Infrastructure Projects",
      mag2:
        "Highways, Railways, Airports, Industrial Corridor View Projects →",
    },
    {
      img: img2,
      mag1: "State-wise Overview",
      mag2:
        "Explore land acquisition status by Stairs View States →",
    },
    {
      img: img3,
      mag1: "Grievance Redressal",
      mag2:
        "Lodge your grievance and track status View Grievance →",
    },
    {
      img: img4,
      mag1: "Public Information",
      mag2:
        "Access public dashboard and key statistics View Dashboard →",
    },
    {
      img: img5,
      mag1: "Documents & Resources",
      mag2:
        "Guidelines, Acts, Circulars and Manuals View Resources →",
    },
  ]);

  // Animation refs
  const [home1Ref, home1Visible] = useScrollAnimation();
  const [home2Ref, home2Visible] = useScrollAnimation();
  const [home3Ref, home3Visible] = useScrollAnimation();
  const [home4Ref, home4Visible] = useScrollAnimation();

  return (
    <div className={`overflow-hidden`}>

      {/* ================= HERO ================= */}

      <div  className={`border-t-2 border-l-2 border-r-2 border-black `}>
        <img
          src={Bady}
          alt="BhoomiSetu"
          className="w-full"
        />
      </div>


      {/* ================= HOME 1 ================= */}

      <div
        ref={home1Ref}
        className={home1Visible ? "scroll-left" : "scroll-hidden"}
      >
        <Home1 />
      </div>


      {/* ================= HOME 2 ================= */}

      <div
        ref={home2Ref}
        className={home2Visible ? "scroll-right" : "scroll-hidden"}
      >
        <Home2 />
      </div>


      {/* ================= HOME 3 ================= */}

      <div
        ref={home3Ref}
        className={home3Visible ? "scroll-up" : "scroll-hidden"}
      >
        <Home3 />
      </div>


      {/* ================= HOME 4 ================= */}

      <div
        ref={home4Ref}
        className={home4Visible ? "scroll-up" : "scroll-hidden"}
      >

        <div
          className="
            w-full
            overflow-x-auto
            scrollbar-thin
            scrollbar-thumb-sky-700
            scrollbar-track-sky-100
          "
        >

          <div
            className="
              flex
              flex-row
              flex-nowrap
              justify-center
              gap-7
              py-4
              min-w-max
            "
          >

            {val.map((item, index) => (
              <div
                key={index}
                className="scroll-zoom"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                <Home4 data={item} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;