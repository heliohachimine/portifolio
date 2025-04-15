import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled ? "backdrop-blur bg-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Helio</h1>
        <nav className="flex gap-6 text-white text-sm md:text-base">
          <a href="#skills" className="hover:text-blue-300 transition">Habilidades</a>
          <Link to="/experience" className="hover:text-blue-300 transition">Experiências</Link>
          <a href="#contact" className="hover:text-blue-300 transition">Contato</a>
        </nav>
      </div>
    </header>
  );
}
