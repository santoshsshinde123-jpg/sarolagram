export default function SuvicharSection() {

  const quotes = [
    "मोठे स्वप्न पहा, कठोर परिश्रम करा आणि कधीही हार मानू नका.",
    "शिक्षण हेच खरे सामर्थ्य आहे.",
    "स्वच्छ गाव, सुंदर गाव.",
    "पाणी वाचवा, भविष्य घडवा.",
    "एकता आणि सहकार्य हे गावाच्या प्रगतीचे आधारस्तंभ आहेत.",
    "प्रामाणिकपणा हीच खरी संपत्ती आहे.",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-blue-700 via-purple-700 to-pink-600 py-4 shadow-xl">

      <div className="relative whitespace-nowrap animate-marquee">

        <span className="text-white text-xl md:text-2xl font-bold px-10">
          ✨ आजचा सुविचार ✨ ➜ {quote}
        </span>

      </div>

    </section>
  );
}