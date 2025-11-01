import { motion } from "motion/react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const logoModules = import.meta.glob<{ default: string }>(
  "../../partners/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

const partners = Object.entries(logoModules)
  .map(([path, module]) => {
    const filename = path.split("/").pop() ?? "";
    const readableName = filename
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      name: readableName,
      logo: module.default ?? "",
      priority:
        readableName === "Roundcube"
          ? 2
          : /(home|projects?-?\d*)$/i.test(readableName.replace(/\s+/g, ""))
          ? 1
          : 0,
    };
  })
  .sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return a.name.localeCompare(b.name);
  })
  .filter((partner) => Boolean(partner.logo && partner.priority === 0));

export function PartnerLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: partners.length > 1,
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi || partners.length <= 1) {
      return;
    }

    const autoplay = window.setInterval(() => {
      if (isPaused) {
        return;
      }

      const velocity = emblaApi.scrollVelocity();
      const target =
        velocity > 40
          ? Math.ceil(emblaApi.selectedScrollSnap() + velocity / 50)
          : emblaApi.selectedScrollSnap() + 1;

      emblaApi.scrollTo(target % emblaApi.scrollSnapList().length, {
        immediate: false,
      });
    }, 3200);

    return () => window.clearInterval(autoplay);
  }, [emblaApi, isPaused, partners.length]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onPointerDown = () => setIsPaused(true);
    const onPointerUp = () => setIsPaused(false);

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("pointerLeave", onPointerUp);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("pointerLeave", onPointerUp);
    };
  }, [emblaApi]);

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

        {/* Logo Marquee */}
        {partners.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white/80 p-12 text-center text-gray-500">
            Partner logos will appear here once images are added to the
            <code className="mx-2 rounded bg-gray-100 px-2 py-1 text-sm text-gray-700">
              partners/
            </code>
            folder.
          </div>
        ) : (
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
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F5F5] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F5F5] to-transparent" />

            {/* Scrolling Container */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex items-center gap-6 sm:gap-10">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex-[0_0_180px] sm:flex-[0_0_220px]"
                  >
                    <PartnerLogo partner={partner} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface PartnerLogoProps {
  partner: { name: string; logo: string };
}

function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="flex-[0_0_auto] w-32 h-20 sm:w-36 sm:h-24 flex items-center justify-center px-6 rounded-xl bg-white/80 border border-white/60 shadow-sm opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:shadow-md">
      <ImageWithFallback
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="max-h-12 sm:max-h-14 max-w-full object-contain"
      />
    </div>
  );
}
