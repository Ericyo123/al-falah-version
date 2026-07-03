"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed successfully! Thank you.");
  };

  return (
    <footer style={{ backgroundColor: "#0a1628", color: "rgba(255,255,255,0.75)" }}>
      {/* Main Footer */}
      <div style={{ padding: "80px 0 50px" }}>
        <div className="container">
          <div className="row">
            {/* Brand */}
            <div className="col-lg-4 col-md-6" style={{ marginBottom: "40px" }}>
              <img
                src="/assets/images/logo.png"
                alt="Al-Falah Travels & Tours"
                style={{ height: "50px", marginBottom: "24px", filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(255,255,255,0.6) !important", marginBottom: "24px", maxWidth: "320px" }}>
                A premier manpower recruitment agency based in Colombo, Sri Lanka, connecting skilled talent with overseas employment opportunities across the Middle East.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <Link href="https://www.facebook.com/alfalahcmb" target="_blank" rel="noopener noreferrer" style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "rgba(255,255,255,0.08)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", transition: "all 0.2s ease",
                  fontSize: "14px"
                }}>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/al-falah-travels-and-tours-foreign-employment-agency-colombo-sri-lanka-083690245" target="_blank" rel="noopener noreferrer" style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "rgba(255,255,255,0.08)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", transition: "all 0.2s ease",
                  fontSize: "14px"
                }}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6" style={{ marginBottom: "40px" }}>
              <h4 style={{ color: "#fff !important", fontSize: "16px", fontWeight: 700, marginBottom: "24px", letterSpacing: "0.5px" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "Find Jobs", href: "/jobs" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link, i) => (
                  <li key={i} style={{ marginBottom: "12px" }}>
                    <Link href={link.href} style={{
                      color: "rgba(255,255,255,0.55)", fontSize: "15px",
                      transition: "color 0.2s ease", display: "inline-flex",
                      alignItems: "center", gap: "8px"
                    }}>
                      <span style={{ fontSize: "10px", opacity: 0.5 }}>›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6" style={{ marginBottom: "40px" }}>
              <h4 style={{ color: "#fff !important", fontSize: "16px", fontWeight: 700, marginBottom: "24px", letterSpacing: "0.5px" }}>Contact Info</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", marginTop: "2px" }}>📍</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>Address</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: "1.6" }}>501, 2nd Division, Maradana, Colombo 10, Sri Lanka</div>
                  </div>
                </li>
                <li style={{ marginBottom: "20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", marginTop: "2px" }}>📞</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>Phone</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: "1.6" }}>+94 112 669 489<br/>+94 114 724481</div>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", marginTop: "2px" }}>✉️</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>Email</div>
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px" }}>alfalah.overseas@gmail.com</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6" style={{ marginBottom: "40px" }}>
              <h4 style={{ color: "#fff !important", fontSize: "16px", fontWeight: 700, marginBottom: "24px", letterSpacing: "0.5px" }}>Newsletter</h4>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55) !important", marginBottom: "20px", lineHeight: "1.7" }}>
                Subscribe for the latest job openings and industry news.
              </p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  style={{
                    width: "100%", padding: "14px 18px",
                    borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "#fff", fontSize: "14px", outline: "none",
                    marginBottom: "12px", transition: "border-color 0.2s"
                  }}
                />
                <button type="submit" className="btn-modern" style={{ width: "100%", padding: "14px", fontSize: "14px" }}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "24px 0"
      }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.4) !important" }}>
              © {new Date().getFullYear()} Al-Falah Travels and Tours. All Rights Reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", transition: "color 0.2s" }}>Privacy Policy</Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", transition: "color 0.2s" }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
