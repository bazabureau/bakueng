import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ProductGrid } from "../components/ProductGrid";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Extended product data
const allProducts = [
  {
    id: "1",
    name: "Industrial Ball Valve DN50",
    category: "Valves & Fittings",
    image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$245.00",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Deep Groove Ball Bearing 6308",
    category: "Bearings",
    image: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3MlMjBtZXRhbHxlbnwxfHx8fDE3NjE5OTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$89.50",
    inStock: true,
    featured: false,
  },
  {
    id: "3",
    name: "High Tensile Hex Bolt M16x80",
    category: "Fasteners",
    image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFzdGVuZXJzJTIwYm9sdHN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$12.75",
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Professional Torque Wrench Set",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE4ODg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$458.00",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Gate Valve Flanged PN16",
    category: "Valves & Fittings",
    image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$312.00",
    inStock: false,
    featured: false,
  },
  {
    id: "6",
    name: "Cylindrical Roller Bearing NU312",
    category: "Bearings",
    image: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3MlMjBtZXRhbHxlbnwxfHx8fDE3NjE5OTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$156.00",
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "Stainless Steel Nut DIN 934",
    category: "Fasteners",
    image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFzdGVuZXJzJTIwYm9sdHN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$8.50",
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Industrial Impact Drill 2000W",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE4ODg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$325.00",
    inStock: true,
    featured: false,
  },
  {
    id: "9",
    name: "Butterfly Valve Wafer Type DN100",
    category: "Valves & Fittings",
    image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$378.00",
    inStock: true,
    featured: true,
  },
  {
    id: "10",
    name: "Thrust Ball Bearing 51206",
    category: "Bearings",
    image: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3MlMjBtZXRhbHxlbnwxfHx8fDE3NjE5OTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$67.90",
    inStock: true,
    featured: false,
  },
  {
    id: "11",
    name: "Socket Head Cap Screw M12",
    category: "Fasteners",
    image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFzdGVuZXJzJTIwYm9sdHN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$15.20",
    inStock: true,
    featured: false,
  },
  {
    id: "12",
    name: "Hydraulic Bolt Tensioner Kit",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE4ODg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$892.00",
    inStock: true,
    featured: false,
  },
  {
    id: "13",
    name: "Check Valve Swing Type",
    category: "Valves & Fittings",
    image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$189.00",
    inStock: true,
    featured: false,
  },
  {
    id: "14",
    name: "Tapered Roller Bearing 32216",
    category: "Bearings",
    image: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3MlMjBtZXRhbHxlbnwxfHx8fDE3NjE5OTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$234.00",
    inStock: true,
    featured: false,
  },
  {
    id: "15",
    name: "Precision Measuring Tools Set",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE4ODg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$567.00",
    inStock: true,
    featured: false,
  },
  {
    id: "16",
    name: "Heavy Duty Anchor Bolts",
    category: "Fasteners",
    image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFzdGVuZXJzJTIwYm9sdHN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$45.00",
    inStock: true,
    featured: false,
  },
];

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "price-low") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price?.replace("$", "") || "0");
        const priceB = parseFloat(b.price?.replace("$", "") || "0");
        return priceA - priceB;
      });
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price?.replace("$", "") || "0");
        const priceB = parseFloat(b.price?.replace("$", "") || "0");
        return priceB - priceA;
      });
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const categories = [
    "all",
    ...Array.from(new Set(allProducts.map((p) => p.category))),
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
                Our Catalog
              </span>
            </div>
            <h1 className="text-white mb-4 max-w-3xl">
              Industrial Products & Supplies
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl">
              Browse our comprehensive range of premium industrial equipment,
              tools, and components
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-[#F5F5F5] border-b border-gray-200 sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-4"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white border-gray-300 focus:border-[#EB791B] focus:ring-[#EB791B]"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-[220px] h-12 bg-white border-gray-300">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-[200px] h-12 bg-white border-gray-300">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price (Low to High)</SelectItem>
                <SelectItem value="price-high">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            Showing {filteredProducts.length} of {allProducts.length} products
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <ProductGrid products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}
