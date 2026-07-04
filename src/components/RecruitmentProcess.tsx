"use client";

import React from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function RecruitmentProcess() {
  const steps: Step[] = [
    {
      num: "01.",
      title: "Client Briefing",
      desc: "We understand your requirements, workforce needs, and company culture in detail.",
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Desk */}
          <path d="M2 17h20v2H2z" fill="var(--primary-color)" fillOpacity="0.1" stroke="none" />
          <path d="M2 17h20" />
          <path d="M4 17v4M20 17v4" />
          {/* Left Person */}
          <circle cx="7" cy="8" r="3" />
          <path d="M3 17v-3a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v3" />
          {/* Right Person (Highlighted) */}
          <circle cx="17" cy="8" r="3" fill="var(--primary-color)" fillOpacity="0.1" stroke="var(--primary-color)" />
          <path d="M13 17v-3a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v3" stroke="var(--primary-color)" />
          {/* Conversation Bubbles */}
          <g style={{ animation: "bounceChat 3s ease-in-out infinite" }}>
            <path d="M9 6h2v2H9z" fill="var(--primary-color)" stroke="none" />
          </g>
          <g style={{ animation: "bounceChat 3s ease-in-out infinite 1.5s" }}>
            <path d="M12 4h2v2h-2z" fill="#1a2b3c" stroke="none" />
          </g>
        </svg>
      )
    },
    {
      num: "02.",
      title: "Candidate Sourcing",
      desc: "We tap into our extensive talent pool and networks across Sri Lanka to find the best fits.",
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Grid of Candidates */}
          <circle cx="5" cy="6" r="2" />
          <path d="M3 11v-1a2 2 0 0 1 4 0v1" />
          <circle cx="19" cy="6" r="2" />
          <path d="M17 11v-1a2 2 0 0 1 4 0v1" />
          <circle cx="5" cy="17" r="2" />
          <path d="M3 22v-1a2 2 0 0 1 4 0v1" />
          <circle cx="19" cy="17" r="2" />
          <path d="M17 22v-1a2 2 0 0 1 4 0v1" />
          {/* Center Candidate (Highlighted) */}
          <circle cx="12" cy="10" r="2" fill="var(--primary-color)" fillOpacity="0.15" stroke="var(--primary-color)" />
          <path d="M10 15v-1a2 2 0 0 1 4 0v1" stroke="var(--primary-color)" />
          {/* Magnifying Glass */}
          <g style={{ animation: "scanGlass 4s ease-in-out infinite" }}>
            <circle cx="12" cy="11" r="5" stroke="#1a2b3c" fill="#ffffff" fillOpacity="0.5" />
            <path d="M15.5 14.5L19 18" stroke="#1a2b3c" strokeWidth="2" />
          </g>
        </svg>
      )
    },
    {
      num: "03.",
      title: "Screening & Vetting",
      desc: "Rigorous interviews, skill tests, medical examinations, and background verification.",
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Clipboard */}
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="#ffffff" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="var(--primary-color)" fillOpacity="0.1" />
          {/* Checkmark */}
          <path d="M9 13l2.5 2.5L16 10" stroke="var(--primary-color)" strokeWidth="2.5" style={{ animation: "drawStroke 4s ease-out infinite" }} />
          {/* Lines */}
          <path d="M9 18h6" />
        </svg>
      )
    },
    {
      num: "04.",
      title: "Deployment",
      desc: "Complete visa processing, ticketing, and deployment handled end-to-end by our team.",
      icon: (
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Globe */}
          <circle cx="12" cy="12" r="8" fill="var(--primary-color)" fillOpacity="0.1" />
          <path d="M12 4c-2 0-3.5 3.6-3.5 8s1.5 8 3.5 8 3.5-3.6 3.5-8-1.5-8-3.5-8z" />
          <path d="M4.6 12h14.8" />
          {/* Plane Flying */}
          <path d="M2 16 Q8 6, 18 8" stroke="var(--primary-color)" strokeWidth="1.5" strokeDasharray="3 3" style={{ animation: "dashScroll 1.5s linear infinite" }} />
          <g style={{ animation: "floatPlane 3s ease-in-out infinite" }}>
            <path d="M17 6 l4 2 l-2 4 Z" fill="var(--primary-color)" stroke="var(--primary-color)" strokeWidth="1" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#fcfaf8", position: "relative", overflow: "hidden" }}>
      
      {/* ===== ICON ANIMATIONS ===== */}
      <style>{`
        @keyframes bounceChat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes scanGlass {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-3px, -2px); }
          50% { transform: translate(0, 0); }
          75% { transform: translate(3px, 2px); }
        }
        @keyframes drawStroke {
          0% { stroke-dasharray: 24; stroke-dashoffset: 24; opacity: 0; }
          10% { opacity: 1; }
          40%, 90% { stroke-dasharray: 24; stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dasharray: 24; stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes dashScroll {
          to { stroke-dashoffset: -12; }
        }
        @keyframes floatPlane {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(1.5px, -1.5px); }
        }
      `}</style>

      {/* ===== LAYERED BACKGROUND ELEMENTS ===== */}
      
      {/* 1. Subtle Blue Accent Glow */}
      <div style={{
        position: "absolute", top: "20%", right: "-5%", width: "500px", height: "500px",
        background: "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)",
        opacity: 0.04, filter: "blur(60px)", pointerEvents: "none", zIndex: 0
      }}></div>

      {/* 2. 3D Perspective Blue Mesh Net */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%", bottom: "-20%", width: "55%",
        zIndex: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--primary-color) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--primary-color) 1.5px, transparent 1.5px)",
        backgroundSize: "45px 45px",
        opacity: 0.12,
        maskImage: "radial-gradient(ellipse at 80% 50%, black 20%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at 80% 50%, black 20%, transparent 80%)",
        transform: "perspective(1200px) rotateY(-35deg) rotateX(15deg) scale(1.1)",
        transformOrigin: "right center"
      }}></div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="widescreen-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Centered Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 80px" }}>
          <h2 style={{ fontSize: "38px", fontWeight: 800, margin: "0", color: "var(--text-primary)", lineHeight: 1.35 }}>
            Steps of Recruitment Process: Our <br />
            Deployment <span style={{ color: "var(--primary-color)" }}>Advantages.</span>
          </h2>
          {/* Hand-drawn SVG underline */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}>
            <svg width="380" height="24" viewBox="0 0 380 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Thick upper stroke */}
              <path d="M6 10C95 5 245 3 374 8" stroke="#1a2b3c" strokeWidth="4.5" strokeLinecap="round" />
              {/* Thinner lower stroke */}
              <path d="M28 21C115 16 250 14 352 19" stroke="#1a2b3c" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Minimalist Horizontal Grid */}
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "30px" }}>
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="process-card"
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  textAlign: "center"
                }}
              >
                {/* Icon */}
                <div className="process-icon" style={{ marginBottom: "30px" }}>
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="process-title" style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px" }}>
                  {step.title}
                </h3>
                
                {/* Desc */}
                <p style={{ fontSize: "15px", color: "#6b7a90", lineHeight: "1.7", margin: "0 auto", maxWidth: "260px" }}>
                  {step.desc}
                </p>

                {/* Massive Faded Number */}
                <div className="process-number" style={{
                  fontSize: "110px",
                  fontWeight: 900,
                  color: "rgba(0, 0, 0, 0.04)",
                  lineHeight: "1",
                  marginTop: "15px",
                  letterSpacing: "-3px",
                  userSelect: "none"
                }}>
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .process-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          padding: 30px 20px;
          border-radius: 24px;
        }
        .process-card:hover {
          background-color: #ffffff;
          box-shadow: 0 20px 40px rgba(0, 51, 102, 0.08);
          transform: translateY(-10px);
        }
        .process-icon {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .process-card:hover .process-icon {
          transform: scale(1.15) translateY(-8px);
        }
        .process-number {
          transition: all 0.4s ease;
        }
        .process-card:hover .process-number {
          color: rgba(0, 102, 204, 0.07) !important;
          transform: translateY(-10px) scale(1.05);
        }
        .process-title {
          transition: all 0.3s ease;
        }
        .process-card:hover .process-title {
          color: var(--primary-color) !important;
        }
      `}</style>
    </section>
  );
}
