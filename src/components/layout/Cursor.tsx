import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsFinePointer, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export function Cursor() {
  const isFinePointer = useIsFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!isFinePointer || reducedMotion) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [data-cursor-hover]"));
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinePointer, reducedMotion]);

  if (!isFinePointer || reducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      style={{ translateX: springX, translateY: springY, opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? "rgba(212,162,78,0.15)" : "rgba(212,162,78,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="h-6 w-6 rounded-full border border-gold/60"
      />
    </motion.div>
  );
}
