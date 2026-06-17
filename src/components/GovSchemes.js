"use client";

const schemes = [
  {
    icon: "🚰",
    title: "जलजीवन मिशन योजना",
    description:
      "प्रत्येक ग्रामीण घरात नळाने स्वच्छ पाण्याचा पुरवठा करण्याचा उद्देश.",
    link: "https://jaljeevanmission.gov.in",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "🏕️",
    title: "शबरी आवास योजना",
    description:
      "अनुसूचित जमातींसाठी घर बांधणीसाठी आर्थिक सहाय्य देणारी योजना.",
    link: "https://tribal.maharashtra.gov.in",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "🏠",
    title: "रमाई आवास योजना",
    description:
      "दुर्बळ घटकांना निवासासाठी घरे उपलब्ध करून देणारी योजना.",
    link: "https://sjsa.maharashtra.gov.in",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "🏥",
    title: "आयुष्यमान भारत योजना",
    description:
      "५ लाखांपर्यंत आरोग्य विमा देणारी योजना.",
    link: "https://beneficiary.nha.gov.in",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📊",
    title: "१५ वा वित्त आयोग",
    description:
      "गाव विकासासाठी केंद्र सरकारकडून निधीचे वितरण.",
    link: "https://fc.gov.in",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🏞️",
    title: "PESA ५% अबंध निधी",
    description:
      "आदिवासी भागात विकासकामांसाठी निधी.",
    link: "https://tribal.nic.in",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: "👩",
    title: "लाडकी बहीण योजना",
    description:
      "महिलांच्या सशक्तीकरणासाठी आर्थिक सहाय्य.",
    link: "https://ladakibahin.maharashtra.gov.in",
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    icon: "👧",
    title: "भाग्यश्री लेक माझी लाडकी",
    description:
      "मुलींच्या शिक्षणासाठी प्रोत्साहन योजना.",
    link: "https://womenchild.maharashtra.gov.in",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🧱",
    title: "मनरेगा",
    description:
      "१०० दिवसांच्या मजुरीची हमी योजना.",
    link: "https://nrega.nic.in",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "🚻",
    title: "स्वच्छ भारत मिशन",
    description:
      "शौचालय आणि स्वच्छतेसाठी राष्ट्रीय अभियान.",
    link: "https://swachhbharatmission.gov.in",
    color: "from-blue-500 to-sky-500",
  },
  {
    icon: "🤱",
    title: "प्रधानमंत्री मातृ वंदना योजना",
    description:
      "गर्भवती महिलांसाठी पोषण व आर्थिक सहाय्य.",
    link: "https://pmmvy.wcd.gov.in",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: "📚",
    title: "अनु. जाती व नवबौद्ध योजना",
    description:
      "शिक्षण, रोजगार व आरोग्यासाठी योजना.",
    link: "https://sjsa.maharashtra.gov.in",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🏘️",
    title: "तांडा वस्ती सुधार योजना",
    description:
      "पायाभूत सुविधा व स्वच्छतेसाठी निधी.",
    link: "https://rdd.maharashtra.gov.in",
    color: "from-green-500 to-lime-500",
  },
];

export default function GovSchemes() {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 py-16">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold">
            🏛️ शासनाच्या योजना
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
            आमच्या योजना व उपक्रम
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            गावात राबवण्यात आलेल्या शासकीय योजनांची सविस्तर यादी
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div
                className={`h-2 bg-linear-to-r ${scheme.color}`}
              ></div>

              <div className="p-8">

                <div
                  className={`w-20 h-20 rounded-2xl bg-linear-to-r ${scheme.color} flex items-center justify-center text-4xl shadow-lg`}
                >
                  {scheme.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {scheme.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed min-h-25">
                  {scheme.description}
                </p>

                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  अधिक माहिती →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}