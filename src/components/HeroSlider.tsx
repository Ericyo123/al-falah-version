"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSlider() {
  useEffect(() => {
    // 1. Initially set elements to transparent to prevent flash of unstyled content
    gsap.set([".execora-hero-title", ".execora-hero-desc", ".execora-hero-btn", "#hero-glass-counter-desktop", "#hero-glass-counter-mobile"], { opacity: 0 });

    // 2. Build sequenced timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".execora-hero-card",
      { scale: 0.96, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.0, delay: 0.1 }
    )
    .fromTo(".execora-hero-title",
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.5"
    )
    .fromTo(".execora-hero-desc",
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.5"
    )
    .fromTo(".execora-hero-btn",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.8)" },
      "-=0.4"
    )
    .fromTo(["#hero-glass-counter-desktop", "#hero-glass-counter-mobile"],
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: "back.out(1.5)" },
      "-=0.4"
    );
  }, []);

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
              Connect with the Global Market
            </h1>
            <p className="execora-hero-desc">
              We source and deploy Sri Lanka's finest skilled professionals, technicians, and hospitality staff to leading GCC employers.
            </p>
            {/* Mobile-Only Floating Glass Stat Counter */}
            <div className="execora-floating-glass d-lg-none" id="hero-glass-counter-mobile">
              <div className="execora-avatar-stack">
                <img src="/assets/images/srilankan_avatar_rohan.png" alt="Candidate 1" className="execora-avatar" />
                <img src="/assets/images/srilankan_avatar_dilrukshi.png" alt="Candidate 2" className="execora-avatar" />
                <img src="/assets/images/srilankan_avatar_rizwan.png" alt="Candidate 3" className="execora-avatar" />
                <div className="execora-plus-badge">+</div>
              </div>
              <div className="execora-glass-count">3,000+</div>
              <div className="execora-glass-label">Placed candidates worldwide.</div>
            </div>

            <Link href="/jobs" className="execora-hero-btn">
              Apply for Jobs <span>➔</span>
            </Link>
          </div>
        </div>

        {/* Desktop-Only Floating Glass Stat Counter */}
        <div className="execora-floating-glass d-none d-lg-flex flex-column align-items-center" id="hero-glass-counter-desktop">
          <div className="execora-avatar-stack">
            <img src="/assets/images/srilankan_avatar_rohan.png" alt="Candidate 1" className="execora-avatar" />
            <img src="/assets/images/srilankan_avatar_dilrukshi.png" alt="Candidate 2" className="execora-avatar" />
            <img src="/assets/images/srilankan_avatar_rizwan.png" alt="Candidate 3" className="execora-avatar" />
            <div className="execora-plus-badge">+</div>
          </div>
          <div className="execora-glass-count">3,000+</div>
          <div className="execora-glass-label">Placed candidates worldwide.</div>
        </div>
      </div>
    </section>
  );
}
