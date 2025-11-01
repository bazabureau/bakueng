import { useState, useEffect } from "react";
import { MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatAssistant } from "./components/ChatAssistant";
import { Toaster } from "./components/ui/sonner";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CatalogsPage } from "./pages/CatalogsPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);
  const [disableMotion, setDisableMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateMotionPreference = () => setDisableMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (disableMotion) {
      root.classList.add("reduce-motion");
    } else {
      root.classList.remove("reduce-motion");
    }
  }, [disableMotion]);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2) || "home"; // Remove '#/' prefix
      
      // Check if it's a product detail page
      if (hash.startsWith("product/")) {
        const productId = hash.split("/")[1];
        setCurrentPage("product-detail");
        setCurrentProductId(productId);
      } else {
        setCurrentPage(hash);
        setCurrentProductId(null);
      }
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Set initial page
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      document.documentElement.style.setProperty("--motion-duration", "0.01ms");
    }
  }, []);

  // Mock products data (same as used in HomePage and ProductsPage)
  const mockProducts = [
    {
      id: "1",
      name: "Industrial Ball Valve DN50",
      category: "Valves & Fittings",
      image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      inStock: true,
      featured: true,
      description: "High-performance industrial ball valve designed for critical applications. Features corrosion-resistant materials, leak-proof design, and extended service life. Suitable for oil & gas, chemical processing, and water treatment industries.",
      specifications: [
        { label: "Size Range", value: "DN50 (2 inch)" },
        { label: "Pressure Rating", value: "PN16 to PN40" },
        { label: "Material", value: "Stainless Steel 316" },
        { label: "Connection Type", value: "Flanged / Threaded" },
        { label: "Operating Temperature", value: "-20°C to +200°C" },
        { label: "Certification", value: "ISO 9001:2015, CE" },
        { label: "Warranty", value: "2 Years Manufacturer Warranty" },
        { label: "Lead Time", value: "2-4 weeks" },
      ],
    },
    {
      id: "2",
      name: "Deep Groove Ball Bearing 6308",
      category: "Bearings",
      image: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3MlMjBtZXRhbHxlbnwxfHx8fDE3NjE5OTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      inStock: true,
      description: "Premium quality deep groove ball bearings for industrial machinery. Precision-engineered for high-speed applications with minimal friction and extended operational life.",
      specifications: [
        { label: "Bearing Type", value: "Deep Groove Ball Bearing" },
        { label: "Model", value: "6308" },
        { label: "Bore Diameter", value: "40mm" },
        { label: "Outside Diameter", value: "90mm" },
        { label: "Width", value: "23mm" },
        { label: "Material", value: "Chrome Steel" },
        { label: "Seal Type", value: "2RS (Rubber Sealed)" },
        { label: "Load Capacity", value: "High radial and axial loads" },
        { label: "Certification", value: "ISO 9001:2015" },
        { label: "Lubrication", value: "Pre-lubricated" },
      ],
    },
    {
      id: "3",
      name: "High Tensile Hex Bolt M16x80",
      category: "Fasteners",
      image: "https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFzdGVuZXJzJTIwYm9sdHN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      inStock: true,
      description: "High-tensile hex bolt set for heavy-duty industrial applications. Available in various lengths and grades to meet your specific requirements.",
      specifications: [
        { label: "Thread Size", value: "M16" },
        { label: "Length", value: "80mm" },
        { label: "Grade", value: "8.8 / 10.9 / 12.9" },
        { label: "Material", value: "Carbon Steel / Stainless Steel" },
        { label: "Finish", value: "Zinc Plated / Hot Dip Galvanized" },
        { label: "Standard", value: "DIN 933, ISO 4017" },
        { label: "Packaging", value: "Box of 100 pcs" },
      ],
    },
    {
      id: "4",
      name: "Professional Torque Wrench Set",
      category: "Tools",
      image: "https://images.unsplash.com/photo-1745449064670-94bd0fc13df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdG9vbHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjE4ODg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      inStock: true,
      featured: true,
      description: "Professional-grade torque wrench set for precision fastening. Features click-type mechanism for accurate torque application. Essential for automotive, industrial, and maintenance applications.",
      specifications: [
        { label: "Torque Range", value: "40-200 Nm" },
        { label: "Drive Size", value: "1/2 inch" },
        { label: "Accuracy", value: "±4%" },
        { label: "Mechanism", value: "Click-type" },
        { label: "Material", value: "Chrome Vanadium Steel" },
        { label: "Finish", value: "Chrome Plated" },
        { label: "Certification", value: "ISO 6789" },
        { label: "Calibration", value: "Factory Calibrated" },
      ],
    },
    {
      id: "5",
      name: "Gate Valve Flanged PN16",
      category: "Valves & Fittings",
      image: "https://images.unsplash.com/photo-1738918897772-0ba101be25c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmFsdmVzJTIwcGlwZXN8ZW58MXx8fHwxNzYxOTkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      inStock: false,
      description: "Heavy-duty gate valve for industrial piping systems. Provides reliable shut-off service in various applications. Built to withstand high pressure and temperature conditions.",
      specifications: [
        { label: "Pressure Rating", value: "PN16" },
        { label: "Connection Type", value: "Flanged" },
        { label: "Material", value: "Cast Iron / Ductile Iron" },
        { label: "Seat Material", value: "Brass" },
        { label: "Operating Temperature", value: "-10°C to +120°C" },
        { label: "Standard", value: "DIN 3352" },
        { label: "Certification", value: "ISO 9001:2015" },
        { label: "Lead Time", value: "On Request" },
      ],
    },
    {
      id: "6",
      name: "Cylindrical Roller Bearing NU312",
      category: "Bearings",
      image: "https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVhcmluZ3MlMjBtZXRhbHxlbnwxfHx8fDE3NjE5OTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      inStock: true,
      description: "High-capacity cylindrical roller bearing for heavy radial loads. Suitable for electric motors, gearboxes, and rolling mills.",
      specifications: [
        { label: "Bearing Type", value: "Cylindrical Roller Bearing" },
        { label: "Model", value: "NU312" },
        { label: "Bore Diameter", value: "60mm" },
        { label: "Outside Diameter", value: "130mm" },
        { label: "Width", value: "31mm" },
        { label: "Material", value: "Chrome Steel" },
        { label: "Cage Type", value: "Brass / Polyamide" },
        { label: "Certification", value: "ISO 9001:2015" },
      ],
    },
  ];

  // Render appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "products":
        return <ProductsPage />;
      case "catalogs":
        return <CatalogsPage />;
      case "certifications":
        return <CertificationsPage />;
      case "contact":
        return <ContactPage />;
      case "product-detail":
        if (currentProductId) {
          const product = mockProducts.find((p) => p.id === currentProductId);
          if (product) {
            return <ProductDetailPage product={product} />;
          }
        }
        // If product not found, redirect to products page
        window.location.hash = "#/products";
        return <ProductsPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <MotionConfig reducedMotion={disableMotion ? "always" : "never"}>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} />

        <main style={{ paddingTop: "var(--header-height, 120px)" }}>{renderPage()}</main>

        <Footer />
        <ChatAssistant />
        <Toaster />
      </div>
    </MotionConfig>
  );
}
