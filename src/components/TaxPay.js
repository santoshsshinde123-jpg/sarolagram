"use client";

import { useState } from "react";
export default function TaxPaymentPage() {
     const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            💳 कर भरणा
          </h1>

          <p className="mt-5 text-lg md:text-xl text-blue-100">
            ऑनलाइन QR कोड स्कॅन करून घरपट्टी व पाणीपट्टी भरणा करा
          </p>

        </div>

      </section>

      {/* QR Cards */}
      <section className="max-w-6xl mx-auto px-4 py-20">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Water Tax */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition duration-300">

            <div className="bg-linear-to-r from-white-500 to-white-600 text-black p-6 text-center">

              <div className="text-5xl mb-3">💧</div>

              <h2 className="text-3xl font-bold">
                पाणीपट्टी
              </h2>

            </div>

            <div className="p-8 text-center">

              <img
                 src="/Images/water-tax-qr.jpg"
                  alt="पाणीपट्टी QR"
                onClick={() => setSelectedImage("/Images/water-tax-qr.jpg")}
                className="w-72 h-72 mx-auto object-contain border rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
              />

              <p className="mt-6 text-gray-600">
  QR कोड स्कॅन करून पाणीपट्टीचा भरणा करा.
</p>

<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

  <a
    href="upi://pay?pa=S353077grampancha@mscbank&pn=Grampanchayat%20Sarola%20Somvanshi%20Pani%20Puravatha&tn=Water%20Bill&cu=INR"
    className="
      bg-linear-to-r
      from-cyan-500
      to-blue-600
      text-white
      px-6
      py-3
      rounded-xl
      font-semibold
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      text-center
    "
  >
     UPI लिंक 
  </a>

  <a
    href="/Images/water-tax-qr.jpg"
    download
    className="
      bg-white
      border-2
      border-blue-500
      text-blue-600
      px-6
      py-3
      rounded-xl
      font-semibold
      hover:bg-blue-50
      transition-all
      text-center
    "
  >
    ⬇️ QR डाउनलोड
  </a>

</div>

            </div>

          </div>

          {/* House Tax */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition duration-300">

            <div className="bg-linear-to-rrom-orange-500 to-red-600 text-black p-6 text-center">

              <div className="text-5xl mb-3">🏠</div>

              <h2 className="text-3xl font-bold">
                घरपट्टी
              </h2>

            </div>

            <div className="p-8 text-center">

              <img
                src="/Images/house-tax-qr.jpg"
                alt="घरपट्टी QR"
                onClick={() => setSelectedImage("/Images/house-tax-qr.jpg")}
                className="w-72 h-72 mx-auto object-contain border rounded-2xl shadow-md cursor-pointer hover:scale-105 transition"
               />

              <p className="mt-6 text-gray-600">
  QR कोड स्कॅन करून पाणीपट्टीचा भरणा करा.
</p>

<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

  <a
    href="upi://pay?pa=S353062grampancha@mscbank &pn=Grampanchayat%20Sarola%20Somvanshi&cu=INR"
    className="
      bg-linear-to-r
      from-cyan-500
      to-blue-600
      text-white
      px-6
      py-3
      rounded-xl
      font-semibold
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      text-center
    "
  >
     UPI लिंक
  </a>

  <a
    href="/Images/house-tax-qr.jpg"
    download
    className="
      bg-white
      border-2
      border-blue-500
      text-blue-600
      px-6
      py-3
      rounded-xl
      font-semibold
      hover:bg-blue-50
      transition-all
      text-center
    "
  >
    ⬇️ QR डाउनलोड
  </a>

</div>

            </div>

          </div>

        </div>

      </section>

      {/* Important Notice */}
      <section className="max-w-5xl mx-auto px-4 pb-20">

        <div className="bg-yellow-50 border border-yellow-300 rounded-3xl p-8 text-center">

          <h3 className="text-2xl font-bold text-yellow-800 mb-4">
            📢 महत्वाची सूचना
          </h3>

          <p className="text-gray-700 leading-8">
            
            भरणा केल्यानंतर पावती सुरक्षित जतन करून ठेवा.
            कोणत्याही अडचणीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधावा.
            
          </p>

        </div>

      </section>
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 pt-10"
    onClick={() => setSelectedImage(null)}
  >
    <div className="relative">

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-12 right-0 text-white text-4xl"
      >
        ✕
      </button>

      <img
        src={selectedImage}
        alt="QR Code"
        className="max-w-full max-h-[90vh] rounded-2xl bg-white p-2"
      />

    </div>
  </div>
)}
    </div>
  );
}
