"use client";

import React, { useState } from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function RecruitmentProcess() {
  const [activeStep, setActiveStep] = useState(2);

  const steps: Step[] = [
    {
      num: "Step 01",
      title: "Client Briefing",
      desc: "We understand your requirements, workforce needs, and company culture in detail.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      num: "Step 02",
      title: "Candidate Sourcing",
      desc: "We tap into our extensive talent pool and networks across Sri Lanka to find the best fits.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      )
    },
    {
      num: "Step 03",
      title: "Screening & Vetting",
      desc: "Rigorous interviews, skill tests, medical examinations, and background verification.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      num: "Step 04",
      title: "Deployment",
      desc: "Complete visa processing, ticketing, and deployment handled end-to-end by our team.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2L16 11l3.5-3.5A1 1 0 0 0 19 6h-4l-4-4H6a2 2 0 0 0-2 2v16l4-2 4 2 5.8-5.8z" />
          <line x1="2" y1="22" x2="22" y2="22" />
        </svg>
      )
    }
  ];

  return (
    <section className="process-section">
      {/* Background Watermark Outline text */}
      <div className="process-watermark">process</div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Left Side Header */}
        <div style={{ maxWidth: "450px" }}>
          <span className="section-label" style={{ color: "var(--primary-color)" }}>How It Works</span>
          <h2 style={{ fontSize: "44px", fontWeight: 800, margin: "10px 0 20px", letterSpacing: "-0.5px", lineHeight: "1.2", color: "var(--text-primary)" }}>
            Steps of Recruitment <span style={{ color: "var(--primary-color)" }}>Process</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text-secondary)" }}>
            We partner with global employers to source, screen, and deploy premium Sri Lankan talent efficiently.
          </p>
        </div>

        {/* Winding Staircase timeline grid */}
        <div className="process-grid-container">
          {/* Staircase Background Dashed Line */}
          <svg className="process-bg-staircase" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path
              d="M 0,760 H 300 V 620 H 600 V 480 H 900 V 340 H 1200"
              stroke="var(--border-color)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Staggered cards */}
          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isActive = activeStep === stepNum;
            return (
              <div
                key={idx}
                className={`process-step-wrapper process-step-wrapper-${stepNum} ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveStep(stepNum)}
              >
                {/* Icon */}
                <div className="process-icon-circle">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="process-title">{step.title}</h3>

                {/* Desc */}
                <p className="process-desc">{step.desc}</p>

                {/* Pill centered on the horizontal line */}
                <div className="process-step-pill">
                  {step.num}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
