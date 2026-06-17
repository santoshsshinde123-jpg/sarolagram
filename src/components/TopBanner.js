export default function TopBanner() {
  return (
    <div className="bg-white border-b-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img src="/Images/emblem.jpg"
            alt="National Emblem"
            className="w-20 h-auto"
          />

          <div>
            <h1 className="text-4xl font-bold text-red-700">
              सारोळा सोमवंशी
            </h1>

            <p className="text-gray-700 font-medium">
              ग्रामपंचायत डिजिटल पोर्टल
            </p>

            <p className="text-gray-600 text-sm mt-1">
               सारोळा सोमवंशी ता. श्रीगोंदा जि. अहिल्यानगर
            </p>
          </div>
        </div>

       
       {/* Right Section */}
<div className="grid grid-cols-3 gap-3 md:flex md:gap-4">

  <a
    href="/newschemes"
    className="
      group
      bg-gradient-to-br
      from-green-500
      to-emerald-600
      text-white
      rounded-2xl
      px-4
      py-4
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      text-center
      min-w-[100px]
    "
  >
    <div className="text-3xl group-hover:animate-bounce">
      🚀
    </div>
    <p className="mt-2 text-sm font-semibold">
      आगामी योजना
    </p>
  </a>

  <a
    href="/notices"
    className="
      group
      bg-gradient-to-br
      from-orange-500
      to-red-600
      text-white
      rounded-2xl
      px-4
      py-4
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      text-center
      min-w-[100px]
    "
  >
    <div className="text-3xl group-hover:animate-bounce">
      📢
    </div>
    <p className="mt-2 text-sm font-semibold">
      सूचना
    </p>
  </a>

  <a
    href="/awards"
    className="
      group
      bg-gradient-to-br
      from-yellow-400
      to-amber-500
      text-white
      rounded-2xl
      px-4
      py-4
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      text-center
      min-w-[100px]
    "
  >
    <div className="text-3xl group-hover:animate-bounce">
      🏆
    </div>
    <p className="mt-2 text-sm font-semibold">
      पुरस्कार
    </p>
  </a>

<a
    href="/contact"
    className="
      group
      bg-gradient-to-br
      from-sky-400
      to-indigo-500
      text-white
      rounded-2xl
      px-4
      py-4
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      text-center
      min-w-[100px]
    "
  >
    <div className="text-3xl group-hover:animate-bounce">
      📞
    </div>
    <p className="mt-2 text-sm font-semibold">
      संपर्क
    </p>
  </a>
</div>
      </div>
    </div>
  );
}