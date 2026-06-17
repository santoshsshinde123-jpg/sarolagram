export default function AgricultureDepartmentPage() {
  const schemes = [
    {
      title: "प्रधानमंत्री किसान सन्मान निधी योजना (PM-KISAN)",
      icon: "🌾",
      purpose: "लहान व मध्यम शेतकऱ्यांना थेट आर्थिक मदत देणे.",
      benefit:
        "दरवर्षी ₹6,000 तीन समान हप्त्यांमध्ये बँक खात्यात जमा.",
      website: "https://pmkisan.gov.in",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "महालाभ योजना – मुख्यमंत्री शेतकरी सन्मान योजना",
      icon: "🚜",
      purpose:
        "शेतीसाठी आवश्यक संसाधनांसाठी आर्थिक सहाय्य.",
      benefit:
        "सिंचनासाठी अनुदान, खत व बियाण्यांवर सवलत.",
      website: "https://mahadbt.maharashtra.gov.in",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "प्रधानमंत्री कृषी सिचाई योजना (PMKSY)",
      icon: "💧",
      purpose:
        "'जास्त पाणी – अधिक उत्पादन' यासाठी सूक्ष्म सिंचनावर भर.",
      benefit:
        "ठिबक सिंचन व तुषार सिंचनासाठी अनुदान.",
      website: "https://agricoop.gov.in",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "राष्ट्रीय अन्नसुरक्षा अभियान (NFSM)",
      icon: "🌱",
      purpose:
        "अन्नधान्य उत्पादनात वाढ.",
      benefit:
        "सुधारित बियाणे, मशागतीसाठी यंत्रसामग्रीवर अनुदान.",
      website: "https://krishi.maharashtra.gov.in",
      color: "from-lime-500 to-green-600",
    },
    {
      title: "शेतकरी अपघात विमा योजना",
      icon: "🛡️",
      purpose:
        "अपघाती मृत्यू अथवा अपंगत्वासाठी विमा संरक्षण.",
      benefit:
        "₹2 लाखांपर्यंत विमा रक्कम.",
      website: "https://krishi.maharashtra.gov.in",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "माझी माती माझा अभिमान – मृद व जलसंधारण योजना",
      icon: "🌍",
      purpose:
        "जमिनीत सुधारणा, पाणलोट क्षेत्र विकास.",
      benefit:
        "जमिनीची सुपीकता वाढविण्यासाठी मदत.",
      website: "https://krishi.maharashtra.gov.in",
      color: "from-amber-500 to-yellow-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white text-center">

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          <span className="bg-white/20 px-5 py-2 rounded-full">
            🇮🇳 भारत सरकार व महाराष्ट्र शासन
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            कृषि विभाग
          </h1>

          <p className="mt-4 text-xl text-green-100">
            कृषी व शेतकऱ्यांसाठी शासकीय योजना
          </p>

        </div>
      </section>

      {/* Scheme Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div
                className={`h-3 bg-gradient-to-r ${scheme.color}`}
              ></div>

              <div className="p-8">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${scheme.color} flex items-center justify-center text-4xl shadow-lg`}
                >
                  {scheme.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  {scheme.title}
                </h2>

                <div className="mt-6 space-y-5">

                  <div>
                    <h3 className="font-semibold text-green-700">
                      🎯 उद्देश
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {scheme.purpose}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-700">
                      💰 लाभ
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {scheme.benefit}
                    </p>
                  </div>

                </div>

                <a
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-105 transition"
                >
                  🌐 अधिकृत संकेतस्थळ →
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Important Information */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-green-100">

          <h2 className="text-3xl font-bold text-gray-900">
            🌐 महत्वाचे संकेतस्थळे
          </h2>

          <p className="mt-4 text-gray-600">
            योजनांसाठी अर्ज करताना आधार क्रमांक, 7/12 उतारा,
            बँक पासबुक, फोटो यांची आवश्यकता असते.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <a
              href="https://pmkisan.gov.in"
              target="_blank"
              className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition"
            >
              🌾 PM-KISAN Portal
            </a>

            <a
              href="https://agricoop.gov.in"
              target="_blank"
              className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
            >
              💧 PMKSY Portal
            </a>

            <a
              href="https://krishi.maharashtra.gov.in"
              target="_blank"
              className="p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition"
            >
              🚜 Maharashtra Agriculture Department
            </a>

            <a
              href="https://mahadbt.maharashtra.gov.in"
              target="_blank"
              className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition"
            >
              🎯 MahaDBT Portal
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}