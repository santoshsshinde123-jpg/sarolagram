export default function HealthDepartmentPage() {
  const healthSchemes = [
    {
      name: "आयुष्मान भारत (PM-JAY)",
      purpose: "गरीब कुटुंबांना आरोग्य विमा",
      benefit: "₹5 लाखांपर्यंत मोफत उपचार",
      website: "https://beneficiary.nha.gov.in",
    },
    {
      name: "महात्मा फुले जनआरोग्य योजना",
      purpose: "आर्थिकदृष्ट्या दुर्बल कुटुंबांसाठी उपचार",
      benefit: "मोफत शस्त्रक्रिया व उपचार",
      website: "https://www.jeevandayee.gov.in",
    },
    {
      name: "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम",
      purpose: "बालकांचे आरोग्य परीक्षण",
      benefit: "मोफत तपासणी व उपचार",
      website: "https://nhm.gov.in",
    },
    {
      name: "प्रधानमंत्री मातृ वंदना योजना",
      purpose: "गर्भवती महिलांना सहाय्य",
      benefit: "₹5000 आर्थिक मदत",
      website: "https://pmmvy.wcd.gov.in",
    },
    {
      name: "जननी सुरक्षा योजना",
      purpose: "सुरक्षित प्रसूतीला प्रोत्साहन",
      benefit: "आर्थिक सहाय्य",
      website: "https://nhm.gov.in",
    },
  ];

  const phcSchemes = [
    {
      scheme: "जननी सुरक्षा योजना (JSY)",
      category: "अनु. जाती, अनु. जमाती व दारिद्र्य रेषेखालील माता",
      benefit: "ग्रामीण – ₹700, शहरी – ₹600, घरी प्रसूती – ₹500",
      condition:
        "शासकीय/मान्यताप्राप्त दवाखान्यात प्रसूती किंवा प्रशिक्षित व्यक्तीद्वारे घरी प्रसूती",
      service: "ONLINE",
    },
    {
      scheme: "मानव विकास अंतर्गत गरोदर महिलांना बुडीत मजुरी योजना",
      category: "अनु. जाती, अनु. जमाती व दारिद्र्य रेषेखालील माता",
      benefit: "गर्भवती – ₹2000, प्रसूतीनंतर – ₹2000 (एकूण ₹4000)",
      condition: "मातेच्या खेपेची अट नाही",
      service: "OFFLINE",
    },
    {
      scheme: "मातृत्व अनुदान योजना",
      category: "अनुसूचित जमाती",
      benefit: "गरोदर मातांना औषधी व आहारासाठी ₹400",
      condition:
        "तिसऱ्या खेपपर्यंत अनुसूचित जमाती व दुसऱ्या खेपपर्यंत बिगरआदिवासी",
      service: "OFFLINE",
    },
    {
      scheme: "जननी शिशु सुरक्षा योजना (JSSK)",
      category: "सर्व प्रवर्ग",
      benefit:
        "फ्री संदर्भ सेवा, सोनोग्राफी, बालकांची सेवा एक वर्षासाठी",
      condition:
        "सर्व गरोदर मातांसाठी व एका वर्षातील बालकांसाठी",
      service: "OFFLINE",
    },
    {
      scheme: "आयुष्यमान भारत हेल्थ कार्ड (ABHA)",
      category: "सर्व प्रवर्ग",
      benefit: "युनिक हेल्थ ID कार्ड मोफत",
      condition: "सर्व लाभार्थ्यांसाठी",
      service: "ONLINE",
    },
    {
      scheme: "ABDM Health ID Card",
      category: "सर्व प्रवर्ग",
      benefit: "युनिक हेल्थ ID ऑफलाइन/ऑनलाइन",
      condition: "सर्व लाभार्थ्यांसाठी",
      service: "ONLINE",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="bg-white/20 px-5 py-2 rounded-full">
            🇮🇳 भारत सरकार व महाराष्ट्र शासन
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            आरोग्य विभाग
          </h1>

          <p className="mt-4 text-xl text-cyan-100">
            आरोग्य व वैद्यकीय सेवांसाठी शासकीय योजना
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">

        {/* Main Health Schemes */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">

            <h2 className="text-3xl font-bold">
              🏥 आरोग्य विभागाच्या योजना
            </h2>

            <p className="mt-2 text-blue-100">
              नागरिकांसाठी उपलब्ध प्रमुख आरोग्य योजना
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

              <thead>
                <tr className="bg-blue-50">
                  <th className="p-5 text-left">क्र.</th>
                  <th className="p-5 text-left">योजना</th>
                  <th className="p-5 text-left">उद्देश</th>
                  <th className="p-5 text-left">लाभ</th>
                  <th className="p-5 text-center">संकेतस्थळ</th>
                </tr>
              </thead>

              <tbody>
                {healthSchemes.map((scheme, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 transition"
                  >
                    <td className="p-5">{index + 1}</td>

                    <td className="p-5 font-semibold">
                      {scheme.name}
                    </td>

                    <td className="p-5">
                      {scheme.purpose}
                    </td>

                    <td className="p-5 text-green-700 font-medium">
                      {scheme.benefit}
                    </td>

                    <td className="p-5 text-center">

                      <a
                        href={scheme.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg inline-block"
                      >
                        भेट द्या
                      </a>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* PHC Schemes */}
        <div className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">

            <h2 className="text-3xl font-bold">
              👩‍⚕️ प्राथमिक आरोग्य केंद्र व उपकेंद्र अंतर्गत दिल्या जाणाऱ्या विविध आरोग्य योजना
            </h2>

            <p className="mt-2 text-green-100">
              माता व बालकांसाठी उपलब्ध सेवा
            </p>

          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 m-6 rounded-lg">
            <p className="text-green-800 font-medium">
              📢 सर्व आरोग्य योजनांचा लाभ घेण्यासाठी आधार कार्ड,
              मोबाईल क्रमांक आणि आवश्यक कागदपत्रे जवळ बाळगा.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1200px]">

              <thead>
                <tr className="bg-green-50">
                  <th className="p-4 text-left">क्र.</th>
                  <th className="p-4 text-left">योजनेचे नाव</th>
                  <th className="p-4 text-left">प्रवर्ग</th>
                  <th className="p-4 text-left">लाभ</th>
                  <th className="p-4 text-left">अटी-शर्ती</th>
                  <th className="p-4 text-center">सेवा स्वरूप</th>
                </tr>
              </thead>

              <tbody>

                {phcSchemes.map((scheme, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-green-50"
                  >
                    <td className="p-4">{index + 1}</td>

                    <td className="p-4 font-semibold">
                      {scheme.scheme}
                    </td>

                    <td className="p-4">
                      {scheme.category}
                    </td>

                    <td className="p-4 text-green-700">
                      {scheme.benefit}
                    </td>

                    <td className="p-4">
                      {scheme.condition}
                    </td>

                    <td className="p-4 text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          scheme.service === "ONLINE"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {scheme.service}
                      </span>

                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Important Notice */}
        <div className="mt-10 bg-cyan-50 border border-cyan-200 rounded-3xl p-8">

          <h3 className="text-2xl font-bold text-cyan-800">
            📌 महत्वाची सूचना
          </h3>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✅ आधार कार्ड आवश्यक</li>
            <li>✅ रेशन कार्ड / उत्पन्न दाखला आवश्यक</li>
            <li>✅ सरकारी रुग्णालयात संपर्क साधावा</li>
            <li>✅ अधिक माहितीसाठी आरोग्य विभागाच्या संकेतस्थळाला भेट द्या</li>
          </ul>

        </div>

      </section>

    </main>
  );
}

