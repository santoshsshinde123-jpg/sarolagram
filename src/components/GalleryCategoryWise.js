"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("सर्व");

  const categories = [
    "सर्व",
    "ग्रामविकास",
    "पुरस्कार",
    "मंदिर",
    "कार्यक्रम",
  ];

  const images = [
    {
      src: "/Images/img1.jpg",
      title: "ग्रामविकास काम",
      category: "ग्रामविकास",
    },
    {
      src: "/Images/img2.jpg",
      title: "पुरस्कार वितरण",
      category: "पुरस्कार",
    },
    {
      src: "/Images/img3.jpg",
      title: "श्री काळभैरवनाथ मंदिर",
      category: "मंदिर",
    },
    {
      src: "/Images/img4.jpg",
      title: "ग्रामसभा कार्यक्रम",
      category: "कार्यक्रम",
    },
  ];

  const filteredImages =
    selectedCategory === "सर्व"
      ? images
      : images.filter(
          (img) => img.category === selectedCategory
        );

  return (
    <section className="py-20 px-4 bg-linear-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            📸 फोटो गॅलरी
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            ग्रामपंचायतीची विकासकामे व कार्यक्रम
          </p>

        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-3 rounded-full font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow hover:bg-green-100"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img.src)}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                cursor-pointer
                group
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={img.src}
                  alt={img.title}
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

              <div className="p-5">

                <h3 className="font-bold text-lg text-green-800">
                  {img.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {img.category}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Full Screen Modal */}
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