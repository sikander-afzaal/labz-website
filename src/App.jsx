import "./App.css";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import Header from "./Layout/Header/Header";
import Hero from "./Sections/Hero";
import ProductExamples from "./Sections/ProductExamples";

function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
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
    <div className="App">
      <Header />
      <Hero />
      <ProductExamples />
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
    </div>
  );
}

export default App;
