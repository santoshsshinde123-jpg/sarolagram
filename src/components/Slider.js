"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/Images/img1.jpg",
    title: "ग्रामपंचायत सारोळा  सोमवंशी",
    description: "पारदर्शक प्रशासन, सक्षम गाव – आपल्या सेवेत",
  },
  {
    image: "/Images/img2.jpg",
    title: "स्वच्छ आणि सुंदर गाव",
    description: "विकासाच्या दिशेने वाटचाल",
  },
  {
    image: "/Images/img6.jpg",
    title: "डिजिटल ग्रामपंचायत",
    description: "मुख्यमंत्री समृद्ध पंचयातराज अभियान कामाचा आढावा घेताना श्रीगोंदा BDO मॅडम",
  },
  {
    image: "/Images/img5.jpg",
    title: "डिजिटल ग्रामपंचायत",
    description: "जिल्हा स्तरीय मूल्यमापन प्रसंगी सांगली जिल्हा परिषद सीईओ पाहणी करताना",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-125 overflow-hidden">
      {/* Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4">
  <h2 className="text-5xl md:text-6xl font-bold">
    {slides[current].title}
  </h2>

  <p className="mt-4 text-xl md:text-2xl">
    {slides[current].description}
  </p>

  {/* Buttons */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

    <a
      href="/about"
      className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
    >
      🏡 आमच्या गावाचा शोध घ्या →
    </a>

    <a
      href="/contact"
      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition duration-300"
    >
      📞 आमच्याशी संपर्क साधा
    </a>

  </div>
</div>
      </div>
 
      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
