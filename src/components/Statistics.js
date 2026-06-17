
    export default function Statistics() {
  const stats = [
    { icon: "👥", value: "1153+", label: "लोकसंख्या" },
    { icon: "🏠", value: "247+", label: "कुटुंबे" },
    { icon: "🏫", value: "3", label: "शाळा" },
    { icon: "🚧", value: "15+", label: "विकासकामे" },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-green-800">
            गावाची माहिती
          </h2>

          <div className="w-32 h-1 bg-linear-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-4 text-gray-600 text-lg">
            गावाच्या विकासाची आणि प्रगतीची एक झलक
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
             className="float-card group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-green-700">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}