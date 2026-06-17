export default function TempleInfo() {
    return(
<>
<section className="max-w-7xl mx-auto px-4 py-16">
 <div className="bg-gradient-to-r from-sky-500 to-blue-700 rounded-3xl p-5 mb-10 shadow-xl">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
    🛕 गावातील प्रमुख मंदिरे
  </h2>
</div>

  {/* Temple 1 */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
    <div>
      <img
        src="../Images/temple1.jpeg"
        alt="मंदिर १"
        className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
      />
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold text-orange-600 mb-4">
        श्री महादेव मंदिर
      </h3>

      <p className="text-gray-700 leading-8 text-lg">
        हेमाडपंती शैलीतील महादेवाचे पाषाण मंदिर वालुंबी नदीच्या काठावर स्थित असलेले महादेवाचे मंदिर म्हणजे स्थापत्यकलेचा एक उत्कृष्ट नमुना आहे. केवळ दगडात बांधणी: या मंदिराचे सर्वात मोठे वैशिष्ट्य म्हणजे हे संपूर्ण मंदिर फक्त आणि फक्त दगडात बांधलेले आहे. प्राचीन भारतीय मंदिर शैलीची आठवण करून देणारे हे मंदिर आजही दिमाखात उभे आहे. पाषाण शिल्प: मंदिरावरील कोरीव काम आणि दगडांची एकमेकांशी असलेली घट्ट पकड पाहण्यासारखी आहे.
      </p>

      <p className="text-gray-700 leading-8 mt-4">
        मंदिर परिसरात भाविकांसाठी उत्तम सुविधा उपलब्ध असून येथे
        धार्मिक व सांस्कृतिक कार्यक्रमांचे आयोजन केले जाते.
      </p>
    </div>
  </div>

  {/* Temple 2 */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div className="bg-white p-8 rounded-2xl shadow-lg order-2 md:order-1">
      <h3 className="text-3xl font-bold text-green-700 mb-4">
        वालुंबी नदी
      </h3>

      <p className="text-gray-700 leading-8 text-lg">
        🌊 वालुंबी नदीचा नयनरम्य काठ हे मंदिर परिसर वालुंबी नदीच्या काठावर वसलेले असल्याने येथे निसर्ग आणि अध्यात्म एकत्र अनुभवायला मिळते. नदीचा खळखळाट आणि मंदिरातील घंटानाद यामुळे हे ठिकाण पर्यटकांसाठी आणि गावकऱ्यांसाठी एक उत्तम 'पीस ऑफ माईंड' स्पॉट बनले आहे.
      </p>

      <p className="text-gray-700 leading-8 mt-4">
        मंदिराची वास्तुरचना आकर्षक असून गावाच्या धार्मिक परंपरेचे
        प्रतीक म्हणून ओळखले जाते.
      </p>
    </div>

    <div className="order-1 md:order-2">
      <img
        src="../Images/walumbi.jpg"
        alt="मंदिर २"
        className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-500"
      />
    </div>
  </div>
  
   
</section>
{/*temple3*/}
<section className="max-w-7xl mx-auto px-4 py-16">

  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

    <img
      src="../Images/temple3.jpg"
      alt="श्री काळभैरवनाथ मंदिर"
      className="w-full h-auto object-contain"
    />

    <div className="p-8 md:p-12">

      <h1 className="text-4xl font-bold text-orange-700 mb-6">
        🛕 श्री काळभैरवनाथ मंदिर
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        ग्रामदैवत श्री काळभैरवनाथ मंदिर हे गावातील श्रद्धा, भक्ती व
        धार्मिक परंपरांचे केंद्र आहे. मंदिराचा वेळोवेळी जीर्णोद्धार
        करून आकर्षक स्वरूप देण्यात आले आहे.
      </p>

      <div className="space-y-10">

        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            🏛️ वास्तुशिल्प
          </h2>

          <p className="text-gray-700 leading-relaxed">
            मंदिराची इमारत भव्य आणि आकर्षक असून गावकऱ्यांच्या
            लोकसहभागातून वेळोवेळी जीर्णोद्धार व सुशोभीकरण करण्यात
            आले आहे. प्रशस्त सभामंडप आणि उंच शिखर लांबूनच
            भाविकांचे लक्ष वेधून घेते.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            🎊 मुख्य उत्सव आणि धार्मिक कार्यक्रम
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ चैत्र महिन्यात भव्य वार्षिक यात्रा</li>
            <li>✅ देवाची पालखी व छबिना सोहळा</li>
            <li>✅ भव्य निकाली कुस्त्यांचे मैदान</li>
            <li>✅ अखंड हरिनाम सप्ताह व ज्ञानेश्वरी पारायण</li>
            <li>✅ काळभैरव जयंती निमित्त विशेष अभिषेक</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            🕯️ दैनंदिन विधी
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-orange-50 p-4 rounded-xl">
              🌅 काकड आरती – पहाटे ५:३०
            </div>

            <div className="bg-orange-50 p-4 rounded-xl">
              🙏 नित्य पूजा व अभिषेक – सकाळी ७:०० ते ९:००
            </div>

            <div className="bg-orange-50 p-4 rounded-xl">
              🪔 सायंकाळची आरती – सायं ७:३०
            </div>

            <div className="bg-orange-50 p-4 rounded-xl">
              🍛 महानैवेद्य – दुपारी १२:००
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            🌳 सुविधा आणि परिसर
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ स्वच्छ मंदिर परिसर</li>
            <li>✅ पेविंग ब्लॉक सुविधा</li>
            <li>✅ प्रशस्त सभामंडप</li>
            <li>✅ भाविकांसाठी विश्रांती व्यवस्था</li>
            <li>✅ वृक्षारोपण व नैसर्गिक वातावरण</li>
          </ul>
        </div>

      </div>

    </div>

  </div>

</section>
  </>
    );
        
}