export default function RevenueDepartmentPage() {
  const schemes = [
    {
      title: "7/12 उतार ऑनलाइन सेवा",
      icon: "📄",
      purpose:
        "जमिनीचे अभिलेख घरबसल्या मिळवण्यासाठी सुविधा.",
      benefit:
        "इलेक्ट्रॉनिक स्वरूपात तात्काळ उतार.",
      website: "https://mahabhulekh.maharashtra.gov.in",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "भूमि कवच योजना",
      icon: "🛡️",
      purpose:
        "जमिनीवर होणारे हस्तक्षेप व विसंगती टाळणे.",
      benefit:
        "नकाशांकनातून सुरक्षित जमीन व्यवहार.",
      website: "https://mahabhunakasha.mahabhumi.gov.in",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "LiMa – जबाबदार जमीन नकाशा",
      icon: "🗺️",
      purpose:
        "डिजिटल वातावरणात भूमी नकाशांच्या उपलब्धीची सोय.",
      benefit:
        "व्यवहार असुरक्षितता कमी, पारदर्शक प्रक्रिया.",
      website: "https://mahabhunakasha.mahabhumi.gov.in",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "भू-कर सवलत / माफी योजना",
      icon: "💰",
      purpose:
        "आर्थिक दुर्बल घटकांना जमीन-बांधकामिकीचे सवलती.",
      benefit:
        "अटीपूर्तीवर भू-कर कमी किंवा माफ.",
      website: "https://rfd.maharashtra.gov.in",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-700 text-white text-center">

        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          <span className="bg-white/20 px-4 py-2 rounded-full">
            🏛️ भारत सरकार व महाराष्ट्र शासन
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            महसूल विभाग
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            महसूल विभागाच्या योजना
          </p>

        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
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

                <div className="mt-6 space-y-4">

                  <div>
                    <h3 className="font-semibold text-blue-700">
                      🎯 उद्देश
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {scheme.purpose}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700">
                      📝 लाभ
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {scheme.benefit}
                    </p>
                  </div>

                </div>

                <a
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
                >
                  🌐 संकेतस्थळ भेट द्या →
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Important Information */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-3xl p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-amber-800">
            📌 महत्वाचे संकेतस्थळे व सूचना
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>
              ✅ कागदपत्रांसाठी आधार कार्ड, जमीन उतारा, फोटो इत्यादी आवश्यक.
            </li>
            <li>
              ✅ अधिक माहितीसाठी स्थानिक तहसील कार्यालयाशी संपर्क साधा.
            </li>
            <li>
              ✅ ऑनलाइन सेवांचा लाभ घेण्यासाठी अधिकृत संकेतस्थळ वापरा.
            </li>
          </ul>

          <a
            href="https://rfd.maharashtra.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition"
          >
            महसूल विभाग संकेतस्थळ →
          </a>

        </div>

      </section>

    </main>
  );
}