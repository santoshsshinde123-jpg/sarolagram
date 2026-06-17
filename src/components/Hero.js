export default function Hero() {
    return(
    <section className="text-center py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
        महाराष्ट्र ग्रामपंचायत पोर्टल
      </span>

      <h1 className="mt-6 text-5xl md:text-6xl font-bold text-green-900">
        ग्रामपंचायत सारोळा सोमवंशी
      </h1>

      <p className="mt-6 text-xl text-gray-700">
        पारदर्शक प्रशासन, सक्षम गाव – आपल्या सेवेत
      </p>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        ग्रामपंचायतीच्या सर्व सूचना, योजना, कागदपत्रे आणि नागरिक सेवा
        एका क्लिकवर उपलब्ध.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold">
          सूचना पहा
        </button>

        <button className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold">
          नागरिक सेवा
        </button>
      </div>
    </div>
  </section>
    )
}

