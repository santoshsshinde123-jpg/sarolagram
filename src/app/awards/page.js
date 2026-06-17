"use client";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import Image from "next/image";

const awards = [
{
image: "/Images/award1.jpg",
title: "मुख्यमंत्री समृद्ध पंचायतराज पुरस्कार",
description:
"सारोळा सोमवंशी ग्रामपंचायतीला मुख्यमंत्री समृद्ध पंचायतराज अभियानांतर्गत श्रीगोंदा तालुक्यात प्रथम क्रमांकाचा पुरस्कार प्राप्त झाला.",
},
{
image: "/Images/award1.jpg",
title: "सन्मानचिन्ह वितरण",
description:
"ग्रामपंचायतीच्या उत्कृष्ट कार्याची दखल घेत मान्यवरांच्या हस्ते सन्मानचिन्ह प्रदान करण्यात आले.",
},
{
image: "/Images/award3.jpg",
title: "ग्रामविकासातील उल्लेखनीय कार्य",
description:
"स्वच्छता, पाणीपुरवठा, डिजिटल सेवा आणि ग्रामविकास क्षेत्रातील उत्कृष्ट कामगिरीबद्दल गौरव.",
},
];

export default function Awards() {
return ( 
<>
<TopBanner/>
<Navbar/>
<section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50">

  <div className="max-w-7xl mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-14">

      <h1 className="text-4xl md:text-5xl font-bold text-yellow-700">
        🏆 गावाचे पुरस्कार आणि सन्मान 🏆
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        आमच्या गावाच्या प्रगती आणि उत्कृष्टतेची ओळख
      </p>

    </div>

    {/* Highlight Award */}
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl p-8 md:p-10 shadow-2xl mb-14">

      <h2 className="text-3xl font-bold mb-4">
        🥇 विशेष गौरव
      </h2>

      <p className="text-lg leading-relaxed">
        सारोळा सोमवंशी या गावाला
        <strong> मुख्यमंत्री समृद्ध पंचायतराज अभियान </strong>
        अंतर्गत श्रीगोंदा तालुक्यामधून
        <strong> प्रथम पुरस्कार </strong>
        प्राप्त झाला आहे. हा पुरस्कार ग्रामविकास,
        स्वच्छता, पारदर्शक प्रशासन आणि लोकसहभाग यासाठी
        मिळालेला अभिमानास्पद सन्मान आहे.
      </p>

    </div>

    {/* Award Gallery */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {awards.map((award, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          <div className="overflow-hidden">
            <Image
              src={award.image}
              alt={award.title}
              width={600}
              height={400}
              className="
                w-full
                h-72
                object-cover
                hover:scale-110
                transition-all
                duration-700
              "
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold text-yellow-700">
              {award.title}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {award.description}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
</>
);
}
