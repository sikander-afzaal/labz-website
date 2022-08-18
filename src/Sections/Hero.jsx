import React from "react";
import { gsap, Sine, Expo } from "gsap";
import { useLayoutEffect } from "react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import img from "../Assets/Labz gif.gif";

import "./styles/Hero.css";

function Hero() {
  useLayoutEffect(() => {
    gsap.registerPlugin(CSSRulePlugin);
    const firstSectionBeforeRule = CSSRulePlugin.getRule(
      ".first-section::before"
    );
    const section1Timeline = gsap.timeline();
    const para = document.querySelectorAll(".first-section p span");
    const gif = document.querySelector(".first-section img");
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
      .to(para, { opacity: 1, y: 0, x: 0, stagger: 0.2 })
      .to(firstSectionBeforeRule, {
        ease: Expo.easeOut,
        duration: 2,
        cssRule: { scaleX: "1" },
      })
      .to(gif, { opacity: 0.5 });
  }, []);
  return (
    <div className="first-section">
      <img src={img} alt="" />
      <h1 className="first-h1">WEB3 Project</h1>
      <h1 className="first-h1">Design & Build</h1>
      <h1 className="first-h1">Inovations</h1>
      <p>
        <span>TURNKEY</span> <span>SOLUTIONS</span> <span>FOR</span>{" "}
        <span>NFT</span> <span>AND</span> <span>CRYPTO</span>{" "}
        <span>PROJECTS</span> <span>, COMMITED</span> <span>TO</span>{" "}
        <span>SEEING</span> <span>EXACTLY</span> <span>HOW</span>{" "}
        <span>FAR</span> <span>DOWN</span> <span>THE</span> <span>RABBIT</span>{" "}
        <span>HOLE</span> <span>WEB3</span> <span>AND</span> <span>THE</span>{" "}
        <span>METAVERSE</span> <span>CAN</span> <span>TAKE</span>{" "}
        <span>US</span> <span>ALL.</span>{" "}
      </p>
    </div>
  );
}

export default Hero;
