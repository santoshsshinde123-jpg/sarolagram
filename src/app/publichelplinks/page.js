import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import PublicHelpLinks from "@/components/publichelplinks"; 
export default function PublicHelpLinksPage() {
    return (
         <>
         <main className="min-h-screen bg-gray-50">
             <TopBanner />
             <Navbar />
            <PublicHelpLinks />
            </main>     
        </>
    );
}        
        