"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";

const ProductsNav = () => {
  // const pathname = usePathname();
  // const categories = [
  //   // { title: "GẠO", href: ROUTES.PRODUCTS.GAO },
  //   { title: "MÌ", href: ROUTES.PRODUCTS.MI },
  //   // { title: "GIA VỊ", href: ROUTES.PRODUCTS.GIAVI },
  //   // { title: "NHẬP KHẨU", href: ROUTES.PRODUCTS.NHAPKHAU },
  // ];
  // const isCategoryActive = (href: string) => pathname === href;
  // return (
  //   <nav className="bg-white shadow-md pt-8">
  //     <div className="container mx-auto">
  //       <ul className="flex justify-center space-x-12">
  //         {categories.map((item) => (
  //           <li key={item.title}>
  //             <Link
  //               href={item.href}
  //               className={`group relative block px-4 py-4 text-4xl font-extrabold`}
  //             >
  //               <span
  //                 className={`relative z-10 ${
  //                   isCategoryActive(item.href)
  //                     ? "text-[--primary-green]"
  //                     : "group-hover:text-[--primary-green] transition-colors duration-300"
  //                 }`}
  //               >
  //                 {item.title}
  //               </span>
  //               <span
  //                 className={`absolute inset-0 bg-gradient-to-r from-[--primary-green] to-[--primary-green]
  //                   ${
  //                     isCategoryActive(item.href)
  //                       ? "opacity-10"
  //                       : "opacity-0 group-hover:opacity-10 transition-opacity duration-300"
  //                   }
  //                 `}
  //                 style={{
  //                   clipPath: "inset(0 100% 0 0)",
  //                   transition: "clip-path 0.3s ease-in-out",
  //                 }}
  //               />
  //               <span
  //                 className={`absolute bottom-0 left-0 h-1 bg-[--primary-green]
  //                   ${
  //                     isCategoryActive(item.href)
  //                       ? "w-full"
  //                       : "w-0 group-hover:w-full transition-all duration-300"
  //                   }
  //                 `}
  //               />
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </nav>
  // );
};

export default ProductsNav;
