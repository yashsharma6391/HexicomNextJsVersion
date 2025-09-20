

import Sidebar from '@/src/components/sidebar/Sidebar';
import Homepage from '@/src/pages/homepage/Homepage';
import React from 'react'
export const metadata = {
    title:"Hexicom – Bridging Technology & Infrastructure",
    description:"Incorporated in 2025, our company represents the culmination of nearly two decades of industry experience, visionary leadership, and a relentless pursuit of excellence.",
    keywords: ['nextjs', 'seo', 'homepage'],
}

const page = () => {
  return (
    <div>
        <Homepage />
        
    </div>
  )
}

export default page
