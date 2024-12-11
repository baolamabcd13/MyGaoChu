import React from "react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="bg-white">
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/about/about_banner_intro.jpg"
          alt="VIFON Building"
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
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[--primary-green]">
              GIỚI THIỆU VỀ VIFON
            </h2>
            <div className="w-[400px] h-[2px] bg-black mx-auto mt-2"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-gray-800">
              VIFON là công ty đầu tiên tạo dựng nền tảng cho ngành công nghiệp
              thực phẩm ăn liền của Việt Nam
            </h3>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Là một trong những đơn vị đầu tiên nông sâu xây dựng nền ngành
              thực phẩm ăn liền Việt Nam, VIFON đã trở thành thương hiệu quen
              thuộc và gần bó với người tiêu dùng thông qua nhiều sản phẩm ưu
              tín đến và gia vị. Với tổng diện tích khuôn viên rộng 67.000 m²,
              với năng lực sản xuất lớn, cùng đội ngũ cn bộ công nhân viên giàu
              tâm huyết, công ty đã không ngừng nghiên cứu và phát triển để tạo
              nên nhiều sản phẩm chất lượng cao cấp.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-[300px]">
              <Image
                src="/images/about/vifon-lab.jpg"
                alt="Vifon Laboratory"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-700 text-white p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                Luôn đặt tiêu chí vệ sinh an toàn thực phẩm lên hàng đầu, các
                sản phẩm của VIFON cam kết không sử dụng phẩm màu tổng hợp,
                không chỉ đáp ứng đầy đủ các quy định về chất lượng thực phẩm
                trong nước mà còn nhận được sự chấp thuận từ nhiều quốc gia có
                tiêu chuẩn quản lý chất lượng khắt khe như: Mỹ, Úc, Nhật và các
                nước Châu Âu.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Không dừng lại ở những thành quả đã được, với mong ước đưa "Vươn
              xa Việt Nam", VIFON – bằng niềm tin yêu từ nhiều thế hệ, bằng
              những nỗ nở lực không ngừng, VIFON sẽ viết tiếp câu chuyện về giấc
              mơ đem bữa ăn Việt đến khắp mọi nơi trên thế giới, góp phần khẳng
              định vị thế của thương hiệu Việt trên thị trường quốc tế.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white bg-[--primary-green] p-4 mb-4">
                Sứ Mệnh
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p>
                    Không ngừng nâng cao chất lượng sản phẩm nhằm góp phần thỏa
                    mãn đời sống ẩm thực đầy càng cao của người tiêu dùng Việt
                    Nam và quốc tế trong tình vực chế biến thực phẩm ăn liền.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p>Sản phẩm cam kết không sử dụng phẩm màu tổng hợp.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p>
                    Thực hiện tốt vệ sinh môi trường, chính sách an sinh xã hội
                    cho cán bộ và công nhân viên, chính sách công đồng.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white bg-[--primary-green] p-4 mb-4">
                Định Hướng
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p>
                    Chú trọng phát triển thị trường nội địa để phát triển thị
                    phần và vị thế của nhà sản xuất tiên phong trong lĩnh vực
                    thực phẩm ăn liền.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <p>
                    Duy trì tốt thế xuất khẩu để có thể đứng vững trong cuộc
                    chiến cạnh tranh khốc liệt của môi trường hội nhập toàn cầu.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
