export default function Leader() {
  const leaders = [
    {
      name: "द्रौपदी मुर्मू",
      designation: "भारताच्या राष्ट्रपती",
      image: "/Images/president.jpg",
    },
    {
      name: "नरेंद्र मोदी",
      designation: "भारताचे पंतप्रधान",
      image: "/Images/pm.jpeg",
    },
    {
      name: "जिष्णू देव वर्मा",
      designation: "महाराष्ट्राचे राज्यपाल",
      image: "/Images/governor.jpeg",
    },
    {
      name: "देवेंद्र फडणवीस",
      designation: "महाराष्ट्राचे मुख्यमंत्री",
      image: "/Images/cm.jpeg",
    },
    {
      name: "एकनाथ शिंदे",
      designation: "उपमुख्यमंत्री",
      image: "/Images/vcm.jpg",
    },
    {
      name: "सुनेत्रा पवार",
      designation: "उपमुख्यमंत्री",
      image: "/Images/vcm1.jpg",
    },
    {
      name: "डॉ. राधाकृष्ण विखे पाटील",
      designation: "पालकमंत्री अहिल्यानगर",
      image: "/Images/palak.jpg",
    },
    {
      name: "जयकुमार गोरे",
      designation: "ग्रामविकास मंत्री",
      image: "/Images/gramvikasMinister.jpg",
    },
    {
      name: "श्री. योगेश कदम",
      designation: "ग्रामविकास राज्यमंत्री",
      image: "/Images/gramvikasStateMinister.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <div className="bg-linear-to-r from-sky-500 via-blue-600 to-indigo-700 rounded-3xl p-6 mb-12 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          मान्यवर नेते
        </h2>

        <p className="text-center text-blue-100 mt-3 text-lg">
          देश, राज्य व जिल्हास्तरीय नेतृत्व
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="
              group
              w-full
              sm:w-70
              lg:w-62.5
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-gray-100
              p-6
              text-center
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="
                w-40
                h-40
                mx-auto
                rounded-full
                object-cover
                border-4
                border-blue-500
                shadow-lg
                group-hover:scale-110
                transition-all
                duration-500
              "
            />

            <h3 className="mt-5 text-xl font-bold text-gray-800">
              {leader.name}
            </h3>

            <p
              className="
                inline-block
                mt-3
                px-4
                py-2
                rounded-full
                bg-linear-to-r
                from-blue-500
                to-indigo-600
                text-white
                text-sm
                font-medium
                shadow-md
              "
            >
              {leader.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}