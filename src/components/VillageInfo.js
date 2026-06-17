 {/* About Gram Panchayat */}
export default function VillageInfo() {
    return (
<section className="max-w-7xl mx-auto px-4 py-12">

  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

    {/* Top Heading Bar */}
    <div className="bg-gradient-to-r from-sky-500 to-blue-700 rounded-3xl p-5 mb-10 shadow-xl">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
    🏛️ ग्रामपंचायतीची सामान्य माहिती
  </h2>
</div>

    <div className="p-8">

      {/* Intro */}
      <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-xl mb-8">
        <p className="text-gray-700 text-lg leading-8">
          <strong>सारोळा सोमवंशी</strong> हे गाव भौगोलिकदृष्ट्या अत्यंत
          मोक्याच्या ठिकाणी, तीन जिल्ह्यांच्या/तालुक्यांच्या सीमांच्या
          उंबरठ्यावर वसलेले आहे. ग्रामपंचायत स्थापना सन १९६२ मध्ये झाली.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-blue-700 mb-3">
            📍 सर्वसाधारण माहिती
          </h3>
          <p>तालुका : श्रीगोंदा</p>
          <p>जिल्हा : अहिल्यानगर</p>
          <p>स्थापना : १९६२</p>
          <p>अक्षांश : 18.7745°</p>
          <p>रेखांश : 74.6750°</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-green-700 mb-3">
            🗳️ राजकीय क्षेत्र
          </h3>
          <p>विधानसभा मतदारसंघ : श्रीगोंदा</p>
          <p>लोकसभा मतदारसंघ : अहिल्यानगर दक्षिण</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-orange-700 mb-3">
            🛣️ दळणवळण
          </h3>
          <p>अहिल्यानगर : ३५ किमी</p>
          <p>श्रीगोंदा : ४५ किमी</p>
          <p>रेल्वे स्टेशन : विसापूर</p>
          <p>विमानतळ : पुणे (लोहगाव)</p>
        </div>

      </div>

      {/* Highlight Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-8 border border-orange-200">
        <h3 className="text-2xl font-bold text-red-700 mb-4">
          🚩 शौर्य, श्रम आणि संस्कारांचा त्रिवेणी संगम
        </h3>

        <p className="text-gray-700 leading-8">
          ग्रामपंचायत सारोळा सोमवंशी हे केवळ एक गाव नसून,
          राष्ट्रभक्ती आणि प्रगतीचे जिवंत प्रतीक आहे.
          १९६२ मध्ये स्थापना झालेली ही ग्रामपंचायत आज
          'आदर्श गाव' बनण्याच्या दिशेने वाटचाल करत आहे.
        </p>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            🎖️ जय जवान
          </h3>

          <p className="text-gray-700 leading-8">
            सारोळा सोमवंशी हे "सैनिकांचे गाव" म्हणून ओळखले जाते.
            प्रत्येक कुटुंबातील किमान एक व्यक्ती भारतीय सैन्यात
            देशसेवा बजावत आहे किंवा सेवानिवृत्त होऊन गावाच्या
            विकासात योगदान देत आहे.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🌾 जय किसान
          </h3>

          <p className="text-gray-700 leading-8">
            गावातील कष्टकरी शेतकरी शेतीच्या माध्यमातून देशाच्या
            अन्नसुरक्षेत महत्त्वाचे योगदान देतात. त्यांच्या
            परिश्रमामुळे गाव सुजलाम-सुफलाम झाले आहे.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
    );  
}