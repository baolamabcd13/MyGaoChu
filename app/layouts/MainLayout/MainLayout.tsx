"use client";

import React from "react";
import Image from "next/image";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative h-screen w-full">
      {/* Top background */}
      <div className="absolute top-0 left-0 right-0 h-[500px] z-1">
        <Image
          src="https://vifon.com.vn/modules/main/images/main/bg-top.jpg"
          alt="Top background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Bottom background */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] z-1">
        <Image
          src="https://vifon.com.vn/modules/main/images/main/bg-bottom.jpg"
          alt="Bottom background"
          fill
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="bg-[#FBECD7] h-[500px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 pt-[60px]">{children}</div>
    </div>
  );
};

export default MainLayout;
