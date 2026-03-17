'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Artikel() {
  const articles = [
    {
      id: 1,
      title: 'Elementum Curabitur',
      category: 'Pendidikan',
      date: '15 Maret 2024',
      image: '/Rectangle110.png',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Quis blandit turpis cursus in hac habitasse platea. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed'
    },
    {
      id: 2,
      title: 'Elementum Curabitur',
      category: 'Pengembangan Diri',
      date: '12 Maret 2024',
      image: '/Rectangle113.png',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Quis blandit turpis cursus in hac habitasse platea. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed'
    },
    {
      id: 3,
      title: 'Elementum Curabitur',
      category: 'Pendidikan Anak',
      date: '10 Maret 2024',
      image: '/Rectangle115.png',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Quis blandit turpis cursus in hac habitasse platea. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed'
    },
    {
      id: 4,
      title: 'Elementum Curabitur',
      category: 'Kurikulum',
      date: '8 Maret 2024',
      image: '/Rectangle110(1).png',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Quis blandit turpis cursus in hac habitasse platea. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed'
    },
    {
      id: 5,
      title: 'Elementum Curabitur',
      category: 'Parenting',
      date: '5 Maret 2024',
      image: '/Rectangle113(1).png',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Quis blandit turpis cursus in hac habitasse platea. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed'
    },
    {
      id: 6,
      title: 'Elementum Curabitur',
      category: 'Teknologi',
      date: '1 Maret 2024',
      image: '/Rectangle115(1).png',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis. Quis blandit turpis cursus in hac habitasse platea. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Sed'
    }
  ];

  return (
    <div className="bg-white min-h-screen w-full pt-20">
      <Navbar />

      {/* SECTION 1: Yellow Hero with Breadcrumb and Title */}
      <div className="relative w-full bg-[#FFF4BA] py-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Breadcrumb */}
          <p className="text-[#293C88] font-poppins text-sm mb-8">
            Homepage <span className="text-[#868686]">|</span> Article
          </p>

          {/* Title with yellow border */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="border-l-8 border-l-[#FED700] h-[120px]"></div>
              <div>
                <h1 className="text-[40px] font-bold text-[#293C88] mb-4">
                  News
                </h1>
                <p className="text-[#000] font-poppins text-base max-w-2xl leading-relaxed">
                  Temukan cerita, pencapaian, dan momen berharga yang membentuk pengalaman belajar siswa kami setiap harinya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Articles Grid - First Row */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <div key={article.id} className="bg-[#FFF4BA] rounded-[15px] overflow-hidden shadow-md">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#293C88] font-poppins text-base font-semibold mb-4">
                    {article.title}
                  </p>
                  <p className="text-[#000] font-poppins text-base leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: Articles Grid - Second Row */}
      <div className="w-full py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(3, 6).map((article) => (
              <div key={article.id} className="bg-[#FFF4BA] rounded-[15px] overflow-hidden shadow-md">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#293C88] font-poppins text-base font-semibold mb-4">
                    {article.title}
                  </p>
                  <p className="text-[#000] font-poppins text-base leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
