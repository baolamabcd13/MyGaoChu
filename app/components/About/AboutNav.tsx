"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/app/lib/constants/routes";

const AboutNav = () => {
  const pathname = usePathname();

  const navItems = [
    { title: "GIỚI THIỆU", href: ROUTES.ABOUT.INTRODUCTION },
    { title: "LỊCH SỬ", href: ROUTES.ABOUT.HISTORY },
    { title: "THÀNH TỰU", href: ROUTES.ABOUT.ACHIEVEMENTS },
    { title: "CỘNG ĐỒNG", href: ROUTES.ABOUT.COMMUNITY },
  ];

  return (
    <nav className="bg-white shadow-md pt-20">
      <div className="container mx-auto ">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`block px-4 py-4 text-3xl font-extrabold border-b-4 transition-colors
                    ${
                      isActive
                        ? "text-[--primary-green] border-[--primary-green]"
                        : "border-transparent hover:text-[--primary-green] hover:border-[--primary-green]"
                    }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default AboutNav;
