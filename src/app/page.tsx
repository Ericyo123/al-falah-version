"use client";

import React from "react";
import Link from "next/link";
import styles from "./about/about.module.css";
import HeroSlider from "@/components/HeroSlider";
import RecruitmentProcess from "@/components/RecruitmentProcess";

export default function Home() {
  const [activeIndustry, setActiveIndustry] = React.useState(0);

  const companies = [
    { name: "AL NOOSY", industry: "Corporate", logo: "" },
    { name: "SHULALAIL HOTEL", industry: "Hospitality", logo: "" },
    { name: "AFIFI WOOD", industry: "Industrial", logo: "" },
    { name: "SCMC", industry: "Healthcare", logo: "" },
    { name: "AL HIJAZI RESTAURANT", industry: "Hospitality", logo: "" },
    { name: "AL HOOR MARBLE FACTORY", industry: "Industrial", logo: "" },
    { name: "JAWADHA", industry: "Corporate", logo: "/assets/images/logo_jawadha.png" },
    { name: "JALAL OTHAIBI", industry: "Corporate", logo: "" },
    { name: "NIJUMI TRANSPORT", industry: "Transport", logo: "" },
    { name: "HAFCOGLABCO", industry: "Industrial", logo: "" },
    { name: "HASSAN SHAKTHI", industry: "Construction", logo: "" },
    { name: "QANNAS", industry: "Corporate", logo: "" },
    { name: "AJWA AHERA", industry: "Corporate", logo: "" },
    { name: "KHAFJI", industry: "Industrial", logo: "" },
    { name: "YANBOO", industry: "Industrial", logo: "" },
    { name: "WHITE CLOUD ABU THURKI", industry: "Corporate", logo: "" },
    { name: "AMT", industry: "Corporate", logo: "" },
    { name: "MOHAIN COMPANY", industry: "Corporate", logo: "" },
    { name: "AL AMRY GROUP", industry: "Corporate", logo: "/assets/images/logo_al_amry.png" },
    { name: "AL DOSSARY", industry: "Industrial", logo: "/assets/images/logo_al_dossary.png" },
    { name: "AL SHEYAL", industry: "Corporate", logo: "/assets/images/logo_al_sheyal.png" },
    { name: "KH LOGISTIC", industry: "Transport", logo: "/assets/images/logo_kh.png" },
    { name: "PTL GROUP", industry: "Industrial", logo: "/assets/images/logo_ptl.png" }
  ];

  const renderCompanyLogo = (company: { name: string; industry: string; logo: string }) => {
    if (company.logo) {
      return (
        <div className="client-logo-wrapper">
          <img src={company.logo} alt={company.name} className="client-logo-img" />
        </div>
      );
    }

    switch (company.name) {
      case "SHULALAIL HOTEL":
        return (
          <div className="client-logo-wrapper" style={{ background: "#fdfaf3", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28L15 16L22 22L29 16L32 28H12Z" fill="#d4af37" />
              <circle cx="22" cy="13" r="2" fill="#d4af37" />
              <circle cx="15" cy="14" r="1.5" fill="#d4af37" />
              <circle cx="29" cy="14" r="1.5" fill="#d4af37" />
            </svg>
          </div>
        );
      case "AL HIJAZI RESTAURANT":
        return (
          <div className="client-logo-wrapper" style={{ background: "#faf2f2", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28H32V26C32 20 28 16 22 16C16 16 12 20 12 26V28Z" fill="#800020" />
              <circle cx="22" cy="13" r="2.5" fill="#800020" />
              <rect x="10" y="30" width="24" height="2" rx="1" fill="#800020" />
            </svg>
          </div>
        );
      case "SCMC":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f5fafd", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 12H26V18H32V26H26V32H18V26H12V18H18V12Z" fill="#00a896" />
              <circle cx="22" cy="22" r="14" stroke="#028090" strokeWidth="1.5" />
            </svg>
          </div>
        );
      case "AFIFI WOOD":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f3faf6", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="12" fill="#2d6a4f" />
              <path d="M22 14C22 14 16 20 16 24C16 27.3137 18.6863 30 22 30C25.3137 30 28 27.3137 28 24C28 20 22 14 22 14Z" fill="#52b788" />
            </svg>
          </div>
        );
      case "AL HOOR MARBLE FACTORY":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f0faf7", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10L34 22L22 34L10 22L22 10Z" fill="#1b4332" />
              <path d="M22 10V34" stroke="#52b788" strokeWidth="1.5" />
              <path d="M10 22H34" stroke="#52b788" strokeWidth="1.5" />
            </svg>
          </div>
        );
      case "NIJUMI TRANSPORT":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f0f4fa", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16H24L20 22H32L18 32L21 24H10L12 16Z" fill="#0056b3" />
            </svg>
          </div>
        );
      case "HASSAN SHAKTHI":
        return (
          <div className="client-logo-wrapper" style={{ background: "#fffaf0", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14H32V18L24 22L32 26V30H12V26L20 22L12 18V14Z" fill="#d97706" />
              <line x1="20" y1="14" x2="20" y2="30" stroke="#f59e0b" strokeWidth="2" />
            </svg>
          </div>
        );
      case "QANNAS":
        return (
          <div className="client-logo-wrapper" style={{ background: "#faf6f0", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 16C18 16 22 19 25 22C28 20 32 18 34 18C32 22 28 26 24 28C20 29 16 26 14 24C12 22 12 18 14 16Z" fill="#b45309" />
              <circle cx="18" cy="20" r="2" fill="#fff" />
            </svg>
          </div>
        );
      case "KHAFJI":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f0fafc", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 12 14 19.5 14 25.5C14 29.6421 17.5817 33 22 33C26.4183 33 30 29.6421 30 25.5C30 19.5 22 12 22 12Z" fill="#028090" />
              <path d="M17 28C19 30 22 31 25 29" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "YANBOO":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f0faf5", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="12" stroke="#2a9d8f" strokeWidth="2" />
              <path d="M14 24C17 21 21 21 24 24C27 27 30 23 30 23" stroke="#264653" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "AJWA AHERA":
        return (
          <div className="client-logo-wrapper" style={{ background: "#faf5f0", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 32V20M22 20C18 16 14 18 14 18M22 20C26 16 30 18 30 18M22 20C22 14 20 12 20 12M22 20C22 14 24 12 24 12" stroke="#4f772d" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "AL NOOSY":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f5f7fa", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14V22C12 27.5 16.5 32 22 32C27.5 32 32 27.5 32 22V14H12Z" fill="#1e3a8a" />
              <path d="M18 18H26V28" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );
      case "JALAL OTHAIBI":
        return (
          <div className="client-logo-wrapper" style={{ background: "#faf7f2", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="14" width="16" height="16" rx="2" stroke="#b45309" strokeWidth="2" transform="rotate(45 22 22)" />
              <circle cx="22" cy="22" r="4" fill="#b45309" />
            </svg>
          </div>
        );
      case "WHITE CLOUD ABU THURKI":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f0fafc", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 26C12.8954 26 12 25.1046 12 24C12 21.5 14 20 17 20C17.5 17.5 20 15 23 15C26.5 15 29 17.5 29 21C31 21 32 22 32 23.5C32 25 30.5 26 29 26H14Z" fill="#028090" />
            </svg>
          </div>
        );
      case "HAFCOGLABCO":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f5f7fa", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="10" stroke="#3b82f6" strokeWidth="3" />
              <path d="M22 8V12M22 32V36M8 22H12M32 22H36" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "AMT":
        return (
          <div className="client-logo-wrapper" style={{ background: "#f0fdf4", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 28L22 14L30 28" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 24H26" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "MOHAIN COMPANY":
        return (
          <div className="client-logo-wrapper" style={{ background: "#faf5ff", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="10" stroke="#8b5cf6" strokeWidth="2" />
              <circle cx="16" cy="16" r="3" fill="#8b5cf6" />
              <circle cx="28" cy="28" r="3" fill="#8b5cf6" />
            </svg>
          </div>
        );
      default:
        const initials = company.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2);
        return (
          <div className="client-logo-wrapper" style={{ background: "rgba(0, 102, 204, 0.08)", padding: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="16" stroke="var(--primary-color)" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="22" y="27" fill="var(--primary-color)" fontSize="14" fontWeight="bold" textAnchor="middle" style={{ fontFamily: "Inter, sans-serif" }}>{initials}</text>
            </svg>
          </div>
        );
    }
  };

  return (
    <>
      {/* ===== HERO SLIDER (EXECORA CARD STYLE) ===== */}
      <HeroSlider />

      {/* ===== SECTION 2: WHO WE ARE (ABOUT US) ===== */}
      <section style={{ padding: "clamp(60px, 8vw, 120px) 0 clamp(40px, 6vw, 60px)", backgroundColor: "var(--bg-color)", overflow: "hidden" }}>
        <div className="widescreen-container">
          <div className="row align-items-center">
            {/* Left Column: Corporate Content */}
            <div className="col-lg-6 mb-5 mb-lg-0 px-4 pe-lg-5 ps-lg-0 gsap-reveal-up">
              <span className="accent-pill-label" style={{ marginBottom: "16px", display: "inline-flex" }}>Who we are</span>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-1px", lineHeight: "1.2", margin: "12px 0 24px" }}>
                Sri Lanka's Premier <br />Overseas Recruitment Partner
              </h2>
              <p style={{ fontSize: "16.5px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "20px", textAlign: "left" }}>
                <strong>AL-FALAH TRAVELS & TOURS</strong> is a trusted recruitment and manpower consultancy firm approved by the Sri Lanka Bureau of Foreign Employment (<strong>SLBFE License 2888</strong>). For over two decades, we have partnered with foreign employers to bridge local talent with global career opportunities.
              </p>
              <p style={{ fontSize: "16.5px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "40px", textAlign: "left" }}>
                Our rigorous trade vetting, compliance expertise, and client-first commitment ensure a reliable and highly transparent deployment process for professional, technical, and trade categories.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-modern">Learn more about us</Link>
                <Link href="/contact" className="btn-modern-outline">Contact our team</Link>
              </div>
            </div>
            
            {/* Right Column: Office/Corporate Image */}
            <div className="col-lg-6 px-4 px-lg-0 mt-5 mt-lg-0 gsap-reveal-in">
              <div style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 51, 102, 0.08)",
                border: "1px solid rgba(0, 102, 204, 0.1)",
                height: "500px",
              }}>
                <img src="/assets/images/about_us_corporate.png" alt="Corporate Consultant Consultation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-opacity halfway divider line */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "var(--bg-color-secondary)" }}>
        <div style={{ width: "50%", height: "1px", backgroundColor: "rgba(0, 102, 204, 0.12)" }}></div>
      </div>

      <section className={styles.whyChooseUsCenter} style={{ padding: "60px 0 120px" }}>
        <div className="container">
          
          <div className={`${styles.sectionHeaderCentered} gsap-reveal-up`} style={{ marginBottom: '60px' }}>
            <span className="accent-pill-label">Why choose us</span>
            <h2 className={styles.titleAlt} style={{ fontSize: '42px', margin: '0', lineHeight: '1.2' }}>
              Why Choose Al Falah<br />Travels & Tours?
            </h2>
          </div>

          <div className="row align-items-center gsap-stagger-container">
            
            {/* Left Features */}
            <div className="col-lg-4 px-4 px-lg-0">
              <div className={`${styles.featureItemLeft} gsap-stagger-item`}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Government-approved</h4>
                  <p className={styles.featDescBox}>We are a fully licensed and Government-Approved Recruitment Agency.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-file-contract"></i></div>
              </div>
              <div className={`${styles.featureItemLeft} gsap-stagger-item`}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Fast & Transparent</h4>
                  <p className={styles.featDescBox}>Experience a fast, transparent, and hassle-free hiring process.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-bolt"></i></div>
              </div>
              <div className={`${styles.featureItemLeft} gsap-stagger-item`}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Skilled Candidates</h4>
                  <p className={styles.featDescBox}>We source highly skilled and thoroughly verified candidates for your roles.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-user-check"></i></div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-4 px-4 px-lg-0 mt-5 mt-lg-0 mb-5 mb-lg-0 gsap-stagger-item">
              <div className={styles.centerImageWrapper}>
                <img src="/assets/images/why_choose_us.png" alt="Center Human Resources" className={styles.centerImg} style={{ transform: 'none' }} />
              </div>
            </div>

            {/* Right Features */}
            <div className="col-lg-4 px-4 px-lg-0">
              <div className={`${styles.featureItemRight} gsap-stagger-item`}>
                <div className={styles.featIconBox}><i className="fas fa-hand-holding-usd"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Cost-Effective</h4>
                  <p className={styles.featDescBox}>We offer highly competitive and cost-effective recruitment packages.</p>
                </div>
              </div>
              <div className={`${styles.featureItemRight} gsap-stagger-item`}>
                <div className={styles.featIconBox}><i className="fas fa-globe-asia"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Strong Network</h4>
                  <p className={styles.featDescBox}>Benefit from our massive and strong network across the Middle East.</p>
                </div>
              </div>
              <div className={`${styles.featureItemRight} gsap-stagger-item`}>
                <div className={styles.featIconBox}><i className="fas fa-history"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Decades of Experience</h4>
                  <p className={styles.featDescBox}>Leveraging decades of extensive experience in overseas placement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SPECIALIZED INDUSTRIES (DYNAMIC BACKGROUND LIST) ===== */}
      <section style={{ position: "relative", padding: "clamp(60px, 8vw, 120px) 0", backgroundColor: "#050a11", overflow: "hidden" }}>
        
        {/* Dynamic Backgrounds */}
        {[
          { num: "01", name: "Hospitality & Service", desc: "Chefs, stewards, baristas, room attendants & drivers.", img: "industry_hospitality.png" },
          { num: "02", name: "Construction & Civil", desc: "Civil engineers, supervisors, electricians & welders.", img: "industry_construction.png" },
          { num: "03", name: "Production & Industrial", desc: "Machine operators, packers, mechanics & general labors.", img: "industry_production.png" },
          { num: "04", name: "Transport & Logistics", desc: "Heavy machine drivers, delivery riders & dispatchers.", img: "industry_transport.png" },
          { num: "05", name: "Corporate & Executive", desc: "Project engineers, estimators, accountants & admins.", img: "industry_corporate.png" },
          { num: "06", name: "Healthcare & Support", desc: "Registered nurses, clinic caregivers & nursing aides.", img: "industry_healthcare.png" }
        ].map((sec, i) => (
          <div 
            key={i}
            className={`industry-bg-img industry-bg-${sec.num}`}
            style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
              backgroundImage: `url(/assets/images/${sec.img})`,
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
            <div className="col-lg-7 px-4 px-lg-0 gsap-reveal-up">
              <span className="accent-pill-label text-white-force" style={{ marginBottom: "20px" }}>
                Sectors we serve
              </span>
              <h2 className="text-white-force" style={{ fontSize: "clamp(32px, 6vw, 46px)", fontWeight: 900, letterSpacing: "-1.5px", lineHeight: "1.1", margin: "0 0 24px" }}>
                Our Specialized <br/><span style={{ color: "var(--primary-color)" }}>Industries</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { num: "01", name: "Hospitality & Service", desc: "Chefs, stewards, baristas, room attendants & drivers.", img: "industry_hospitality.png" },
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
            <div className="col-lg-5 px-4 px-lg-0">
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
                       fontSize: "clamp(100px, 15vw, 180px)", fontWeight: 900, lineHeight: 0.8,
                       color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.05)",
                       zIndex: 0, pointerEvents: "none"
                     }}>
                       0{activeIndustry + 1}
                     </div>

                     <div style={{ position: "relative", zIndex: 1 }}>

                       
                       {/* Description */}
                       <p className="text-white-force-85 d-none d-lg-block" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "1.8", marginBottom: "24px", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
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
                               <div style={{ 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center", 
                                  width: "20px", 
                                  height: "20px", 
                                  borderRadius: "50%", 
                                  backgroundColor: "var(--primary-color)", 
                                  flexShrink: 0 
                                }}>
                                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
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
      {/* ===== SECTION 10: ACCREDITATIONS & STATS ===== */}
      <section style={{ padding: "clamp(60px, 8vw, 120px) 0", background: "linear-gradient(135deg, var(--secondary-color) 0%, #020b18 100%)", color: "#ffffff", position: "relative", overflow: "hidden" }}>
        
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
          <div className="row align-items-center justify-content-between g-5">
            
            {/* Left Side: Chairman Receiving Award */}
            <div className="col-lg-5 mb-4 mb-lg-0 px-4 px-lg-0 text-center gsap-reveal-in" style={{ position: "relative" }}>
              {/* Golden Ambient Glow behind the photo */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "110%",
                height: "110%",
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 65%)",
                zIndex: 0,
                pointerEvents: "none",
                filter: "blur(30px)"
              }}></div>

              <div style={{ 
                position: "relative", 
                zIndex: 1,
                overflow: "hidden", 
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)" 
              }}>
                <img 
                  src="/assets/images/restie.png" 
                  alt="Chairman receiving SLBFE award" 
                  style={{ width: "100%", display: "block" }} 
                />
              </div>
            </div>

            {/* Right Side: Rating & Award details */}
            <div className="col-lg-6 px-4 px-lg-0 text-center text-lg-start gsap-reveal-up">
              <span className="accent-pill-label text-white-force" style={{ display: "inline-block", marginBottom: "20px" }}>Accreditation</span>
              <h2 className="text-white-force" style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, margin: "0 0 20px", letterSpacing: "-1px" }}>SLBFE 3-Star Golden Award</h2>
              <p className="text-white-force-85" style={{ fontSize: "clamp(15px, 4vw, 16px)", marginBottom: "30px", lineHeight: "1.8" }}>
                Proud recipient of the prestigious Sri Lanka Bureau of Foreign Employment (SLBFE) 3-Star Golden Award for outstanding performance and compliance in overseas consultancy — 2022/2023.
              </p>
              
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{ gap: "24px", flexWrap: "wrap" }}>
                <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "clamp(12px, 3vw, 20px)", 
                  backgroundColor: "#ffffff", 
                  padding: "clamp(12px, 3vw, 16px) clamp(20px, 4vw, 28px)", 
                  borderRadius: "100px", 
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)", 
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  flexShrink: 0
                }}>
                  {/* Colorful Google Icon SVG */}
                  <div style={{ flexShrink: 0, width: "clamp(28px, 6vw, 36px)", height: "clamp(28px, 6vw, 36px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.14 7.09-10.36 7.09-17.65z"/>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                    </svg>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "clamp(16px, 4vw, 19px)", fontWeight: 900, color: "#202124", lineHeight: 1 }}>4.8</span>
                      <div style={{ color: "#FBBC04", fontSize: "clamp(14px, 4vw, 19px)", letterSpacing: "2px", lineHeight: 1 }}>
                        ★★★★★
                      </div>
                    </div>
                    <span style={{ fontSize: "clamp(12px, 3vw, 14px)", fontWeight: 600, color: "#5f6368" }}>Google Reviewed Agency</span>
                  </div>
                </div>

                {/* Standalone Award Image aligned side-by-side */}
                <div style={{ width: "90px", flexShrink: 0 }}>
                  <img 
                    src="/assets/images/background_new.png" 
                    alt="3-Star Golden Award Trophy" 
                    style={{ 
                      width: "100%", 
                      height: "auto",
                      filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.35))"
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: CLIENT NETWORK & MARQUEE ===== */}
      <section style={{ padding: "clamp(60px, 8vw, 120px) 0 clamp(140px, 12vw, 220px)", backgroundColor: "var(--bg-color-secondary)", overflow: "hidden" }}>
        <div className="widescreen-container gsap-reveal-up" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="accent-pill-label">Our client network</span>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, marginBottom: "20px", lineHeight: "1.2", letterSpacing: "-1px" }}>
            Connecting across <span className="demo3-highlight">Middle East</span> & Beyond
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto" }}>
            We serve leading organizations across Saudi Arabia, UAE, Qatar, Kuwait, and more. Our network consists of esteemed employers in construction, engineering, hospitality, and administrative sectors.
          </p>
        </div>

        {/* Marquee Track 1 */}
        <div className="marquee-container" style={{ paddingTop: "0.5rem" }}>
          <div className="marquee-content">
            {companies.slice(0, Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={idx} className="client-card-modern">
                {renderCompanyLogo(company)}
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="marquee-content" aria-hidden="true">
            {companies.slice(0, Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={`dup-${idx}`} className="client-card-modern">
                {renderCompanyLogo(company)}
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Track 2 (Reverse direction) */}
        <div className="marquee-container" style={{ paddingBottom: "0.5rem", marginTop: "-0.4rem" }}>
          <div className="marquee-content" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
            {companies.slice(Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={idx} className="client-card-modern">
                {renderCompanyLogo(company)}
                <div className="client-info-modern">
                  <h4 className="client-name-modern">{company.name}</h4>
                  <div className="client-category-modern">{company.industry}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="marquee-content" aria-hidden="true" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
            {companies.slice(Math.ceil(companies.length / 2)).map((company, idx) => (
              <div key={`dup2-${idx}`} className="client-card-modern">
                {renderCompanyLogo(company)}
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
