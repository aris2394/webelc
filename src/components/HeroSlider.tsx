"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    img: "/Rectangle48.png",
    titleLeft: "Seven Values",
    titleLeftClass: "text-[64px] font-semibold w-[438px] h-24 left-[99px] top-[448px]",
    subtitleLeft: "Respect, Inependent, Religious, Accomplished, Knowledgeable, Integrity, Socially Responsible",
    showSubtitle: true,
    titleRight: null,
  },
  {
    img: "/Rectangle48(1).png",
    titleLeft: "Designed for You",
    titleLeftClass: "text-5xl font-semibold leading-none w-[250px] h-24 left-[99px] top-[466px]",
    showSubtitle: false,
    titleRight: "Elite Academia",
    titleRightClass: "text-5xl font-semibold w-[367px] h-[72px] left-[973px] top-[461px] text-right",
  },
  {
    img: "/Rectangle48(2).png",
    titleLeft: "own your english",
    titleLeftClass: "text-5xl font-semibold leading-none w-[295px] h-24 left-[99px] top-[466px]",
    showSubtitle: false,
    titleRight: "english Course",
    titleRightClass: "text-5xl font-semibold w-[361px] h-[72px] left-[979px] top-[461px] text-right",
  },
  {
    img: "/Rectangle48(3).png",
    titleLeft: "Find your words",
    titleLeftClass: "text-5xl font-semibold leading-none w-[295px] h-24 left-[99px] top-[466px]",
    showSubtitle: false,
    titleRight: "playteracy",
    titleRightClass: "text-5xl font-semibold w-[263px] h-[72px] left-[1077px] top-[461px] text-right",
  },
  {
    img: "/Rectangle48(4).png",
    titleLeft: "teach with impact",
    titleLeftClass: "text-5xl font-semibold leading-none w-[295px] h-24 left-[99px] top-[466px]",
    showSubtitle: false,
    titleRight: "IPDC",
    titleRightClass: "text-5xl font-semibold w-[114px] h-[72px] left-[1226px] top-[461px] text-right",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      startTimer();
      setTimeout(() => setAnimating(false), 500);
    },
    [animating, startTimer]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);


  return (
    <div className="w-full max-w-screen-xl mx-auto h-[678px] relative overflow-hidden">
      {/* All slides stacked, only current is visible */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          {/* Background image */}
          <img
            src={s.img}
            className="w-full h-[678px] absolute left-0 top-0 max-w-none object-cover"
            alt={`slide ${i + 1}`}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45" />

          {/* Yellow divider line */}
          <div className="bg-[#FFF4BA] w-[1241px] h-[2px] absolute left-[99px] top-[434px]" />

          {/* Left title */}
          <p className={`text-[#FFF4BA] font-poppins font-semibold absolute ${s.titleLeftClass}`}>
            {s.titleLeft}
          </p>

          {/* Right title */}
          {s.titleRight && (
            <p className={`text-[#FFF4BA] font-poppins font-semibold absolute ${s.titleRightClass}`}>
              {s.titleRight}
            </p>
          )}

          {/* Subtitle */}
          {s.showSubtitle && (
            <p className="text-[#FFF] font-poppins text-xl font-medium w-[937px] h-[30px] absolute left-[99px] top-[529px]">
              Respect, Inependent, Religious, Accomplished, Knowledgeable, Integrity, Socially Responsible
            </p>
          )}
        </div>
      ))}

      {/* Prev / Next arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ width: i === current ? "24px" : "10px" }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#FFF4BA]" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
