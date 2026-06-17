"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
const [mobileMenu, setMobileMenu] = useState(false);

return ( <nav className="sticky top-0 z-50 bg-linear-to-r from-gray-500 via-gray-500 to-gray-500 shadow-lg text-white">


  <div className="max-w-7xl mx-auto px-4">

    <div className="flex justify-between items-center h-16">

      {/* Logo */}
      <Link href="/" className="text-lg md:text-2xl font-bold">
        🏛️ ग्रामपंचायत सारोळा सोमवंशी
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium">

        <Link href="/" className="hover:text-yellow-300">
          🏠 मुख्यपृष्ठ
        </Link>

        <Link href="/about" className="hover:text-yellow-300">
          ℹ️ आमच्याविषयी
        </Link>
          <Link href="/departments" className="hover:text-yellow-300">
          🏛️ विभाग 
        </Link>
         <Link href="/citizenservicelist" className="hover:text-yellow-300">
          👨‍👩‍👧‍👦 नागरीक सेवांची यादी 
        </Link> 
       

        <Link href="/govschemes" className="hover:text-yellow-300">
          📋 शासकीय योजना
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">

          <button className="flex items-center gap-1 hover:text-yellow-300">
            💻 सेवा <ChevronDown size={16} />
          </button>

          <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-xl shadow-xl w-60">

            <Link href="/digitalservices" className="block px-4 py-3 hover:bg-gray-100">
              डिजिटल सेवा
            </Link>

            <Link href="/tax_payment" className="block px-4 py-3 hover:bg-gray-100">
              कर भरणा
            </Link>

            <Link href="/rti" className="block px-4 py-3 hover:bg-gray-100">
              माहिती अधिकार
            </Link>

            <Link href="/expenditure" className="block px-4 py-3 hover:bg-gray-100">
              जमा खर्च
            </Link>

          </div>

        </div>

        {/* Information Dropdown */}
        <div className="relative group">

          <button className="flex items-center gap-1 hover:text-yellow-300">
            📰 माहिती <ChevronDown size={16} />
          </button>

         <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-xl shadow-xl w-60">

            <Link href="/notices" className="block px-4 py-3 hover:bg-gray-100">
              सूचना
            </Link>

            <Link href="/development_work" className="block px-4 py-3 hover:bg-gray-100">
              ग्रामविकास कामे
            </Link>

            <Link href="/gallery" className="block px-4 py-3 hover:bg-gray-100">
              गॅलरी
            </Link>

            

          </div>

        </div>

        {/* Information Dropdown */}
        <div className="relative group">

          <button className="flex items-center gap-1 hover:text-yellow-300">
            📰 अभियान <ChevronDown size={16} />
          </button>

         <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 rounded-xl shadow-xl w-60">

            <Link href="/abhiyan/mukhyamantri-samruddha-panchayat-raj" className="block px-4 py-3 hover:bg-gray-100">
              मुख्यमंत्री समृद्ध पंचायतराज 
            </Link>

            <Link href="/abhiyan/majhi-vasundhara" className="block px-4 py-3 hover:bg-gray-100">
              माझी वसुंधरा
            </Link>

            <Link href="/abhiyan/pani-puravatha" className="block px-4 py-3 hover:bg-gray-100">
              पाणी पुरवठा 
            </Link>

            <Link href="/abhiyan/solid-waste-management" className="block px-4 py-3 hover:bg-gray-100">
              घन कचरा व्यवस्थापन 
            </Link>
            <Link href="/abhiyan/swachh-bharat-mission" className="block px-4 py-3 hover:bg-gray-100">
              स्वच्छ भारत मिशन
            </Link>
          </div>

        </div>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  {mobileMenu && (

    <div className="lg:hidden bg-blue-800 px-4 py-4 space-y-3">

      <Link href="/" className="block">🏠 मुख्यपृष्ठ</Link>
      <Link href="/about" className="block">ℹ️ आमच्याविषयी</Link>

      <Link href="/deparments" className="block">
        🏛️ विभाग 
      </Link>
     

      <Link href="/govschemes" className="block">
        📋 शासकीय योजना
      </Link>

      <div className="font-semibold text-yellow-300">
        💻 सेवा
      </div>

      <div className="pl-4 space-y-2">
        <Link href="/digitalservices" className="block">डिजिटल सेवा</Link>
        <Link href="/tax_payment" className="block">कर भरणा</Link>
        <Link href="/rti" className="block">माहिती अधिकार</Link>
        <Link href="/expenditure" className="block">जमा खर्च</Link>
      </div>

      <div className="font-semibold text-yellow-300">
        📰 माहिती
      </div>

      <div className="pl-4 space-y-2">
        <Link href="/notices" className="block">सूचना</Link>
        <Link href="/development_work" className="block">ग्रामविकास कामे</Link>
        <Link href="/gallery" className="block">गॅलरी</Link>
        <Link href="/officers" className="block">आमचे अधिकारी</Link>
      </div>

      <Link href="/contact" className="block">
        📞 संपर्क
      </Link>

    </div>

  )}

</nav>


);
}
