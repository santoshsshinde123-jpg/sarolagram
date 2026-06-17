export default function ImpNote() {

  const quotes = [
    " ग्रामपंचायत कार्यालयाकडून मिळणारे विविध दाखले (जसे की नमुना नं.८ उतारा, रहिवासी दाखला, जन्म-मृत्यू दाखला, नळ जोडणी दाखला, किंवा इतर कोणतेही ना-हरकत प्रमाणपत्र) मिळण्यापूर्वी नागरिकांना आपला चालू व थकीत संपूर्ण कर भरणे बंधनकारक राहील."
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-red-700 via-red-700 to-red-600 py-4 shadow-xl">

      <div className="relative whitespace-nowrap animate-marquee">

        <span className="text-white text-xl md:text-2xl font-bold px-10">
          ​महत्त्वाची अट: ➜ {quote}
        </span>

      </div>

    </section>
  );
}