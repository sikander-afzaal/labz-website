import "./App.css";
import { gsap, Sine, Expo } from "gsap";
import { useLayoutEffect } from "react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import Header from "./Layout/Header/Header";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(CSSRulePlugin);
    const firstSectionBeforeRule = CSSRulePlugin.getRule(
      ".first-section::before"
    );
    const section1Timeline = gsap.timeline();
    section1Timeline
      .to(document.querySelectorAll(".first-h1"), {
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        duration: 1.2,
        delay: 2,
        stagger: 0.2,
        x: 0,
        z: 0,
        ease: Sine.easeOut,
      })
      .to(document.querySelector(".text-row"), { opacity: 1, y: 0 })
      .to(firstSectionBeforeRule, {
        ease: Expo.easeOut,
        duration: 2,
        cssRule: { scaleX: "1" },
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="first-section">
        <h1 className="first-h1">ENGINEERING </h1>
        <h1 className="first-h1">AESTHETICS</h1>
        <h1 className="first-h1">OF DIGITAL</h1>
        <div className="text-part">
          <h1 className="first-h1">Products</h1>
          <div className="text-row">
            <div className="col">
              <p>
                ARTEM MARKOVSKY <br /> INDEPENDENT ART DIRECTOR <br /> &
                MULTIDISCIPLINARY DESIGNER
              </p>
            </div>
            <div className="col">
              <p>
                BRANDING & UX <br /> DESIGN BOUTIQUE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
