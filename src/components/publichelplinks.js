"use client";

import { useState } from "react";
export default function PublicHelpLinks() {
  const [search, setSearch] = useState("");
  const services = [
  { id: 1, name: "Train Booking", url: "https://www.irctc.co.in" },
  { id: 2, name: "Passport Application", url: "https://www.passportindia.gov.in" },
  { id: 3, name: "Driving License / RC", url: "https://parivahan.gov.in" },
  { id: 4, name: "Voter ID Services", url: "https://voterportal.eci.gov.in" },
  { id: 5, name: "DigiLocker", url: "https://www.digilocker.gov.in" },
  { id: 6, name: "CSC Portal", url: "https://sewa.csc.gov.in" },
  { id: 7, name: "PM-KISAN", url: "https://pmkisan.gov.in" },
  { id: 8, name: "DBT Payment Tracking", url: "https://pfms.nic.in" },
  { id: 9, name: "NPCI / UPI", url: "https://www.npci.org.in" },
  { id: 10, name: "PMJJBY / PMSBY / APY", url: "https://www.jansuraksha.gov.in" },
  { id: 11, name: "National Scholarship Portal", url: "https://scholarships.gov.in" },
  { id: 12, name: "NTA Exams", url: "https://nta.ac.in" },
  { id: 13, name: "NCERT Textbooks", url: "https://ncert.nic.in" },
  { id: 14, name: "UGC", url: "https://www.ugc.ac.in" },
  { id: 15, name: "CBSE", url: "https://www.cbse.gov.in" },
  { id: 16, name: "Ayushman Bharat", url: "https://ayushmanbharat.gov.in" },
  { id: 17, name: "Ministry of Health", url: "https://mohfw.gov.in" },
  { id: 18, name: "Social Justice Schemes", url: "https://socialjustice.gov.in" },
  { id: 19, name: "CPGRAMS", url: "https://pgportal.gov.in" },
  { id: 20, name: "RTI Online", url: "https://rtionline.gov.in" },
  { id: 21, name: "eCourts", url: "https://ecourts.gov.in" },
  { id: 22, name: "Consumer Helpline", url: "https://consumerhelpline.gov.in" },
  { id: 23, name: "India Portal", url: "https://www.india.gov.in" },
  { id: 24, name: "MyGov", url: "https://www.mygov.in" },
  { id: 25, name: "Aadhaar Services", url: "https://uidai.gov.in" },
  { id: 26, name: "PM India", url: "https://www.pmindia.gov.in" },
  { id: 27, name: "MGNREGA", url: "https://nrega.nic.in" },
  { id: 28, name: "Income Tax & PAN", url: "https://www.incometax.gov.in" },
  { id: 29, name: "EPFO", url: "https://www.epfindia.gov.in" },
  { id: 30, name: "e-SHRAM", url: "https://eshram.gov.in" },
  { id: 31, name: "PAN & TDS Services", url: "https://www.tin-nsdl.com" },
];
const filteredServices = services.filter((service) =>
  service.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
   <section className="max-w-7xl mx-auto px-4 py-12">
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
      <h2 className="text-3xl font-bold ">
        जनसुविधा लिंक
      </h2>
      <p className="mt-2 text-blue-100">
        नागरिकांसाठी महत्त्वाच्या शासकीय सेवा व वेबसाईट्स
      </p>
    </div>

    <div className="overflow-x-auto">
        <div className="mb-8 flex justify-center">
  <div className="relative w-full max-w-xl mt-6">
    <input
      type="text"
      placeholder="🔍 सेवा शोधा... (Aadhaar, Passport, PM-KISAN)"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-5 py-4 rounded-2xl border border-gray-200 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 text-lg"
    />
  </div>
</div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left">क्र.</th>
            <th className="p-4 text-left">सेवा</th>
            <th className="p-4 text-center">लिंक</th>
          </tr>
        </thead>

        <tbody>
          {filteredServices.map((service) => (
            <tr
              key={service.id}
              className="border-b hover:bg-blue-50 transition"
            >
              <td className="p-4 font-semibold">
                {service.id}
              </td>

              <td className="p-4">
                {service.name}
              </td>

              <td className="p-4 text-center">
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  उघडा
                </a>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      {filteredServices.length === 0 && (
  <div className="text-center py-10">
    <h3 className="text-2xl font-semibold text-gray-600">
      कोणतीही सेवा आढळली नाही
    </h3>
    <p className="text-gray-500 mt-2">
      दुसरा शोध शब्द वापरून पहा.
    </p>
  </div>
)}
    </div>

  </div>
</section>
    </main>
  );
}