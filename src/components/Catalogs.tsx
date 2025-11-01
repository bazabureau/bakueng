import { motion } from "motion/react";
import { FileText, Download, Eye, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { BlueprintGrid } from "./BlueprintGrid";

const catalogs = [
  {
    id: 1,
    title: "Industrial Valves & Fittings",
    description: "Complete catalog of industrial valves, pipes, and fittings for oil & gas applications",
    pages: 124,
    size: "12.4 MB",
    date: "October 2024",
    category: "Valves",
  },
  {
    id: 2,
    title: "Bearings & Power Transmission",
    description: "High-performance bearings, chains, and transmission components",
    pages: 86,
    size: "8.6 MB",
    date: "September 2024",
    category: "Bearings",
  },
  {
    id: 3,
    title: "Fasteners & Hardware",
    description: "Comprehensive range of bolts, nuts, screws, and industrial fasteners",
    pages: 64,
    size: "6.2 MB",
    date: "September 2024",
    category: "Fasteners",
  },
  {
    id: 4,
    title: "Industrial Tools & Equipment",
    description: "Professional tools, power equipment, and workshop supplies",
    pages: 156,
    size: "18.3 MB",
    date: "August 2024",
    category: "Tools",
  },
  {
    id: 5,
    title: "Safety Equipment & PPE",
    description: "Complete safety solutions including PPE, fire safety, and workplace protection",
    pages: 72,
    size: "7.8 MB",
    date: "October 2024",
    category: "Safety",
  },
  {
    id: 6,
    title: "Electrical Components",
    description: "Industrial electrical supplies, cables, and control equipment",
    pages: 98,
    size: "10.5 MB",
    date: "September 2024",
    category: "Electrical",
  },
];

export function Catalogs() {
  return (
    <section id="catalogs" className="relative py-20 bg-white overflow-hidden">
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
          <h2 className="text-gray-900 mb-4">Product Catalogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download our comprehensive product catalogs for detailed specifications, pricing, and technical information.
          </p>
        </motion.div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.36, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.24 } }}
            >
              <Card className="overflow-hidden border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 h-full flex flex-col relative">
                {/* Corner Screws */}
                <motion.div
                  className="absolute top-2 left-2 w-2 h-2 rounded-full bg-orange-300 z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-300 z-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center border-b border-gray-200 relative">
                  {/* Page flip animation */}
                  <motion.div
                    whileHover={{ rotateY: 15, scale: 1.05 }}
                    transition={{ duration: 0.36 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="bg-white rounded-lg p-6 shadow-md"
                  >
                    <motion.div
                      animate={{ rotateZ: [0, 2, 0, -2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FileText className="w-16 h-16 text-[#EB791B]" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Page corner fold effect */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gray-200 opacity-50 clip-triangle" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }} />
                </div>

                <CardContent className="p-6 flex-1">
                  <Badge className="mb-3 bg-[#EB791B] hover:bg-[#D36D17]">
                    {catalog.category}
                  </Badge>
                  <h3 className="text-gray-900 mb-2">{catalog.title}</h3>
                  <p className="text-gray-600 mb-4">{catalog.description}</p>

                  <div className="flex flex-wrap gap-4 text-gray-500">
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>{catalog.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{catalog.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{catalog.date}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 gap-2 transition-all duration-240 hover:border-[#EB791B] hover:text-[#EB791B]"
                      >
                        <Eye className="w-4 h-4" />
                        Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle>{catalog.title}</DialogTitle>
                      </DialogHeader>
                      <div className="bg-gray-100 rounded-lg aspect-[8.5/11] flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <FileText className="w-20 h-20 mx-auto mb-4 text-[#EB791B]" />
                          <p className="mb-2">PDF Preview</p>
                          <p>{catalog.pages} pages • {catalog.size}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="flex-1 gap-2 bg-[#EB791B] hover:bg-[#D36D17] transition-all duration-240 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36 }}
          className="mt-16 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-gray-900 mb-4">Need a Custom Catalog?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our sales team to request a customized catalog tailored to your specific industry needs.
          </p>
          <Button
            size="lg"
            className="bg-[#EB791B] hover:bg-[#D36D17] transition-all duration-240 hover:scale-105"
          >
            Request Custom Catalog
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
