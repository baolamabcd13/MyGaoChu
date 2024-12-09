"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  // const pathname = usePathname();

  // return (
  //   <div className="flex justify-between items-center pb-4 pt-24 bg-white px-4">
  //     {/* Back Button */}
  //     <Link href="/" className="cursor-pointer pl-24 ">
  //       <div className="w-14 h-14 rounded-full border-2 border-[--primary-green] flex items-center justify-center hover:-translate-y-1 transition-all ease-in-out duration-300">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //           className="w-7 h-7 text-[--primary-green] "
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M10 19l-7-7m0 0l7-7m-7 7h18"
  //           />
  //         </svg>
  //       </div>
  //     </Link>

  {
    /* Toggle Buttons 
      <div className="absolute left-1/2 -translate-x-1/2 flex">
        <Link
          href="/trong-nuoc"
          className={`px-12 py-3 text-2xl font-bold transition-colors border-2 border-[--primary-green] text-[--primary-green]
            ${
              pathname === "/trong-nuoc"
                ? "bg-[--primary-green] text-white"
                : "hover:bg-[--primary-green] hover:text-white"
            }
           rounded-l-2xl border-r-[1px]`}
        >
          TRONG NƯỚC
        </Link>
        <Link
          href="/xuat-khau"
          className={`px-12 py-3 text-2xl font-bold transition-colors border-2 border-[--primary-green] text-[--primary-green]
            ${
              pathname === "/trong-nuoc"
                ? "bg-[--primary-green] text-white"
                : "hover:bg-[--primary-green] hover:text-white"
            }
           rounded-r-2xl border-r-[1px]`}
        >
          XUẤT KHẨU
        </Link>
      </div>

      {/* Empty div for spacing 
      <div className="w-10"></div> */
  }
  // </div>
  // );
};

export default Header;
