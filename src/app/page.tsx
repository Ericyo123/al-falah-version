"use client";

import React from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import RecruitmentProcess from "@/components/RecruitmentProcess";

export default function Home() {
  const [activeIndustry, setActiveIndustry] = React.useState(0);

  const companies = [
    { name: "AL NOOSY", industry: "Corporate" },
    { name: "SHULALAIL HOTEL", industry: "Hospitality" },
    { name: "AFIFI WOOD", industry: "Industrial" },
    { name: "SCMC", industry: "Healthcare" },
    { name: "AL HIJAZI RESTAURANT", industry: "Hospitality" },
    { name: "AL HOOR MARBLE FACTORY", industry: "Industrial" },
    { name: "JAWADHA", industry: "Corporate" },
    { name: "JALAL OTHAIBI", industry: "Corporate" },
    { name: "NIJUMI TRANSPORT", industry: "Transport" },
    { name: "HAFCOGLABCO", industry: "Industrial" },
    { name: "HASSAN SHAKTHI", industry: "Construction" },
    { name: "QANNAS", industry: "Corporate" },
    { name: "AJWA AHERA", industry: "Corporate" },
    { name: "KHAFJI", industry: "Industrial" },
    { name: "YANBOO", industry: "Industrial" },
    { name: "WHITE CLOUD ABU THURKI", industry: "Corporate" },
    { name: "AMT", industry: "Corporate" },
    { name: "MOHAIN COMPANY", industry: "Corporate" }
  ];

  const renderIndustryIcon = (industry: string) => {
    const main = "var(--primary-color)";
    const sec = "rgba(0, 102, 204, 0.15)";
    switch (industry) {
      case "Hospitality":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2v7c0 2.21 1.79 4 4 4h0c2.21 0 4-1.79 4-4V2" stroke={main} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 2v20" stroke={main} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 15V2v13z" fill={sec}/>
            <path d="M21 15c0-4.42-3.58-8-8-8v15h8v-7z" stroke={main} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "Industrial":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20h20" stroke={main} strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 20V8l7-3v15" fill={sec} stroke={main} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M11 20V5l5 4v11" fill={sec} stroke={main} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M16 20v-8l4 3v5" fill={sec} stroke={main} strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        );
      case "Transport":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="14" height="12" rx="1" fill={sec} stroke={main} strokeWidth="2"/>
            <path d="M16 9h3.8a2 2 0 0 1 1.79 1.1l1.2 2.4a2 2 0 0 1 .21.9V17h-7V9z" fill={sec} stroke={main} strokeWidth="2"/>
            <circle cx="6" cy="17" r="2" stroke={main} strokeWidth="2"/>
            <circle cx="18" cy="17" r="2" stroke={main} strokeWidth="2"/>
          </svg>
        );
      case "Healthcare":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" fill={sec} stroke={main} strokeWidth="2"/>
            <path d="M12 8v8M8 12h8" stroke={main} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "Construction":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22h20M12 2v20M4 12h8M4 17h8M12 10h8M12 15h8M12 5h8" stroke={main} strokeWidth="2" strokeLinecap="round"/>
            <rect x="4" y="2" width="8" height="20" fill={sec}/>
          </svg>
        );
      default: // Corporate
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="2" fill={sec} stroke={main} strokeWidth="2"/>
            <path d="M12 4v16M4 12h16" stroke={main} strokeWidth="2"/>
          </svg>
        );
    }
  };

  return (
    <>
      {/* ===== HERO SLIDER (EXECORA CARD STYLE) ===== */}
      <HeroSlider />

      {/* ===== SECTION 2: WHO WE ARE (ABOUT US) ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color)" }}>
        <div className="widescreen-container">
          <div className="row align-items-center">
            {/* Left Column: Corporate Content */}
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ paddingRight: "40px" }}>
              <span className="accent-pill-label" style={{ marginBottom: "16px", display: "inline-flex" }}>Who We Are</span>
              <h2 style={{ fontSize: "40px", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-1px", lineHeight: "1.2", margin: "12px 0 24px" }}>
                Sri Lanka's Premier <br />Overseas Recruitment Partner
              </h2>
              <p style={{ fontSize: "16.5px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "20px", textAlign: "justify" }}>
                <strong>AL-FALAH TRAVELS & TOURS</strong> is a trusted recruitment and manpower consultancy firm approved by the Sri Lanka Bureau of Foreign Employment (<strong>SLBFE License 2888</strong>). For over two decades, we have partnered with foreign employers to bridge local talent with global career opportunities.
              </p>
              <p style={{ fontSize: "16.5px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "40px", textAlign: "justify" }}>
                Our rigorous trade vetting, compliance expertise, and client-first commitment ensure a reliable and highly transparent deployment process for professional, technical, and trade categories.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-modern">Learn More About Us</Link>
                <Link href="/contact" className="btn-modern-outline">Contact Our Team</Link>
              </div>
            </div>
            
            {/* Right Column: Office/Corporate Image & Features */}
            <div className="col-lg-6">
              <div style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 51, 102, 0.08)",
                border: "1px solid rgba(0, 102, 204, 0.1)",
                height: "360px",
                marginBottom: "36px"
              }}>
                <img src="/assets/images/about_us_corporate.png" alt="Corporate Consultant Consultation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                
                {/* Floating badge */}
                <div style={{
                  position: "absolute", bottom: "24px", left: "24px",
                  backgroundColor: "rgba(0, 102, 204, 0.95)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  padding: "16px 24px", color: "#fff",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <div style={{ fontSize: "28px", fontWeight: 800, lineHeight: 1 }}>2888</div>
                  <div style={{ fontSize: "12px", fontWeight: 600, opacity: 0.9, marginTop: "4px" }}>SLBFE Govt. License</div>
                </div>
              </div>

              {/* Vetted parameters */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    backgroundColor: "rgba(0,102,204,0.08)", color: "var(--primary-color)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "13px", flexShrink: 0, marginTop: "2px"
                  }}>✓</div>
                  <div>
                    <h5 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>SLBFE Registered 2888</h5>
                    <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "2px 0 0" }}>100% compliant recruitment processes.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    backgroundColor: "rgba(0,102,204,0.08)", color: "var(--primary-color)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "13px", flexShrink: 0, marginTop: "2px"
                  }}>✓</div>
                  <div>
                    <h5 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>25+ Years of Trust</h5>
                    <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "2px 0 0" }}>Decades of direct partner relationships.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    backgroundColor: "rgba(0,102,204,0.08)", color: "var(--primary-color)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "13px", flexShrink: 0, marginTop: "2px"
                  }}>✓</div>
                  <div>
                    <h5 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>3,000+ Candidates Placed</h5>
                    <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "2px 0 0" }}>Broad international placement network.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    backgroundColor: "rgba(0,102,204,0.08)", color: "var(--primary-color)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "13px", flexShrink: 0, marginTop: "2px"
                  }}>✓</div>
                  <div>
                    <h5 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>Vetted & Verified Vocation</h5>
                    <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "2px 0 0" }}>Rigorous trade and safety testing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-opacity halfway divider line */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "var(--bg-color-secondary)" }}>
        <div style={{ width: "50%", height: "1px", backgroundColor: "rgba(0, 102, 204, 0.12)" }}></div>
      </div>

      {/* ===== WHY CHOOSE US (IMAGE BENTO GRID) ===== */}
      <section style={{ padding: "100px 0 160px", backgroundColor: "var(--bg-color-secondary)" }}>
        <div className="widescreen-container">
          <div className="bento-grid">

            {/* Card 1: Intro Text Block */}
            <div className="bento-item text-block">
              <span className="accent-pill-label" style={{ marginBottom: "16px", display: "inline-flex" }}>Why Choose Us</span>
              <h2 style={{ fontSize: "40px", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-1px", lineHeight: "1.15", margin: "12px 0 20px" }}>
                The Al Falah <br />Difference.
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7", margin: 0 }}>
                Sri Lanka&apos;s premier government-approved manpower recruitment consultant. We bridge aspirations with professional excellence and total transparency.
              </p>
            </div>

            {/* Card 2: Rigorous Screening — Image Card */}
            <div className="bento-item image-bg">
              <img src="/assets/images/bento_screening.png" alt="Rigorous Screening" className="bento-image" />
              <div className="bento-overlay"></div>
              <div className="bento-content-overlay">
                <h3 className="bento-title">Rigorous Screening</h3>
                <p className="bento-desc">Trade tests, medical clearances, and professional interviews ensure every candidate is perfectly qualified.</p>
              </div>
            </div>

            {/* Card 3: GCC Partnerships — Tall Image Card */}
            <div className="bento-item image-bg row-span-2">
              <img src="/assets/images/bento_gcc.png" alt="GCC Nation Partnerships" className="bento-image" />
              <div className="bento-overlay dark-overlay"></div>
              <div className="bento-content-overlay">
                <h3 className="bento-title">KSA, UAE, Qatar &amp; Kuwait</h3>
                <p className="bento-desc">Direct recruitment partnerships with blue-chip companies and top-tier industrial corporations across 6 GCC nations.</p>
              </div>
            </div>

            {/* Card 4: Zero Delays — Image Card */}
            <div className="bento-item image-bg">
              <img src="/assets/images/zerodelays.jpg" alt="Zero Delays Sourcing" className="bento-image" />
              <div className="bento-overlay"></div>
              <div className="bento-content-overlay">
                <h3 className="bento-title">Zero Delays Sourcing</h3>
                <p className="bento-desc">Optimized end-to-end processing and flight mobilization that keeps deployment times to an absolute minimum.</p>
              </div>
            </div>

            {/* Card 5: SLBFE Licensed — Image Card */}
            <div className="bento-item image-bg">
              <img src="/assets/images/bento_compliance.png" alt="SLBFE Licensed" className="bento-image" />
              <div className="bento-overlay"></div>
              <div className="bento-content-overlay">
                <h3 className="bento-title">SLBFE License 2888</h3>
                <p className="bento-desc">Fully government-approved. Proud recipient of the SLBFE 3-Star Golden Award for compliance and excellence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SPECIALIZED INDUSTRIES (DYNAMIC BACKGROUND LIST) ===== */}
      <section style={{ position: "relative", padding: "120px 0 100px", backgroundColor: "#050a11", overflow: "hidden" }}>
        
        {/* Dynamic Backgrounds */}
        {[
          { num: "01", name: "Hospitality & Service", desc: "Chefs, stewards, baristas, room attendants & drivers.", img: "industry_hospitality.avif" },
          { num: "02", name: "Construction & Civil", desc: "Civil engineers, supervisors, electricians & welders.", img: "industry_construction.png" },
          { num: "03", name: "Production & Industrial", desc: "Machine operators, packers, mechanics & general labors.", img: "industry_production.png" },
          { num: "04", name: "Transport & Logistics", desc: "Heavy machine drivers, delivery riders & dispatchers.", img: "industry_transport.png" },
          { num: "05", name: "Corporate & Executive", desc: "Project engineers, estimators, accountants & admins.", img: "industry_corporate.png" },
          { num: "06", name: "Healthcare & Support", desc: "Registered nurses, clinic caregivers & nursing aides.", img: "industry_healthcare.png" }
        ].map((sec, i) => (
          <div 
            key={i}
            style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
              backgroundImage: `url(/assets/images/${sec.img})`,
              backgroundSize: "cover", backgroundPosition: "center",
              opacity: activeIndustry === i ? 1 : 0,
              transform: activeIndustry === i ? "scale(1)" : "scale(1.05)",
              transition: "opacity 0.8s ease, transform 1.5s ease",
              zIndex: 0
            }}
          ></div>
        ))}

        {/* Dark Overlay for Text Readability */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "linear-gradient(to right, rgba(5,10,17,0.85) 0%, rgba(5,10,17,0.5) 40%, rgba(5,10,17,0.2) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="row align-items-center">
            
            {/* Left Column: Massive Typography List */}
            <div className="col-lg-7">
              <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px", display: "block" }}>
                Sectors We Serve
              </span>
              <h2 className="text-white-force" style={{ fontSize: "46px", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: "1.1", margin: "0 0 24px" }}>
                Our Specialized <br/><span style={{ color: "var(--primary-color)" }}>Industries</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { num: "01", name: "Hospitality & Service", desc: "Chefs, stewards, baristas, room attendants & drivers.", img: "industry_hospitality.avif" },
                  { num: "02", name: "Construction & Civil", desc: "Civil engineers, supervisors, electricians & welders.", img: "industry_construction.png" },
                  { num: "03", name: "Production & Industrial", desc: "Machine operators, packers, mechanics & general labors.", img: "industry_production.png" },
                  { num: "04", name: "Transport & Logistics", desc: "Heavy machine drivers, delivery riders & dispatchers.", img: "industry_transport.png" },
                  { num: "05", name: "Corporate & Executive", desc: "Project engineers, estimators, accountants & admins.", img: "industry_corporate.png" },
                  { num: "06", name: "Healthcare & Support", desc: "Registered nurses, clinic caregivers & nursing aides.", img: "industry_healthcare.png" }
                ].map((sec, i) => (
                  <div 
                    key={i}
                    onMouseEnter={() => setActiveIndustry(i)}
                    onClick={() => setActiveIndustry(i)}
                    style={{
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "20px",
                      opacity: activeIndustry === i ? 1 : 0.4,
                      transform: activeIndustry === i ? "translateX(20px)" : "translateX(0)",
                      transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
                    }}
                  >
                    <span className="text-white-force" style={{ fontSize: "16px", fontWeight: 600, transition: "color 0.4s ease", color: activeIndustry === i ? "var(--primary-color)" : "" }}>
                      {sec.num}
                    </span>
                    <div>
                      <h3 className="text-white-force" style={{ fontSize: "24px", fontWeight: 600, margin: "0", letterSpacing: "-0.5px" }}>
                        {sec.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Description Panel */}
            <div className="col-lg-5">
               {(() => {
                 const current = [
                  {
                    name: "Hospitality & Service",
                    longDesc: "Al Falah provides world-class staffing solutions for luxury hotels, resorts, and fine dining establishments globally. Our candidates undergo rigorous service training and background verification to ensure 5-star standard delivery.",
                    roles: ["Executive Chefs", "F&B Managers", "Baristas", "Housekeeping Staff"]
                  },
                  {
                    name: "Construction & Civil",
                    longDesc: "We partner with leading global contractors to deploy highly skilled technical manpower for mega-infrastructure projects. Every candidate is trade-tested to meet strict international safety and engineering standards.",
                    roles: ["Civil Engineers", "Site Supervisors", "Certified Welders", "Heavy Equipment Operators"]
                  },
                  {
                    name: "Production & Industrial",
                    longDesc: "From high-tech manufacturing to heavy industrial processing, we supply reliable, efficient, and safety-conscious personnel trained to operate in fast-paced production environments.",
                    roles: ["Machine Operators", "Industrial Mechanics", "QA Inspectors", "Assembly Line Technicians"]
                  },
                  {
                    name: "Transport & Logistics",
                    longDesc: "Keep your global supply chain moving efficiently with our vetted logistics professionals. We specialize in sourcing licensed drivers, dispatchers, and warehouse personnel familiar with modern inventory systems.",
                    roles: ["Heavy Duty Drivers", "Logistics Coordinators", "Warehouse Managers", "Delivery Fleets"]
                  },
                  {
                    name: "Corporate & Executive",
                    longDesc: "Secure top-tier talent for your boardroom and back-office. We headhunt experienced professionals who bring strategic leadership, financial acumen, and administrative excellence to your corporate headquarters.",
                    roles: ["Project Managers", "Financial Accountants", "HR Executives", "Administrative Leads"]
                  },
                  {
                    name: "Healthcare & Support",
                    longDesc: "Delivering compassionate and certified healthcare professionals to medical facilities worldwide. Our rigorous vetting ensures all medical staff meet international licensing and ethical care standards.",
                    roles: ["Registered Nurses", "Clinical Caregivers", "Medical Technicians", "Hospital Admins"]
                  }
                 ][activeIndustry];

                 return (
                   <div className="industry-panel-wrapper">
                     
                     {/* Watermark Number */}
                     <div style={{
                       position: "absolute", top: "-40px", right: "0",
                       fontSize: "180px", fontWeight: 900, lineHeight: 0.8,
                       color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.05)",
                       zIndex: 0, pointerEvents: "none"
                     }}>
                       0{activeIndustry + 1}
                     </div>

                     <div style={{ position: "relative", zIndex: 1 }}>

                       
                       {/* Description - Thinner, more elegant */}
                       <p className="text-white-force-85" style={{ fontSize: "16px", fontWeight: 300, lineHeight: "1.8", marginBottom: "24px", fontStyle: "italic" }}>
                         "{current.longDesc}"
                       </p>
      
                       {/* Premium Roles List */}
                       <div style={{ marginBottom: "30px" }}>
                         <span className="text-white-force-75" style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                           Highly Sought Roles
                         </span>
                         
                         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                           {current.roles.map((role, idx) => (
                             <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                               <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(0,102,204,0.15)", border: "1px solid rgba(0,102,204,0.3)" }}>
                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                   <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                               </div>
                               <span className="text-white-force" style={{ fontSize: "15px", fontWeight: 600 }}>{role}</span>
                             </div>
                           ))}
                         </div>
                       </div>
      
                       {/* Creative CTAs */}
                       <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                         
                         {/* Employer CTA */}
                         <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                           <Link href="/contact" style={{
                             display: "flex", alignItems: "center", justifyContent: "center",
                             width: "50px", height: "50px", borderRadius: "50%",
                             backgroundColor: "var(--primary-color)", color: "#ffffff",
                             transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                             boxShadow: "0 10px 30px rgba(0, 102, 204, 0.3)"
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "scale(1.1)";
                             e.currentTarget.style.backgroundColor = "#ffffff";
                             e.currentTarget.style.color = "var(--primary-color)";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "scale(1)";
                             e.currentTarget.style.backgroundColor = "var(--primary-color)";
                             e.currentTarget.style.color = "#ffffff";
                           }}
                           >
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                               <line x1="5" y1="12" x2="19" y2="12"></line>
                               <polyline points="12 5 19 12 12 19"></polyline>
                             </svg>
                           </Link>
                           <div style={{ display: "flex", flexDirection: "column" }}>
                             <span className="text-white-force" style={{ fontSize: "15px", fontWeight: 800 }}>Start Hiring</span>
                             <span className="text-white-force-75" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>For Employers</span>
                           </div>
                         </div>

                         {/* Candidate CTA */}
                         <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                           <Link href="/contact" style={{
                             display: "flex", alignItems: "center", justifyContent: "center",
                             width: "50px", height: "50px", borderRadius: "50%",
                             backgroundColor: "transparent", color: "#ffffff", border: "2px solid rgba(255,255,255,0.2)",
                             transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "scale(1.1)";
                             e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                             e.currentTarget.style.borderColor = "#ffffff";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "scale(1)";
                             e.currentTarget.style.backgroundColor = "transparent";
                             e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                           }}
                           >
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                               <polyline points="14 2 14 8 20 8"></polyline>
                               <line x1="16" y1="13" x2="8" y2="13"></line>
                               <line x1="16" y1="17" x2="8" y2="17"></line>
                               <polyline points="10 9 9 9 8 9"></polyline>
                             </svg>
                           </Link>
                           <div style={{ display: "flex", flexDirection: "column" }}>
                             <span className="text-white-force" style={{ fontSize: "15px", fontWeight: 800 }}>Apply Now</span>
                             <span className="text-white-force-75" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>For Candidates</span>
                           </div>
                         </div>

                       </div>
                     </div>
                   </div>
                 );
               })()}
            </div>

          </div>
        </div>
      </section>

      {/* ===== RECRUITMENT PROCESS TIMELINE (STAIRCASE timeline) ===== */}
      <RecruitmentProcess />

      {/* ===== SECTION 10: ACCREDITATIONS & STATS ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--secondary-color)", color: "#ffffff", position: "relative", overflow: "hidden" }}>
        
        {/* Decorative Background Elements & Geometric Shapes */}
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50%", height: "150%", background: "radial-gradient(ellipse at center, rgba(0, 102, 204, 0.15) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "40%", height: "100%", background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        
        {/* Top-right large circle outline */}
        <svg style={{ position: "absolute", top: "-15%", right: "-5%", width: "450px", height: "450px", opacity: 0.03, pointerEvents: "none" }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
        
        {/* Bottom-left dotted grid */}
        <div style={{
          position: "absolute", bottom: "5%", left: "3%", width: "180px", height: "180px", opacity: 0.04, pointerEvents: "none",
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "24px 24px"
        }}></div>
        
        {/* Center floating triangle */}
        <svg style={{ position: "absolute", top: "30%", left: "45%", width: "120px", height: "120px", opacity: 0.02, pointerEvents: "none", transform: "rotate(15deg)" }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="#ffffff" strokeWidth="2.5" />
        </svg>
        
        {/* Right side angled lines */}
        <svg style={{ position: "absolute", bottom: "10%", right: "35%", width: "160px", height: "160px", opacity: 0.03, pointerEvents: "none", transform: "rotate(-30deg)" }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="20" x2="90" y2="20" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="40" x2="70" y2="40" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="60" x2="80" y2="60" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="widescreen-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center">
            {/* Left Side: Rating & Award details */}
            <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
              <span className="accent-pill-label text-white-force" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", backdropFilter: "blur(4px)" }}>Accreditation</span>
              <h2 className="text-white-force" style={{ fontSize: "40px", fontWeight: 900, margin: "15px 0 20px", letterSpacing: "-1px" }}>SLBFE 3-Star Golden Award</h2>
              <p className="text-white-force-85" style={{ fontSize: "16px", marginBottom: "30px", lineHeight: "1.8" }}>
                Proud recipient of the prestigious Sri Lanka Bureau of Foreign Employment (SLBFE) 3-Star Golden Award for outstanding performance and compliance in overseas consultancy — 2022/2023.
              </p>
              
              <div style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "20px", 
                backgroundColor: "#ffffff", 
                padding: "16px 28px", 
                borderRadius: "100px", 
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)", 
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                marginTop: "10px"
              }}>
                {/* Colorful Google Icon SVG */}
                <div style={{ flexShrink: 0, width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.14 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "19px", fontWeight: 900, color: "#202124", lineHeight: 1 }}>4.8</span>
                    <div style={{ color: "#FBBC04", fontSize: "19px", letterSpacing: "2px", lineHeight: 1 }}>
                      ★★★★★
                    </div>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#5f6368" }}>Google Reviewed Agency</span>
                </div>
              </div>
            </div>

            {/* Right Side: Key Placement Numbers (Stats) */}
            <div className="col-lg-7 ps-lg-5">
              <div className="row text-center g-4">
                {[
                  { value: "1,200+", label: "Candidates Placed" },
                  { value: "350+", label: "Partner Companies" },
                  { value: "12+", label: "Industries Served" },
                  { value: "98%", label: "Retention Rate" },
                ].map((stat, i) => (
                  <div key={i} className="col-sm-6">
                    <div style={{ 
                      padding: "45px 20px", 
                      borderRadius: "20px", 
                      backgroundColor: "rgba(255,255,255,0.06)", 
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                      backdropFilter: "blur(4px)",
                      transition: "transform 0.3s ease, background-color 0.3s ease",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.09)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                    }}>
                      <h3 className="text-white-force" style={{ fontSize: "48px", fontWeight: 900, margin: "0 0 10px" }}>{stat.value}</h3>
                      <p className="text-white-force-85" style={{ fontSize: "16px", fontWeight: 500, margin: 0 }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: CLIENT NETWORK & MARQUEE ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color-secondary)", overflow: "hidden" }}>
        <div className="widescreen-container" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="accent-pill-label">Our Client Network</span>
          <h2 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "20px", lineHeight: "1.2", letterSpacing: "-1px" }}>
            Connecting across <span className="demo3-highlight">Middle East</span> & Beyond
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto" }}>
            We serve leading organizations across Saudi Arabia, UAE, Qatar, Kuwait, and more. Our network consists of esteemed employers in construction, engineering, hospitality, and administrative sectors.
          </p>
        </div>

        {/* Marquee Track 1 */}
        <div className="marquee-container" style={{ paddingTop: "1rem" }}>
          <div className="marquee-content">
            {companies.slice(0, Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={idx} className="client-card-modern">
                <div className="client-logo-placeholder" style={{ background: `linear-gradient(135deg, hsl(${(idx * 40) % 360}, 10%, 95%), #fff)` }}>
                  {renderIndustryIcon(company.industry)}
                </div>
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {companies.slice(0, Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={`dup-${idx}`} className="client-card-modern">
                <div className="client-logo-placeholder" style={{ background: `linear-gradient(135deg, hsl(${(idx * 40) % 360}, 10%, 95%), #fff)` }}>
                  {renderIndustryIcon(company.industry)}
                </div>
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Track 2 (Reverse direction) */}
        <div className="marquee-container" style={{ paddingBottom: "1rem", marginTop: "-1rem" }}>
          <div className="marquee-content" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
            {companies.slice(Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={idx} className="client-card-modern">
                <div className="client-logo-placeholder" style={{ background: `linear-gradient(135deg, hsl(${((idx + 10) * 40) % 360}, 10%, 95%), #fff)` }}>
                  {renderIndustryIcon(company.industry)}
                </div>
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {companies.slice(Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={`dup2-${idx}`} className="client-card-modern">
                <div className="client-logo-placeholder" style={{ background: `linear-gradient(135deg, hsl(${((idx + 10) * 40) % 360}, 10%, 95%), #fff)` }}>
                  {renderIndustryIcon(company.industry)}
                </div>
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
