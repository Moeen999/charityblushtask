import { useRef, useEffect, useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import gsap from "gsap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { landingPageContent } from "../constants/content";
import { Link } from "react-router-dom";
import CharitableCommunity from "../components/CharitableCommunity";
import Processes from "../components/Processes";
import VerifiedCampaings from "../components/VerifiedCampaings";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentRef = useRef(null);
  const autoSlideRef = useRef(null);

  const outerRef = useRef(null);
  const rotateRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(outerRef.current, {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      imageRef.current,
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
      },
    );

    gsap.to(rotateRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(middleRef.current, {
      scale: 1.02,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(innerRef.current, {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const animateContent = (nextIndex) => {
    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      opacity: 0,
      y: 6,
      duration: 0.35,
      ease: "power2.inOut",
    })
      .call(() => setActiveIndex(nextIndex))
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
      });
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      const next = (activeIndex + 1) % landingPageContent.length;
      animateContent(next);
    }, 4500);

    return () => clearInterval(autoSlideRef.current);
  }, [activeIndex]);

  const nextSlide = () => {
    clearInterval(autoSlideRef.current);
    animateContent((activeIndex + 1) % landingPageContent.length);
  };

  const prevSlide = () => {
    clearInterval(autoSlideRef.current);
    animateContent(
      activeIndex === 0 ? landingPageContent.length - 1 : activeIndex - 1,
    );
  };

  const goToSlide = (index) => {
    clearInterval(autoSlideRef.current);
    if (index !== activeIndex) animateContent(index);
  };

  return (
    <>
      <div className="relative h-full w-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-16 lg:py-24 bg-linear-to-br from-[#723134] via-[#8a1538] to-[#543D2E]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
          {/* LEFT CONTENT content walii*/}
          <div ref={contentRef}>
            <div className="inline-flex gap-3 items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                <IoMdCheckmarkCircleOutline className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                RACA Approved Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {landingPageContent[activeIndex].title}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
              {landingPageContent[activeIndex].para}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-white text-[#723134] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg shadow-lg"
              >
                {landingPageContent[activeIndex].buttonText}
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg">
                Consultations
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Integrated with Sandi",
                "Blockchain Transparency",
                "Real time Tracking",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-white/90 text-sm"
                >
                  <IoMdCheckmarkCircleOutline className="h-5 w-5 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE image waali*/}
          <div className="relative hidden lg:block" ref={imageRef}>
            <div
              className="relative w-full h-96 bg-[#723134]/20 backdrop-blur-xl rounded-3xl border-2 border-[#b9393f]/20 p-8 bg-cover bg-center overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1562709902-31c9a3b1ad5c?w=1200&auto=format&fit=crop&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#723134]/30 via-[#b9393f]/40 to-[#723134]/30 mix-blend-multiply" />
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="w-64 h-64 relative">
                  <div
                    ref={outerRef}
                    className="absolute inset-0 rounded-full border-2 border-[#F2EDE9]/20"
                  />
                  <div
                    ref={rotateRef}
                    className="absolute inset-6 rounded-full border-2 border-[#F2EDE9]/40"
                  />
                  <div
                    ref={middleRef}
                    className="absolute inset-12 rounded-full border border-[#F2EDE9]/30"
                  />
                  <div
                    ref={innerRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#723134] to-[#b9393f] rounded-full flex items-center justify-center"
                  >
                    <FaHandHoldingHeart className="text-[#F2EDE9] text-4xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 sm:bottom-0  md:bottom-2 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="hidden sm:flex bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
          >
            <MdKeyboardArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex space-x-2">
            {landingPageContent.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="hidden sm:flex bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
          >
            <MdKeyboardArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Charitable Community Page  */}
      <section className="w-full bg-gradient-to-r from-[#f8f5f2] to-[#f0ebe6] py-12 md:py-16 border-t border-b border-[#e5ddd5]">
        <CharitableCommunity />
      </section>

      {/* Processes */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f8f5f2]">
        <Processes />
      </section>

      {/* Verified Campgains */}
      <section className="mb-6 bg-gradient-to-b from-[#f8f5f2] to-white">
        <VerifiedCampaings />
      </section>
    </>
  );
};

export default Home;
