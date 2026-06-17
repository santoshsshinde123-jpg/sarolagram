
"use client";

const officers = [
  {
    name: "श्री आनंद भंडारी",
    designation: "मुख्य कार्यकारी अधिकारी (CEO)",
    phone: "8830223649",
    email: "ceo@gp.in",
    image: "/Images/CEO.jpg",
  },
  {
    name: "दादाभाऊ गुंजाळ",
    designation: "उपमुख्य कार्यकारी अधिकारी (Deputy CEO)",
    phone: "9876543210",
    email: "upceo@gp.in",
    image: "/Images/DCEO.jpg",
  },
  {
    name: "श्री. विजय मुळीक",
    designation: "अतिरिक्त मुख्य कार्यकारी अधिकारी (Additional CEO)",
    phone: "9876543210",
    email: "additionalceo@gp.in",
    image: "/Images/ACEO.jpg",
  },
  {
    name: "श्रीमती राणी फराटे",
    designation: "गटविकास अधिकारी (BDO)",
    phone: "9876543211",
    email: "bdo@gp.in",
    image: "/Images/BDO.jpg",
  },
  {
    name: "श्री. स्वप्नील सखाराम आंबेटकर",
    designation: "ग्रामपंचायत अधिकारी",
    phone: "9876543211",
    email: "gramsevak@gp.in",
    image: "/Images/gramsevak.jpg",
  },
];

export default function AdministrativeOfficers() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            👨‍💼 आमचे प्रशासकीय अधिकारी
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            ग्रामपंचायत प्रशासनातील प्रमुख अधिकारी
          </p>

        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">

          {officers.map((officer, index) => (

            <div
              key={index}
              className="group w-full sm:w-[280px] lg:w-[250px] h-[320px] perspective"
            >

              <div className="relative h-full w-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl border border-gray-100">

                  <div className="flex justify-center pt-6">

                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                    />

                  </div>

                  <div className="p-4 text-center">

                    <h3 className="text-lg font-bold text-gray-900 mt-4">
                      {officer.name}
                    </h3>

                    <p className="text-blue-600 text-sm mt-2">
                      {officer.designation}
                    </p>

                  </div>

                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl flex flex-col justify-center items-center p-5">

                  <h3 className="text-lg font-bold text-center">
                    {officer.name}
                  </h3>

                  <p className="text-sm text-blue-100 mt-2 text-center">
                    {officer.designation}
                  </p>

                  <div className="mt-6 space-y-3 text-center">

                    <p className="text-sm">
                      📞 {officer.phone}
                    </p>

                    <p className="text-xs break-all">
                      ✉️ {officer.email}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

