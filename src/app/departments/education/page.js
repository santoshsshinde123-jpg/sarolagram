export default function EducationDepartmentPage() {
  const schemes = [
    {
      title: "समग्र शिक्षा अभियान (Samagra Shiksha)",
      icon: "📘",
      purpose:
        "पूर्वप्राथमिक ते इयत्ता 12 वी पर्यंत शिक्षणाची गुणवत्ता सुधारणा.",
      benefit:
        "ग्रंथालये, ICT, शिक्षक प्रशिक्षण, बालविकास.",
      website: "https://dsel.education.gov.in",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "पीएम पोषण योजना (Mid-Day Meal)",
      icon: "🍲",
      purpose:
        "शालेय मुलांचे पोषण व उपस्थिती वाढविणे.",
      benefit:
        "प्राथमिक व माध्यमिक शाळांमधील विद्यार्थ्यांसाठी मोफत जेवण.",
      website: "https://education.gov.in",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "प्रधानमंत्री उच्चतर शिक्षण प्रोत्साहन योजना (PM-USP)",
      icon: "💰",
      purpose:
        "आर्थिकदृष्ट्या दुर्बल घटकातील विद्यार्थ्यांना उच्च शिक्षणासाठी सहाय्य.",
      benefit:
        "शिष्यवृत्ती, फी सवलत.",
      website: "https://education.gov.in",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "राष्ट्रीय माध्यमिक शिक्षा अभियान (RMSA)",
      icon: "🏫",
      purpose:
        "माध्यमिक शिक्षणाचा दर्जा व प्रवेश वाढवणे.",
      benefit:
        "शाळांची उभारणी, शैक्षणिक साधने, मुलींसाठी सुविधा.",
      website: "https://dsel.education.gov.in",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "INSPIRE / KVPY Scholarship",
      icon: "🔬",
      purpose:
        "विज्ञान क्षेत्रात करिअर करू इच्छिणाऱ्या विद्यार्थ्यांसाठी प्रोत्साहन.",
      benefit:
        "B.Sc., M.Sc., इंजिनिअरिंग विद्यार्थ्यांसाठी शिष्यवृत्ती.",
      website: "https://www.inspire-dst.gov.in",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400 text-white">

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-center">

          <span className="bg-white/20 px-5 py-2 rounded-full">
            🇮🇳 भारत सरकार व महाराष्ट्र शासन
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            शिक्षण विभाग
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            शालेय शिक्षणासाठी केंद्र व राज्य सरकारच्या योजना
          </p>

        </div>

      </section>

      {/* Schemes */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900">
            📘 शिक्षण योजना
          </h2>

          <p className="text-gray-600 mt-3">
            विद्यार्थ्यांसाठी उपलब्ध प्रमुख शासकीय योजना
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {scheme.title}
                </h3>

                <div className="mt-5 space-y-4">

                  <div>
                    <h4 className="font-semibold text-blue-700">
                      🎯 उद्देश
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {scheme.purpose}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-700">
                      📚 लाभ
                    </h4>
                    <p className="text-gray-600 mt-1">
                      {scheme.benefit}
                    </p>
                  </div>

                </div>

                <a
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
                >
                  अधिक माहिती →
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">शिक्षण योजना</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-green-600">100%</h3>
            <p className="text-gray-600 mt-2">शिक्षण प्रोत्साहन</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-orange-600">₹</h3>
            <p className="text-gray-600 mt-2">शिष्यवृत्ती सुविधा</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-purple-600">24x7</h3>
            <p className="text-gray-600 mt-2">ऑनलाइन माहिती</p>
          </div>

        </div>

        {/* Important Websites */}

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            🌐 महत्वाची संकेतस्थळे
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-8">

            <a href="https://education.gov.in" target="_blank" className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
              📘 education.gov.in
            </a>

            <a href="https://dsel.education.gov.in" target="_blank" className="p-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition">
              🏫 dsel.education.gov.in
            </a>

            <a href="https://www.myscheme.gov.in" target="_blank" className="p-4 rounded-xl bg-green-50 hover:bg-green-100 transition">
              📑 myscheme.gov.in
            </a>

            <a href="https://www.inspire-dst.gov.in" target="_blank" className="p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition">
              🔬 inspire-dst.gov.in
            </a>

          </div>

        </div>

        {/* Documents */}

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-orange-800">
            📌 अर्ज करताना आवश्यक कागदपत्रे
          </h2>

          <ul className="mt-5 space-y-3 text-gray-700">

            <li>✅ आधार कार्ड</li>

            <li>✅ शाळा / महाविद्यालय प्रमाणपत्र</li>

            <li>✅ उत्पन्न प्रमाणपत्र</li>

            <li>✅ बँक खाते तपशील</li>

            <li>✅ पासपोर्ट साईज फोटो</li>

          </ul>

        </div>

      </section>

    </main>
  );
}