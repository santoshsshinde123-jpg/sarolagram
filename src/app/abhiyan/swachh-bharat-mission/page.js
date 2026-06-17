import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
export default function SwachhBharatMissionPage() {
const objectives = [
{
icon: "🚻",
title: "शौचालय सुविधा",
desc: "प्रत्येक घरात शौचालय उपलब्ध करून खुले शौचमुक्त गाव निर्माण करणे.",
},
{
icon: "🧹",
title: "स्वच्छता",
desc: "गावातील सार्वजनिक ठिकाणे व रस्ते स्वच्छ ठेवणे.",
},
{
icon: "♻️",
title: "कचरा व्यवस्थापन",
desc: "ओला व सुका कचरा वेगळा संकलित करून व्यवस्थापन करणे.",
},
{
icon: "👨‍👩‍👧‍👦",
title: "लोकसहभाग",
desc: "स्वच्छतेसाठी नागरिकांचा सक्रिय सहभाग वाढवणे.",
},
];

const activities = [
"🧹 नियमित स्वच्छता मोहीम",
"🚮 घराघरातून कचरा संकलन",
"♻️ ओला व सुका कचरा वर्गीकरण",
"🚻 शौचालय वापराबाबत जनजागृती",
"🌱 प्लास्टिक मुक्त गाव अभियान",
"🏫 शाळांमध्ये स्वच्छता उपक्रम",
];

return ( 
  <>
  <TopBanner/>
  <Navbar/>
<div className="bg-linear-to-b from-blue-50 via-white to-green-50 min-h-screen">

  {/* Hero Section */}
  <section className="relative overflow-hidden">

    <div className="absolute inset-0 bg-linear-to-r from-blue-700 via-cyan-600 to-green-600"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">

      <div className="text-8xl mb-6">
        🚻
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        स्वच्छ भारत मिशन (ग्रामीण)
      </h1>

      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-8">
        "स्वच्छ गाव - सुंदर गाव"
        <br />
        ग्रामीण भागातील स्वच्छता, शौचालय बांधकाम,
        घनकचरा व्यवस्थापन आणि लोकसहभागातून
        स्वच्छ व निरोगी गाव निर्माण करण्याचा
        भारत सरकारचा महत्वाकांक्षी उपक्रम.
      </p>

    </div>

  </section>

  {/* Objective Section */}
  <section className="max-w-7xl mx-auto px-4 py-16">

    <div className="text-center mb-12">

      <h2 className="text-4xl font-bold text-gray-800">
        🎯 मिशनची उद्दिष्टे
      </h2>

    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {objectives.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-3 transition duration-300 hover:shadow-2xl"
        >

          <div className="text-6xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-blue-700 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </section>

  {/* Statistics */}
  <section className="max-w-7xl mx-auto px-4 py-10">

    <h2 className="text-center text-4xl font-bold mb-12">
      📊 अभियान प्रगती
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">🚻</div>
        <h3 className="text-4xl font-bold text-blue-600">0</h3>
        <p className="mt-2">घरगुती शौचालये</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">🧹</div>
        <h3 className="text-4xl font-bold text-green-600">0</h3>
        <p className="mt-2">स्वच्छता मोहिमा</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">♻️</div>
        <h3 className="text-4xl font-bold text-orange-600">0</h3>
        <p className="mt-2">कचरा प्रकल्प</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
        <h3 className="text-4xl font-bold text-purple-600">0</h3>
        <p className="mt-2">सहभागी नागरिक</p>
      </div>

    </div>

  </section>

  {/* Activities */}
  <section className="max-w-7xl mx-auto px-4 py-16">

    <div className="bg-linear-to-r from-blue-600 via-cyan-600 to-green-600 rounded-3xl shadow-2xl p-10 text-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        🧹 ग्रामपंचायतीद्वारे राबविण्यात येणारे उपक्रम
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-lg"
          >
            {activity}
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* Awareness Banner */}
  <section className="max-w-6xl mx-auto px-4 py-16">

    <div className="bg-linear-to-r from-green-500 to-blue-700 rounded-3xl shadow-2xl text-white p-12 text-center">

      <div className="text-7xl mb-4">
        🧹
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        "माझे गाव, माझी जबाबदारी"
      </h2>

      <p className="text-lg md:text-xl leading-8">
        स्वच्छता ही सेवा आहे.
        प्रत्येक नागरिकाने स्वच्छतेची जबाबदारी स्वीकारल्यास
        गाव अधिक सुंदर, निरोगी आणि आदर्श बनेल.
      </p>

    </div>

  </section>

  {/* Gallery */}
  <section className="max-w-7xl mx-auto px-4 pb-20">

    <h2 className="text-center text-4xl font-bold mb-10">
      📸 स्वच्छता अभियान गॅलरी
    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-16 text-center">

      <div className="text-7xl mb-4">
        📷
      </div>

      <h3 className="text-2xl font-bold text-gray-700">
        फोटो लवकरच उपलब्ध होतील
      </h3>

      <p className="text-gray-500 mt-3">
        स्वच्छता मोहिमेचे फोटो येथे प्रदर्शित केले जातील.
      </p>

    </div>

  </section>

</div>

</>
);
}
