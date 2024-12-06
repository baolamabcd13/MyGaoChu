import React from "react";
import Image from "next/image";

const timelineEvents = [
  {
    year: "2020",
    content: "Phát triển hệ thống cửa hàng VIFONMart.",
    image: "/images/about/test.png",
  },
  {
    year: "2017",
    content:
      "Khánh thành Nhà máy Hải Dương. Xuất khẩu sản phẩm tới hơn 80 nước trên thế giới.",
    image: "/images/about/test.png",
  },
  {
    year: "2005",
    content: "Công ty chính thức trở thành công ty 100% vốn cổ phần.",
    icon: "chart",
  },
  {
    year: "2004",
    content:
      'Công ty đổi tên thành "Công ty cổ phần kỹ nghệ thực phẩm Việt Nam".',
    image: "/images/about/test.png",
  },
  {
    year: "2003",
    content:
      "Dòng sản phẩm Hoàng Gia cao cấp có tủi thị nguyên chất đầu trong ngành thực xuất hiện trên thị trường.",
    image: "/images/about/history/test.png",
  },
  {
    year: "2000",
    content: "VIFON sản xuất sản phẩm Bánh Ba Cua",
    image: "/images/about/test.png",
  },
  {
    year: "1996",
    content: "VIFON là công ty đầu tiên sản xuất Phở ăn liền tại Việt Nam.",
    icon: "bowl",
  },
  {
    year: "1992",
    content:
      "09/05/1992 – Bộ Công Nghiệp chính thức đổi tên công ty thành công ty kỹ nghệ thực phẩm Việt Nam.",
  },
  {
    year: "1990",
    content: "Công ty VIFON chính thức xuất khẩu sản phẩm ra thế giới.",
    icon: "export",
  },
  {
    year: "1975",
    content:
      "Sau 30/4/1975 – Công ty VIFON được nhà nước tiếp quản và trở thành 100% vốn nhà nước.",
    icon: "government",
  },
  {
    year: "1963",
    content: "Ngày 23/07/1963 – công ty VIFON được thành lập.",
    image: "/images/about/test.png",
  },
];

const History = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner with Image Overlay */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/about/about_banner_his.jpg"
          alt="VIFON History"
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

      <div className="py-16 bg-white font-sans">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[--primary-green]">
              Lịch Sử Hình Thành
            </h2>
            <div className="w-[400px] h-[2px] bg-black mx-auto mt-2 mb-16"></div>
          </div>

          <div className="max-w-3xl mx-auto p-5">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative max-w-[400px] ${
                  index % 2 === 0
                    ? "ml-0 pr-0 pl-[30px]"
                    : "ml-auto pr-[30px] pl-0"
                } py-[30px]
                  before:content-[''] before:absolute before:w-1/2 before:border-[--primary-green] before:border-solid
                  ${
                    index % 2 === 0
                      ? "before:left-0 before:border-l-[5px] before:border-y-[5px] before:rounded-l-[50px]"
                      : "before:right-0 before:border-r-[5px] before:border-y-[5px] before:rounded-r-[50px]"
                  }
                  ${
                    index === 0
                      ? "before:border-t-0 before:rounded-tl-none"
                      : ""
                  }
                  ${
                    index === timelineEvents.length - 1 && index % 2 === 0
                      ? "before:border-b-0 before:rounded-bl-none"
                      : ""
                  }
                  ${
                    index === timelineEvents.length - 1 && index % 2 === 1
                      ? "before:border-b-0 before:rounded-br-none"
                      : ""
                  }
                  before:top-[-4.5px] before:bottom-[-4.5px]
                `}
              >
                <div className="bg-white rounded-lg p-[10px] flex flex-col text-gray-600 shadow-lg">
                  <h3
                    className={`text-[--primary-green] relative font-bold ${
                      index % 2 === 1 ? "text-right" : ""
                    }
                    before:content-[''] before:absolute before:w-[10px] before:h-[10px]
                    before:bg-white before:rounded-full before:border-[3px] before:border-[--primary-green]
                    ${
                      index % 2 === 0
                        ? "before:left-[-45px]"
                        : "before:right-[-45px]"
                    }
                  `}
                  >
                    {event.year}
                  </h3>

                  <p className="mt-2">{event.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
