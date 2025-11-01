import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjByZWZpbmVyeXxlbnwxfHx8fDE3NjIwMTc2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Oil & Gas Refinery",
    category: "Refineries",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwaXBlbGluZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyMDE3Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Pipeline Infrastructure",
    category: "Pipelines",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBwbGFudCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIwMTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Gas Processing Plant",
    category: "Processing",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1597000042706-881cba236e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBkcmlsbGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIwMTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Drilling Operations",
    category: "Extraction",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1722580089913-9a8dd0959470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBmaWVsZCUyMHZhbHZlc3xlbnwxfHx8fDE3NjIwMTc3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Control Valves",
    category: "Equipment",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1759148413364-c766dd9ff1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJlc3N1cmUlMjBnYXVnZXN8ZW58MXx8fHwxNzYyMDE3Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Pressure Monitoring",
    category: "Instrumentation",
  },
];

export function OilGasGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#1E1E1E] relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#EB791B 1px, transparent 1px), linear-gradient(90deg, #EB791B 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#EB791B]" />
            <span className="text-[#EB791B] uppercase tracking-wider text-sm">
              Our Work
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
          </div>
          <h2 className="text-white mb-4">
            Oil & Gas Industry Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Supplying critical equipment and components to the global energy sector
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onHoverStart={() => setHoveredId(image.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-800 cursor-pointer"
            >
              {/* Image */}
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-360" />

              {/* Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredId === image.id
                    ? { y: 0, opacity: 1 }
                    : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col justify-end p-6"
              >
                <div className="mb-2 inline-flex">
                  <span className="px-3 py-1 bg-[#EB791B] text-white text-xs rounded-full">
                    {image.category}
                  </span>
                </div>
                <h3 className="text-white text-xl">
                  {image.title}
                </h3>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-3 h-3">
                <div className="absolute inset-0 border-t-2 border-r-2 border-[#EB791B] opacity-0 group-hover:opacity-100 transition-opacity duration-360" />
              </div>
              <div className="absolute bottom-4 left-4 w-3 h-3">
                <div className="absolute inset-0 border-b-2 border-l-2 border-[#EB791B] opacity-0 group-hover:opacity-100 transition-opacity duration-360" />
              </div>

              {/* Bolt decoration */}
              <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#EB791B]/60 transition-colors duration-360" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Need equipment for your oil & gas project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.hash = "#/contact")}
            className="bg-[#EB791B] text-white px-8 py-4 rounded-lg hover:bg-[#D36D17] transition-colors shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
