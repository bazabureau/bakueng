import { motion } from "motion/react";
import { ShoppingCart, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  inStock: boolean;
  featured?: boolean;
}

export function ProductCard({ id, name, category, image, price, inStock, featured }: ProductCardProps) {
  const handleCardClick = () => {
    window.location.hash = `#/product/${id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.24 } }}
      className="group cursor-pointer"
      onClick={handleCardClick}
    >
      <Card className="overflow-hidden border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#F9DFC4] relative">
        {/* Corner Bolts */}
        <motion.div
          className="absolute top-3 left-3 w-2 h-2 rounded-full bg-gray-300 z-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-300 z-10"
          whileHover={{ rotate: -360 }}
          transition={{ duration: 0.6 }}
        />
        
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ duration: 0.36 }}
          >
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Technical Grid Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.24 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(235, 121, 27, 0.05) 25%, rgba(235, 121, 27, 0.05) 26%, transparent 27%, transparent 74%, rgba(235, 121, 27, 0.05) 75%, rgba(235, 121, 27, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(235, 121, 27, 0.05) 25%, rgba(235, 121, 27, 0.05) 26%, transparent 27%, transparent 74%, rgba(235, 121, 27, 0.05) 75%, rgba(235, 121, 27, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.24 }}
            className="absolute inset-0 bg-gray-900/60 flex items-center justify-center gap-3"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Button
                size="icon"
                variant="secondary"
                className="bg-white hover:bg-[#EB791B] hover:text-white transition-all duration-240 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                aria-label="View product details"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ rotate: -360 }} transition={{ duration: 0.6 }}>
              <Button
                size="icon"
                className="bg-[#EB791B] hover:bg-[#D36D17] transition-all duration-240 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                aria-label="Request quote"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {featured && (
              <Badge className="bg-[#EB791B] hover:bg-[#D36D17]">Featured</Badge>
            )}
            {!inStock && (
              <Badge variant="destructive">Out of Stock</Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2 text-[#EB791B] border-[#F9DFC4]">
            {category}
          </Badge>
          <h3 className="text-gray-900 mb-2 line-clamp-2 group-hover:text-[#EB791B] transition-colors duration-240">
            {name}
          </h3>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <span className="text-gray-600 text-sm">Contact for pricing</span>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.24 }}
            className="text-[#EB791B] hover:text-[#D36D17] cursor-pointer"
          >
            View Details →
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
