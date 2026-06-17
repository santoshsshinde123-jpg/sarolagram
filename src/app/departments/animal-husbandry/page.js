
export default function AnimalHusbandryPage() {
  const cattleVaccines = [
    ["FMD (लाळ खुरकूत)", "जन्मानंतर चौथ्या महिन्यात", "1 महिन्याने", "मार्च व सप्टेंबर महिन्यात"],
    ["HS (घटसर्प)", "सहाव्या महिन्यात", "-", "दरवर्षी मे महिन्यात"],
    ["ब्लॅक क्वार्टर (फऱ्या)", "सहाव्या महिन्यात", "-", "दरवर्षी मे महिन्यात"],
    ["लम्पी स्किन डिसीज", "चौथ्या महिन्यात", "-", "दरवर्षी मे महिन्यात"],
    ["थेलेरिओसिस", "तिसऱ्या महिन्यात", "-", "मे महिन्यात, दर 3 वर्षांनी"],
    ["अँथ्रॅक्स", "सहाव्या महिन्यात", "-", "दरवर्षी ऑगस्ट महिन्यात"],
    ["ब्रुसेलोसिस", "4-8 महिन्यांत एकदाच", "-", "-"],
    ["रेबीज", "0, 3, 7, 14, 28, 90 दिवशी", "-", "किमान 3-5 डोस"],
  ];

  const goatVaccines = [
    ["लाळ खुरकूत (FMD)", "तिसऱ्या महिन्यात", "मार्च व सप्टेंबर महिन्यात"],
    ["घटसर्प", "तिसऱ्या महिन्यात", "एप्रिल महिन्यात"],
    ["आंत्रविषार", "गर्भावस्थेत लसीकरण", "मे महिन्यात + 15-21 दिवसांनी दुसरी मात्रा"],
    ["निल जीव्हा", "तिसऱ्या महिन्यात", "जुलै, वारंवार बाधित भागात"],
    ["अॅथ्रॅक्स", "तिसऱ्या महिन्यात", "ऑगस्ट, सलग 3 वर्षे"],
    ["धनुर्वात", "तिसऱ्या महिन्यात, गर्भवती मादीस", "ऑक्टोबर महिन्यात"],
    ["मेंढ्यांची देवी", "तिसऱ्या महिन्यात", "डिसेंबर महिन्यात"],
    ["शेळ्यांची देवी", "तिसऱ्या महिन्यात", "डिसेंबर महिन्यात"],
  ];

  const services = [
    {
      icon: "📱",
      title: "भारत पशुधन (NDLM)",
      desc: "पशुपालक नोंदणी, पशुधन नोंदणी, उपचार, जंत निर्मूलन, लसीकरण, कृत्रिम रेतन, गर्भधारणा नोंद.",
    },
    {
      icon: "📊",
      title: "21st Livestock Census",
      desc: "पशुगणना माहिती व नोंदणी सुविधा.",
    },
    {
      icon: "☎️",
      title: "टोल फ्री मदत",
      desc: "1962 / 18002330418",
    },
  ];

  const websites = [
    {
      title: "राज्यस्तरीय पशुसंवर्धन योजना",
      url: "https://mahabms.com",
    },
    {
      title: "महामेष योजना",
      url: "https://www.mahamesh.in",
    },
    {
      title: "राष्ट्रीय पशुधन अभियान",
      url: "https://m.udyamimitra.in",
    },
    {
      title: "स्मार्ट प्रकल्प",
      url: "https://smart-mh.org",
    },
    {
      title: "गोकुळ मिशन",
      url: "https://dahd.nic.in",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-green-700 via-emerald-700 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="bg-white/20 px-5 py-2 rounded-full">
            महाराष्ट्र शासन
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            🐄 पशुसंवर्धन विभाग
          </h1>

          <p className="mt-4 text-xl text-green-100">
            लसीकरण वेळापत्रक, पशुधन सेवा व शासकीय योजना
          </p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">

        {/* Cattle Vaccination */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">

          <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white p-6">
            <h2 className="text-3xl font-bold">
              💉 मोठ्या जनावरांमधील लसीकरण वेळापत्रक
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-300">

              <thead className="bg-green-50">
                <tr>
                  <th className="p-4 text-left">रोग</th>
                  <th className="p-4 text-left">प्राथमिक लसीकरण</th>
                  <th className="p-4 text-left">बूस्टर</th>
                  <th className="p-4 text-left">वार्षिक लसीकरण</th>
                </tr>
              </thead>

              <tbody>
                {cattleVaccines.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-green-50"
                  >
                    {item.map((col, i) => (
                      <td key={i} className="p-4">
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Goat Vaccination */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">

          <div className="bg-linear-to-r from-blue-600 to-cyan-600 text-white p-6">
            <h2 className="text-3xl font-bold">
              🐐 शेळी व मेंढी लसीकरण वेळापत्रक
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-250">

              <thead className="bg-blue-50">
                <tr>
                  <th className="p-4 text-left">रोगाचे नाव</th>
                  <th className="p-4 text-left">प्राथमिक लसीकरण</th>
                  <th className="p-4 text-left">वार्षिक लसीकरण</th>
                </tr>
              </thead>

              <tbody>
                {goatVaccines.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50"
                  >
                    {item.map((col, i) => (
                      <td key={i} className="p-4">
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* E Governance */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold text-center mb-8">
            📱 ई-गव्हर्नन्स सेवा
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
              >
                <div className="text-5xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Help Line */}

        <div className="bg-linear-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 text-center shadow-xl mb-12">

          <h2 className="text-3xl font-bold">
            ☎️ शेतकऱ्यांसाठी मदत केंद्र
          </h2>

          <p className="text-xl mt-4">
            टोल फ्री : 1962 / 18002330418
          </p>

          <p className="mt-2">
            फोन कॉलद्वारे सेवा उपलब्ध
          </p>

        </div>

        {/* Websites */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            🌐 महत्वाची संकेतस्थळे
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {websites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-linear-to-r from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-green-700">
                  {site.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {site.url}
                </p>
              </a>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
