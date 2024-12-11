import React from "react";
import Image from "next/image";

const achievements = [
  {
    year: "2021",
    title: "Nguyệt Quế Vàng",
    description:
      'Sản phẩm VIFON 17 năm liền đạt giải thưởng "Nguyệt Quế Vàng" do Người tiêu dùng bầu chọn.',
    icon: "/images/about/test.jpg",
  },
  {
    year: "2020",
    title: "Chứng nhận HACCP & ISO",
    description:
      'Sản phẩm VIFON được Người tiêu dùng bình chọn là "Hàng Việt Nam Chất Lượng Cao" suốt 24 năm liền và chứng nhận HACCP - GPN 3 năm liền.',
    icon: "/images/about/test.jpg",
  },
  {
    year: "2018",
    title: "Kỷ lục Guinness",
    description:
      'Nhân dịp 55 năm thành lập công ty, VIFON đã xác lập kỷ lục Guinness "Tô Phở Bò Lớn Nhất Thế Giới".',
    icon: "/images/about/test.jpg",
  },
  {
    year: "2016",
    title: "Thương hiệu Quốc Gia",
    description: "VIFON đạt danh hiệu Thương Hiệu Quốc Gia 2016",
    icon: "/images/about/test.jpg",
  },
  {
    year: "2012",
    title: "Giải thưởng Brazil",
    description:
      "Bánh Ba Cua VIFON đạt giải nhất công nghiệp thực phẩm toàn cầu tại Brazil.",
    icon: "/images/about/test.jpg",
  },
  {
    year: "2010",
    title: "Top 10 Thế Giới",
    description:
      "Sản phẩm Phở VIFON đạt top 10 giải thưởng thực phẩm Toàn Cầu.",
    icon: "/images/about/test.jpg",
  },
];

const Achievements = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner with Image Overlay */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/about/about_banner_achi.jpg"
          alt="VIFON Achievements"
          fill
          className="object-cover pt-2"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src="/images/about/about_slide.png"
            alt="Decorative overlay"
            width={1920}
            height={100}
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[--primary-green] mb-4">
          THÀNH TỰU ĐẠT ĐƯỢC
        </h2>
        <div className="w-[400px] h-[2px] bg-black mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.year}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Card Header with Year */}
              <div className="bg-[--primary-green] text-white p-4">
                <h3 className="text-2xl font-bold text-center">
                  {achievement.year}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={achievement.icon}
                    alt={achievement.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-center text-gray-800 mb-4">
                  {achievement.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-center">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[--primary-green]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Achievements Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[--primary-green] mb-4">
                Chứng Nhận Chất Lượng
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[--primary-green] rounded-full"></span>
                  <span>Chứng nhận HACCP từ năm 2005</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[--primary-green] rounded-full"></span>
                  <span>ISO 9001:2008 từ năm 2002</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[--primary-green] rounded-full"></span>
                  <span>Tiêu chuẩn Quốc tế IFS</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[--primary-green] mb-4">
                Thành Tựu Xuất Khẩu
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[--primary-green] rounded-full"></span>
                  <span>Xuất khẩu đến hơn 80 quốc gia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[--primary-green] rounded-full"></span>
                  <span>Doanh nghiệp xuất khẩu uy tín</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[--primary-green] rounded-full"></span>
                  <span>Thương hiệu Việt được yêu thích nhất</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
