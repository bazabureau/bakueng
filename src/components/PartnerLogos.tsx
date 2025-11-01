import { motion } from "motion/react";
import { useEffect, useState } from "react";

const partners = [
  { name: "SOCAR", category: "Oil & Gas" },
  { name: "Alstom", category: "Energy" },
  { name: "Wärtsilä", category: "Marine" },
  { name: "Prokon", category: "Engineering" },
  { name: "Glensol", category: "Energy" },
  { name: "Azfen", category: "Construction" },
  { name: "Tekfen", category: "Construction" },
  { name: "Weir", category: "Industrial" },
  { name: "Hilton", category: "Hospitality" },
  { name: "Marriott", category: "Hospitality" },
  { name: "Ritz-Carlton", category: "Hospitality" },
  { name: "Boulevard", category: "Hotel" },
  { name: "Sahdag", category: "Industrial" },
  { name: "Grand Agro", category: "Agriculture" },
  { name: "Importex", category: "Trading" },
];

export function PartnerLogos() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-[#F5F5F5] border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#EB791B]" />
            <span className="text-[#EB791B] uppercase tracking-wider text-sm">
              Trusted Partners
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
          </div>
          <h2 className="text-[#1E1E1E] mb-3">
            Companies We Cooperate With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted partner for leading companies across Azerbaijan and beyond
          </p>
        </motion.div>

        {/* Infinite Logo Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 sm:gap-16 items-center"
              animate={{
                x: isPaused ? 0 : [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{ willChange: "transform" }}
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <PartnerLogo key={`partner-1-${index}`} partner={partner} />
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <PartnerLogo key={`partner-2-${index}`} partner={partner} />
              ))}
              {/* Third set for extra smooth loop */}
              {partners.map((partner, index) => (
                <PartnerLogo key={`partner-3-${index}`} partner={partner} />
              ))}
            </motion.div>
          </div>

          {/* Pause Indicator */}
          {isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1E1E1E] text-white px-4 py-2 rounded-full text-xs z-20"
            >
              Hover to explore
            </motion.div>
          )}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gray-300"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "100+", label: "Happy Clients" },
            { value: "Global", label: "Delivery" },
            { value: "ISO", label: "Certified" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl text-[#EB791B] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface PartnerLogoProps {
  partner: { name: string; category: string };
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -4 }}
      transition={{ duration: 0.24 }}
      className="flex-shrink-0 group"
    >
      <div className="w-40 h-24 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center p-6 hover:border-[#EB791B] hover:shadow-md transition-all duration-300 relative overflow-hidden">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EB791B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Logo placeholder - company name in industrial font style */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="text-[#1E1E1E] group-hover:text-[#EB791B] transition-colors text-2xl tracking-tight uppercase">
            {partner.name}
          </div>
          <div className="text-gray-400 text-xs uppercase tracking-wider">
            {partner.category}
          </div>
        </div>

        {/* Corner bolts decoration */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#EB791B] transition-colors" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#EB791B] transition-colors" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#EB791B] transition-colors" />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#EB791B] transition-colors" />
      </div>
    </motion.div>
  );
}
