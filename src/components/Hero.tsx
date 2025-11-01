import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CheckCircle2, Award, Users, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MechanicalGears } from "./MechanicalGears";
import { BlueprintGrid } from "./BlueprintGrid";
import { TechnicalScanline } from "./TechnicalScanline";
import { MechanicalCounter } from "./MechanicalCounter";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Package, value: "10+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "B2B Clients" },
  { icon: Award, value: "ISO 9001", label: "Certified" },
  { icon: CheckCircle2, value: "High", label: "Quality" },
];

const badges = [
  "High Quality",
  "Experienced Team",
  "Operational Service",
  "ISO 9001:2015",
  "Trusted Partner",
];

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setEnableParallax(false);
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setEnableParallax(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-24 md:pb-24"
    >
      {/* Parallax Background */}
      <motion.div
        style={enableParallax ? { y } : undefined}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={heroImage}
          alt="Industrial engineering facility"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/60" />
      </motion.div>

      {/* Mechanical Gears Background */}
      <MechanicalGears className="hidden md:block" />

      {/* Blueprint Grid */}
      <BlueprintGrid className="hidden md:block" />

      {/* Technical Scanline */}
      <TechnicalScanline className="hidden md:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <motion.div
          style={enableParallax ? { opacity } : undefined}
          className="max-w-4xl"
        >
          {/* Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2.5 mb-10 sm:mb-12"
            role="list"
            aria-label="Certifications and credentials"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.08 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                role="listitem"
              >
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-240 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                  {badge}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Content */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white mb-6 sm:mb-8 drop-shadow-lg leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Baku Engineering Supplies LTD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-200 mb-10 sm:mb-12 max-w-2xl text-lg sm:text-xl leading-relaxed"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
          >
            Providing high-quality industrial products with certificates. Our professional team delivers operational service with over 10 years of work experience, offering clamping, screws, safety glass, valves, bolts, and more to all locations worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-16 sm:mb-20"
          >
            <Button
              size="lg"
              className="bg-[#EB791B] hover:bg-[#D36D17] transition-all duration-240 hover:scale-105 hover:shadow-2xl shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 w-full sm:w-auto text-base sm:text-lg px-8 py-6"
              aria-label="Browse our product catalog"
            >
              Browse Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-240 hover:scale-105 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 w-full sm:w-auto text-base sm:text-lg px-8 py-6"
              aria-label="Request product catalog"
            >
              Request Catalog
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            role="list"
            aria-label="Company statistics"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 sm:p-6 transition-all duration-240 hover:bg-white/10 hover:border-white/20 hover:shadow-lg relative overflow-hidden cursor-default group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  tabIndex={0}
                  role="listitem"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {/* Rotating icon */}
                  <motion.div
                    className="group-hover:rotate-[360deg] transition-transform duration-600 ease-in-out"
                  >
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-orange-400 mb-3 sm:mb-4" />
                  </motion.div>
                  <div className="text-white mb-1 sm:mb-2 text-xl sm:text-2xl">
                    <MechanicalCounter value={stat.value} duration={1.5 + index * 0.2} />
                  </div>
                  <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
                  
                  {/* Bolt corners */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-orange-500/30" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-orange-500/30" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-orange-500/30" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-orange-500/30" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20"
        role="button"
        aria-label="Scroll down to view more content"
        tabIndex={0}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 border-2 border-white/40 rounded-full flex items-start justify-center p-2 hover:border-white/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        >
          <motion.div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
