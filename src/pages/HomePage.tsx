import { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { PartnerLogos } from "../components/PartnerLogos";
import { CompanyHighlights } from "../components/CompanyHighlights";
import { IndustriesServed } from "../components/IndustriesServed";
import { OilGasGallery } from "../components/OilGasGallery";
import { ProductGrid } from "../components/ProductGrid";
import { Catalogs } from "../components/Catalogs";
import { SafetyStandards } from "../components/SafetyStandards";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";

// Mock product data
const products = [
  {
    id: "1",
    name: "Oil Field Control Valve DN50",
    category: "Valves & Fittings",
    image: "https://images.unsplash.com/photo-1722580089913-9a8dd0959470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBmaWVsZCUyMHZhbHZlc3xlbnwxfHx8fDE3NjIwMTc3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    name: "Pressure Control Equipment",
    category: "Safety & Control",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMGNvbnRyb2wlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYyMDE3NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$12.75",
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Industrial Pipe Fittings Set",
    category: "Fittings & Connectors",
    image: "https://images.unsplash.com/photo-1600065621653-2f1de87d0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8fHx8MTc2MjAxNzc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$458.00",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Oil & Gas Safety Equipment",
    category: "Safety & Protection",
    image: "https://images.unsplash.com/photo-1651672046563-8162c691c882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBzYWZldHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYyMDE3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Petroleum Industry Pressure Gauge",
    category: "Instrumentation",
    image: "https://images.unsplash.com/photo-1759148413364-c766dd9ff1af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJlc3N1cmUlMjBnYXVnZXN8ZW58MXx8fHwxNzYyMDE3Njk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "$156.00",
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "High Tensile Hex Bolt M16x80",
    category: "Fasteners",
    image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFzdGVuZXJzJTIwYm9sdHN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$8.50",
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Gate Valve Flanged PN16",
    category: "Valves & Fittings",
    image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "$325.00",
    inStock: true,
    featured: false,
  },
];

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero heroImage="https://images.unsplash.com/photo-1749549437525-3b5aa46fa1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjByZWZpbmVyeXxlbnwxfHx8fDE3NjIwMTc2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      <CompanyHighlights />
      <IndustriesServed />
      <OilGasGallery />
      <PartnerLogos />
      <ProductGrid products={products} isLoading={isLoading} />
      <SafetyStandards />
      <Catalogs />
      <Certifications />
      <Contact />
    </>
  );
}
