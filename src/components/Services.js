export default function Services() {
    return(
<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-green-900">
      नागरिक सेवा
    </h2>

    <p className="text-center text-gray-600 mt-4">
      ग्रामपंचायतीच्या महत्त्वाच्या सेवा
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-2xl font-bold">📜 दाखले</h3>
        <p className="mt-3 text-gray-600">
          जन्म, मृत्यू व इतर प्रमाणपत्रांची माहिती.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-2xl font-bold">📢 सूचना</h3>
        <p className="mt-3 text-gray-600">
          ग्रामपंचायतीच्या नवीन सूचना व जाहिराती.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-2xl font-bold">📂 RTI</h3>
        <p className="mt-3 text-gray-600">
          माहिती अधिकार अंतर्गत कागदपत्रे.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-2xl font-bold">🏛 ग्रामसभा</h3>
        <p className="mt-3 text-gray-600">
          ग्रामसभेचे ठराव व माहिती.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-2xl font-bold">📷 गॅलरी</h3>
        <p className="mt-3 text-gray-600">
          विकासकामे व कार्यक्रमांची छायाचित्रे.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h3 className="text-2xl font-bold">📞 संपर्क</h3>
        <p className="mt-3 text-gray-600">
          ग्रामपंचायत संपर्क व कार्यालयीन माहिती.
        </p>
      </div>
    </div>
  </div>
</section>
    )
}
