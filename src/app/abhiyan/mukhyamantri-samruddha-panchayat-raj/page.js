import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
export default function MukhyamantriSamruddhaPanchayatRaj() {
  const objectives = [
    "ग्रामपंचायतींना सक्षम व स्वयंपूर्ण बनवणे",
    "पारदर्शक व लोकाभिमुख प्रशासन",
    "स्वच्छता, पाणी व मूलभूत सुविधा वाढवणे",
    "डिजिटल ग्रामपंचायत संकल्पना राबवणे",
  ];

  const benefits = [
    "ग्रामपंचायतींना प्रोत्साहनपर निधी",
    "उत्कृष्ट कामगिरीसाठी पुरस्कार",
    "विकासकामांना गती",
    "ग्रामस्थांच्या जीवनमानात सुधारणा",
  ];

  return (
    <>
    <TopBanner/>
    <Navbar/>
    <div className="bg-linear-to-b from-yellow-50 via-white to-orange-50 min-h-screen">

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-4">

          <div className="inline-flex items-center justify-center w-50 h-50 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 text-white text-5xl shadow-xl mb-6">
            <img src="/Images/logo.jpg">
            </img>
            
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            मुख्यमंत्री समृद्ध पंचायत राज अभियान
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            ग्रामपंचायतींचा सर्वांगीण विकास, उत्कृष्ट प्रशासन,
            स्वच्छता, पारदर्शकता आणि नागरिकांना दर्जेदार सेवा
            उपलब्ध करून देण्यासाठी महाराष्ट्र शासनाचा महत्वाकांक्षी उपक्रम.
          </p>

        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          🎯 अभियानाची उद्दिष्टे
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {objectives.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-4">✅</div>

              <p className="text-gray-700 font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          🌟 प्रमुख लाभ
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-yellow-400 to-orange-500 text-white rounded-3xl p-6 shadow-xl"
            >
              <div className="text-4xl mb-4">🏅</div>

              <p className="font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          📈 अभियानांतर्गत अपेक्षित कामे
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex items-start gap-4">
              <span className="text-3xl">🏛️</span>
              <p>सक्षम व पारदर्शक ग्रामपंचायत प्रशासन</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">💧</span>
              <p>स्वच्छ पाणीपुरवठा व जलव्यवस्थापन</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🌳</span>
              <p>हरित ग्राम व पर्यावरण संवर्धन</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">♻️</span>
              <p>घनकचरा व्यवस्थापन व स्वच्छता</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">💻</span>
              <p>डिजिटल सेवा व ई-गव्हर्नन्स</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <p>लोकसहभागातून गाव विकास</p>
            </div>

          </div>

        </div>

      </section>

      {/* Important Information */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            ℹ️ महत्वाची माहिती
          </h2>

          <p className="leading-8 text-lg">
            मुख्यमंत्री समृद्ध पंचायत राज अभियान अंतर्गत
            उत्कृष्ट कामगिरी करणाऱ्या ग्रामपंचायतींना
            शासनाकडून विशेष प्रोत्साहन व पुरस्कार दिले जातात.
            या अभियानाचा उद्देश गावांचा सर्वांगीण व शाश्वत
            विकास साधणे हा आहे.
          </p>

        </div>

      </section>

    </div>
    </>
  );
}