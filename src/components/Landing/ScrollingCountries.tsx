import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Country {
  icon: string;
  text: string;
}

interface ScrollingCountriesProps {
  countries: Country[];
}

const ScrollingCountries: React.FC<ScrollingCountriesProps> = ({
  countries,
}) => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateScrollWidth = () => {
      if (containerRef.current) {
        setScrollWidth(containerRef.current.scrollWidth);
      }
    };

    calculateScrollWidth();
    window.addEventListener("resize", calculateScrollWidth);

    return () => window.removeEventListener("resize", calculateScrollWidth);
  }, [countries]);

  return (
    <div className="w-full p-10 mb-10 md:mb-32 lg:mb-40 overflow-hidden">
      <div ref={containerRef} className="flex gap-10 animate-scroll">
        {countries.concat(countries).map((item, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-center justify-center flex-shrink-0 py-4 md:py-6 lg:py-1 px-2 md:px-3 lg:px-5 shadow-[0px_3.01px_15.427px_rgba(20,0,66,0.1)] rounded-[10px]"
          >
            <span className="w-6 h-6 inline-flex rounded-full">
              <Image
                src={`/countries/${item.icon}.png`}
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt={item.icon}
                className="object-cover rounded-full"
              />
            </span>
            <p className="text-black text-[12px] md:text-[16px] lg:text-[25.53px] font-semibold font-['Poppins']">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth / 2}px);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingCountries;
