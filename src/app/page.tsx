import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#FFF] relative overflow-hidden" style={{ minHeight: "4300px" }}>
      <div className="max-w-screen-xl mx-auto px-4 relative">
        {/* ── NAVBAR ─────────────────────────────────────────────────── */}
        <Navbar />

        {/* ── HERO SLIDER ─────────────────────────────────────────────── */}
        <div className="w-full absolute left-0 top-[70px]">
          <HeroSlider />
        </div>

        {/* ── WHITE ROUNDED CARD (content area) ───────────────────────── */}
        <div className="rounded-[43px] bg-[#FFF] w-full h-[1252px] absolute left-0 top-[694px]"></div>

        {/* ── DECORATIVE IMAGES ────────────────────────────────────────── */}
        <img src="/ElitePng121.png" className="w-[317px] h-[276px] absolute -left-[37px] top-[811px] max-w-none" alt="ELITE PNG (12) 1" />
        <img src="/ElitePng129.png" className="w-[87px] h-[76px] absolute left-[1095px] top-[748px] max-w-none" alt="ELITE PNG (12) 9" />
        <img src="/ElitePng164.png" className="w-[61px] h-11 absolute left-[1271px] top-[486px] max-w-none" alt="ELITE PNG (16) 4" />

        {/* ── HERO SUB-CONTENT ─────────────────────────────────────────── */}
        <p className="text-[#293C88] font-poppins text-3xl font-bold w-[590px] h-[45px] absolute left-[411px] top-[1009px]">
          A Safe Place to Learn, Grow, and Shine
        </p>
        <div className="bg-[#FED700] w-[629px] h-[2px] absolute left-[410px] top-[1054px]"></div>
        <p className="text-[#293C88] font-poppins text-lg w-[592px] h-[54px] absolute left-[429px] top-[1072px] text-center">
          We provide a supportive and inspiring environment where every child feels valued, confident, and ready to succeed
        </p>
        <img src="/ElitePng122.png" className="w-[316px] h-[275px] absolute left-[1203px] top-[1277px] max-w-none" alt="ELITE PNG (12) 2" />

        {/* ── PROGRAM UNGGULAN SECTION ─────────────────────────────────── */}
        <p className="text-[#293C88] font-poppins text-3xl font-bold w-[419px] h-[45px] absolute left-[510px] top-[1457px] text-center">
          Program Unggulan Kami
        </p>

        {/* Program Cards */}
        <div className="flex justify-center items-start rounded-[69px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[1348px] h-[469px] absolute left-[46px] top-[1523px]">

          {/* Elite Academia */}
          <div className="shrink-0 w-[337px] h-[469px] overflow-hidden relative">
            <img src="/Rectangle123.png" className="w-[364px] h-[485px] absolute -left-[15px] -top-4 max-w-none object-cover" alt="Rectangle 123" />
            <div className="bg-gradient-to-b from-transparent to-black/37 w-[349px] h-[485px] absolute left-0 -top-4"></div>
            <p className="text-[#FFF] font-poppins text-[32px] font-semibold w-[245px] h-12 absolute left-[37px] top-[342px] text-center">Elite Academia</p>
            <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[244px] absolute left-[37px] top-[388px]">
              <path d="M0 0.5H244" stroke="white" />
            </svg>
            <div className="w-[219px] h-[22px] absolute left-[37px] top-[400px]">
              <p className="text-[#FFF] font-poppins text-base w-[194px] h-[22px] absolute left-0 top-0">Pelajari Selengkapnya</p>
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[21px] absolute left-[183px] top-[7px]">
                <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* IPDC */}
          <div className="shrink-0 w-[337px] h-[469px] overflow-hidden relative">
            <img src="/Rectangle123(1).png" className="w-[527px] h-[633px] absolute -left-[58px] -top-14 max-w-none object-cover" alt="Rectangle 123" />
            <div className="bg-gradient-to-b from-transparent to-black/37 w-[349px] h-[485px] absolute -left-1.5 -top-2"></div>
            <p className="text-[#FFF] font-poppins text-[32px] font-semibold w-[76px] h-12 absolute left-[37px] top-[342px]">IPDC</p>
            <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[244px] absolute left-[37px] top-[388px]">
              <path d="M0 0.5H244" stroke="white" />
            </svg>
            <div className="w-[219px] h-[22px] absolute left-[37px] top-[400px]">
              <p className="text-[#FFF] font-poppins text-base w-[194px] h-[22px] absolute left-0 top-0">Pelajari Selengkapnya</p>
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[21px] absolute left-[183px] top-[7px]">
                <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* English Course */}
          <div className="shrink-0 w-[337px] h-[469px] overflow-hidden relative">
            <img src="/Rectangle123(2).png" className="w-[364px] h-[485px] absolute -left-[15px] -top-4 max-w-none object-cover" alt="Rectangle 123" />
            <div className="bg-gradient-to-b from-transparent to-black/37 w-[349px] h-[485px] absolute left-0 -top-4"></div>
            <p className="text-[#FFF] font-poppins text-[32px] font-semibold w-[241px] h-12 absolute left-[37px] top-[342px]">English Course</p>
            <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[244px] absolute left-[37px] top-[388px]">
              <path d="M0 0.5H244" stroke="white" />
            </svg>
            <div className="w-[219px] h-[22px] absolute left-[37px] top-[400px]">
              <p className="text-[#FFF] font-poppins text-base w-[194px] h-[22px] absolute left-0 top-0">Pelajari Selengkapnya</p>
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[21px] absolute left-[183px] top-[7px]">
                <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* Playteracy */}
          <div className="shrink-0 w-[337px] h-[469px] overflow-hidden relative">
            <img src="/Rectangle123(3).png" className="w-[364px] h-[485px] absolute -left-[15px] -top-4 max-w-none object-cover" alt="Rectangle 123" />
            <div className="bg-gradient-to-b from-transparent to-black/37 w-[349px] h-[485px] absolute left-0 -top-4"></div>
            <p className="text-[#FFF] font-poppins text-[32px] font-semibold w-[175px] h-12 absolute left-[37px] top-[342px]">Playteracy</p>
            <svg width="244" height="1" viewBox="0 0 244 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[244px] absolute left-[37px] top-[388px]">
              <path d="M0 0.5H244" stroke="white" />
            </svg>
            <div className="w-[219px] h-[22px] absolute left-[37px] top-[400px]">
              <p className="text-[#FFF] font-poppins text-base w-[194px] h-[22px] absolute left-0 top-0">Pelajari Selengkapnya</p>
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[21px] absolute left-[183px] top-[7px]">
                <path d="M21.4486 4.03568C21.6438 3.84042 21.6438 3.52384 21.4486 3.32858L18.2666 0.146595C18.0713 -0.0486672 17.7548 -0.0486672 17.5595 0.146595C17.3642 0.341857 17.3642 0.65844 17.5595 0.853702L20.3879 3.68213L17.5595 6.51056C17.3642 6.70582 17.3642 7.0224 17.5595 7.21766C17.7548 7.41293 18.0713 7.41293 18.2666 7.21766L21.4486 4.03568ZM0 3.68213L0 4.18213H21.095V3.68213V3.18213L0 3.18213L0 3.68213Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS / PHOTO CARDS ───────────────────────────────── */}
        <img src="/ElitePng123.png" className="w-[115px] h-[100px] absolute left-[1182px] top-[2085px] max-w-none" alt="ELITE PNG (12) 3" />
        <img src="/ElitePng128.png" className="w-[194px] h-[169px] absolute left-[370px] top-[2276px] max-w-none" alt="ELITE PNG (12) 8" />

        <div className="inline-flex pt-6 pr-7 pb-0 pl-0 flex-col justify-end items-center w-[229px] h-[462px] absolute left-[866px] top-[2389px]">
          <img src="/Rectangle76.png" className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[229px] h-[462px] absolute -left-7 top-6 max-w-none object-cover" alt="Rectangle 76" />
        </div>
        <div className="flex flex-col justify-center items-center w-[229px] h-[462px] absolute left-[1095px] top-[2475px]">
          <img src="/Rectangle75.png" className="shrink-0 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] w-[229px] h-[462px] max-w-none object-cover" alt="Rectangle 75" />
        </div>

        {/* ── WHY CHOOSE US SECTION ────────────────────────────────────── */}
        <div className="bg-[#FFF4BA] w-full h-[777px] absolute left-0 top-[2323px]"></div>
        <p className="text-[#293C88] font-poppins text-xl font-semibold w-[666px] h-[30px] absolute left-[93px] top-[2516px]">Keunggulan Kami</p>
        <p className="text-[#293C88] font-poppins text-6xl font-bold w-[509px] h-[136px] absolute left-[93px] top-[2540px]">why Choose</p>
        <p className="text-[#293C88] font-poppins text-6xl font-bold w-[461px] h-[136px] absolute left-[93px] top-[2608px]">edelweiss</p>
        <p className="text-[#293C88] font-poppins text-6xl font-bold w-[747px] h-[136px] absolute left-[93px] top-[2676px]">Learning Center</p>
        <img src="/ElitePng124.png" className="w-[136px] h-[118px] absolute left-[810px] top-[2763px] max-w-none" alt="ELITE PNG (12) 4" />
        <p className="text-[#868686] font-poppins text-sm w-[574px] h-[63px] absolute left-[93px] top-[2776px]">
          Kami berkomitmen menghadirkan lingkungan belajar yang inspiratif, aman, dan berstandar tinggi — karena setiap anak berhak tumbuh menjadi yang terbaik.
        </p>

        {/* ── KEUNGGULAN CARDS ─────────────────────────────────────────── */}
        <div className="w-[1302px] h-[168px] absolute left-[69px] top-[3021px] overflow-hidden">
          <div className="flex justify-center items-start gap-[21px] w-[1956px] h-[165px] absolute left-0 top-0.5">

            {/* Card 1 – Pengajar Profesional */}
            <div className="shrink-0 w-[638px] h-[165px] relative">
              <div className="rounded-[14px] bg-[#F6F6F6] w-[638px] h-[165px] absolute left-0 top-0"></div>
              <img src="/ElitePng162.png" className="w-[87px] h-[97px] absolute left-11 top-[34px] max-w-none" alt="ELITE PNG (16) 2" />
              <p className="text-[#293C88] font-poppins text-2xl font-bold w-[257px] h-9 absolute left-[150px] top-9">Pengajar Profesional</p>
              <p className="text-[#868686] font-poppins text-[15px] w-[457px] h-[46px] absolute left-[150px] top-[75px]">
                Didukung oleh tim pengajar yang berdedikasi tinggi, kompeten, dan memahami psikologi perkembangan anak
              </p>
            </div>

            {/* Card 2 – ISO 21001 */}
            <div className="shrink-0 w-[638px] h-[165px] relative">
              <div className="rounded-[14px] bg-[#F6F6F6] w-[638px] h-[165px] absolute left-0 top-0"></div>
              <img src="/ElitePng161.png" className="w-[92px] h-[111px] absolute left-[42px] top-[27px] max-w-none" alt="ELITE PNG (16) 1" />
              <p className="text-[#293C88] font-poppins text-2xl font-bold w-[278px] h-9 absolute left-[150px] top-9">Bersertifikasi ISO 21001</p>
              <p className="text-[#868686] font-poppins text-[15px] w-[457px] h-[46px] absolute left-[150px] top-[75px]">
                Sistem manajemen pendidikan berstandar internasional yang menjamin kualitas, konsistensi, dan kepuasan layanan
              </p>
            </div>

            {/* Card 3 – Kurikulum Fleksibel */}
            <div className="shrink-0 w-[638px] h-[165px] relative">
              <div className="rounded-[14px] bg-[#F6F6F6] w-[638px] h-[165px] absolute left-0 top-0"></div>
              <img src="/ElitePng163.png" className="w-[100px] h-[92px] absolute left-[41px] top-9 max-w-none" alt="ELITE PNG (16) 3" />
              <p className="text-[#293C88] font-poppins text-[26px] font-bold w-[413px] h-[39px] absolute left-[150px] top-9">Kurikulum Fleksibel &amp; Personal</p>
              <p className="text-[#868686] font-poppins text-[15px] w-[457px] h-[46px] absolute left-[150px] top-[75px]">
                Metode pembelajaran yang disesuaikan dengan kebutuhan setiap siswa untuk memaksimalkan potensi mereka
              </p>
            </div>
          </div>
        </div>

        {/* ── PARTNER LOGOS ────────────────────────────────────────────── */}
        <img src="/ElitePng126.png" className="w-[136px] h-[118px] absolute -left-[43px] top-[3189px] max-w-none" alt="ELITE PNG (12) 6" />

        <div className="w-[508px] h-[74px] absolute left-[466px] top-[3462px]">
          <img src="/Image2.png" className="w-[132px] h-[66px] absolute left-0 top-1 max-w-none" alt="image 2" />
          <img src="/Image3.png" className="w-[129px] h-[74px] absolute left-[379px] top-0 max-w-none" alt="image 3" />
          <img src="/Image1.png" className="w-[215px] h-[46px] absolute left-[156px] top-3.5 max-w-none" alt="image 1" />
        </div>

        <img src="/BkHorizontal14.png" className="w-[245px] h-12 absolute left-[284px] top-[3579px] max-w-none" alt="BK Horizontal 1 4" />
        <img src="/ElitePng142.png" className="w-[133px] h-[95px] absolute left-[559px] top-[3555px] max-w-none" alt="ELITE PNG (14) 2" />

        <div className="flex justify-center items-start gap-[30px] w-[434px] h-[59px] absolute left-[722px] top-[3579px]">
          <img src="/ElitePng112.png" className="shrink-0 w-[196px] h-[59px] max-w-none" alt="ELITE PNG (11) 2" />
          <img src="/EdelweissHorizontalBiru1.png" className="shrink-0 w-52 h-[59px] max-w-none" alt="Edelweiss Horizontal Biru 1" />
        </div>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <div className="absolute left-0 top-[3716px] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
