
"use client";

const officers = [
  {
    name: "सौ. उज्वला राहुल आढाव (MBA-HR)",
    designation: "सरपंच",
    phone: "9422901794",
    email: "ceo@gp.in",
    image: "/Images/sarpanch.jpg",
  },
  {
    name: "श्री. संदीप सर्जेराव ननवरे",
    designation: "उपसरपंच",
    phone: "9657633296",
    email: "upsarpanch@gp.in",
    image: "/Images/upsarpanch.jpeg",
  },
  {
    name: "श्री. स्वप्नील सखाराम आंबेटकर",
    designation: "ग्रामपंचायत अधिकारी",
    phone: "8999541003",
    email: "grampanchayat@gp.in",
    image: "/Images/gramsevak.jpg",
  },
  
];

const otherMembers =[
    {
    name: "सौ. मेहबुबी दाऊद सय्यद",
    designation: "ग्रामपंचायत सदस्य ",
    phone: "9881539553",
    email: "ceo@gp.in",
    image: "/Images/member_1.jpeg",
  },
  {
    name: "सौ. शीतल भाऊसाहेब लोंढे",
    designation: "ग्रामपंचायत सदस्य ",
    phone: "9356232374",
    email: "upsarpanch@gp.in",
    image: "/Images/member_2.jpeg",
  },
  {
    name: "सौ. सुप्रिया अर्जुन आढाव",
    designation: "ग्रामपंचायत सदस्य ",
    phone: "9168989263",
    email: "grampanchayat@gp.in",
    image: "/Images/member_3.jpeg",
  },
  {
    name: "श्री. अंजाबापू रामचंद्र कवाष्टे",
    designation: "ग्रामपंचायत सदस्य ",
    phone: "9921956099",
    email: "bdo@gp.in",
    image: "/Images/member_4.jpeg",
  },
{
    name: "सौ. सविता विष्णु नवले",
    designation: "ग्रामपंचायत सदस्य ",
    phone: "9373556596",
    email: "bdo@gp.in",
    image: "/Images/Member5.jpg",
  },

  {
    name: "श्री. गणेश फक्कड आढाव",
    designation: "संगणक परिचालक",
    phone: "7498721449",
    email: "gramsevak@gp.in",
    image: "/Images/computer_operator.jpeg",
  },
  {
    name: "श्री.सूर्यकांत नानाभाऊ आढाव",
    designation: "पाणी पुरवठा कर्मचारी",
    phone: "9421587758",
    email: "gramsevak@gp.in",
    image: "/Images/water_provider.jpeg",
  },
  {
    name: "श्री. भाऊसाहेब एकनाथ लोंढे",
    designation: "शिपाई",
    phone: "7498813676",
    email: "gramsevak@gp.in",
    image: "/Images/shipai.jpeg",
  },
];
export default function GrampanchayatMembers() {
  return (
    <>
    <section className="py-20 bg-linear-to-br from-blue-50 via-white to-indigo-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
             ग्रामपंचायत कार्यकारिणी  मंडळ
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            ग्रामपंचायत प्रशासनातील प्रमुख अधिकारी व पदाधिकारी
          </p>

        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">

          {officers.map((officer, index) => (

            <div
              key={index}
              className="group w-full sm:w-70 lg:w-62.5 h-80 perspective"
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
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-linear-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl flex flex-col justify-center items-center p-5">

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

<section className="py-20 bg-linear-to-br from-blue-50 via-white to-indigo-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            👨‍💼 इतर सदस्य 
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            ग्रामपंचायत प्रशासनातील इतर सदस्य
          </p>

        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">

          {otherMembers.map((otherMembers, index) => (

            <div
              key={index}
              className="group w-full sm:w-70 lg:w-62.5 h-80 perspective"
            >

              <div className="relative h-full w-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl border border-gray-100">

                  <div className="flex justify-center pt-6">

                    <img
                      src={otherMembers.image}
                      alt={otherMembers.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                    />

                  </div>

                  <div className="p-4 text-center">

                    <h3 className="text-lg font-bold text-gray-900 mt-4">
                      {otherMembers.name}
                    </h3>

                    <p className="text-blue-600 text-sm mt-2">
                      {otherMembers.designation}
                    </p>

                  </div>

                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden bg-linear-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl flex flex-col justify-center items-center p-5">

                  <h3 className="text-lg font-bold text-center">
                    {otherMembers.name}
                  </h3>

                  <p className="text-sm text-blue-100 mt-2 text-center">
                    {otherMembers.designation}
                  </p>

                  <div className="mt-6 space-y-3 text-center">

                    <p className="text-sm">
                      📞 {otherMembers.phone}
                    </p>

                    <p className="text-xs break-all">
                      ✉️ {otherMembers.email}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

    </>
  );
}

