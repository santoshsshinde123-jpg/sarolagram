import Link from "next/link";
export default function Expenditure() {
    return(
<section className="relative overflow-hidden py-20 px-6">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-indigo-100"></div>

  {/* Decorative Shapes */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-indigo-700 shadow">
        आर्थिक पारदर्शकता
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
        वार्षिक जमा खर्च
      </h2>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        ग्रामपंचायतीच्या आर्थिक व्यवहारांची पारदर्शक माहिती नागरिकांसाठी उपलब्ध.
      </p>
       <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        ( २०२५-२६ )
      </p>
      


    </div>
  <div className="bg-gradient-to-r from-sky-500 to-gray-700 rounded-3xl p-5 mb-10 shadow-xl">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
    १५ वा वित्त आयोग
  </h2>
</div>

    {/* Main Card */}
    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Income */}
        <div className="bg-green-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">💰</div>
          <h3 className="text-xl font-bold text-green-800">
            एकूण जमा
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ १७७८१७१ 
          </p>
        </div>

        {/* Expense */}
        <div className="bg-red-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">📉</div>
          <h3 className="text-xl font-bold text-red-800">
            एकूण खर्च
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ ११८४९०९ 
          </p>
        </div>

        {/* Balance */}
        <div className="bg-blue-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">🏦</div>
          <h3 className="text-xl font-bold text-blue-800">
            एकूण शिल्लक
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ ५९३२६२ 
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/pdfs/15th_grant.pdf" className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
          संपूर्ण आर्थिक अहवाल पहा
        </a>
      </div>

    </div>
     <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-5 mb-10 shadow-xl mt-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
    ग्राम निधी 
  </h2>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Income */}
        <div className="bg-green-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">💰</div>
          <h3 className="text-xl font-bold text-green-800">
            एकूण जमा
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ ८७६१८० 
          </p>
        </div>

        {/* Expense */}
        <div className="bg-red-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">📉</div>
          <h3 className="text-xl font-bold text-red-800">
            एकूण खर्च
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ ७७१९६०  
          </p>
        </div>

        {/* Balance */}
        <div className="bg-blue-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">🏦</div>
          <h3 className="text-xl font-bold text-blue-800">
            एकूण शिल्लक
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ १०४२२०  
          </p>
        </div>
       
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/pdfs/gramnidhi.pdf" className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
          संपूर्ण आर्थिक अहवाल पहा
        </a>
      </div>

    </div>
      <div className="bg-gradient-to-r from-sky-500 to-blue-700 rounded-3xl p-5 mb-10 shadow-xl mt-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
    पाणी पुरवठा 
  </h2>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Income */}
        <div className="bg-green-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">💰</div>
          <h3 className="text-xl font-bold text-green-800">
            एकूण जमा
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ १४८८१७ 
          </p>
        </div>

        {/* Expense */}
        <div className="bg-red-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">📉</div>
          <h3 className="text-xl font-bold text-red-800">
            एकूण खर्च
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ ६८३२७   
          </p>
        </div>

        {/* Balance */}
        <div className="bg-blue-50 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
          <div className="text-5xl mb-4">🏦</div>
          <h3 className="text-xl font-bold text-blue-800">
            एकूण शिल्लक
          </h3>
          <p className="text-4xl font-bold mt-4 text-gray-900">
            ₹ ८०४९०   
          </p>
        </div>
       
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/pdfs/panipurvtha.pdf" className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
          संपूर्ण आर्थिक अहवाल पहा
        </a>
      </div>

    </div>
  </div>
  
</section>
    );
}