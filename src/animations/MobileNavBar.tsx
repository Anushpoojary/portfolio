import { useEffect, useState } from "react";
import {
  IoMdBriefcase,
  IoMdContact,
  IoMdHome,
  IoMdInformationCircle,
} from "react-icons/io";
import { scrollToSection } from "../components/HeroSection";

const MobileNavBar = () => {
  type MenuItem = {
    icon: React.ReactNode;
    name: string;
    href: string;
  };

  const MenuBar: MenuItem[] = [
    {
      icon: <IoMdHome size={20} />,
      name: "Home",
      href: "#home",
    },
    {
      icon: <IoMdContact size={20} />,
      name: "About",
      href: "#about",
    },
    {
      icon: <IoMdInformationCircle size={20} />,
      name: "Projects",
      href: "#projects",
    },
    {
      icon: <IoMdBriefcase size={20} />,
      name: "Contact",
      href: "#contact",
    },
  ];

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[90%] flex items-center justify-center md:hidden">
      <div
        className={`h-10 bg-gradient-to-r from-[#0c0f19] via-[#1a1d2a] to-[#2a2e42] fixed bottom-10 z-10 w-80 flex justify-between items-center px-4 rounded-md border-[#4b5563] border-2 shadow-[0_4px_10px_rgba(75,85,99,0.7)] transition-transform duration-500 ${
          showNav ? "translate-y-0" : "translate-y-20"
        }`}
      >
        {MenuBar.map((menu, index) => (
          <a
            key={index}
            href={menu.href}
            className="text-white"
            onClick={(e) => {
              e.preventDefault(); // prevent instant jump
              scrollToSection(menu.name.toLowerCase()); // smooth scroll
            }}
          >
            {menu.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
