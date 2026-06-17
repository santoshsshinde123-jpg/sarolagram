import Link from "next/link";
export default function DigitalServices() {
  const services = [
    {
      icon: "💰",
      title: "कर भरणा",
      description: "ऑनलाईन पद्धतीने घरपट्टी व इतर कर भरणा.",
      button: "कर भरा",
         link: "/taxpayment",
    },
    {
      icon: "📄",
      title: "स्वयंघोषणापत्र",
      description: "घोषणापत्र डाउनलोड करा व अर्जासाठी वापरा.",
      button: "डाउनलोड करा",
       link: "/swayanghoshanapatra",
    },
    {
      icon: "🌤️",
      title: "हवामान अंदाज",
      description: "गावातील आजचे हवामान जाणून घ्या.",
      button: "हवामान पहा",
         link: "/weather",
    },
    {
      icon: "🔗",
      title: "जनसुविधा लिंक",
      description: "महत्त्वाचे सरकारी पोर्टल्स व सुविधा.",
      button: "पाहा लिंक",
        link: "publichelplinks",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-[40px] bg-linear-to-r from-sky-500 via-blue-500 to-cyan-500 p-12 md:p-20 shadow-2xl">

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full"></div>

          <div className="relative text-center text-white">

            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur">
              ✨ नागरिकांसाठी डिजिटल सुविधा
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold">
              उपलब्ध डिजिटल सेवा
            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              तुमच्या गावातील माहिती व सेवा आता एका क्लिकवर उपलब्ध.
            </p>

          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-6xl text-center">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-center mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mt-4 leading-7">
                {service.description}
              </p>

              <div className="text-center mt-8">
              <Link
                 href={service.link}
                className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
                >
                 {service.button}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Strip */}
        <div className="mt-16 bg-linear-to-r from-blue-700 to-indigo-700 text-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="mt-2">ऑनलाईन सेवा</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">5000+</h3>
              <p className="mt-2">नागरिक</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24×7</h3>
              <p className="mt-2">उपलब्ध</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="mt-2">डिजिटल सुविधा</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}