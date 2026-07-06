"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "#030b15", 
      color: "rgba(255,255,255,0.75)", 
      fontFamily: "var(--font-body)",
      position: "relative",
      marginTop: "80px" 
    }}>

      {/* Floating CTA Card */}
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{
          background: "linear-gradient(135deg, var(--primary-color) 0%, #002244 100%)",
          borderRadius: "20px",
          padding: "40px 50px", 
          marginTop: "-80px", 
          boxShadow: "0 20px 40px rgba(0, 51, 102, 0.2)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px" 
        }}>
          {/* Decorative background shapes */}
          <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }}></div>
          <div style={{ position: "absolute", bottom: "-50%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.02)", pointerEvents: "none" }}></div>
          <div style={{ position: "absolute", top: "20%", right: "20%", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none", filter: "blur(40px)" }}></div>

          <div style={{ flex: "1 1 500px", position: "relative", zIndex: 2 }}>
            <span style={{ 
              display: "inline-block", 
              padding: "6px 12px", 
              backgroundColor: "rgba(255,255,255,0.1)", 
              color: "#ffffff", 
              borderRadius: "30px", 
              fontSize: "11px", 
              fontWeight: 700, 
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "12px", 
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>Ready to Hire?</span>
            
            <h3 className="text-white-force" style={{ 
              fontSize: "32px", 
              fontWeight: 900, 
              marginBottom: "10px", 
              fontFamily: "var(--font-heading)",
              lineHeight: "1.2",
              letterSpacing: "-0.5px"
            }}>
              Get a Professional Consultation
            </h3>
            
            <div className="text-white-force" style={{ 
              opacity: 0.85,
              fontSize: "15px", 
              margin: 0, 
              maxWidth: "600px", 
              lineHeight: "1.6",
              fontWeight: 400
            }}>
              Need immediate recruitment or manpower placements? Reach out to our consultants today and receive top-tier resumes tailored specifically to your industry requirements.
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
            <Link href="/contact" style={{ 
              backgroundColor: "#ffffff", 
              color: "var(--primary-color)", 
              padding: "14px 28px", 
              borderRadius: "10px", 
              fontWeight: 800, 
              fontSize: "14px",
              textDecoration: "none", 
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)", 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }} onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-3px)"} onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}>
              Book Consultation <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="/about" className="text-white-force" style={{ 
              backgroundColor: "rgba(255,255,255,0.05)", 
              padding: "14px 28px", 
              borderRadius: "10px", 
              fontWeight: 700, 
              fontSize: "14px",
              textDecoration: "none", 
              border: "1px solid rgba(255,255,255,0.2)", 
              backdropFilter: "blur(10px)",
              transition: "all 0.3s",
              display: "inline-flex",
              alignItems: "center"
            }} onMouseEnter={(e)=>{e.currentTarget.style.backgroundColor="rgba(255,255,255,0.15)"; e.currentTarget.style.transform="translateY(-3px)";}} onMouseLeave={(e)=>{e.currentTarget.style.backgroundColor="rgba(255,255,255,0.05)"; e.currentTarget.style.transform="translateY(0)";}}>
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ padding: "60px 0 30px", position: "relative" }}> 
        {/* Decorative background blur */}
        <div style={{ position: "absolute", top: 0, left: "15%", width: "400px", height: "400px", background: "var(--primary-color)", opacity: "0.03", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row g-4"> 
            {/* Brand */}
            <div className="col-lg-5 col-md-12">
              <img
                src="/assets/images/logo.png"
                alt="Al-Falah Travels & Tours"
                style={{ height: "45px", marginBottom: "20px", filter: "brightness(0) invert(1)", opacity: 0.95 }}
              />
              <div className="text-white-force" style={{ 
                opacity: 0.65,
                fontSize: "14px", 
                lineHeight: "1.7", 
                marginBottom: "24px", 
                maxWidth: "380px" 
              }}>
                A premier manpower recruitment agency based in Colombo, Sri Lanka, connecting skilled talent with overseas employment opportunities across the Middle East.
              </div>
              
              <div style={{ display: "flex", gap: "10px" }}>
                {[
                  { icon: "fa-facebook-f", href: "https://web.facebook.com/alfalahcmb?_rdc=1&_rdr#", color: "#1877F2" },
                  { icon: "fa-instagram", href: "https://www.instagram.com/alfalah_travels_and_tours/", color: "#E4405F" },
                  { icon: "fa-linkedin-in", href: "https://www.linkedin.com/in/al-falah-travels-and-tours-foreign-employment-agency-colombo-sri-lanka-083690245/", color: "#0A66C2" }
                ].map((social, idx) => (
                  <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white-force" style={{
                    opacity: 0.8,
                    width: "38px", height: "38px", borderRadius: "10px", 
                    background: "rgba(255,255,255,0.03)", 
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                    fontSize: "14px"
                  }}
                  onMouseEnter={(e)=>{e.currentTarget.style.background=social.color; e.currentTarget.style.borderColor=social.color; e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(-3px)";}}
                  onMouseLeave={(e)=>{e.currentTarget.style.background="rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.opacity="0.8"; e.currentTarget.style.transform="translateY(0)";}}
                  >
                    <i className={`fab ${social.icon}`}></i>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white-force" style={{ 
                fontSize: "17px", 
                fontWeight: 700, 
                marginBottom: "20px", 
                letterSpacing: "0.5px",
                fontFamily: "var(--font-heading)",
                position: "relative",
                paddingBottom: "10px"
              }}>
                Quick Links
                <span style={{ position: "absolute", bottom: 0, left: 0, width: "30px", height: "2px", backgroundColor: "var(--primary-color)", borderRadius: "2px" }}></span>
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "Find Jobs", href: "/jobs" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-white-force" style={{
                      opacity: 0.65,
                      fontSize: "14px", 
                      transition: "all 0.2s ease", 
                      display: "inline-flex",
                      alignItems: "center", 
                      gap: "10px",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e)=>{e.currentTarget.style.color="var(--primary-color)"; e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateX(5px)";}}
                    onMouseLeave={(e)=>{e.currentTarget.style.color="inherit"; e.currentTarget.style.opacity="0.65"; e.currentTarget.style.transform="translateX(0)";}}
                    >
                      <i className="fas fa-chevron-right" style={{ fontSize: "9px", color: "var(--primary-color)" }}></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white-force" style={{ 
                fontSize: "17px", 
                fontWeight: 700, 
                marginBottom: "20px", 
                letterSpacing: "0.5px",
                fontFamily: "var(--font-heading)",
                position: "relative",
                paddingBottom: "10px"
              }}>
                Contact Info
                <span style={{ position: "absolute", bottom: 0, left: 0, width: "30px", height: "2px", backgroundColor: "var(--primary-color)", borderRadius: "2px" }}></span>
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}> 
                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary-color)", fontSize: "15px" }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="text-white-force" style={{ fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>Head Office</div>
                    <div className="text-white-force" style={{ opacity: 0.6, fontSize: "14px", lineHeight: "1.5" }}>501, 2nd Division, Maradana,<br/>Colombo 10, Sri Lanka</div>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary-color)", fontSize: "15px" }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <div className="text-white-force" style={{ fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>Hotlines</div>
                    <div className="text-white-force" style={{ opacity: 0.6, fontSize: "14px", lineHeight: "1.5" }}>+94 112 669 489<br/>+94 114 724481</div>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary-color)", fontSize: "15px" }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="text-white-force" style={{ fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>Email Us</div>
                    <div className="text-white-force" style={{ opacity: 0.6, fontSize: "14px" }}>alfalah.overseas@gmail.com</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        backgroundColor: "#02060c",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "16px 0" 
      }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "12px", textAlign: "center" }}>
            <div className="text-white-force" style={{ margin: 0, fontSize: "13px", opacity: 0.5, fontWeight: 500 }}>
              © {new Date().getFullYear()} Al-Falah Travels and Tours. All Rights Reserved. <span style={{ opacity: 0.3, margin: "0 8px" }}>|</span> Web Design & Development by <a href="https://bitmosolutions.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-color)", textDecoration: "none", fontWeight: 700, transition: "color 0.2s", opacity: 1 }} onMouseEnter={(e)=>e.currentTarget.style.color="#fff"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--primary-color)"}>Bitmo Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
