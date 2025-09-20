import Contactpage from '@/src/pages/contactpage/Contactpage'
import React from 'react'
export const metadata={
    title:"Contact Information",
    description:"for contact for work with hexicom and know more about our comapany",
    keywords: ['nextjs', 'seo', 'homepage'],
}
const Contact = () => {
  return (
    <div>
        <Contactpage/>
    </div>
  )
}

export default Contact