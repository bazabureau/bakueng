import { motion } from "motion/react";

interface MechanicalGearsProps {
  className?: string;
}

export function MechanicalGears({ className = "" }: MechanicalGearsProps) {
  return (
    <div className={`absolute pointer-events-none opacity-10 ${className}`}>
      {/* Large Gear */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -top-20 w-64 h-64 text-orange-500"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,10 L54,20 L46,20 Z M90,50 L80,54 L80,46 Z M50,90 L46,80 L54,80 Z M10,50 L20,46 L20,54 Z M73,73 L67,79 L61,73 Z M73,27 L79,33 L73,39 Z M27,27 L33,21 L39,27 Z M27,73 L21,67 L27,61 Z" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
      </motion.svg>

      {/* Medium Gear */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -left-10 top-1/3 w-40 h-40 text-orange-600"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,15 L53,23 L47,23 Z M85,50 L77,53 L77,47 Z M50,85 L47,77 L53,77 Z M15,50 L23,47 L23,53 Z M70,70 L66,74 L62,70 Z M70,30 L74,34 L70,38 Z M30,30 L34,26 L38,30 Z M30,70 L26,66 L30,62 Z" />
        <circle cx="50" cy="50" r="20" />
        <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </motion.svg>

      {/* Small Gear */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute right-1/4 bottom-1/4 w-24 h-24 text-orange-500"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,20 L52,27 L48,27 Z M80,50 L73,52 L73,48 Z M50,80 L48,73 L52,73 Z M20,50 L27,48 L27,52 Z" />
        <circle cx="50" cy="50" r="15" />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
    </div>
  );
}
