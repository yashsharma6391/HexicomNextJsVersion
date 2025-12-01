"use client";
import Sidebar from '@/src/components/sidebar/Sidebar'
import  { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import styles from './homepage.module.css'

const Homepage = ({sidebar, setSidebarfunc }) => {
      useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);
//   useEffect(() => {
//     setSidebarfunc(false);
//   }, []);
//   useEffect(() => {
//     if (typeof setSidebarfunc === "function") {
//       setSidebarfunc(false);
//     }
//   }, []);
  return (
      <div className={styles.mainpage}>
     
      {/* <Sidebar sidebar={sidebar} /> */}
      <div className={styles.AboutCompany}>
        <h1 data-aos="fade-up">Our Journey</h1>
        <p data-aos="fade-up" className={styles.AboutCompanyPara}>
               HEXICOM (HIIPL) represents the culmination of nearly two decades of
          diverse industry experience, visionary leadership, and an unwavering
          commitment to excellence. Founded by Mr. Dheeraj Sharma, a seasoned
          professional with 19+ years of hands-on expertise across India’s
          service and infrastructure ecosystem, the company brings
          transformative energy to the SITC domain across multiple sectors,
          including IT & Telecom Infrastructure, Electrical and Automation, EV
          Charging Stations, Networking, Logistics, Solar EPC, Repair &
          Refurbishment, Optical Fibre Networks, Electro-Mechanical Civil Works,
          and Satcom Technologies. Mr. Sharma began his professional journey in
          2010, stepping into the industry as a Marketing Director and later
          serving in various CXO roles across prominent organizations. Over the
          years, he has played pivotal roles in driving mission-critical
          projects, building high-performing teams, and shaping strategic
          roadmaps that delivered measurable impact across both government and
          private sector environments. His leadership has always been defined by
          a powerful combination of technical depth and business acumen,
          enabling him to convert complex challenges into scalable, sustainable,
          and future-ready solutions. Inspired by the insights and lessons of
          nearly two decades, Mr. Sharma envisioned an organization that goes
          beyond conventional service delivery. This vision led to the
          establishment of HEXICOM, a platform built to deliver high-impact,
          value-driven, and technology-enabled solutions. More than just a
          company, HEXICOM is the embodiment of a proven track record,
          deep-rooted industry knowledge, and a passion for innovation,
          discipline, and execution excellence. Today, we stand as a dynamic,
          multi-domain service provider delivering end-to-end integrated
          solutions—from design and deployment to operations, maintenance, and
          optimization. Our cross-sector capabilities enable us to support
          large-scale infrastructure programs as well as agile,
          technology-focused initiatives, all with a strong emphasis on client
          satisfaction, safety, and long-term value creation. What truly sets us
          apart is our approach. We believe success is achieved by aligning the
          best people, processes, and performance. Our team comprises skilled,
          committed professionals who embody our core values of Trust, Respect,
          and Accountability—principles that guide every project and every
          partnership. With a leadership team deeply experienced in business
          development, strategic alliances, project execution, and market
          expansion, HEXICOM is well-equipped to operate confidently in an
          ever-evolving technological and business landscape. Our clarity of
          vision, depth of expertise, and uncompromising focus on quality enable
          us to navigate complex environments with precision and reliability. As
          a company built on a strong legacy of experience, we are committed to
          responsible growth, meaningful partnerships, and consistently raising
          industry standards. Our ambition is not merely to participate in the
          market— but to shape it, elevate it, and transform it, one successful
          project at a time.
          {/* Incorporated in 2025, our company represents the culmination of nearly
          two decades of industry experience, visionary leadership, and a
          relentless pursuit of excellence. Founded by Mr. Dheeraj Sharma, a
          seasoned professional with over 15 years of hands-on expertise across
          India's service ecosystem, the company brings a new energy to the
          fields and industry of SITC in sectors of IT & Telecom Infrastructure,
          Electrical and Automation, EV Charging Stations , Networking,
          Logistics, Solar EPC, Repair & Refurbishment, Optical Fibre Networks,
          Electro-Mechanical Civil Works, and Satcom Technologies. Mr. Sharma
          began his professional journey in 2010, stepping into the industry as
          a Director in a prominent organization. Over the years, he went on to
          play instrumental roles in multiple companies, leading critical
          projects, building cross-functional teams, and shaping strategic
          roadmaps that delivered measurable impact across both government and
          private sectors. His leadership journey has been defined by an ability
          to balance technical insight with business acumen — a rare combination
          that enabled him to transform challenges into scalable, sustainable
          solutions. Driven by a vision to create something larger than himself,
          and inspired by the lessons of nearly two decades in the service
          sector, Mr. Sharma laid the foundation for this new venture in 2025.
          This company is more than just a business entity — it is the
          embodiment of a proven track record, deep-rooted industry knowledge,
          and a passion for delivering value through innovation, discipline, and
          execution excellence. We have positioned ourselves as a multi-domain
          service provider, offering integrated solutions that span from design
          and deployment to operations and optimization. With capabilities that
          cut across sectors and functions, we are structured to support
          large-scale infrastructure projects as well as agile,
          technology-driven initiatives — all with a focus on client
          satisfaction and long-term value creation. What sets us apart is not
          just what we do, but how we do it. We believe in bringing together the
          best of people, processes, and performance. Our team is made up of
          professionals who are not only technically skilled but are also
          aligned with our core values of Trust, Respect, and Accountability —
          principles that guide every decision, every project, and every
          relationship we build. With a leadership team that understands the
          nuances of business development, strategic alliances, project
          execution, and market expansion, we are well-equipped to drive
          innovation and deliver results in an ever-evolving business landscape.
          Our approach is rooted in clarity of vision, depth of expertise, and a
          relentless focus on quality — all of which allow us to navigate
          complex environments with confidence. As a new company with a legacy
          of experience, we are committed to growing responsibly, building
          strong partnerships, and continuously raising the bar of excellence in
          everything we do. Our goal is not just to participate in the market —
          but to transform it, one successful project at a time. */}
        </p>
      </div>

      <div className={styles.AboutCompany}>
        <h2 data-aos="fade-right">HEXICOM Advantages to Customers</h2>
        <p data-aos="fade-right" className={styles.AboutCompanyPara}>
          At HEXICOM, our foremost commitment is to our customers. Every
          solution we design, every process we implement, and every project we
          deliver is guided by a single objective — to create maximum value for
          our clients. We understand the challenges businesses face in today’s
          fast-paced, multi-vendor environment, and that’s why we’ve built our
          model to deliver seamless, end-to-end solutions through a
          single-window interface. Our customers benefit from a cost-effective
          and time-efficient approach that simplifies coordination and
          accelerates delivery. By minimizing layers of hierarchy and promoting
          operational transparency, we ensure quicker decision-making, faster
          execution, and a stronger alignment with project timelines — all while
          maintaining full compliance with service-level expectations. One of
          HEXICOM’s defining strengths is our multi-skilled, adaptable
          workforce, capable of managing diverse technical and operational tasks
          across sectors. This agility allows us to reduce downtime, eliminate
          the need for multiple contractors, and provide comprehensive support
          through a unified service channel. The result is a smoother, more
          reliable experience for our clients — from initial consultation to
          post-deployment support. With a Pan-India footprint, HEXICOM delivers
          consistent service quality across regions, whether in metro cities or
          remote project sites. This reach empowers our clients to scale
          operations confidently, knowing they have a dependable partner with
          local insight and national capabilities. Ultimately, what we offer our
          customers is more than just service execution — we offer partnership,
          performance, and peace of mind. Through a blend of innovation,
          efficiency, and accountability, HEXICOM stands as a trusted ally in
          helping businesses grow, optimize, and succeed in today’s dynamic
          environment.
        </p>
      </div>
      <div className={styles.AboutCompany}>
        <h1 data-aos="fade-up">Our Mission</h1>
        <p data-aos="fade-left" className={styles.AboutCompanyPara}>
          We are committed to creating employment opportunities for individuals
          struggling with joblessness or living hand-to-mouth. As part of our
          initiative, we provide:
        </p>
        <ul className="list">
          <li>Task-based video samples and technical tutorials,</li>
          <li>Dedicated delivery coaches,</li>
          <li>Hands-on training and continuous support.</li>
        </ul>
        <p className={styles.AboutCompanyPara} data-aos="fade-right">
          This framework enables unskilled or semi-skilled individuals to gain
          the knowledge and confidence to contribute meaningfully to our
          projects. Aligned with the Skill India Movement, our mission is to
          uplift citizens, enhance well-being, and contribute to the nation's
          economic growth by empowering people through technology and training.
        </p>
        <h3 data-aos="fade-up">OUR MISSION STATEMENT</h3>
        <p data-aos="fade-up" className={styles.AboutCompanyPara2}>
          Our mission is to deliver a seamless, secure, and transparent
          experience by providing the precise quality and quantity of services
          you need—right at your fingertips. As pioneers in IoT and
          cloud-enabled solutions, we are committed to redefining service
          delivery through innovation and operational excellence To develop
          innovative SaaS- and FaaS-based mobile applications that serve
          customers across every corner of India, while empowering jobless and
          underprivileged individuals through comprehensive training, practical
          tutorials, and dedicated coaching. We strive to uplift communities and
          contribute to the nation's growth by aligning with the Skill India
          Movement to build a skilled, self-reliant workforce and promote the
          well-being of all citizens. We are a customer-centric organization. To
          enhance efficiency and responsiveness, we have eliminated traditional
          management hierarchies and adopted a flat, team-based structure. Our
          empowered project teams’ function as customer-controlled units,
          ensuring that your priorities are always front and center. With open
          communication channels and a focus on agility, our teams are designed
          to respond quickly and effectively to your needs.
        </p>
      </div>
      <div className={styles.AboutCompany}>
        <div className={styles.value}>
           <div>Our Values</div>
          
        </div>
        <div className={styles.listofvalues}>
          <ul>
            <li>◻	Hierarchy less matrix organization</li>
            <li>◻	Teams based organization driven by project needs</li>
            <li>◻	Leadership evolution</li>
            <li>◻	Informal work culture</li>
            <li>◻	Knowledge creation & sharing</li>
            <li>◻	Respect for individual</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Homepage
