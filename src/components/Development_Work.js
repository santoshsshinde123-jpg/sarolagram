"use client";

import Link, { useLinkStatus } from "next/link";
import { useState } from "react";

export default function DevelopmentWorksPage() {
  const [activeTab, setActiveTab] = useState("all");

  const works = [
    {
      id: 1,
      scheme: "ग्रामनिधी(२०२५-२६)",
      work: "स्मशान भूमी परिसर स्वच्छता",
      status: "completed",
      Manjur_Nidhi: "२००००",
      Kharch_Nidhi: "१६४६४",
      Link:"/pdfs/smashanbhumi.pdf"
    },
    {
      id: 2,
      scheme: "नवबौद्ध वस्ती विकास योजना(२०२४-२५)  ",
      work: "माळवाडी रस्ता सिमेंट काँक्रिटीकरण करणे",
      status: "completed",
      Manjur_Nidhi: "८०००००",
      Kharch_Nidhi: "६३११८९",
     Link:""
    },
    {
      id: 3,
      scheme: " १५ वा वित्त आयोग    ",
      work: "ग्रामपंचायत आवारात पेव्हर ब्लॉक बसविणे",
      status: "completed",
      Manjur_Nidhi: "१४५००० ",
      Kharch_Nidhi: "११९६६२",
      Link:""
    },
    {
      id: 4,
      scheme: " १५ वा वित्त आयोग    ",
      work: "आर.ओ.चिलर बसविणे ",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "७११००",
      Link:""
    },
    {
      id: 5,
      scheme: " १५ वा वित्त आयोग    ",
      work: "जि.प.प्रा.शाळा हँड वॉश स्टेशन बसविणे ",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "२४०७४ ",
      Link:""
    },
    {
      id: 6,
      scheme: " १५ वा वित्त आयोग    ",
      work: "कचरा कुंडी खरेदी करणे",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "७६९७७",
      Link:""
    },
    {
      id: 7,
      scheme: " १५ वा वित्त आयोग    ",
      work: "वृक्ष लागवड व जाळी खरेदी",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "४६०००",
      Link:""
    },
    {
      id: 8 ,
      scheme: " १५ वा वित्त आयोग    ",
      work: "रस्ता मुरुमीकरण करणे",
      status: "completed",
      Manjur_Nidhi: "२५००० ",
      Kharch_Nidhi: "१६७८५",
      Link:"/pdfs/murumikarn.pdf"
    },
    {
      id: 9,
      scheme: " १५ वा वित्त आयोग    ",
      work: "गावठाण परिसरात सार्वजनिक शौचालय बांधणे",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "७३८०६",
      Link:"",
    },
    {
      id: 10 ,
      scheme: " १५ वा वित्त आयोग    ",
      work: "जि. प. शाळेत सार्वजनिक शौचालय बांधणे ",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "७३८०६",
      Link:""
      
    },
    {
      id: 11 ,
      scheme: " १५ वा वित्त आयोग    ",
      work: "मंदिर परिसरात पेव्हर ब्लॉक बसविणे",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "१४८६००",
      Link:"",
    },
    {
      id: 12,
      scheme: " १५ वा वित्त आयोग    ",
      work: "सौर पथदिवे बसविणे",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "१६२७९८ ",
     Link:"",
    },
    {
      id: 13 ,
      scheme: " १५ वा वित्त आयोग    ",
      work: "ग्रामपंचायत परिसरात सीसीटीव्ही कॅमेरे बसविणे",
      status: "completed",
      Manjur_Nidhi: "-",
      Kharch_Nidhi: "२१००० ",
      Link:"",
    },
    
     {
      id: 14 ,
      scheme: "ग्रामनिधी ",
      work: "खुली व्यायाम (आखाडा)  शाळा बांधणे",
      status: "completed",
      Manjur_Nidhi: "९५०००",
      Kharch_Nidhi: "७५६००",
      Link:"/pdfs/akhada.pdf",
    },
{
      id: 15 ,
      scheme: " ग्रामनिधी     ",
      work: "पाणंद रस्ते दुरुस्ती",
      status: "completed",
      Manjur_Nidhi: "१५००००",
      Kharch_Nidhi: "१२७३४०",
      Link:"/pdfs/panand_raste.pdf",
    },
{
      id: 16 ,
      scheme: " ग्रामनिधी     ",
      work: "ग्रामपंचायत रंगरंगोटी ",
      status: "completed",
      Manjur_Nidhi: "४०००० ",
      Kharch_Nidhi: "३३५७२",
      Link:"/pdfs/gp_coloring.pdf",
    },
    {
      id: 17 ,
      scheme: "१५ वा वित्त आयोग",
      work: "पालखीमार्ग साठी बंदिस्त गटार लाइन करणे",
      status: "Proposed",
      Manjur_Nidhi: "२०००००",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 18 ,
      scheme: "१५ वा वित्त आयोग",
      work: "गावांतर्गत बंदिस्त गटार लाइन करणे",
      status: "Proposed",
      Manjur_Nidhi: "१६१७७८",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 19,
      scheme: "१५ वा वित्त आयोग",
      work: "स्मशानभुमी येथे पाण्याची टाकी बांधणे",
      status: "Proposed",
      Manjur_Nidhi: "२०००००",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 20 ,
      scheme: "१५ वा वित्त आयोग",
      work: "आर.ओ.दुरुस्ती व आर.ओ.मशीन खरेदी करणे ",
      status: "Proposed",
      Manjur_Nidhi: "१६१७७८",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 21 ,
      scheme: "१५ वा वित्त आयोग",
      work: "सर्व जि.प.शाळांना शैक्षणिक साहित्य पुरविणे",
      status: "Proposed",
      Manjur_Nidhi: "४००००",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 22 ,
      scheme: "१५ वा वित्त आयोग",
      work: "जि.प.प्रा.शाळा आढाववस्ती येथे पाण्याची टाकी बांधणे",
      status: "Proposed",
      Manjur_Nidhi: "५००००",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 23 ,
      scheme: "१५ वा वित्त आयोग",
      work: "नवीन वृक्षलागवडीसाठी पाईपलाईन करणे",
      status: "Proposed",
      Manjur_Nidhi: "३०५९३",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 24 ,
      scheme: "१५ वा वित्त आयोग",
      work: "अंगणवाडी दुरुस्ती /अंगणवाडी आवश्यक बाबींवर खर्च करणे",
      status: "Proposed",
      Manjur_Nidhi: "३०००० ",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 25 ,
      scheme: "१५ वा वित्त आयोग",
      work: "बचतगटांसाठी आवश्यक साहित्य व सुविधा पुरविणे",
      status: "Proposed",
      Manjur_Nidhi: "१८२३७ ",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },

{
      id: 26 ,
      scheme: "१५ वा वित्त आयोग",
      work: "मागासवर्गीय वस्तीत आवश्यक सुविधा पुरविणे",
      status: "Proposed",
      Manjur_Nidhi: "७२३५५ ",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 27 ,
      scheme: "१५ वा वित्त आयोग",
      work: "गावांतर्गत रस्ता कॉँक्रिट करणे  ",
      status: "Proposed",
      Manjur_Nidhi: "१५००००",
      Kharch_Nidhi: "--",
      Link:"",
    },
{
      id: 28 ,
      scheme: "१५ वा वित्त आयोग",
      work: "नवले वस्ती व ननवरे वस्ती सोलर स्ट्रीट लाइट बसविणे  ",
      status: "Proposed",
      Manjur_Nidhi: "२००००",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 29 ,
      scheme: "१५ वा वित्त आयोग",
      work: "ग्रा.प.फर्निचर खरेदी करणे",
      status: "Proposed",
      Manjur_Nidhi: "२२९४७ ",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },
{
      id: 30 ,
      scheme: "१५ वा वित्त आयोग",
      work: "आपले सरकार सेवा केंद्र अंतर्गत संगणक साहित्य, संगणक परिचालक मानधन व प्रशासकीय खर्च",
      status: "Proposed",
      Manjur_Nidhi: "४८२३७",
      Kharch_Nidhi: "--",
      Link:"/pdfs/Arakhada.pdf",
    },







  ];

  const filteredWorks =
    activeTab === "all"
      ? works
      : works.filter((item) => item.status === activeTab);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-16">

      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
          ग्रामपंचायत विकास कामे
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          गावाच्या उज्ज्वल भविष्यासाठी पूर्ण केलेली व प्रगतीपथावरील कामे
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10 px-4">
        <div className="bg-white shadow-lg rounded-full p-2 flex flex-wrap gap-2">

          <button
            onClick={() => setActiveTab("all")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "all"
                ? "bg-blue-600 text-white"
                : "text-gray-700"
            }`}
          >
            सर्व (All)
          </button>

          <button
            onClick={() => setActiveTab("progress")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "progress"
                ? "bg-orange-500 text-white"
                : "text-gray-700"
            }`}
          >
            चालू (In Progress)
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "completed"
                ? "bg-green-600 text-white"
                : "text-gray-700"
            }`}
          >
            पूर्ण (Completed)
          </button>

           
          <button
            onClick={() => setActiveTab("Proposed")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "Proposed"
                ? "bg-gray-600 text-white"
                : "text-yellow-700"
            }`}
          >
            प्रस्तावित(Proposed)
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="bg-gray-500 text-white">

                  <th className="p-4 text-left">अ.क्र.</th>
                  <th className="p-4 text-left">योजनेचे नाव/</th>
                  <th className="p-4 text-left">कामाचे नाव</th>
                  <th className="p-4 text-left">स्थिती</th>
                  <th className="p-4 text-left">अंदाजित रक्कम</th>
                  <th className="p-4 text-left">खर्च झालेली रक्कम</th>
                  <th className="p-4 text-left">तपशील</th>

                </tr>
              </thead>

              <tbody>

                {filteredWorks.length > 0 ? (
                  filteredWorks.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{item.scheme}</td>
                      <td className="p-4">{item.work}</td>

                      <td className="p-4">

                        {item.status === "completed" ? (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            पूर्ण
                          </span>
                        ) : (
                          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                            प्रस्तावित 
                          </span>
                        )
                        }

                      </td>

                      <td className="p-4">{item.Manjur_Nidhi}</td>
                      <td className="p-4">{item.Kharch_Nidhi}</td>
                     

<td className="p-4">
  <a
    href={item.Link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2
      bg-linear-to-r
      from-blue-600
      to-indigo-600
      text-white
      px-4
      py-2
      rounded-xl
      shadow-md
      hover:shadow-xl
      hover:scale-105
      transition-all
      duration-300
    "
  >
    📄 तपशील
  </a>
</td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-12 text-xl text-gray-600 font-medium"
                    >
                      कोणतीही नोंद उपलब्ध नाही.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}