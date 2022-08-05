import React from "react";
import { gsap, Sine, Expo } from "gsap";
import { useLayoutEffect } from "react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import "./styles/Hero.css";

function Hero() {
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
      .to(firstSectionBeforeRule, {
        ease: Expo.easeOut,
        duration: 2,
        cssRule: { scaleX: "1" },
      });
  }, []);
  return (
    <div className="first-section">
      <h1 className="first-h1">WEB3 Project</h1>
      <h1 className="first-h1">Design &</h1>
      <h1 className="first-h1">Build</h1>
      <h1 className="first-h1">Inovations</h1>
    </div>
  );
}

export default Hero;
