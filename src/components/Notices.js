
"use client";

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-6">
            📢 ग्रामपंचायत सूचना फलक
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            सूचना व जाहिराती
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            ग्रामपंचायतच्या सर्व महत्त्वाच्या सूचना, जाहिराती,
            ग्रामसभा, निविदा व शासकीय माहिती येथे प्रकाशित केली जाईल.
          </p>

        </div>
      </section>

      {/* Notice Card */}
      <section className="max-w-4xl mx-auto px-4 pb-20">

        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">

          {/* Top Banner */}
          <div className="bg-gradient-to-r from-red-600 to-indigo-700 p-8 text-center">

            <div className="text-6xl mb-4 animate-bounce">
              🚧
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              सध्या कोणतीही सूचना उपलब्ध नाही
            </h2>

          </div>

          {/* Content */}
          <div className="p-10 text-center">

            <div className="text-7xl mb-6">
              📋
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Notice Board Under Construction
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              सूचना विभाग सध्या तयार करण्यात येत आहे.
              लवकरच येथे ग्रामसभा सूचना, निविदा, शासकीय योजना,
              कर सूचना आणि इतर महत्त्वाच्या जाहिराती उपलब्ध होतील.
            </p>

            <div className="mt-10 flex justify-center">

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl px-6 py-4">
                <p className="text-yellow-800 font-medium">
                  🔔 कृपया लवकरच पुन्हा भेट द्या.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
