{/* शाळेची माहिती */}
export default function SchoolInfo() {  
    return(
<section className="max-w-6xl mx-auto px-4 py-16">
  <div className="bg-gradient-to-r from-sky-500 to-gray-700 rounded-3xl p-5 mb-10 shadow-xl">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
    🏫 शाळेची माहिती
  </h2>
</div>

  <div className="bg-white rounded-3xl shadow-xl p-6">

    {/* School Image */}
    <div className="overflow-hidden rounded-3xl shadow-2xl group">
      <img
        src="../Images/school.jpeg"
        alt="जि. प. प्राथमिक शाळा"
        className="w-full h-[450px] object-cover transition-all duration-700 group-hover:scale-110"
      />
    </div>

    {/* School Name */}
    <h3 className="text-4xl font-bold text-center mt-8 mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
  जि. प. प्राथमिक शाळा, सारोळा
</h3>
    {/* Statistics */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

     <div className="floating bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-40 h-40 mx-auto flex flex-col justify-center items-center shadow-xl hover:scale-110 transition-all duration-500"> 
       <div className="float-1 ">👨‍🎓</div>
        <p className="mt-2 text-center">एकूण विद्यार्थी</p>
        <h4 className="font-bold text-xl">४०</h4>
      </div>

      <div className="floating bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-40 h-40 mx-auto flex flex-col justify-center items-center shadow-xl hover:scale-110 transition-all duration-500"> 
       <div className="float-2 ... ">👦</div>
        <p className="mt-2 text-center">मुले</p>
        <h4 className="font-bold text-xl">११</h4>
      </div>

      <div className="floating bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-40 h-40 mx-auto flex flex-col justify-center items-center shadow-xl hover:scale-110 transition-all duration-500">
       <div className="float-3 ...">👧</div>
        <p className="mt-2 text-center">मुली</p>
        <h4 className="font-bold text-xl">२९</h4>
      </div>

    <div className="floating bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-40 h-40 mx-auto flex flex-col justify-center items-center shadow-xl hover:scale-110 transition-all duration-500">
        <div className="float-4 ...">👩‍🏫</div>
        <p className="mt-2 text-center">मुख्याध्यापक</p>
        <h4 className="font-bold text-center">
          श्री. अशोक लोमटे सर
        </h4>
      </div>

     <div className="floating bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full w-40 h-40 mx-auto flex flex-col justify-center items-center shadow-xl hover:scale-110 transition-all duration-500">
        <div className="float-5 ...">📞</div>
        <p className="mt-2 text-center">संपर्क</p>
        <h4 className="font-bold">
          9876543210
        </h4>
      </div>

    </div>
  </div>
</section>
    );
}