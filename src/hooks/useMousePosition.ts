import { useEffect, useState } from "react";

type Position = { x: number; y: number };

export function useMousePosition(): Position {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
