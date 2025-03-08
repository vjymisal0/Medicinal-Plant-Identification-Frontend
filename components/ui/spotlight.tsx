"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className = "", fill = "white" }: SpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-md",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-transform duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}/0.1, transparent 40%)`,
        }}
      />
    </div>
  );
};