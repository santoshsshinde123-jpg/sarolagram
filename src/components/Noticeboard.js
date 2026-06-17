export default function NoticeBoard() {
    return( 
     
        <section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-green-900">
      नवीन सूचना
    </h2>

    <div className="mt-12 space-y-4">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">
          ग्रामसभा बैठक सूचना
        </h3>
        <p className="text-gray-600 mt-2">
          ग्रामसभा दिनांक 15 जून 2026 रोजी आयोजित करण्यात आली आहे.
        </p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
          PDF डाउनलोड
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">
          पाणीपुरवठा सूचना
        </h3>
        <p className="text-gray-600 mt-2">
          देखभाल कामामुळे पाणीपुरवठा तात्पुरता बंद राहील.
        </p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
          PDF डाउनलोड
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-lg">
          कर भरणा सूचना
        </h3>
        <p className="text-gray-600 mt-2">
          सर्व नागरिकांनी वेळेत कर भरणा करावा.
        </p>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
          PDF डाउनलोड
        </button>
      </div>
    </div>
  </div>
</section>

    )
} 
    
