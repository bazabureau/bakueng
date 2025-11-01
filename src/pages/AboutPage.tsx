import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  CheckCircle2,
  Globe,
  Briefcase,
  Calendar
} from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We deliver only certified, high-quality industrial products that meet international standards.",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Building long-term partnerships through consistent, dependable service and product delivery.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our professional team is dedicated to understanding and exceeding client expectations.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Constantly expanding our product range and capabilities to serve evolving industry needs.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Baku Engineering Supplies LTD established to serve the oil & gas industry.",
  },
  {
    year: "2016",
    title: "ISO 9001 Certification",
    description: "Achieved ISO 9001:2015 quality management certification.",
  },
  {
    year: "2019",
    title: "Regional Expansion",
    description: "Extended operations to serve clients across Azerbaijan and beyond.",
  },
  {
    year: "2022",
    title: "100+ B2B Clients",
    description: "Reached milestone of serving over 100 industrial clients worldwide.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as a trusted partner in oil & gas industrial supplies.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "B2B Clients Served" },
  { value: "1000+", label: "Products Delivered" },
  { value: "24/7", label: "Customer Support" },
];

export function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gray-900 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
      >
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632629011797-156081ed19ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBmYWNpbGl0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjIwMTc5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Oil and gas facility aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#EB791B]" />
              <span className="text-[#EB791B] uppercase tracking-wider text-sm">
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white mb-6 drop-shadow-lg"
            >
              Trusted Partner in Industrial Supply Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8"
            >
              For over 10 years, Baku Engineering Supplies LTD has been delivering high-quality industrial products to the oil & gas sector and beyond. Our commitment to excellence, certified products, and operational service has made us a preferred partner for B2B clients worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#mission"
                className="bg-[#EB791B] hover:bg-[#D36D17] text-white px-6 py-3 rounded-lg transition-all duration-240 hover:scale-105 shadow-lg"
              >
                Our Mission
              </a>
              <a
                href="#/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/40 px-6 py-3 rounded-lg transition-all duration-240 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl text-[#EB791B] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#EB791B]/10 rounded-full blur-2xl" />
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[#1E1E1E] mb-4 text-3xl">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide high-quality industrial products with certificates, delivering operational excellence and professional service to B2B clients worldwide. We strive to be the trusted partner for oil & gas and industrial sectors, offering comprehensive solutions from clamping to valves, bolts, and specialized equipment.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0073E6]/10 rounded-full blur-2xl" />
              <div className="relative bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0073E6] to-[#005BB5] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[#1E1E1E] mb-4 text-3xl">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the leading industrial supplier in the region, recognized for quality, reliability, and innovation. We envision expanding our reach globally while maintaining the personalized service and expertise that our clients depend on, setting new standards in industrial supply chain excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
                Our Values
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
            </div>
            <h2 className="text-[#1E1E1E] mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our core values shape every decision we make and every relationship we build
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-[#EB791B] hover:shadow-xl transition-all duration-360"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-[#1E1E1E] mb-3 text-xl group-hover:text-[#EB791B] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(#EB791B 1px, transparent 1px), linear-gradient(90deg, #EB791B 1px, transparent 1px)",
                        backgroundSize: "6px 6px",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EB791B]/5 rounded-full blur-3xl" />
        
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
                Our Journey
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
            </div>
            <h2 className="text-[#1E1E1E] mb-4">
              A Decade of Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Milestones that shaped our company and defined our commitment to quality
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#EB791B] via-[#EB791B]/50 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-[#EB791B] transition-all duration-360 hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <Calendar className="w-5 h-5 text-[#EB791B]" />
                        <span className="text-2xl text-[#EB791B]">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-[#1E1E1E] mb-2 text-xl">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 md:-ml-2 bg-[#EB791B] rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Image Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759159092038-d414f661dbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzYyMDE3OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial warehouse with supplies"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#EB791B]" />
                <span className="text-[#EB791B] uppercase tracking-wider text-sm">
                  Why Partner With Us
                </span>
              </div>

              <h2 className="text-[#1E1E1E] mb-6 text-3xl">
                Experience. Quality. Trust.
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                With over a decade of experience in the industrial supply sector, we understand the critical nature of your operations. Every product we deliver comes with proper certification, ensuring compliance with international standards.
              </p>

              <div className="space-y-4">
                {[
                  "ISO 9001:2015 certified quality management",
                  "Experienced team with 10+ years in oil & gas",
                  "Comprehensive product range with full certification",
                  "24/7 operational support for urgent requirements",
                  "Global delivery to all locations worldwide",
                  "Long-term partnerships with 100+ B2B clients",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#EB791B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
                Our Team
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#EB791B]" />
            </div>
            <h2 className="text-[#1E1E1E] mb-4">
              Professional Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our experienced team of industry professionals is dedicated to your success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581094482523-8555833e6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW13b3JrfGVufDF8fHx8MTc2MjAxNzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineering team collaboration"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl mb-3">
                  Expertise You Can Count On
                </h3>
                <p className="text-gray-200 text-lg">
                  Our team combines technical knowledge, industry experience, and customer service excellence to ensure your projects succeed. From sales consultants to technical specialists, we're here to support you every step of the way.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Briefcase,
                title: "Industry Experts",
                description: "Deep knowledge of oil & gas and industrial sectors",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Connections with manufacturers and suppliers worldwide",
              },
              {
                icon: Users,
                title: "Customer Success",
                description: "Dedicated support team for all your needs",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#1E1E1E] mb-2 text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1E1E] to-gray-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#EB791B 1px, transparent 1px), linear-gradient(90deg, #EB791B 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6 text-3xl sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
              Join over 100 B2B clients who trust us for their industrial supply needs. Let's discuss how we can support your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#/contact"
                className="bg-[#EB791B] hover:bg-[#D36D17] text-white px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl inline-block"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#/products"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/40 px-8 py-4 rounded-lg transition-all backdrop-blur-sm inline-block"
              >
                Browse Products
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
