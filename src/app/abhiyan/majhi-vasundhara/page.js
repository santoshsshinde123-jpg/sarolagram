import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
export default function MaziVasundharaPage() {
  const pillars = [
    {
      icon: "🌳",
      title: "वृक्ष संवर्धन",
      desc: "वृक्षारोपण व वृक्षांचे संरक्षण."
    },
    {
      icon: "💧",
      title: "जल संवर्धन",
      desc: "पाणी बचत व जलस्रोतांचे जतन."
    },
    {
      icon: "♻️",
      title: "कचरा व्यवस्थापन",
      desc: "ओला व सुका कचरा व्यवस्थापन."
    },
    {
      icon: "⚡",
      title: "ऊर्जा बचत",
      desc: "नवीकरणीय ऊर्जेचा वापर."
    },
    {
      icon: "🐦",
      title: "जैवविविधता",
      desc: "वन्यजीव व पर्यावरण संवर्धन."
    },
  ];

  const activities = [
    "🌱 गावामध्ये वृक्षारोपण मोहीम",
    "💧 जलसंधारण व पाणी बचत उपक्रम",
    "♻️ घनकचरा व्यवस्थापन प्रकल्प",
    "🧹 स्वच्छता अभियान",
    "🌿 पर्यावरण जनजागृती कार्यक्रम",
    "🐦 जैवविविधता संरक्षण उपक्रम",
  ];

  return (
     <>
        <TopBanner/>
        <Navbar/>
    <div className="bg-linear-to-b from-green-50 via-white to-emerald-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-r from-green-600 via-emerald-500 to-teal-500 opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">

          <div className="text-7xl mb-6 animate-bounce">
            🌍
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            माझी वसुंधरा अभियान
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8">
            पर्यावरण संरक्षण, जलसंधारण, वृक्षसंवर्धन,
            स्वच्छता आणि शाश्वत विकास यासाठी महाराष्ट्र
            शासनाचा महत्त्वपूर्ण उपक्रम.
          </p>

        </div>

      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10 border-l-8 border-green-500">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            🌱 अभियानाचा उद्देश
          </h2>

          <p className="text-gray-700 text-lg leading-8">
            माझी वसुंधरा अभियानाचा मुख्य उद्देश पर्यावरण संवर्धन,
            नैसर्गिक संसाधनांचे संरक्षण, पाणी बचत,
            कचरा व्यवस्थापन आणि हरित ग्राम विकास
            यांना प्रोत्साहन देणे हा आहे.
          </p>

        </div>

      </section>

      {/* 5 Pillars */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-800">
            🌍 अभियानाचे ५ प्रमुख घटक
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <div className="text-6xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-green-700 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Activities */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl shadow-2xl p-10 text-white">

          <h2 className="text-4xl font-bold text-center mb-10">
            🌿 ग्रामपंचायतीद्वारे राबविण्यात येणारे उपक्रम
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5"
              >
                {activity}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <h2 className="text-center text-4xl font-bold mb-12">
          📊 अभियान प्रगती
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-3">🌳</div>
            <h3 className="text-4xl font-bold text-green-600">0</h3>
            <p>लावलेली झाडे</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-3">💧</div>
            <h3 className="text-4xl font-bold text-blue-600">0</h3>
            <p>जलसंधारण प्रकल्प</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-3">♻️</div>
            <h3 className="text-4xl font-bold text-orange-600">0</h3>
            <p>कचरा प्रकल्प</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="text-4xl font-bold text-purple-600">0</h3>
            <p>पुरस्कार</p>
          </div>

        </div>

      </section>

      {/* Quote */}
      <section className="max-w-6xl mx-auto px-4 py-16">

        <div className="bg-linear-to-r from-emerald-500 to-green-700 text-white rounded-3xl p-12 shadow-2xl text-center">

          <div className="text-6xl mb-4">🌍</div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "हरित गाव, स्वच्छ गाव, समृद्ध गाव"
          </h2>

          <p className="text-lg leading-8">
            पर्यावरणाचे संरक्षण ही प्रत्येक नागरिकाची जबाबदारी आहे.
            चला, माझी वसुंधरा अभियानात सहभागी होऊन
            आपल्या गावाला हरित व सुंदर बनवूया.
          </p>

        </div>

      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <h2 className="text-center text-4xl font-bold mb-10">
          📸 फोटो गॅलरी
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-16 text-center">

          <div className="text-7xl mb-4">
            🌳
          </div>

          <h3 className="text-2xl font-bold text-gray-700">
            फोटो लवकरच उपलब्ध होतील
          </h3>

        </div>

      </section>

    </div>
    </>
  );
}