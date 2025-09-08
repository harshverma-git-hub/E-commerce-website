import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://picsum.photos/1600/900?random=11",
    title: "Big Festive Offers",
    subtitle: "Grab crazy deals across fashion, gadgets & more.",
    cta: { label: "Shop Now", href: "#products" },
  },
  {
    src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    poster: "https://picsum.photos/1600/900?random=12",
    title: "Secure & Fast Checkout",
    subtitle: "Multiple payments, instant refunds, real-time tracking.",
    cta: { label: "Checkout", href: "/checkout" },
  },
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://picsum.photos/1600/900?random=13",
    title: "Fresh Arrivals Daily",
    subtitle: "New styles, new drops, new you.",
    cta: { label: "Explore New", href: "/" },
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[65vh] md:h-[75vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        centeredSlides
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden rounded-xl">
              {/* Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={s.poster}
              >
                <source src={s.src} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="px-6 md:px-12 lg:px-16 text-white max-w-2xl">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
                    {s.title}
                  </h1>
                  <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-200">
                    {s.subtitle}
                  </p>
                  <a
                    href={s.cta.href}
                    className="inline-block mt-5 md:mt-6 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow"
                  >
                    {s.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
