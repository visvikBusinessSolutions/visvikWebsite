import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceSlider from "./slider/slider2";

gsap.registerPlugin(ScrollTrigger);

const COMP = () => {
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        ".animate-left",
        { x: -100, y: 0, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".animate-left",
            start: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <div className="bg px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center md:py-6 py-6">
        <div className="md:col-span-4 text-gray-800 space-y-6 text-center md:text-left h-full flex flex-col justify-center">
          <div className="animate-left space-y-4 px-2 md:px-6 lg:px-8 py-3 md:py-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug">
              Empowering Your Vision, Accelerating Your Growth
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Web analytics is pointless without actionable insights. Our expert
              analysts guide you through the entire journey—ensuring full
              understanding of your data and recommending smart strategies for
              improvement. With cutting-edge tools and proven expertise, we help
              our clients rise above the competition. Don’t wait—take action
              today.
            </p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-12 text-center">
          <h2 className="text-xl md:text-4xl text-blue-800 font-semibold">
            Our Core Services
          </h2>
          <ServiceSlider />
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default COMP;
