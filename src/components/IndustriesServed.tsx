import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Factory, Droplet, Flame, Zap } from "lucide-react";

const industries = [
  {
    icon: Droplet,
    title: "Oil & Gas",
    description: "Supporting exploration, extraction, refining, and distribution operations with certified industrial supplies.",
    image: "https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjByZWZpbmVyeXxlbnwxfHx8fDE3NjIwMTc2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Factory,
    title: "Petrochemical",
    description: "High-quality valves, fittings, and equipment for complex petrochemical processing facilities.",
    image: "https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwaXBlbGluZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYyMDE3Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Flame,
    title: "Refineries",
    description: "Precision-engineered components and safety equipment for critical refinery operations.",
    image: "https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBwbGFudCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIwMTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Zap,
    title: "Energy Production",
    description: "Reliable industrial supplies for power generation and energy distribution infrastructure.",
    image: "https://images.unsplash.com/photo-1597000042706-881cba236e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBkcmlsbGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIwMTc2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function IndustriesServed() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#EB791B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#0073E6]/5 rounded-full blur-3xl" />

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
              Our Expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
          </div>
          <h2 className="text-[#1E1E1E] mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Delivering specialized industrial supplies to critical sectors worldwide, with a focus on oil & gas industry excellence
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-[#EB791B] hover:shadow-2xl transition-all duration-360"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  
                  {/* Icon badge */}
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-6 right-6 w-14 h-14 bg-[#EB791B] rounded-xl flex items-center justify-center shadow-xl"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-[#1E1E1E] mb-3 text-2xl group-hover:text-[#EB791B] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#EB791B] to-transparent rounded-full group-hover:w-24 transition-all duration-360" />
                </div>

                {/* Corner bolts */}
                <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/40" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gray-300" />
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gray-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl text-[#EB791B] mb-2">10+</div>
            <div className="text-gray-600">Years in Oil & Gas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#EB791B] mb-2">100+</div>
            <div className="text-gray-600">Industrial Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#EB791B] mb-2">24/7</div>
            <div className="text-gray-600">Technical Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
