import { motion } from "motion/react";
import { Award, CheckCircle2, FileCheck, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MechanicalGears } from "./MechanicalGears";

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Certified quality management system ensuring consistent product and service delivery",
    issuer: "International Organization for Standardization",
    validUntil: "December 2025",
    certificateNumber: "ISO-9001-AZ-2022-045",
    icon: Award,
  },
  {
    id: 2,
    title: "EGA Master S.L.",
    subtitle: "Master Distributor",
    description: "Official Master Distributor partnership for premium industrial tools and equipment",
    issuer: "EGA Master S.L.",
    validUntil: "31.12.2024",
    certificateNumber: "Valid from 17.01.2024",
    icon: Award,
  },
  {
    id: 3,
    title: "Microfinish Valves",
    subtitle: "Distributor Certificate",
    description: "Authorized distributor for high-quality industrial valves and fittings",
    issuer: "Microfinish Valves Private Limited",
    validUntil: "06.09.2025",
    certificateNumber: "Valid from 07.09.2023",
    icon: CheckCircle2,
  },
  {
    id: 4,
    title: "CMP Products Limited",
    subtitle: "Official Partner",
    description: "Official partnership for cable glands and industrial accessories",
    issuer: "CMP Products Limited",
    validUntil: "09.07.2024",
    certificateNumber: "Valid from 10.07.2023",
    icon: FileCheck,
  },
];

const standards = [
  "ASME B31.3",
  "ASTM Standards",
  "DIN Standards",
  "ANSI Compliant",
  "API Approved",
  "GOST Certified",
  "BS Standards",
  "JIS Standards",
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Mechanical Gears Background */}
      <MechanicalGears className="opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#EB791B] hover:bg-[#D36D17]">
            Quality Assured
          </Badge>
          <h2 className="text-gray-900 mb-4">Certifications & Standards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality is backed by international certifications and compliance with industry standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.36, delay: index * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer overflow-hidden border-gray-200 hover:shadow-xl hover:border-[#F9DFC4] transition-all duration-300 group h-full relative">
                      {/* Stamp Animation */}
                      <motion.div
                        className="absolute top-4 right-4 w-20 h-20 border-4 border-orange-500/30 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        <motion.span
                          className="text-orange-500 text-xs font-bold rotate-[-15deg]"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.4 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          CERT
                        </motion.span>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.24 }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="flex-shrink-0 w-16 h-16 bg-[#FEF3E7] rounded-lg flex items-center justify-center group-hover:bg-[#EB791B] transition-colors duration-300 relative"
                            >
                              <Icon className="w-8 h-8 text-[#EB791B] group-hover:text-white transition-colors duration-300" />
                              
                              {/* Badge seal effect */}
                              <motion.div
                                className="absolute inset-0 border-2 border-orange-400 rounded-lg"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              />
                            </motion.div>

                            <div className="flex-1">
                              <h3 className="text-gray-900 mb-1 group-hover:text-[#EB791B] transition-colors duration-240">
                                {cert.title}
                              </h3>
                              <p className="text-[#EB791B] mb-3">{cert.subtitle}</p>
                              <p className="text-gray-600 mb-4">{cert.description}</p>

                              <div className="flex flex-wrap gap-4 text-gray-500">
                                <div>
                                  <span className="block">Valid Until</span>
                                  <span className="text-gray-900">{cert.validUntil}</span>
                                </div>
                                <div>
                                  <span className="block">Certificate No.</span>
                                  <span className="text-gray-900">{cert.certificateNumber}</span>
                                </div>
                              </div>

                              <motion.div
                                className="mt-4 text-[#EB791B] group-hover:text-[#D36D17] flex items-center gap-2"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.24 }}
                              >
                                View Certificate →
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-[#EB791B]" />
                        {cert.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                        <div className="text-center text-gray-500 p-8">
                          <Icon className="w-20 h-20 mx-auto mb-4 text-[#EB791B]" />
                          <h3 className="text-gray-900 mb-2">{cert.title}</h3>
                          <p className="text-gray-600 mb-4">{cert.subtitle}</p>
                          <div className="space-y-2 text-left max-w-md mx-auto bg-white p-4 rounded-lg">
                            <div className="flex justify-between">
                              <span>Issuer:</span>
                              <span className="text-gray-900">{cert.issuer}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Valid Until:</span>
                              <span className="text-gray-900">{cert.validUntil}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Certificate No:</span>
                              <span className="text-gray-900">{cert.certificateNumber}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
        </div>

        {/* Standards Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36 }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-gray-900 mb-3">Industry Standards Compliance</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products meet or exceed the following industry standards and specifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {standards.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-gradient-to-br from-[#FEF3E7] to-[#F9DFC4] rounded-lg p-6 text-center border border-[#F9DFC4] transition-all duration-240 hover:shadow-md cursor-default relative overflow-hidden"
              >
                {/* Assembly line effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-orange-500"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
                />
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#EB791B] mx-auto mb-2" />
                </motion.div>
                <span className="text-gray-900">{standard}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
