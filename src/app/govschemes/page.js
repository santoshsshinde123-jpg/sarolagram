import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import GovSchemes from "@/components/GovSchemes";

export default function GovSchemesPage() {
  return (
         <>
          <main className="min-h-screen bg-gray-50">
              <TopBanner />
              <Navbar />
             <GovSchemes />
             </main>     
         </>
     );
 }