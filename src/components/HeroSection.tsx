import { useEffect, useState, useRef } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Typed from "typed.js";

import main from "/MAIN.png";
import img2 from "/image 2.png";
import wix from "/Wix.png";
import img4 from "/image 4.png";
import img5 from "/image 5.png";
import img6 from "/image 6.png";
import img7 from "/image 7.png";
import img8 from "/image 8.png";
import img9 from "/image 9.png";
import img10 from "/image 10.png";
import img11 from "/image 11.png";
import img12 from "/image 12.png";
import img13 from "/image 13.png";

const rotatingImages: string[] = [
  img2,
  wix,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

// Rotating icon images
// const rotatingImages: string[] = [
//   "/image 2.png",
//   "/Wix.png",
//   "/image 4.png",
//   "/image 5.png",
//   "/image 6.png",
//   "/image 7.png",
//   "/image 8.png",
//   "/image 9.png",
//   "/image 10.png",
//   "/image 11.png",
//   "/image 12.png",
//   "/image 13.png",
// ];

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  const [angle, setAngle] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["UI/UX Designer", "Full-stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 1); // Speed control
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const radius =
    typeof window !== "undefined"
      ? isMobile
        ? 130 // mobile radius
        : 200 // slightly increased desktop radius
      : 100; // fallback

  const startAngle = isMobile ? 120 : 100;
  const endAngle = isMobile ? 240 : 260;

  // For desktop, we'll show fewer icons to increase spacing
  const visibleIconCount = isMobile ? rotatingImages.length : 10;
  const iconsToShow = rotatingImages.slice(0, visibleIconCount);

  const rotatingIcons = iconsToShow
    .map((src, i) => {
      const total = visibleIconCount;
      const angleOffset = (360 / total) * i + angle;
      const normalizedAngle = (angleOffset + 360) % 360;

      if (normalizedAngle > startAngle && normalizedAngle < endAngle) {
        const rad = (angleOffset * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${x - 30}px, ${y - 30}px)`,
            }}
            className="transition-all duration-75 ease-linear hover:scale-110"
          >
            <img
              src={src}
              alt={`icon-${i}`}
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] object-contain"
            />
          </div>
        );
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div id="home">
      <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-4">
        {/* Background stripes */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.05)_0px,_rgba(255,255,255,0.05)_1px,_transparent_1px,_transparent_20px)] scale-[2] mx-auto z-0" />

        {/* Watermark text */}
        <h1 className="absolute top-[3%] sm:top-[5%] left-1/2 transform -translate-x-1/2 text-[1.8rem] xs:text-[2.2rem] sm:text-[4rem] md:text-[7rem] font-bold text-white/15 tracking-widest z-10 mt-10">
          {" "}
          PORTFOLIO{" "}
        </h1>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-6xl pt-16 sm:pt-20 md:pt-36 gap-6 md:flex-row">
          {/* Left side */}
          <div className="text-center md:text-left mb-8 sm:mb-14 md:mt-20 flex-1 order-2 md:order-1 px-2">
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-center text-white tracking-wide leading-tight">
              ANUSH POOJARY
            </h2>
            <span
              className="text-cyan-300 mt-2 sm:mt-3 text-center md:text-center md:ml-40 tracking-widest text-base xs:text-lg sm:text-lg md:text-2xl font-medium px-2 inline-block"
              ref={typedRef}
            ></span>

            <p className="mt-4 sm:mt-6 text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-center leading-relaxed text-sm xs:text-base sm:text-base md:text-lg px-4 sm:px-2">
              UI/UX Designer & Full-stack Developer! craft beautiful,
              responsive, and user-friendly web applications. With a passion for
              clean code and innovative design, I bring ideas to life in the
              digital realm
            </p>

            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center px-4 sm:px-0">
              <a href="#projects">
                <button className="bg-white text-purple-600 px-6 xs:px-8 py-2.5 xs:py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2 w-full xs:w-auto justify-center">
                  <span className="text-purple-600 font-bold">&lt;/&gt;</span>
                  <span className="text-purple-600">View My Work</span>
                </button>
              </a>
              <a href="#contact">
                <button className="border-2 border-white text-white px-6 xs:px-8 py-2.5 xs:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full xs:w-auto">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 relative order-1 md:order-2 flex flex-col items-center md:items-start">
            {/* Image + Social icons wrapper → moves only in desktop */}
            <div className="-translate-x-12 md:translate-x-40">
              <div className="relative z-10 -mt-4 xs:-mt-6 sm:-mt-8 md:mt-0">
                <img
                  src={main}
                  alt="Profile"
                  className="rounded-xl w-[140px] h-[180px] xs:w-[160px] xs:h-[200px] sm:w-[180px] sm:h-[240px] md:w-[280px] md:h-[360px] object-cover"
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 xs:gap-4 mt-4 sm:mt-6 text-lg xs:text-xl justify-center md:justify-start md:ml-20">
                <a
                  href="https://www.instagram.com/anush_poojary49?igsh=b2J3ZnVhbTJnbXVy&utm_source=qr"
                  className="hover:text-pink-400 transition-colors duration-200"
                >
                  <FaInstagram size={20} className="xs:w-6 xs:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anush-587a062a2"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  <FaLinkedin size={20} className="xs:w-6 xs:h-6" />
                </a>
                <a
                  href="https://github.com/Anushpoojary"
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  <FaGithub size={20} className="xs:w-6 xs:h-6" />
                </a>
                <a
                  href="mailto:anushajarkateel@gmail.com"
                  className="hover:text-red-400 transition-colors duration-200"
                >
                  <FaEnvelope size={20} className="xs:w-6 xs:h-6" />
                </a>
              </div>
            </div>

            {/* Rotating Icons → unaffected */}
            <div className="hidden md:block absolute w-full h-full left-[420px] top-0">
              {hasMounted && (
                <div className="absolute inset-0">{rotatingIcons}</div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Floating Animation */}
        <div className="absolute -right-20 xs:-right-24 sm:-right-28 top-[240px] xs:top-[260px] sm:top-[280px] -translate-y-1/2 w-[140px] h-[140px] xs:w-[150px] xs:h-[150px] sm:w-[160px] sm:h-[160px] z-10 md:hidden">
          {hasMounted && (
            <div className="absolute inset-0 ml-1 xs:ml-2">{rotatingIcons}</div>
          )}
        </div>
      </section>
    </div>
  );
}
