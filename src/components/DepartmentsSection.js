
"use client";
import Link from "next/link";
const departments = [
  {
    icon: "🏛️",
    title: "महसूल विभाग",
    description:
      "जमिनीची मोजणी, फेरफार, महसूल नोंदी व भू-सुधारणांशी निगडित सेवा.",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    link: "/departments/revenue",
  },
  {
    icon: "🌾",
    title: "कृषि विभाग",
    description:
      "शेती, शेतकरी योजना व सबसिडी संदर्भातील महत्वाची माहिती.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    link: "/departments/agriculture",
  },
  {
    icon: "🏥",
    title: "आरोग्य विभाग",
    description:
      "सरकारी आरोग्य तपासणी, औषधे, योजनांची अंमलबजावणी.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    link: "/departments/health",
  },
  {
    icon: "🎓",
    title: "शिक्षण विभाग",
    description:
      "शाळा, महाविद्यालय, शिष्यवृत्ती व शिक्षण सुविधा.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    link: "/departments/education",
  },
  {
    icon: "🐄",
    title: "पशुसंवर्धन विभाग",
    description:
      "गोठे सुधार योजना, जनावरांचे आरोग्य, दुग्ध व्यवसाय सहाय्य.",
    color: "from-amber-500 to-yellow-600",
    bg: "bg-yellow-50",
    link: "/departments/animal-husbandry",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            🏛️ शासन प्रशासन
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
            विभाग माहिती
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            प्रमुख शासन विभाग
          </p>

          <p className="mt-2 text-gray-500 max-w-4xl mx-auto">
            शासकीय योजनांची अंमलबजावणी करणारे प्रमुख विभाग
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {departments.map((dept, index) => (
            <div
              key={index}
              className={`group ${dept.bg} rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-white`}
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition duration-500`}
              >
                {dept.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {dept.title}
              </h3>

              {/* Divider */}
              <div
                className={`w-16 h-1 rounded-full bg-gradient-to-r ${dept.color} mt-4`}
              ></div>

              {/* Description */}
              <p className="mt-5 text-gray-600 leading-relaxed">
                {dept.description}
              </p>

              {/* Features */}
              <div className="mt-6 space-y-2">

                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  ऑनलाइन माहिती
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  शासन योजना
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  नागरिक सेवा
                </div>

              </div>

              {/* Button */}
              <Link
                 href={dept.link}
                className={`mt-8 inline-block bg-gradient-to-r ${dept.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition`}
                 >
                   अधिक माहिती →
              </Link>

            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">शासन विभाग</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-green-600">50+</h3>
            <p className="text-gray-600 mt-2">शासकीय योजना</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-orange-600">100%</h3>
            <p className="text-gray-600 mt-2">पारदर्शक सेवा</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-purple-600">24×7</h3>
            <p className="text-gray-600 mt-2">माहिती उपलब्ध</p>
          </div>

        </div>

      </div>
    </section>
  );
}



