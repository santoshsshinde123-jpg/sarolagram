"use client";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import Link from "next/link";

export default function FuturePlans() {
const plans = [
{
title: "🏡 जी राम जी योजना",
description:
"ग्रामस्थांसाठी मूलभूत सुविधा, रस्ते, पिण्याचे पाणी व सार्वजनिक विकासकामे उभारण्यासाठी प्रस्तावित योजना.",
link:"/pdfs/JiRamji.pdf",
},
{
title: "💧 पाणीपुरवठा सुधारणा योजना",
description:
"गावातील प्रत्येक घरापर्यंत शुद्ध पिण्याचे पाणी उपलब्ध करून देण्यासाठी प्रस्तावित योजना.",
link:"/pdfs/JiRamji",
},
{
title: "🌳 हरित ग्राम अभियान",
description:
"वृक्षारोपण, पर्यावरण संवर्धन व स्वच्छ गाव निर्मितीसाठी विशेष उपक्रम.",
link:"/pdfs/JiRamji",
},
{
title: "🛣️ अंतर्गत रस्ते विकास योजना",
description:
"गावातील अंतर्गत रस्त्यांचे काँक्रीटीकरण व दुरुस्ती करण्यासाठी प्रस्तावित विकासकामे.",
link:"/pdfs/JiRamji",
},
{
title: "💡 स्मार्ट ग्राम प्रकल्प",
description:
"डिजिटल सेवा, सीसीटीव्ही, सार्वजनिक वाय-फाय आणि ई-गव्हर्नन्स सुविधांचा विस्तार.",
link:"/pdfs/JiRamji",
},

];

return ( 
<>
<TopBanner/>
<Navbar/>
<section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">

  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">

      <h1 className="text-4xl md:text-5xl font-bold text-green-800">
        🚀 भविष्यात येणाऱ्या योजना
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        ग्रामपंचायत सारोळा सोमवंशीच्या विकासासाठी प्रस्तावित योजना
      </p>

    </div>

    {/* Plans Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {plans.map((plan, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            border
            border-green-100
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
          "
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {plan.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {plan.description}
          </p>

          <div className="mt-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              प्रस्तावित योजना
            </span>
          </div>
          <div className="mt-6 flex gap-3">

  <a
    href={plan.link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex-1
      text-center
      bg-blue-600
      text-white
      py-3
      rounded-xl
      font-medium
      hover:bg-blue-700
      transition
    "
  >
    👁️ पहा
  </a>

  <a
    href={plan.link}
    download
    className="
      flex-1
      text-center
      bg-green-600
      text-white
      py-3
      rounded-xl
      font-medium
      hover:bg-green-700
      transition
    "
  >
    ⬇️ डाउनलोड
  </a>

</div>

        </div>
      ))}

    </div>

    {/* Notice */}
    <div className="mt-14 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl shadow">

      <h3 className="text-xl font-bold text-yellow-700">
        📢 महत्वाची सूचना
      </h3>

      <p className="mt-2 text-gray-700">
        वरील सर्व योजना प्रस्तावित असून शासन मान्यता व निधी उपलब्धतेनुसार
        टप्प्याटप्प्याने राबविण्यात येतील.
      </p>

    </div>

  </div>

</section>
</>
);
}
