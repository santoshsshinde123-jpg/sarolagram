import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import DigitalServices from "@/components/DigitalServices";
export default function DigitalServicesPage() {
    return (
        <>
         <main className="min-h-screen bg-gray-50">
             <TopBanner />
             <Navbar />
            <DigitalServices />
            </main>     
        </>
    );
}