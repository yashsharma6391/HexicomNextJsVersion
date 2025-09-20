
import Aboutpage from '@/src/pages/about/About'
import React from 'react'
export const metadata={
    title:"About us",
    description:"detail about our company office and legal status main area of activity",
    keywords: ['nextjs', 'seo', 'homepage'],
}
const About = (props) => {
  return (
    <div>
        <Aboutpage {...props}/>
    </div>
  )
}

export default About