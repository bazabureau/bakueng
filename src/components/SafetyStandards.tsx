import { motion } from "motion/react";
import { ShieldCheck, FileCheck, Package } from "lucide-react";

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    description: "Our company guarantees that all types of products sold are certified.",
  },
  {
    icon: FileCheck,
    title: "Providing with a Certificate",
    description: "Each product comes with proper certification documentation for your assurance.",
  },
  {
    icon: Package,
    title: "Full Packaging",
    description: "Sending the order in full form with secure and professional packaging.",
  },
];

export function SafetyStandards() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#EB791B 1px, transparent 1px), linear-gradient(90deg, #EB791B 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              Quality Assurance
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
          </div>
          <h2 className="text-white mb-4">
            Safety Standards
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Committed to delivering certified products with complete documentation and secure packaging
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-[#EB791B]/50 transition-all duration-360 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-360 shadow-lg relative">
                  <Icon className="w-8 h-8 text-white" />
                  
                  {/* Bolt corners */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-black/20" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-black/20" />
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-black/20" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-black/20" />
                </div>
                
                <h3 className="text-white mb-3 text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
