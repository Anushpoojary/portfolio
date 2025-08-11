import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t border-white border-opacity-20">
      <footer className="bg-black text-white text-center py-10">
        {/* Back to Top */}
        <div className="mb-6">
          <a href="#" className="text-white text-sm tracking-widest">
            <div className="text-2xl mb-1">⌃</div>
            BACK TO TOP
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-6 text-white text-2xl">
          <a
            href="https://github.com/Anushpoojary"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anush-587a062a2"
            className="hover:text-blue-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/anush_poojary49?igsh=b2J3ZnVhbTJnbXVy&utm_source=qr"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:anushajarkateel@gmail.com"
            className="hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-sm">
          <span className="text-white">@2025 </span>
          <span className="text-cyan-400 font-semibold">Anush poojary</span>
          <span className="text-white"> All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
