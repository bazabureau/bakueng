import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import afchamberLogo from "../../partners/afchamber.png";
import alstomLogo from "../../partners/alstom.png";
import arkozSementLogo from "../../partners/arkoz-sement.png";
import azalLogo from "../../partners/azal.png";
import bakuSteelLogo from "../../partners/baku-steel.webp";
import balaxaniLogo from "../../partners/balaxani.png";
import caspianGeoLogo from "../../partners/caspian-geo.png";
import glensolLogo from "../../partners/glensol.png";
import hiltonLogo from "../../partners/hilton.png";
import silkwayLogo from "../../partners/silkway-airlines.jpeg";
import socarPolymerLogo from "../../partners/socar-polymer.svg";
import technipLogo from "../../partners/technip-energies.png";
import tekfenLogo from "../../partners/tekfen.png";

const partners = [
  { name: "AFChamber", logo: afchamberLogo },
  { name: "Alstom", logo: alstomLogo },
  { name: "Arkoz Sement", logo: arkozSementLogo },
  { name: "AZAL", logo: azalLogo },
  { name: "Baku Steel Company", logo: bakuSteelLogo },
  { name: "Balaxanı", logo: balaxaniLogo },
  { name: "Caspian Geo", logo: caspianGeoLogo },
  { name: "Glensol", logo: glensolLogo },
  { name: "Hilton Baku", logo: hiltonLogo },
  { name: "Silk Way Airlines", logo: silkwayLogo },
  { name: "SOCAR Polymer", logo: socarPolymerLogo },
  { name: "Technip Energies", logo: technipLogo },
  { name: "Tekfen", logo: tekfenLogo },
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
          <h2 className="text-[#1E1E1E]">Companies We Cooperate With</h2>
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
            <div
              className="flex gap-12 sm:gap-16 items-center animate-logo-marquee"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
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
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

interface PartnerLogoProps {
  partner: { name: string; logo: string };
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 flex items-center justify-center px-4 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      <ImageWithFallback
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="max-h-12 max-w-full object-contain"
      />
    </div>
  );
}
