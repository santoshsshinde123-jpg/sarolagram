"use client";

import { FileText, Download, ShieldCheck } from "lucide-react";

const rtiDocuments = [
   {
    title: "RTI 4(1)ख - 1 ते 17 मुद्दे माहिती",
    file: "/pdfs/RTI_1to17.pdf",
  },
  {
    title: "RTI 4(1)ख - 1 ते 17 मुद्दे माहिती(सविस्तर)",
    file: "/pdfs/RTI_Savistar.pdf",
  },
  {
    title: "माहिती अधिकार अर्ज नमुना",
    file: "/pdfs/rti-application.pdf",
  },
  {
    title: "माहिती अधिकार अधिनियम 2005",
    file: "/pdfs/RTI_Act_2005.pdf",
  },
  {
    title: "प्रथम अपील अर्ज नमुना",
    file: "/pdfs/first-appeal.pdf",
  },
  {
    title: "द्वितीय अपील अर्ज नमुना",
    file: "/pdfs/second-appeal.pdf",
  },
];

export default function RTIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
            <ShieldCheck size={18} />
            पारदर्शक प्रशासन
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
            माहिती अधिकार
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            नागरिकांना शासकीय माहिती मिळविण्याचा अधिकार आहे.
            आवश्यक अर्ज, अधिनियम व इतर दस्तऐवज येथे डाउनलोड करा.
          </p>

        </div>
      </section>

      {/* RTI Information Card */}
      <section className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">

          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl">
             माहिती अधिकार कायदा 2005
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            माहितीचा अधिकार अधिनियम 2005 अंतर्गत प्रत्येक नागरिकाला
            सार्वजनिक प्राधिकरणाकडून माहिती मिळवण्याचा अधिकार आहे.
            या माध्यमातून शासनाच्या कामकाजात पारदर्शकता व जबाबदारी
            वाढविण्याचा उद्देश आहे.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-blue-700">
                अर्ज कालावधी
              </h3>
              <p className="mt-2 text-gray-600">
                30 दिवसांच्या आत माहिती उपलब्ध.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-green-700">
                प्रथम अपील
              </h3>
              <p className="mt-2 text-gray-600">
                उत्तर न मिळाल्यास 30 दिवसांत.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-orange-700">
                द्वितीय अपील
              </h3>
              <p className="mt-2 text-gray-600">
                राज्य माहिती आयोगाकडे करता येते.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Download Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl">
          📄 डाउनलोड दस्तऐवज
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {rtiDocuments.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                  <FileText className="text-red-600 " size={28} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {doc.title}
                  </h3>
                </div>

              </div>

              <a
                href={doc.file}
                download
                className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                <Download size={18} />
                PDF डाउनलोड करा
              </a>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}