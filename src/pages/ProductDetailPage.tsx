import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Package, CheckCircle2, Shield, Truck, FileText, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast } from "sonner@2.0.3";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
  description?: string;
  specifications?: { label: string; value: string }[];
}

interface ProductDetailPageProps {
  product: Product;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Default specifications if not provided
  const specifications = product.specifications || [
    { label: "Category", value: product.category },
    { label: "Availability", value: product.inStock ? "In Stock" : "On Request" },
    { label: "Certification", value: "ISO 9001:2015 Certified" },
    { label: "Warranty", value: "Manufacturer Warranty Included" },
    { label: "Delivery", value: "Available Worldwide" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Certified Quality",
      description: "All products come with proper certification",
    },
    {
      icon: CheckCircle2,
      title: "Guaranteed Authentic",
      description: "100% genuine products from authorized distributors",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery to your location",
    },
    {
      icon: Package,
      title: "Secure Packaging",
      description: "Professional packaging for safe transport",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Quote Request Sent!", {
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb & Back Button */}
      <section className="bg-[#F5F5F5] border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => (window.location.hash = "#/products")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#EB791B] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 flex items-center gap-2 text-sm text-gray-500"
          >
            <a href="#/home" className="hover:text-[#EB791B] transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="#/products" className="hover:text-[#EB791B] transition-colors">
              Products
            </a>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </motion.div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.featured && (
                  <Badge className="absolute top-4 left-4 bg-[#EB791B] text-white border-0">
                    Featured
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-gray-900 text-white border-0">
                    On Request
                  </Badge>
                )}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="bg-[#F5F5F5] rounded-xl p-4 border border-gray-200"
                    >
                      <Icon className="w-6 h-6 text-[#EB791B] mb-2" />
                      <h4 className="text-gray-900 text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Product Info & Request Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Product Header */}
              <div className="mb-8">
                <Badge className="mb-4 bg-[#EB791B]/10 text-[#EB791B] border-[#EB791B]/20">
                  {product.category}
                </Badge>
                <h1 className="text-[#1E1E1E] mb-4">{product.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description ||
                    "High-quality industrial product from certified manufacturers. Contact us for detailed specifications, pricing, and availability."}
                </p>
              </div>

              {/* Specifications */}
              <div className="mb-8 bg-[#F5F5F5] rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-[#EB791B]" />
                  <h3 className="text-[#1E1E1E] text-lg">Specifications</h3>
                </div>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex justify-between items-start"
                    >
                      <span className="text-gray-600">{spec.label}:</span>
                      <span className="text-gray-900 text-right max-w-[60%]">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Request Quote Form */}
              <div className="bg-gradient-to-br from-[#F5F5F5] to-white rounded-2xl p-8 border-2 border-[#EB791B]/30 shadow-xl relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB791B]/5 rounded-bl-full" />
                
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EB791B] to-[#D36D17] rounded-lg flex items-center justify-center shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#1E1E1E] text-xl">
                        Request a Quote
                      </h3>
                      <p className="text-sm text-gray-500">No price displayed - Contact us</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you with
                    pricing and availability within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 h-11 border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 h-11 border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 h-11 border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 h-11 border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                        placeholder="+994 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quantity">
                      Quantity <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="mt-2 h-11 border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                      placeholder="e.g., 100 units"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[100px] border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#EB791B] hover:bg-[#D36D17] text-white transition-all duration-240 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Request Quote
                      </span>
                    )}
                  </Button>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-gray-700 text-center">
                      <strong>Note:</strong> Prices are not displayed online. Our team will provide you with a detailed quote based on your specific requirements.
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    By submitting this form, you agree to be contacted by our team
                    regarding your inquiry.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-[#F5F5F5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#1E1E1E] mb-8 text-center">
              Why Choose Our Products?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Certified Quality",
                  description:
                    "All products are certified and comply with international standards including ISO 9001:2015.",
                },
                {
                  title: "Expert Support",
                  description:
                    "Our experienced team provides professional guidance and technical support for all products.",
                },
                {
                  title: "Global Delivery",
                  description:
                    "We deliver to all locations worldwide with secure packaging and fast shipping options.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                >
                  <h3 className="text-[#1E1E1E] mb-3 text-lg">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
