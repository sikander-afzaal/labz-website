import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import "./Header.css";
function Header() {
  useEffect(() => {
    const timelineHeader = gsap.timeline();
    gsap.registerPlugin(CSSRulePlugin);
    const headerBeforeRule = CSSRulePlugin.getRule(".header::before");
    timelineHeader
      .to(
        [
          document.querySelector(".header h1"),
          document.querySelector(".navLinks"),
        ],
        { duration: 1.5, y: 0, opacity: 1 }
      )
      .to(headerBeforeRule, {
        ease: Expo.easeOut,
        duration: 2,
        cssRule: { scaleX: "1" },
      });
  }, []);

  return (
    <div className="header">
      <h1>Yuga</h1>
      <div className="navLinks">
        <a className="active" href="#">
          Solutions
        </a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Header;
