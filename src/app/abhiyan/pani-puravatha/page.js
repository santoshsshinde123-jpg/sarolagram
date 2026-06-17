import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
export default function WaterSupplyPage() {
const objectives = [
{
icon: "🚰",
title: "शुद्ध पिण्याचे पाणी",
desc: "प्रत्येक नागरिकाला सुरक्षित व स्वच्छ पिण्याचे पाणी उपलब्ध करणे.",
},
{
icon: "🏠",
title: "घरगुती नळ जोडणी",
desc: "प्रत्येक घरापर्यंत नळाद्वारे पाणी पुरवठा.",
},
{
icon: "💧",
title: "जलस्रोत संरक्षण",
desc: "विहीर, तलाव व पाणीसाठ्यांचे संवर्धन.",
},
{
icon: "📈",
title: "शाश्वत व्यवस्थापन",
desc: "भविष्यासाठी पाण्याची उपलब्धता सुनिश्चित करणे.",
},
];

const activities = [
"🚰 जलजीवन मिशन",
"💧 पाणी गुणवत्ता तपासणी",
"🏗️ नवीन पाईपलाईन उभारणी",
"🛠️ पाणीपुरवठा दुरुस्ती कामे",
"🌊 जलसंधारण उपक्रम",
"👨‍👩‍👧‍👦 लोकसहभाग",
];

return ( 
   <>
      <TopBanner/>
      <Navbar/>
<div className="bg-linear-to-b from-blue-50 via-white to-cyan-50 min-h-screen">


  {/* Hero Section */}
  <section className="relative overflow-hidden">

    <div className="absolute inset-0 bg-linear-to-r from-blue-700 via-cyan-600 to-sky-500"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">

      <div className="text-8xl mb-6">
        💧
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
        पाणी पुरवठा योजना
      </h1>

      <p className="max-w-4xl mx-auto text-lg md:text-xl leading-8">
        प्रत्येक नागरिकाला स्वच्छ, सुरक्षित आणि नियमित
        पिण्याचे पाणी उपलब्ध करून देण्यासाठी राबविण्यात
        येणारी ग्रामपंचायत व शासनाची महत्वाची योजना.
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
          className="bg-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-3 transition duration-300"
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
      📊 योजना प्रगती
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">🚰</div>
        <h3 className="text-4xl font-bold text-blue-600">0</h3>
        <p>नळ जोडणी</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">💧</div>
        <h3 className="text-4xl font-bold text-cyan-600">0</h3>
        <p>पाणी टाकी</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">🏘️</div>
        <h3 className="text-4xl font-bold text-green-600">0</h3>
        <p>लाभार्थी कुटुंबे</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-3">🔧</div>
        <h3 className="text-4xl font-bold text-orange-600">0</h3>
        <p>दुरुस्ती कामे</p>
      </div>

    </div>

  </section>

  {/* Activities */}
  <section className="max-w-7xl mx-auto px-4 py-16">

    <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-10 text-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        🚰 प्रमुख उपक्रम
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

  {/* Water Awareness */}
  <section className="max-w-6xl mx-auto px-4 py-16">

    <div className="bg-linear-to-r from-cyan-500 to-blue-700 text-white rounded-3xl p-12 shadow-2xl text-center">

      <div className="text-7xl mb-4">
        💧
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        "पाणी आहे तर जीवन आहे"
      </h2>

      <p className="text-lg md:text-xl leading-8">
        प्रत्येक थेंब अमूल्य आहे.
        पाणी वाचवा, भविष्यासाठी पाणी जतन करा.
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

    </div>

  </section>

</div>
</>

);
}
