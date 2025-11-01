import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface MechanicalCounterProps {
  value: string;
  duration?: number;
}

export function MechanicalCounter({ value, duration = 2 }: MechanicalCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract number from value (e.g., "5000+" -> 5000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView && numericValue > 0) {
      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      
      return () => controls.stop();
    }
  }, [isInView, numericValue, duration]);

  return (
    <div ref={ref} className="inline-flex items-center gap-1">
      <span className="tabular-nums">
        {displayValue.toLocaleString()}
      </span>
      {suffix && <span>{suffix}</span>}
      
      {/* Mechanical tick marks */}
      <svg className="w-3 h-3 ml-1 text-orange-400" viewBox="0 0 10 10">
        <motion.line
          x1="2"
          y1="2"
          x2="8"
          y2="8"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.3, delay: duration }}
        />
        <motion.line
          x1="8"
          y1="2"
          x2="2"
          y2="8"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.3, delay: duration + 0.1 }}
        />
      </svg>
    </div>
  );
}
