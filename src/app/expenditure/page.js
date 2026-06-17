import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Expenditure from "@/components/Expenditure"; 


export default function ExpenditurePage() {
    return (
        <>
         <main className="min-h-screen bg-gray-50">
             <TopBanner />
             <Navbar />
            <Expenditure />
            </main>
            
        </> 
    );
}