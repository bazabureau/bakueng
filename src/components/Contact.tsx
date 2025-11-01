import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ContactForm } from "./ContactForm";
import { BlueprintGrid } from "./BlueprintGrid";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Baku Engineering Supplies LTD", "123 Industrial Avenue", "Baku, Azerbaijan AZ1000"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+994 (12) 345-67-89", "+994 (50) 123-45-67", "Toll-free: 0800-123-456"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@bakuengineering.com", "sales@bakuengineering.com", "support@bakuengineering.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Blueprint Grid Background */}
      <BlueprintGrid className="opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is ready to help you find the right industrial solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.24 } }}
                >
                  <Card className="overflow-hidden border-gray-200 hover:shadow-lg hover:border-[#F9DFC4] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#FEF3E7] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#EB791B]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-gray-900 mb-2">{info.title}</h3>
                          <div className="space-y-1 text-gray-600">
                            {info.details.map((detail, i) => (
                              <p key={i}>{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.4 }}
              className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#EB791B]" />
                  <p>Interactive Map</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="lg:col-span-2"
          >
            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-gray-900 mb-6">Send Us a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
