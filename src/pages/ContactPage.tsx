import { motion } from "motion/react";
import { Contact } from "../components/Contact";
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones } from "lucide-react";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+994 (012) 452 68 55"],
      action: "Call us",
      href: "tel:+994124526855",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@bakuengineering.com", "procurement@bakuengineering.com"],
      action: "Send email",
      href: "mailto:sales@bakuengineering.com",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Baku, Azerbaijan"],
      action: "Get directions",
      href: "#",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant answers from our support team",
      available: "Available Mon-Fri 9AM-6PM",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert assistance for product specifications",
      available: "24/7 emergency hotline available",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      available: "Response within 24 hours",
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
                Get in Touch
              </span>
            </div>
            <h1 className="text-white mb-4 max-w-3xl">
              Contact Our Team
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl">
              Have questions? We're here to help. Reach out through any of our
              contact channels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-[#F5F5F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:border-[#EB791B] hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-[#EB791B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#EB791B] transition-colors">
                    <Icon className="w-8 h-8 text-[#EB791B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#1E1E1E] mb-4 text-xl">
                    {method.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {method.details.map((detail) => (
                      <p key={detail} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <span className="text-[#EB791B] group-hover:underline inline-flex items-center gap-2">
                    {method.action}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Component */}
      <Contact />

      {/* Support Channels & Business Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Support Channels */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-[#1E1E1E] mb-4">
                  Support Channels
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Choose the best way to reach us based on your needs
                </p>
              </motion.div>

              <div className="space-y-6">
                {supportChannels.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <motion.div
                      key={channel.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-[#F5F5F5] rounded-xl p-6 border border-gray-200 hover:border-[#EB791B] transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#EB791B] transition-colors">
                          <Icon className="w-6 h-6 text-[#EB791B] group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#1E1E1E] mb-2 text-lg">
                            {channel.title}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {channel.description}
                          </p>
                          <p className="text-sm text-[#EB791B]">
                            {channel.available}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-2xl p-8 text-white sticky top-24"
              >
                <div className="w-14 h-14 bg-[#EB791B] rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white mb-6 text-2xl">
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex justify-between items-start pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-white">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Emergency support available 24/7 for existing customers.
                    Call our emergency hotline for urgent technical assistance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Interactive Map</p>
            <p className="text-gray-400">123 Industrial Avenue, Baku, Azerbaijan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
