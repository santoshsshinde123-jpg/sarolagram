"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* About */}
          <div>

            <h3 className="text-2xl font-bold mb-5 text-yellow-400">
              ग्रामपंचायत सारोळा सोमवंशी
            </h3>

            <p className="text-gray-300 leading-7">
              पारदर्शक प्रशासन, सक्षम गाव आणि डिजिटल सेवांच्या माध्यमातून
              ग्रामस्थांना उत्तम सुविधा देण्याचा आमचा प्रयत्न.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-yellow-400">
              जलद दुवे
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  🏠 मुख्यपृष्ठ
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-yellow-400 transition">
                  ℹ️ आमच्याविषयी
                </Link>
              </li>

              <li>
                <Link href="/schemes" className="hover:text-yellow-400 transition">
                  📋 शासकीय योजना
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition">
                  📞 संपर्क
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-yellow-400">
              संपर्क माहिती
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>📍 सारोळा सोमवंशी, ता. श्रीगोंदा</p>

              <p>📞 +91 8830223649</p>

              <p>📧 grampanchayat@gmail.com</p>

              <p>🕒 सोम - शुक्र : 10 AM - 5 PM</p>

            </div>

          </div>

          {/* Social */}
        

        </div>

      </div>
<div className="border-t border-slate-700">

  <div className="max-w-7xl mx-auto py-6 text-center">

    <h3 className="text-lg font-semibold text-yellow-400 mb-4">
      आम्हाला सोशल मीडियावर फॉलो करा
    </h3>

    <div className="flex justify-center gap-5 text-3xl">

      <a href="#" className="hover:scale-110 transition">
        📘
      </a>

      <a href="https://www.instagram.com/gp_sarolasomwanshi?utm_source=qr&igsh=MXFjeHd4Ymd5cHI4ZA==" className="hover:scale-110 transition">
        📷
      </a>

      <a href="https://youtube.com/@sarolasomwanshi?si=nsJZiiLbOnlta8DJ" className="hover:scale-110 transition">
        ▶️
      </a>

      <a href="#" className="hover:scale-110 transition">
        💬
      </a>

    </div>

  </div>

</div>
      {/* Bottom Footer */}
      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} ग्रामपंचायत सारोळा सोमवंशी.
            सर्व हक्क राखीव.
          </p>

          <p className="text-gray-400 text-center">
            💻 Developed by Santosh Shinde
          </p>

        </div>

      </div>

    </footer>
  );
}