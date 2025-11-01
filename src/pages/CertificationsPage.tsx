import { motion } from "motion/react";
import { Certifications } from "../components/Certifications";
import { Award, Shield, CheckCircle2, Users, FileCheck, Globe } from "lucide-react";

export function CertificationsPage() {
  const qualityCommitments = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description:
        "International standard for Quality Management Systems, ensuring consistent quality and customer satisfaction",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description:
        "Compliance with international safety standards and regulations for industrial supplies",
    },
    {
      icon: FileCheck,
      title: "Product Authenticity",
      description:
        "Authorized distributor guarantees with manufacturer certificates of conformity",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description:
        "Meeting international trade standards and export requirements",
    },
    {
      icon: Users,
      title: "Trained Personnel",
      description:
        "Certified technical staff with extensive industry knowledge and expertise",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description:
        "Rigorous testing and inspection processes for all products",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#1E1E1E] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#EB791B]" />
              <span className="text-[#EB791B] uppercase tracking-wider text-sm">
                Quality Assurance
              </span>
            </div>
            <h1 className="text-white mb-4 max-w-3xl">
              Certifications & Quality Standards
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl">
              Committed to excellence through internationally recognized
              certifications and quality management systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#1E1E1E] mb-4">
              Our Quality Commitments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We maintain the highest standards in product quality, service
              delivery, and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityCommitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:border-[#EB791B] hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#1E1E1E] mb-3 text-xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Component */}
      <Certifications />

      {/* Quality Policy Section */}
      <section className="py-20 bg-[#F5F5F5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#EB791B]" />
                <span className="text-[#EB791B] uppercase tracking-wider text-sm">
                  Our Promise
                </span>
              </div>
              <h2 className="text-[#1E1E1E] mb-6">
                Quality Policy Statement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  At Baku Engineering Supplies LTD, we are committed to
                  delivering premium industrial products that meet or exceed
                  international quality standards.
                </p>
                <p>
                  Our quality management system ensures continuous improvement,
                  customer satisfaction, and compliance with all applicable
                  regulations.
                </p>
                <p>
                  We achieve this through rigorous supplier selection, product
                  testing, employee training, and a culture of excellence in
                  everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200"
            >
              <h3 className="text-[#1E1E1E] mb-8 text-2xl">
                Our Core Principles
              </h3>
              <ul className="space-y-4">
                {[
                  "Customer-first approach",
                  "Continuous quality improvement",
                  "Compliance with international standards",
                  "Transparency and accountability",
                  "Sustainable business practices",
                  "Investment in employee development",
                ].map((principle, index) => (
                  <motion.li
                    key={principle}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-[#EB791B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
