import React, { useLayoutEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/Slider.css";
function Slider() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const btn = document.querySelector(".cases");
    gsap.to(btn, {
      scrollTrigger: {
        trigger: document.querySelector(".slider-wrapper"),
        start: "bottom bottom",
        end: "+=2000",
        scrub: true,
      },
      x: "0%",
    });
  }, []);
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider-div">
          <Splide
            options={{
              type: "loop",
              width: "100%",
              arrows: false,
              pagination: false,
              perPage: "3",
              autoScroll: {
                speed: 2,
                pauseOnFocus: false,
                pauseOnHover: false,
              },
              breakpoints: {
                750: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
          </Splide>
        </div>
        <div className="slider-div">
          <Splide
            options={{
              type: "loop",
              width: "100%",
              arrows: false,
              pagination: false,
              perPage: "3",
              direction: "rtl",
              autoScroll: {
                speed: 2,
                pauseOnFocus: false,
                pauseOnHover: false,
              },
              breakpoints: {
                750: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
          </Splide>
        </div>
        <div className="slider-div">
          <Splide
            options={{
              type: "loop",
              width: "100%",
              arrows: false,
              pagination: false,
              perPage: "3",
              autoScroll: {
                speed: 2,
                pauseOnFocus: false,
                pauseOnHover: false,
              },
              breakpoints: {
                750: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
          </Splide>
        </div>
        <div className="slider-div">
          <Splide
            options={{
              type: "loop",
              width: "100%",
              arrows: false,
              pagination: false,
              perPage: "3",
              direction: "rtl",
              autoScroll: {
                speed: 2,
                pauseOnFocus: false,
                pauseOnHover: false,
              },
              breakpoints: {
                750: {
                  perPage: 1,
                  gap: "1rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
            <SplideSlide>
              <h1>TESHIMA</h1>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <button className="cases">All cases</button>
    </>
  );
}

export default Slider;
