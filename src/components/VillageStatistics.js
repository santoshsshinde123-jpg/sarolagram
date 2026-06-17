export default function VillageStatistics() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Heading */}
     <div className="text-center mb-12">
      <h2 className="inline-block bg-gradient-to-r from-sky-500 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg text-3xl md:text-4xl font-bold">
     🏛️ गावाची महत्त्वाची माहिती
     </h2>
     </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">

        {/* लोकसंख्या */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 flex items-center justify-center text-3xl shadow-lg">
            👥
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            एकूण लोकसंख्या
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            1153
          </p>
        </div>

        {/* पुरुष */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl shadow-lg">
            👨
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            पुरुष
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            588
          </p>
        </div>

        {/* महिला */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-3xl shadow-lg">
            👩
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            महिला
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
            565
          </p>
        </div>

        {/* इतर */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-3xl shadow-lg">
            ⚧️
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            इतर
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            0
          </p>
        </div>

        {/* कुटुंबे */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-3xl shadow-lg">
            🏠
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            कुटुंबे
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
            247
          </p>
        </div>

        {/* साक्षरता */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-3xl shadow-lg">
            📚
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            साक्षरता
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            87.33%
          </p>
        </div>

        {/* क्षेत्रफळ */}
        <div className="stats-card group bg-white rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl shadow-lg">
            🌍
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            क्षेत्रफळ
          </h3>

          <p className="text-4xl font-extrabold mt-3 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            10 km²
          </p>
        </div>

      </div>

    </section>
  );
}