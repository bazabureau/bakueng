import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import roundcubeLogo from "../../partners/roundcube.png";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement | null>(null);

  const languages = [
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "AZ", name: "Azərbaycan", flag: "🇦🇿" },
    { code: "RU", name: "Русский", flag: "🇷🇺" },
    { code: "TR", name: "Türkçe", flag: "🇹🇷" },
  ];

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Expose the current header height as a CSS variable so content can offset correctly
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) {
        return;
      }
      const { height } = headerRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    const { height } = headerRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty("--header-height", `${height}px`);
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", href: "#/home", page: "home" },
    { label: "About", href: "#/about", page: "about" },
    { label: "Products", href: "#/products", page: "products" },
    { label: "Catalogs", href: "#/catalogs", page: "catalogs" },
    { label: "Certifications", href: "#/certifications", page: "certifications" },
    { label: "Contact", href: "#/contact", page: "contact" },
  ];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="border-b border-gray-100 py-2 hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+994124526855" className="flex items-center gap-2 text-gray-600 hover:text-[#EB791B] transition-colors duration-240">
              <Phone className="w-4 h-4" />
              <span>+994 (012) 452 68 55</span>
            </a>
            <a href="mailto:sales@bakuengineering.com" className="flex items-center gap-2 text-gray-600 hover:text-[#EB791B] transition-colors duration-240">
              <Mail className="w-4 h-4" />
              <span>sales@bakuengineering.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.24 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#EB791B] hover:bg-[#EB791B]/5 text-gray-700 hover:text-[#EB791B] transition-all duration-240"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{currentLanguage}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mt-2">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.code)}
                    className={`flex items-center gap-3 cursor-pointer ${
                      currentLanguage === lang.code
                        ? "bg-[#EB791B]/10 text-[#EB791B]"
                        : ""
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <span className="ml-auto text-[#EB791B]">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-2">
              <span className="text-gray-500">Follow us:</span>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#EB791B] hover:text-white text-gray-600 transition-all duration-240" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="#/home"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.24 }}
          >
            <img src={roundcubeLogo} alt="Roundcube" className="h-12 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-240 relative group ${
                  currentPage === item.page
                    ? "text-[#EB791B]"
                    : "text-gray-700 hover:text-[#EB791B]"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.24 }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#EB791B] transition-all duration-300 ${
                    currentPage === item.page ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="transition-all duration-240 hover:scale-105"
              onClick={() => (window.location.hash = "#/contact")}
            >
              Request Quote
            </Button>
            <Button
              className="bg-[#EB791B] hover:bg-[#D36D17] transition-all duration-240 hover:scale-105 hover:shadow-lg"
              onClick={() => (window.location.hash = "#/contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#EB791B] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
      >
        <nav className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
              className="block py-2 text-gray-700 hover:text-[#EB791B] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="pt-4 space-y-3 border-t border-gray-100">
            {/* Language Switcher - Mobile */}
            <div className="pb-3">
              <span className="text-gray-500 text-sm mb-2 block">Language</span>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentLanguage(lang.code)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-240 ${
                      currentLanguage === lang.code
                        ? "border-[#EB791B] bg-[#EB791B]/10 text-[#EB791B]"
                        : "border-gray-200 hover:border-[#EB791B] text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.code}</span>
                    {currentLanguage === lang.code && (
                      <span className="ml-auto text-[#EB791B] text-sm">✓</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                window.location.hash = "#/contact";
                setIsMenuOpen(false);
              }}
            >
              Request Quote
            </Button>
            <Button
              className="w-full bg-[#EB791B] hover:bg-[#D36D17]"
              onClick={() => {
                window.location.hash = "#/contact";
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
