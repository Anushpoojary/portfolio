import { useEffect, useState } from "react";
import Loader from "../animations/Loader";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-all duration-300">
      <nav
        className={`px-6 py-3 rounded-full flex justify-between items-center shadow-md transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-700 text-white shadow-lg"
            : "bg-white/10 backdrop-blur-md text-white/90"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-4 font-bold text-sm sm:text-base">
          <div className="ml-10">
            <Loader />
          </div>
          <span>ANUSH POOJARY</span>
        </div>

        {/* Navigation Links — hidden on mobile */}
        <ul className="hidden sm:flex gap-6 text-sm sm:text-base font-light">
          <li>
            <a href="#home" className="hover:text-orange-400 transition-colors">
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-400 transition-colors"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-orange-400 transition-colors"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-orange-400 transition-colors"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-400 transition-colors"
            >
              CONNECT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
