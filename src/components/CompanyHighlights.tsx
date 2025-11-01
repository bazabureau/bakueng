import { motion } from "motion/react";
import { Award, Users, Zap, ShieldCheck, DollarSign, TrendingUp, Clock, Truck } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "High Quality",
    description: "Providing the delivered products with certificate.",
  },
  {
    icon: DollarSign,
    title: "Reasonable Prices",
    description: "We differ with reasonable prices.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our professional team is always at your service.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    description: "Companies with whom we have cooperated for a long time always choose us.",
  },
  {
    icon: Zap,
    title: "Operational Service",
    description: "Answering your questions in a short time.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Delivery of ordered products as soon as possible.",
  },
];

export function CompanyHighlights() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#EB791B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0073E6]/5 rounded-full blur-3xl" />

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
              Why Choose Us
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
          </div>
          <h2 className="text-[#1E1E1E] mb-4">
            Advantages of Working With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine quality, expertise, and reliability to deliver exceptional service
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:border-[#EB791B] hover:shadow-xl transition-all duration-360 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EB791B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-360" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow relative"
                  >
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Bolt corners */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-black/20" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-black/20" />
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-black/20" />
                    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-black/20" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-[#1E1E1E] mb-3 text-xl group-hover:text-[#EB791B] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-360">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(#EB791B 1px, transparent 1px), linear-gradient(90deg, #EB791B 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to experience the difference?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window.location.hash = "#/contact")}
            className="bg-[#EB791B] text-white px-8 py-4 rounded-lg hover:bg-[#D36D17] transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
