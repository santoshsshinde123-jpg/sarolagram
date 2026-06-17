import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import DepartmentsSection from "@/components/DepartmentsSection"; 
export default function DepartmentsPage() {
    return(
        <>
        <main className="min-h-screen bg-gray-50">
            <TopBanner />
            <Navbar />
            <DepartmentsSection />
        </main>                   
        </>
    );
}