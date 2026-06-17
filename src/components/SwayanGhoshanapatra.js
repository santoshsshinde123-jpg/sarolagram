import Link from "next/link";

export default function SwayanghoshanapatraPage() {
  const forms = [
    {
      name: "कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र",
      file: "/pdfs/कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र.pdf",
      icon: "📋",
    },
    {
      name: "परितक्या-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/pdfs/परितक्या-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      name: "रहिवाशी_दाखला_स्व_घोषणापत्र",
      file: "/pdfs/रहिवाशी_दाखला_स्व_घोषणापत्र.pdf",
      icon: "🏠",
    },
     {
      name: "विधवा-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/pdfs/विधवा-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      icon: "👰",
    },
     {
      name: "विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र",
      file: "/pdfs/विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र.pdf",
      icon: "👨‍👩‍👧‍👦",
    },
     {
      name: "वीज-जोडणी-स्वयंघोषणापत्र",
      file: "/pdfs/वीज-जोडणी-स्वयंघोषणापत्र.pdf",
      icon: "🔌",
    },

    {
      name: "शौचालय-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/pdfs/शौचालय-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      icon: "🚽",
    },

    {
      name: "हयात-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/pdfs/हयात-असल्याबाबत-स्वयंघोषणापत्र.pdf",
      icon: "💀",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-6">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center text-white">
          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">
            📄 ग्रामपंचायत डिजिटल सेवा
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            स्वयंघोषणापत्र डाउनलोड
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            आवश्यक स्वयंघोषणापत्रे ऑनलाइन डाउनलोड करा व अर्ज प्रक्रियेसाठी वापरा.
          </p>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {forms.map((form, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
                  {form.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {form.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    PDF स्वरूपात डाउनलोड करा
                  </p>
                </div>

              </div>

              <div className="mt-8 flex gap-3">

                <a
                  href={form.file}
                  download
                  className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
                >
                  डाउनलोड
                </a>

                <a
                  href={form.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
                >
                  पहा
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition"
          >
            ← मुख्यपृष्ठावर जा
          </Link>
        </div>

      </section>

    </main>
  );
}