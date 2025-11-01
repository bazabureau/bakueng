import { motion } from "motion/react";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Separator } from "./ui/separator";
import roundcubeLogo from "../../partners/roundcube.png";

const footerLinks = {
  products: [
    { label: "Valves & Fittings", href: "#products" },
    { label: "Bearings", href: "#products" },
    { label: "Fasteners", href: "#products" },
    { label: "Tools", href: "#products" },
    { label: "Safety Equipment", href: "#products" },
  ],
  company: [
    { label: "About Us", href: "#hero" },
    { label: "Certifications", href: "#certifications" },
    { label: "Quality Policy", href: "#certifications" },
    { label: "Careers", href: "#contact" },
    { label: "News", href: "#hero" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQs", href: "#contact" },
    { label: "Technical Support", href: "#contact" },
    { label: "Shipping & Returns", href: "#contact" },
    { label: "Download Catalogs", href: "#catalogs" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#EB791B 1px, transparent 1px), linear-gradient(90deg, #EB791B 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Top Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#EB791B] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <motion.img
              src={roundcubeLogo}
              alt="Roundcube"
              className="h-16 w-auto mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.24 }}
            />
            <p className="mb-8 text-gray-400 leading-relaxed text-base">
              Providing high-quality industrial products with certificates. Over 10 years of work experience delivering to all locations in the world. Our professional team is always at your service.
            </p>
            <div className="space-y-4">
              <motion.a 
                href="tel:+994124526855" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#EB791B] transition-all duration-240 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#EB791B]/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-base">+994 (012) 452 68 55</span>
              </motion.a>
              <motion.a 
                href="mailto:sales@bakuengineering.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#EB791B] transition-all duration-240 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#EB791B]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base">sales@bakuengineering.com</span>
              </motion.a>
              <motion.a 
                href="mailto:procurement@bakuengineering.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-[#EB791B] transition-all duration-240 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#EB791B]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base">procurement@bakuengineering.com</span>
              </motion.a>
              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-base leading-relaxed">123 Industrial Avenue<br />Baku, Azerbaijan AZ1000</span>
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-white mb-6 text-lg flex items-center gap-2">
              Products
              <div className="h-px flex-1 bg-gradient-to-r from-[#EB791B]/50 to-transparent max-w-[60px]" />
            </h4>
            <ul className="space-y-3.5" role="list">
              {footerLinks.products.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#EB791B] transition-all duration-240 inline-flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-240">{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-white mb-6 text-lg flex items-center gap-2">
              Company
              <div className="h-px flex-1 bg-gradient-to-r from-[#EB791B]/50 to-transparent max-w-[60px]" />
            </h4>
            <ul className="space-y-3.5" role="list">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#EB791B] transition-all duration-240 inline-flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-240">{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-white mb-6 text-lg flex items-center gap-2">
              Support
              <div className="h-px flex-1 bg-gradient-to-r from-[#EB791B]/50 to-transparent max-w-[60px]" />
            </h4>
            <ul className="space-y-3.5" role="list">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#EB791B] transition-all duration-240 inline-flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-240">{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Separator className="bg-white/10 mb-12" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Baku Engineering Supplies LTD. All rights reserved.
            </p>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-[#EB791B] text-sm transition-colors duration-240"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm mr-2 hidden sm:inline">Follow us:</span>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={`Follow us on ${social.label}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#EB791B] border border-white/10 hover:border-[#EB791B] transition-all duration-240 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB791B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1E1E] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-5 h-5 relative z-10" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <motion.a
            href="#hero"
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#EB791B] transition-colors group mx-auto w-fit"
            whileHover={{ y: -4 }}
          >
            <span className="text-sm">Back to top</span>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center"
            >
              <Send className="w-3 h-3 rotate-[-90deg]" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
