// app/about/page.jsx

import TopBanner from "../../components/TopBanner";
import Navbar from "../../components/Navbar";
import VillageInfo from "../../components/VillageInfo";
import TempleInfo from "../../components/TempleInfo";
import SchoolInfo from "../../components/SchoolInfo";
import VillageStatistics from "../../components/VillageStatistics";
import Leader from "../../components/Leader";
import AdministrativeOfficers from "@/components/AdministrativeOfficers";
import GrampanchayatMembers from "@/components/GrampanchayatMember";
import Responsibility from "@/components/Responsibility";
import SchoolInfo2 from "@/components/SchoolInfo2";
import Anganwadi from "@/components/Anganwadi";
import Anganwadi2 from "@/components/Anganwadi2";
export default function Aboutpage() {
  return (
    <>
    <main className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navbar />
      <VillageInfo />
      <TempleInfo />  
      <SchoolInfo />
       <SchoolInfo2/>
       <Anganwadi/>
       <Anganwadi2/>
      <VillageStatistics /> 
      <Leader />
      <AdministrativeOfficers />
      <GrampanchayatMembers />
      <Responsibility/>
     
     
  

 





    </main>
    </>
  );
}