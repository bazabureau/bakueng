import { motion } from "motion/react";

interface BlueprintGridProps {
  className?: string;
}

export function BlueprintGrid({ className = "" }: BlueprintGridProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-20 ${className}`}>
      {/* Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-orange-300"
            />
          </pattern>
          <pattern id="blueprint-grid-major" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="url(#blueprint-grid)" />
            <path
              d="M 200 0 L 0 0 0 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-orange-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-major)" />
      </svg>

      {/* Animated Technical Lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        animate={{
          scaleX: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
        animate={{
          scaleX: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
