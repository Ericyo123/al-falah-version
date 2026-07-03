"use client";

import React from "react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import RecruitmentProcess from "@/components/RecruitmentProcess";

export default function Home() {
  const companies = [
    "AL NOOSY", "SHULALAIL HOTEL", "AFIFI WOOD", "SCMC",
    "AL HIJAZI RESTAURANT", "AL HOOR MARBLE FACTORY", "JAWADHA", "JALAL OTHAIBI",
    "NIJUMI TRANSPORT", "HAFCOGLABCO", "HASSAN SHAKTHI", "QANNAS",
    "AJWA AHERA", "KHAFJI", "YANBOO", "WHITE CLOUD ABU THURKI",
    "AMT", "MOHAIN COMPANY"
  ];

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
              <p style={{ fontSize: "16.5px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "20px" }}>
                <strong>AL-FALAH TRAVELS & TOURS</strong> is a trusted recruitment and manpower consultancy firm approved by the Sri Lanka Bureau of Foreign Employment (<strong>SLBFE License 2888</strong>). For over two decades, we have partnered with foreign employers to bridge local talent with global career opportunities.
              </p>
              <p style={{ fontSize: "16.5px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "30px" }}>
                Our rigorous trade vetting, compliance expertise, and client-first commitment ensure a reliable and highly transparent deployment process for professional, technical, and trade categories.
              </p>
              
              {/* Vetted parameters */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "36px" }}>
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

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-modern">Learn More About Us</Link>
                <Link href="/contact" className="btn-modern-outline">Contact Our Team</Link>
              </div>
            </div>
            
            {/* Right Column: Office/Corporate Image */}
            <div className="col-lg-6">
              <div style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 51, 102, 0.08)",
                border: "1px solid rgba(0, 102, 204, 0.1)",
                height: "480px"
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
            </div>
          </div>
        </div>
      </section>

      {/* Low-opacity halfway divider line */}
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "var(--bg-color)" }}>
        <div style={{ width: "50%", height: "1px", backgroundColor: "rgba(0, 102, 204, 0.12)" }}></div>
      </div>

      {/* ===== WHY CHOOSE US (BENTO GRID LAYOUT) ===== */}
      <section style={{ padding: "100px 0 80px", backgroundColor: "var(--bg-color)" }}>
        <div className="widescreen-container">
          <div className="bento-grid">
            {/* Box 1: Why Choose Us Text Block */}
            <div className="bento-item text-block">
              <span className="accent-pill-label" style={{ marginBottom: "16px", display: "inline-flex" }}>Why Choose Us</span>
              <h2 style={{ fontSize: "40px", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-1px", lineHeight: "1.15", margin: "12px 0 20px" }}>
                Why Choose <br />Al Falah?
              </h2>
              <p className="bento-desc" style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                We are Sri Lanka’s premier government-approved manpower recruitment consultant (SLBFE License 2888). We bridge aspirations with professional excellence and transparency.
              </p>
            </div>

            {/* Box 2: Warm Beige - Vetted & Verified */}
            <div className="bento-item warm-beige">
              <h4 className="bento-header-text">Vetted & Verified</h4>
              <p className="bento-desc" style={{ color: "var(--text-secondary)" }}>
                Rigorous trade tests, medical clearances, and professional interviews ensure that every single candidate is perfectly qualified and ready.
              </p>
            </div>

            {/* Box 3: Cool Grey - Decades of Trust */}
            <div className="bento-item cool-grey">
              <h4 className="bento-header-text">Decades of Trust</h4>
              <p className="bento-desc" style={{ color: "var(--text-secondary)" }}>
                Over 25 years of compliant recruitment across GCC nations. Built on absolute transparency, zero hidden charges, and legal integrity.
              </p>
            </div>

            {/* Box 4: Span 2 - Global Network */}
            <div className="bento-item image-bg col-span-2">
              <img 
                src="/assets/images/global_network_accent.png" 
                alt="Global Network" 
                className="bento-image"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content-overlay">
                <span className="bento-badge">Global Network</span>
                <div>
                  <h3 className="bento-title">KSA, UAE, Qatar & Kuwait Partnerships</h3>
                  <p className="bento-desc">
                    Direct recruitment partnerships with blue-chip companies, leading contractors, and top-tier industrial corporations.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 5: Span 1 - Deployment Speed */}
            <div className="bento-item image-bg">
              <img 
                src="/assets/images/fast_sourcing_accent.png" 
                alt="Deployment Speed" 
                className="bento-image"
              />
              <div className="bento-overlay"></div>
              <div className="bento-content-overlay">
                <span className="bento-badge">Deployment Speed</span>
                <div>
                  <h3 className="bento-title">Zero Delays Sourcing</h3>
                  <p className="bento-desc">
                    Optimized end-to-end processing and flight mobilization that keeps deployment times to a absolute minimum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SPECIALIZED INDUSTRIES ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color-secondary)" }}>
        <div className="widescreen-container">
          <div className="row align-items-center">
            {/* Left Column: Image with Industry Collages */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 51, 102, 0.08)",
                border: "1px solid rgba(0, 102, 204, 0.1)",
                height: "560px"
              }}>
                <img src="/assets/images/specialized_industries_banner.png" alt="Our Specialized Manpower Sectors" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, width: "100%", height: "100%",
                  background: "linear-gradient(to top, rgba(0, 51, 102, 0.8) 0%, rgba(0, 51, 102, 0.15) 100%)",
                  pointerEvents: "none"
                }}></div>
                <div style={{
                  position: "absolute", bottom: "36px", left: "36px", right: "36px", color: "#fff"
                }}>
                  <span className="accent-pill-label" style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", marginBottom: "12px", display: "inline-flex" }}>Globally Vetted</span>
                  <h3 style={{ fontSize: "28px", fontWeight: 800, margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.2)", color: "#fff" }}>Specialized Talents</h3>
                  <p style={{ fontSize: "14.5px", opacity: 0.9, marginTop: "8px", margin: "8px 0 0" }}>Deploying qualified workers aligned with international standards.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Typography-driven Clean Sectors list (No Clip-Art Icons) */}
            <div className="col-lg-7" style={{ paddingLeft: "40px" }}>
              <span className="accent-pill-label" style={{ marginBottom: "16px", display: "inline-flex" }}>Sectors We Serve</span>
              <h2 style={{ fontSize: "40px", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-1px", lineHeight: "1.2", margin: "12px 0 20px" }}>
                Our Specialized Industries
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "36px", lineHeight: "1.8" }}>
                We supply vetted, trade-tested personnel to match the diverse demands of global industries. Our candidates undergo rigorous compliance checks to meet exact project guidelines.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                {[
                  { num: "01", name: "Hospitality & Service", desc: "Chefs, stewards, baristas, room attendants & drivers." },
                  { num: "02", name: "Construction & Civil", desc: "Civil engineers, supervisors, electricians & welders." },
                  { num: "03", name: "Production & Industrial", desc: "Machine operators, packers, mechanics & general labors." },
                  { num: "04", name: "Transport & Logistics", desc: "Heavy machine drivers, delivery riders & dispatchers." },
                  { num: "05", name: "Corporate & Executive", desc: "Project engineers, estimators, accountants & admins." },
                  { num: "06", name: "Healthcare & Support", desc: "Registered nurses, clinic caregivers & nursing aides." }
                ].map((sec, i) => (
                  <div key={i} className="industry-text-block">
                    <div style={{
                      fontSize: "13px", fontWeight: 800, color: "var(--primary-color)",
                      backgroundColor: "rgba(0, 102, 204, 0.06)",
                      display: "inline-flex", padding: "4px 8px", borderRadius: "6px",
                      marginBottom: "12px", letterSpacing: "1px"
                    }}>{sec.num}</div>
                    <h4 style={{ fontSize: "17px", fontWeight: 800, margin: "0 0 6px", color: "var(--text-primary)" }}>{sec.name}</h4>
                    <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", margin: 0, lineHeight: "1.5" }}>{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECRUITMENT PROCESS TIMELINE (STAIRCASE timeline) ===== */}
      <RecruitmentProcess />

      {/* ===== SECTION 9: CLIENT NETWORK & ORBIT ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color-secondary)", overflow: "hidden" }}>
        <div className="widescreen-container">
          <div className="row align-items-center">
            {/* Left Column: Heading and Network text */}
            <div className="col-lg-6">
              <span className="accent-pill-label">Our Client Network</span>
              <h2 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "20px", lineHeight: "1.2", letterSpacing: "-1px" }}>
                Connecting across <span className="demo3-highlight">Middle East</span> & Beyond
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "30px" }}>
                We serve leading organizations across Saudi Arabia, UAE, Qatar, Kuwait, and more. Our network consists of esteemed employers in construction, engineering, hospitality, and administrative sectors.
              </p>
              
              {/* Grid of partner companies list */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "30px" }}>
                {companies.slice(0, 10).map((company, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: 600 }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--primary-color)" }}></span>
                    {company}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Orbit Visual accent */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="orbit-container-wrapper" style={{ display: "flex", justifyContent: "center" }}>
                <div className="orbit-container">
                  <div className="orbit-ring ring-1"></div>
                  <div className="orbit-ring ring-2"></div>
                  <div className="orbit-ring ring-3"></div>
                  
                  {/* Central branding core */}
                  <div className="orbit-center">
                    <img src="/assets/images/logo.png" alt="Branding Core" className="orbit-core-logo" />
                    <p style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>Partner Employers</p>
                  </div>
                  
                  {/* Visual profiles placeholder images */}
                  <div className="orbit-avatar avatar-pos-1"><img src="/assets/images/avatar1.png" alt="Candidate 1" /></div>
                  <div className="orbit-avatar avatar-pos-2"><img src="/assets/images/avatar2.png" alt="Candidate 2" /></div>
                  <div className="orbit-avatar avatar-pos-3"><img src="/assets/images/avatar3.png" alt="Candidate 3" /></div>
                  <div className="orbit-avatar avatar-pos-4"><img src="/assets/images/avatar1.png" alt="Candidate 4" /></div>
                  <div className="orbit-avatar avatar-pos-5"><img src="/assets/images/avatar2.png" alt="Candidate 5" /></div>
                  <div className="orbit-avatar avatar-pos-6"><img src="/assets/images/avatar3.png" alt="Candidate 6" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: ACCREDITATIONS & STATS ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--secondary-color)", color: "#fff" }}>
        <div className="widescreen-container">
          <div className="row align-items-center">
            {/* Left Side: Rating & Award details */}
            <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
              <span className="accent-pill-label" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>Accreditation</span>
              <h2 style={{ fontSize: "40px", fontWeight: 900, color: "#fff !important", margin: "15px 0 20px", letterSpacing: "-1px" }}>SLBFE 3-Star Golden Award</h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85) !important", marginBottom: "30px", lineHeight: "1.8" }}>
                Proud recipient of the prestigious Sri Lanka Bureau of Foreign Employment (SLBFE) 3-Star Golden Award for outstanding performance and compliance in overseas consultancy — 2022/2023.
              </p>
              
              <div style={{ display: "inline-flex", flexDirection: "column", gap: "8px", backgroundColor: "rgba(255,255,255,0.06)", padding: "20px 30px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "left" }}>
                <span style={{ fontSize: "15px", fontWeight: 700 }}>Google Reviewed Agency</span>
                <div style={{ color: "#ffb400", fontSize: "20px", letterSpacing: "2px" }}>★★★★★</div>
                <span style={{ fontSize: "14px", fontWeight: 600, opacity: 0.8 }}>4.8 / 5 Rating</span>
              </div>
            </div>

            {/* Right Side: Key Placement Numbers (Stats) */}
            <div className="col-lg-7 ps-lg-5">
              <div className="row text-center">
                {[
                  { value: "1,200+", label: "Candidates Placed" },
                  { value: "350+", label: "Partner Companies" },
                  { value: "12+", label: "Industries Served" },
                  { value: "98%", label: "Retention Rate" },
                ].map((stat, i) => (
                  <div key={i} className="col-sm-6 mb-4">
                    <div style={{ padding: "40px 20px", borderRadius: "16px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h3 style={{ fontSize: "44px", fontWeight: 800, margin: "0 0 8px", color: "#fff !important" }}>{stat.value}</h3>
                      <p style={{ fontSize: "15px", margin: 0, color: "rgba(255,255,255,0.75) !important" }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 12: DUAL CALL TO ACTION ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color)" }}>
        <div className="widescreen-container">
          <div className="row g-4">
            {/* Left Card: Newsletter */}
            <div className="col-md-6">
              <div className="cta-card-dark">
                <div className="cta-card-decor"></div>
                <h3 className="cta-card-title">Subscribe Our Newsletter</h3>
                <p className="cta-card-desc">Stay updated with our latest job openings, international employment trends, and candidate selection updates.</p>
                <form onSubmit={(e) => e.preventDefault()} className="cta-input-group">
                  <input type="email" placeholder="Enter Your Email Address" className="cta-input" required />
                  <button type="submit" className="cta-submit-btn">SUBSCRIBE ↗</button>
                </form>
              </div>
            </div>
            
            {/* Right Card: Contact / Get in Touch */}
            <div className="col-md-6">
              <div className="cta-card-dark" style={{ background: "linear-gradient(135deg, #004a99 0%, #0066cc 100%)" }}>
                <div className="cta-card-decor" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}></div>
                <h3 className="cta-card-title">Get a Consultation</h3>
                <p className="cta-card-desc">Need immediate recruitment or manpower placements? Reach out to our consultants today and receive top-tier resumes.</p>
                <div className="cta-store-buttons">
                  <Link href="/contact" className="store-btn">
                    Book Consultation ↗
                  </Link>
                  <Link href="/about" className="store-btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
