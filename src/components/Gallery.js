"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
const [selectedImage, setSelectedImage] = useState(null);

const images = [
"/Images/img1.jpg",
"/Images/img2.jpg",
"/Images/award3.jpg",
"/Images/img4.jpg",
];

return ( <section className="py-20 px-6 bg-linear-to-b from-green-50 to-white">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-center text-green-900">
      📸 फोटो गॅलरी
    </h2>

    <p className="text-center text-gray-600 mt-4 text-lg">
      ग्रामपंचायतीची विकासकामे व कार्यक्रम
    </p>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

      {images.map((img, index) => (
        <div
          key={index}
          className="
            overflow-hidden
            rounded-3xl
            shadow-xl
            cursor-pointer
            group
            bg-white
          "
          onClick={() => setSelectedImage(img)}
        >
          <Image
            src={img}
            alt={`Gallery ${index + 1}`}
            width={500}
            height={350}
            className="
              w-full
              h-64
              object-cover
              transition-all
              duration-700
              group-hover:scale-125
            "
          />
        </div>
      ))}

    </div>

  </div>

  {/* Full Screen Image Modal */}
  {selectedImage && (
    <div
      className="
        fixed
        inset-0
        bg-black/90
        z-50
        flex
        items-center
        justify-center
        p-4
      "
      onClick={() => setSelectedImage(null)}
    >

      <button
        className="
          absolute
          top-5
          right-5
          text-white
          text-5xl
          font-bold
          hover:text-red-400
          transition
        "
      >
        ×
      </button>

      <img
        src={selectedImage}
        alt="Enlarged"
        className="
          max-w-full
          max-h-[90vh]
          rounded-2xl
          shadow-2xl
        "
      />

    </div>
  )}

</section>

);
}
