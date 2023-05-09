import React from "react"; 
import Image from 'next/image'
const DashboardPage= async ()=> { 
 return ( 
 <div className="container mx-auto shadow p-4">
 <Image src="/images/charts.png" alt="" width="1050" height="300"
priority />
 </div>
 ) 
} 
export default DashboardPage;