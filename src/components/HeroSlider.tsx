"use client";

import React from "react";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="execora-hero-section">
      <div className="widescreen-container" style={{ position: "relative" }}>
        {/* Main Rounded Widescreen Card */}
        <div className="execora-hero-card">
          {/* Blue Gradient Overlay */}
          <div className="execora-hero-gradient"></div>

          {/* Left-aligned Text Content */}
          <div className="execora-hero-content">
            <h1 className="execora-hero-title">
              Connect with the Global Market.
            </h1>
            <p className="execora-hero-desc">
              We source and deploy Sri Lanka's finest skilled professionals, technicians, and hospitality staff to leading GCC employers.
            </p>
            <Link href="/jobs" className="execora-hero-btn">
              Apply for Jobs <span>➔</span>
            </Link>
          </div>
        </div>

        {/* Floating Glass Stat Counter (Moved outside for better mobile flow) */}
        <div className="execora-floating-glass" id="hero-glass-counter">
          {/* Avatar Stack */}
          <div className="execora-avatar-stack">
            <img src="/assets/images/avatar1.png" alt="Candidate 1" className="execora-avatar" />
            <img src="/assets/images/avatar2.png" alt="Candidate 2" className="execora-avatar" />
            <img src="/assets/images/avatar3.png" alt="Candidate 3" className="execora-avatar" />
            <div className="execora-plus-badge">+</div>
          </div>
          {/* Placed Counts */}
          <div className="execora-glass-count">3,000+</div>
          <div className="execora-glass-label">Placed candidates worldwide.</div>
        </div>
      </div>
    </section>
  );
}
