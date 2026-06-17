import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
export default function SolidWasteManagementPage() {
const objectives = [
{
icon: "🗑️",
title: "कचरा संकलन",
desc: "घराघरातून नियमित कचरा संकलन करून स्वच्छता राखणे.",
},
{
icon: "♻️",
title: "पुनर्वापर",
desc: "कचऱ्याचे पुनर्चक्रण व पुनर्वापर करून पर्यावरण संरक्षण.",
},
{
icon: "🌱",
title: "सेंद्रिय खत निर्मिती",
desc: "ओल्या कचऱ्यापासून कंपोस्ट खत तयार करणे.",
},
{
icon: "🚮",
title: "स्वच्छ परिसर",
desc: "गावातील सार्वजनिक ठिकाणे स्वच्छ व सुंदर ठेवणे.",
},
];

const activities = [
"🚮 घराघरातून कचरा संकलन",
"♻️ ओला व सुका कचरा वर्गीकरण",
"🌱 कंपोस्ट खत निर्मिती",
"🧹 स्वच्छता मोहीम",
"🚛 कचरा वाहतूक व्यवस्था",
"🏡 स्वच्छ ग्राम अभियान",
];

return ( 
  <>
  <TopBanner/>
  <Navbar/>
<div className="bg-linear-to-b from-green-50 via-white to-emerald-50 min-h-screen">


  {/* Hero Section */}
  <section className="relative overflow-hidden">

    <div className="absolute inset-0 bg-linear-to-r from-green-700 via-emerald-600 to-lime-500"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">

      <div className="text-8xl mb-6 animate-bounce">
        ♻️
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        घनकचरा व्यवस्थापन
      </h1>

      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-8">
        स्वच्छ, सुंदर आणि निरोगी गावासाठी कचऱ्याचे योग्य वर्गीकरण,
        संकलन, पुनर्वापर आणि वैज्ञानिक व्यवस्थापन.
      </p>

    </div>

  </section>

  {/* Objectives */}
  <section className="max-w-7xl mx-auto px-4 py-16">

    <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
      🎯 योजनेची उद्दिष्टे
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {objectives.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
        >

          <div className="text-6xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold text-green-700 mb-3">
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
      📊 योजना प्रगती
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">🗑️</div>
        <h3 className="text-4xl font-bold text-green-600">0</h3>
        <p>संकलित कचरा</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">♻️</div>
        <h3 className="text-4xl font-bold text-blue-600">0</h3>
        <p>पुनर्चक्रित कचरा</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">🌱</div>
        <h3 className="text-4xl font-bold text-lime-600">0</h3>
        <p>तयार खत</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">🏘️</div>
        <h3 className="text-4xl font-bold text-orange-600">0</h3>
        <p>सहभागी कुटुंबे</p>
      </div>

    </div>

  </section>

  {/* Activities */}
  <section className="max-w-7xl mx-auto px-4 py-16">

    <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl shadow-2xl p-10 text-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        🚮 प्रमुख उपक्रम
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

  {/* Waste Segregation Flow */}
  <section className="max-w-7xl mx-auto px-4 py-16">

    <h2 className="text-center text-4xl font-bold mb-12">
      ♻️ कचरा व्यवस्थापन प्रक्रिया
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">🏠</div>
        <h3 className="font-bold text-xl">घर</h3>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">🚮</div>
        <h3 className="font-bold text-xl">संकलन</h3>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">♻️</div>
        <h3 className="font-bold text-xl">वर्गीकरण</h3>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-4">🌱</div>
        <h3 className="font-bold text-xl">पुनर्वापर</h3>
      </div>

    </div>

  </section>

  {/* Awareness Banner */}
  <section className="max-w-6xl mx-auto px-4 py-16">

    <div className="bg-linear-to-r from-emerald-500 to-green-700 text-white rounded-3xl p-12 shadow-2xl text-center">

      <div className="text-7xl mb-4">
        ♻️
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        "कचरा नाही संसाधन"
      </h2>

      <p className="text-lg md:text-xl leading-8">
        ओला आणि सुका कचरा वेगळा करा.
        स्वच्छ गाव, सुंदर गाव आणि हरित भविष्य घडवा.
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
        📷
      </div>

      <h3 className="text-2xl font-bold text-gray-700">
        फोटो लवकरच उपलब्ध होतील
      </h3>

      <p className="text-gray-500 mt-3">
        घनकचरा व्यवस्थापन प्रकल्पाचे फोटो येथे प्रदर्शित केले जातील.
      </p>

    </div>

  </section>

</div>
</>
);
}
