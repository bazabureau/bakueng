interface TechnicalScanlineProps {
  className?: string;
}

export function TechnicalScanline({ className = "" }: TechnicalScanlineProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Vertical Scanline */}
      <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent animate-scanline">
        <div className="absolute inset-0 blur-sm bg-gradient-to-b from-transparent via-orange-400/30 to-transparent" />
      </div>

      {/* Corner Brackets */}
      <svg
        className="absolute top-4 left-4 w-8 h-8 text-orange-500/60 animate-corner-fade"
        viewBox="0 0 20 20"
      >
        <path
          d="M 0 5 L 0 0 L 5 0 M 15 0 L 20 0 L 20 5 M 20 15 L 20 20 L 15 20 M 5 20 L 0 20 L 0 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute bottom-4 right-4 w-8 h-8 text-orange-500/60 animate-corner-fade"
        viewBox="0 0 20 20"
        style={{ animationDelay: "1s" }}
      >
        <path
          d="M 0 5 L 0 0 L 5 0 M 15 0 L 20 0 L 20 5 M 20 15 L 20 20 L 15 20 M 5 20 L 0 20 L 0 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
