import React from "react";
import { gsap, Expo, Sine } from "gsap";
import { useLayoutEffect } from "react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../Assets/second.svg";
import "./styles/ProductExamples.css";
function ProductExamples() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
    const secondSectionBeforeRule = CSSRulePlugin.getRule(
      ".second-section::before"
    );
    const secondTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(".second-section"),
        start: "top 30%",
      },
    });
    secondTimeline
      .to(
        [
          document.querySelector(".left-second"),
          document.querySelector(".right-second"),
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
      .to(secondSectionBeforeRule, {
        ease: Expo.easeOut,
        duration: 2,
        cssRule: { scaleX: "1" },
      });
  }, []);
  return (
    <div className="second-section">
      <div className="second-row">
        <div className="left-second">
          <p>
            WE USE INNOVATIVE SOLUTIONS, PRODUCT APPROACH AND HUMAN
            COMMUNICATION
          </p>
          <img src={img} alt="" />
        </div>
        <div className="right-second">
          <h2>TurnKey solutions for nft and crypto projects,</h2>
          <h2>
            commited to seeing exactly how far down the rabbit hole web3 and the
            metaverse can take us all.
          </h2>
        </div>
      </div>
      <div className="second-bottom">
        <h1>Product</h1>
        <h1>Examples</h1>
      </div>
    </div>
  );
}

export default ProductExamples;
