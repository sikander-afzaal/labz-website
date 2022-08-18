import "./App.css";
import { gsap, Sine, Expo } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Layout/Header/Header";
import Hero from "./Sections/Hero";
import ProductExamples from "./Sections/ProductExamples";
import Slider from "./Sections/Slider";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const fourthTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(".fourth-section"),
        start: "top 70%",
      },
    });
    fourthTimeline
      .to(
        [
          document.querySelector(".left-fourth"),
          document.querySelector(".text-fourth"),
        ],
        {
          opacity: 1,
          rotateX: 0,
          rotationY: 0,
          rotateZ: 0,
          duration: 1,
          stagger: 0.2,
        },
        "start"
      )
      .to(
        document.querySelectorAll(".second-bottom h1"),
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          duration: 1,
          stagger: 0.2,
          x: 0,
          z: 0,
          ease: Sine.easeOut,
          delay: 1,
        },
        "start"
      )
      .to(document.querySelectorAll(".line-col"), {
        opacity: 1,
        stagger: 0.5,
        duration: 0.6,
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductExamples />
      <Slider />
      <div className="fourth-section">
        <div className="left-fourth">
          <h4>
            THINK GLOBAL, <br /> LIVE LOCAL
          </h4>
        </div>
        <div className="right-fourth">
          <div className="text-fourth">
            <h2>WORK ALL ◑VER THE WORLD</h2>
            <h2>
              WITH PEOPLE FROM ALL WALKS ❂F LIFE, RELIGIONS AND CULTURES. MIX IS
              OUR STRENGTH.
            </h2>
          </div>
          <div className="line-row">
            <div className="line-col">
              <p>01</p>
              <h4>WE INVEST IN POWERFUL RELATIONSHIPS WITH OUR CLIENTS</h4>
            </div>
            <div className="line-col">
              <p>02</p>
              <h4>
                WE DON’T LOOK AT OUR CLIENTS AS EXTERNAL FORCES – WE ACT AS
                THOUGH WE’RE PART OF A TEAM. WITHIN THIS TEAM, WE’RE WORKING
                TOWARDS THE SAME GOAL – A BEAUTIFULLY EXECUTED DIGITAL PROJECT
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
