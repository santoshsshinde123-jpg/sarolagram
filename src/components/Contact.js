export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white-500 via-gray-700 to-white-300 text-white py-20">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            📞 संपर्क साधा
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            ग्रामपंचायत सारोळा सोमवंशी संपर्क करण्याचे विविध मार्ग
          </p>

        </div>

      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Address */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

            <div className="text-5xl mb-4">📍</div>

            <h3 className="text-2xl font-bold mb-4">
              कार्यालयाचा पत्ता
            </h3>

            <p className="text-gray-600 leading-8">
              सारोळा सोमवंशी<br />
              ता. श्रीगोंदा<br />
              जि. अहमदनगर<br />
              महाराष्ट्र - 413703
            </p>

          </div>

          {/* Phone */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

            <div className="text-5xl mb-4">📞</div>

            <h3 className="text-2xl font-bold mb-4">
              फोन क्रमांक
            </h3>

            <a
              href="tel:+919423756490"
              className="text-blue-600 text-xl font-semibold"
            >
              +91 9822260893
            </a>

          </div>

          {/* Timing */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

            <div className="text-5xl mb-4">🕒</div>

            <h3 className="text-2xl font-bold mb-4">
              कार्यालयीन वेळ
            </h3>

            <p className="text-gray-600 leading-8">
              सोम - शुक्र<br />
              सकाळी १० ते सायं. ५
              <br /><br />
              शनिवार
              <br />
              सकाळी १० ते दुपारी २
            </p>

          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">

            <div className="text-5xl mb-4">📧</div>

            <h3 className="text-2xl font-bold mb-4">
              ईमेल
            </h3>

            <a
              href="mailto:mungusgaongp222@gmail.com"
              className="text-blue-600 break-all"
            >
              sarolasomvanshi@gmail.com
            </a>

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto px-4 pb-16">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <h2 className="text-3xl font-bold text-center mb-8">
            📝 संदेश पाठवा
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="आपले नाव"
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="मोबाईल क्रमांक"
              className="border rounded-xl p-4"
            />

          </div>

          <input
            type="email"
            placeholder="ईमेल"
            className="border rounded-xl p-4 w-full mt-6"
          />

          <textarea
            rows="5"
            placeholder="आपला संदेश"
            className="border rounded-xl p-4 w-full mt-6"
          ></textarea>

          <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition">
            संदेश पाठवा
          </button>

        </div>

      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="p-6">

            <h2 className="text-3xl font-bold text-center mb-6">
              🗺️ आमचे स्थान
            </h2>

          </div>

          <iframe
            src="https://maps.google.com/maps?q=sarolasomwanshi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}