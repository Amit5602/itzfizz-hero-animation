import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // 🔥 LETTER BY LETTER ANIMATION
      const letters = headingRef.current.querySelectorAll(".letter");

      gsap.from(letters, {
        y: 80,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      });

      // 🔥 STATS STAGGER
      gsap.from(statsRef.current, {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        delay: 0.8,
        duration: 0.8,
        ease: "power2.out",
      });

      // 🔥 PARALLAX + PIN EFFECT
      gsap.to(imageRef.current, {
        y: -300,
        scale: 1.2,
        rotation: 4,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="h-screen flex items-center justify-center px-10 relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">

        {/* LEFT CONTENT */}
        <div>
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl tracking-[0.4em] font-bold mb-8 flex flex-wrap"
          >
            {text.split("").map((char, index) => (
              <span key={index} className="letter inline-block mr-2">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <div className="flex gap-10">
            {[
              { number: "95%", label: "Client Satisfaction" },
              { number: "120+", label: "Projects Delivered" },
              { number: "4X", label: "Business Growth" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (statsRef.current[i] = el)}
              >
                <p className="text-2xl font-semibold">{item.number}</p>
                <p className="text-sm opacity-70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          ref={imageRef}
          src="/hero-object.png"
          alt="Car"
          className="w-[320px] md:w-[520px] lg:w-[650px] drop-shadow-[0_0_50px_rgba(0,150,255,0.6)]"
        />

      </div>
    </section>
  );
};

export default Hero;