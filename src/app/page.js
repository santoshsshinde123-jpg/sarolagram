import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Slider from "../components/Slider";
import SuvicharSection from "@/components/suvichar";
import VillageStatistics from "@/components/VillageStatistics";
import AdministrativeOfficers from "@/components/AdministrativeOfficers";
import Leader from "@/components/Leader";
import GrampanchayatMembers from "@/components/GrampanchayatMember";
export default function Home() {
  return (
  <>
     <main className="min-h-screen bg-linear-to-br from-green-50 via-white to-orange-50">
      <TopBanner />
      <Navbar />
      <Slider />
      <SuvicharSection/>
      <VillageStatistics/>
      <Leader/>
      <AdministrativeOfficers/>
      <GrampanchayatMembers/>
      <Gallery />
    </main> 
  </>
  );
}