"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => setIsMobileOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Find Jobs", href: "/jobs" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header id="masthead" style={{ position: "relative", zIndex: 1000 }}>

      {/* Main Header */}
      <div style={{
        position: isSticky ? "fixed" : "relative",
        top: 0, left: 0, right: 0,
        zIndex: 999,
        backgroundColor: isSticky ? "rgba(255,255,255,0.97)" : "#ffffff",
        backdropFilter: isSticky ? "blur(20px)" : "none",
        boxShadow: isSticky ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        borderBottom: isSticky ? "1px solid rgba(0,0,0,0.04)" : "none",
        transition: "all 0.3s ease"
      }}>
        {/* Spacer when sticky */}
        <div className="widescreen-container">
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", padding: isSticky ? "14px 0" : "18px 0",
            transition: "padding 0.3s ease"
          }}>
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/images/logo.png"
                alt="Al-Falah Travels and Tours"
                style={{ height: isSticky ? "48px" : "55px", width: "auto", objectFit: "contain", transition: "height 0.3s ease" }}
              />
            </Link>

            {/* Desktop Nav - Centered */}
            <div className="desktop-nav-wrapper" style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <React.Fragment key={item.href}>
                      <Link
                        href={item.href}
                        style={{
                          color: isActive ? "var(--primary-color)" : "var(--text-primary)",
                          fontWeight: 600,
                          fontSize: "17px",
                          padding: "8px 16px",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {item.label}
                      </Link>
                      {index < navItems.length - 1 && (
                        <span style={{ color: "rgba(0,0,0,0.15)", fontSize: "12px", pointerEvents: "none" }}>•</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </nav>
            </div>

            {/* Right Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Link href="/contact" className="btn-modern" style={{ padding: "12px 28px", fontSize: "14px" }}>
                Apply Now
              </Link>
              <a
                href="tel:+94112669489"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.08)",
                  backgroundColor: "#ffffff",
                  color: "var(--text-primary)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                  textDecoration: "none"
                }}
                className="desktop-phone-btn"
              >
                <i className="fas fa-phone-alt" style={{ fontSize: "14px" }}></i>
              </a>
              <button
                onClick={toggleMobileMenu}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--text-primary)", fontSize: "24px",
                  display: "none", padding: "4px"
                }}
                className="mobile-toggle-btn"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky spacer */}
      {isSticky && <div style={{ height: "90px" }}></div>}

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          onClick={closeMobileMenu}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)", zIndex: 9999,
            backdropFilter: "blur(4px)"
          }}
        />
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: "fixed", top: 0,
        right: isMobileOpen ? "0" : "-320px",
        width: "320px", height: "100%",
        backgroundColor: "#ffffff",
        boxShadow: "-10px 0 40px rgba(0,0,0,0.15)",
        zIndex: 10000,
        transition: "right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        padding: "32px 24px",
        display: "flex", flexDirection: "column"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <img src="/assets/images/logo.png" alt="Al-Falah" style={{ height: "40px" }} />
          <button onClick={closeMobileMenu} style={{
            background: "none", border: "none", fontSize: "28px",
            cursor: "pointer", color: "var(--text-primary)", lineHeight: 1
          }}>×</button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                style={{
                  fontWeight: 600, fontSize: "17px",
                  color: isActive ? "var(--primary-color)" : "var(--text-primary)",
                  padding: "14px 16px", borderRadius: "10px",
                  background: isActive ? "var(--primary-light)" : "transparent",
                  transition: "all 0.2s ease"
                }}
              >{item.label}</Link>
            );
          })}
        </nav>
        <div style={{ marginTop: "auto", paddingTop: "30px", borderTop: "1px solid var(--border-color)" }}>
          <Link href="/contact" className="btn-modern" onClick={closeMobileMenu} style={{ display: "block", textAlign: "center", width: "100%" }}>
            Apply Now
          </Link>
          <div style={{ marginTop: "20px", fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.8" }}>
            <div>📞 +94 112 669 489</div>
            <div>✉️ alfalah.overseas@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
