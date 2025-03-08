"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Plants",
    href: "#plants",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="nav-blur border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="ml-2 text-white font-semibold">MediPlant</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group"
                  >
                    <span
                      className={cn(
                        "text-sm transition-colors",
                        activeSection === item.href.slice(1)
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.name}
                    </span>
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                      initial={false}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}