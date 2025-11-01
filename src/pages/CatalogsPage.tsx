import { motion } from "motion/react";
import { Catalogs } from "../components/Catalogs";
import { Download, FileText, Book, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";

export function CatalogsPage() {
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
                Resources
              </span>
            </div>
            <h1 className="text-white mb-4 max-w-3xl">
              Product Catalogs & Technical Documentation
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl">
              Download comprehensive product catalogs, technical specifications,
              and detailed documentation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F5F5F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1E1E1E] mb-4">
              Why Download Our Catalogs?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Get instant access to detailed product specifications and technical data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Detailed Specs",
                description: "Complete technical specifications for all products",
              },
              {
                icon: Book,
                title: "Easy Reference",
                description: "Quick product lookup and comparison tools",
              },
              {
                icon: Download,
                title: "Offline Access",
                description: "Download PDFs for offline viewing anytime",
              },
              {
                icon: CheckCircle2,
                title: "Always Updated",
                description: "Latest versions with newest products and pricing",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-[#EB791B] transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#EB791B]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#EB791B] transition-colors">
                    <Icon className="w-7 h-7 text-[#EB791B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#1E1E1E] mb-2 text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogs Component */}
      <Catalogs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white mb-6">
              Need a Custom Catalog?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              We can create tailored product catalogs for your specific industry needs
              and requirements
            </p>
            <Button
              size="lg"
              className="bg-[#EB791B] hover:bg-[#D36D17] text-white h-14 px-8"
              onClick={() => {
                window.location.hash = "#/contact";
              }}
            >
              Request Custom Catalog
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
