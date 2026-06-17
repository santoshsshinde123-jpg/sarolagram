
"use client";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
export default function DigitalServicesPage() {
  const g2cServices = [
    {
      title: "🏛️ ग्रामपंचायत विभाग",
      services: [
        "जन्म नोंद दाखला",
        "मृत्यू नोंद दाखला",
        "विवाह नोंद दाखला",
        "दारिद्र्यरेषेखालील असल्याचा दाखला",
        "ग्रामपंचायत येणे बाकी नसल्याचा दाखला",
        "नमुना नं. ८ चा उतारा",
        "निराधार असल्याचा दाखला",
      ],
    },
    {
      title: "🌾 महसूल विभाग",
      services: [
        "महसूल विभागामार्फत देण्यात येणारे सर्व दाखले",
        "सातबारा (७/१२) उतारा",
        "आठ-अ (८A) उतारा",
        "सर्व फेरफार",
      ],
    },
    {
      title: "🪪 ओळखपत्र व नोंदणी",
      services: [
        "नवीन पॅन कार्ड व दुरुस्ती",
        "आधार कार्ड डाउनलोड",
        "नवीन मतदार ओळखपत्र",
        "मतदार ओळखपत्र दुरुस्ती",
        "पासपोर्ट अर्ज",
      ],
    },
    {
      title: "🎓 शासकीय योजना",
      services: [
        "PM-Kisan नोंदणी व e-KYC",
        "e-Shram कार्ड",
        "ABHA कार्ड",
        "आयुष्मान भारत हेल्थ कार्ड",
        "MahaDBT शिष्यवृत्ती अर्ज",
        "कुसुम सोलर पंप योजना",
        "मनरेगा जॉब कार्ड",
      ],
    },
  ];

  const b2cServices = [
    {
      title: "🏦 बँकिंग व आर्थिक सेवा",
      services: [
        "AEPS द्वारे पैसे काढणे",
        "AEPS द्वारे पैसे जमा करणे",
      ],
    },
    {
      title: "⚡ बिले व रिचार्ज",
      services: [
        "महावितरण वीज बिल भरणा",
        "मोबाईल रिचार्ज",
        "DTH रिचार्ज",
        "FASTag रिचार्ज",
        "नवीन FASTag काढणे",
      ],
    },
    {
      title: "🚆 प्रवास व तिकीट बुकिंग",
      services: [
        "रेल्वे तिकीट बुकिंग",
        "MSRTC बस बुकिंग",
        "खाजगी बस बुकिंग",
        "विमान तिकीट बुकिंग",
      ],
    },
   
  ];

  return (
    <>
    <TopBanner/>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-green-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            💻 नागरीक सेवांची यादी
          </h1>

          <p className="mt-5 text-lg md:text-xl text-blue-100">
            नागरिकांसाठी सर्व शासकीय व खाजगी सेवा एका ठिकाणी
          </p>

        </div>

      </section>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600">शासकीय सेवा</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-green-600">10+</h3>
            <p className="text-gray-600">खाजगी सेवा</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600">24x7</h3>
            <p className="text-gray-600">माहिती उपलब्ध</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-purple-600">100%</h3>
            <p className="text-gray-600">विश्वासार्ह सेवा</p>
          </div>

        </div>

      </div>

      {/* G2C Services */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            🏛️ G2C सेवा
          </h2>

          <p className="mt-3 text-gray-600">
            Government to Citizen - शासकीय सेवा
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {g2cServices.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">

                {section.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    ✅ {service}
                  </li>
                ))}

              </ul>
            </div>
          ))}

        </div>

      </section>

      {/* B2C Services */}
      <section className="max-w-7xl mx-auto px-4 pb-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-green-700">
            🏢 B2C सेवा
          </h2>

          <p className="mt-3 text-gray-600">
            Business to Citizen - व्यावसायिक व खाजगी सेवा
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {b2cServices.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">

                {section.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    ✔️ {service}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </section>

      {/* Notice Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">

        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-3xl p-8 shadow-lg">

          <h3 className="text-2xl font-bold text-yellow-700">
            📢 महत्वाची सूचना
          </h3>

          <p className="mt-4 text-gray-700 leading-8">
            सर्व सेवांसाठी आवश्यक कागदपत्रांसह ग्रामपंचायत कार्यालयाशी 
            संपर्क साधावा. काही सेवांसाठी शासन नियमांनुसार शुल्क लागू असू शकते.
          </p>

        </div>

      </section>

    </div>
    </>
  );
  
}

