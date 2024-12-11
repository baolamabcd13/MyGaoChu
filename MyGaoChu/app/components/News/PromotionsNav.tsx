"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items
const navItems = [
  { title: "TIN TỨC & SỰ KIỆN", href: "/news/events" },
  { title: "KHUYẾN MÃI", href: "/news/promotions" },
];

const PromotionsNav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md pt-20">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`block px-4 py-4 text-3xl relative group
                    ${isActive ? "text-[--primary-green]" : "text-gray-600"}`}
                >
                  {/* Static text */}
                  <span className="relative inline-block">
                    {item.title}

                    {/* Text with sliding color effect */}
                    <span
                      className={`absolute inset-0 text-[--primary-green] inline-block w-0 overflow-hidden whitespace-nowrap
                        group-hover:w-full transition-[width] duration-300 ease-out
                        ${isActive ? "w-full" : ""}`}
                    >
                      {item.title}
                    </span>
                  </span>

                  {/* Border bottom with sliding effect */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent">
                    <span
                      className={`absolute inset-0 bg-[--primary-green] w-0
                        group-hover:w-full transition-[width] duration-300 ease-out
                        ${isActive ? "w-full" : ""}`}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default PromotionsNav;
