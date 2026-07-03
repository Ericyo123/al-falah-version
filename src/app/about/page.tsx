import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE BANNER ===== */}
      <section className={styles.titlebar}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.7)" }}>About Us</span>
          <h1 style={{ fontSize: "48px", fontWeight: 800, color: "#fff", margin: "10px 0 16px", letterSpacing: "-0.5px" }}>Our Story & Mission</h1>
          <div className={styles.breadcrumb}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <strong style={{ color: "#fff" }}>About Us</strong>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ paddingRight: "50px" }}>
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontSize: "38px", fontWeight: 800, margin: "10px 0 28px", lineHeight: "1.25", letterSpacing: "-0.3px" }}>
                Your Partner in Global Recruitment
              </h2>
              <p style={{ fontSize: "17px", lineHeight: "1.8", marginBottom: "20px" }}>
                <strong style={{ color: "var(--text-primary)" }}>AL-FALAH TRAVELS & TOURS</strong> is one of the fastest-growing recruitment agencies, providing unrivaled human resource and talent management solutions to meet overseas recruitment needs. It offers a flexible recruitment service that can be availed on both a retained and non-retained basis.
              </p>
              <p style={{ fontSize: "17px", lineHeight: "1.8", marginBottom: "30px" }}>
                Thanks to extensive industry experience, our recruiters are adept at finding the right candidate for your organization — someone who not only possesses the right skill set but also aligns well with your company&apos;s culture and values.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-modern">Get Started</Link>
                <Link href="/jobs" className="btn-modern-outline">View Open Positions</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                position: "relative", borderRadius: "var(--border-radius-lg)",
                overflow: "hidden", boxShadow: "var(--shadow-xl)",
                height: "480px"
              }}>
                <Image src="/assets/images/tab-img.jpg" alt="Al-Falah Office Environment" fill style={{ objectFit: "cover" }} />
                {/* Accent card overlay */}
                <div style={{
                  position: "absolute", bottom: "24px", left: "24px",
                  background: "var(--accent-gradient)", borderRadius: "16px",
                  padding: "20px 28px", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}>
                  <div style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1 }}>2888</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, opacity: 0.9, marginTop: "4px" }}>SLBFE License</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-label">Our Purpose</span>
            <h2 style={{ fontSize: "42px", fontWeight: 800, margin: "10px 0 0", letterSpacing: "-0.5px" }}>
              We Source the Most Talented Candidates
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6" style={{ marginBottom: "30px" }}>
              <div className="glass-card" style={{
                padding: "50px 40px", height: "100%",
                background: "linear-gradient(160deg, #003366 0%, #0066cc 100%)",
                border: "none", position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "140px", height: "140px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)"
                }}></div>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "14px",
                  background: "rgba(255,255,255,0.15)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "22px", marginBottom: "24px"
                }}><i className="fas fa-bullseye" style={{ color: "#fff" }}></i></div>
                <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", margin: "0 0 20px" }}>Our Mission</h3>
                <p style={{ fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.85) !important", margin: 0 }}>
                  We will achieve our vision by partnering with our clients to recruit, manage and retain their workforce using our outstanding knowledge.
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ marginBottom: "30px" }}>
              <div className="glass-card" style={{
                padding: "50px 40px", height: "100%",
                background: "linear-gradient(160deg, #0066cc 0%, #00a3e0 100%)",
                border: "none", position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "140px", height: "140px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)"
                }}></div>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "14px",
                  background: "rgba(255,255,255,0.15)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "22px", marginBottom: "24px"
                }}><i className="fas fa-eye" style={{ color: "#fff" }}></i></div>
                <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", margin: "0 0 20px" }}>Our Vision</h3>
                <p style={{ fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.85) !important", margin: 0 }}>
                  We work hard to achieve our goals together as a team with a clear shared purpose. We adapt to our clients&apos; changing needs as well as changes in the market to make sure we are a business of growth, success and happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHAIRMAN'S MESSAGE ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center" style={{ marginBottom: "40px" }}>
              <div style={{
                width: "280px", height: "280px", borderRadius: "50%",
                overflow: "hidden", margin: "0 auto",
                border: "6px solid var(--bg-color-secondary)",
                boxShadow: "var(--shadow-xl)"
              }}>
                <img src="/assets/images/card-box.jpg" alt="M.H. Mohamed Niyas - Chairman" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "26px", fontWeight: 800, marginTop: "24px", marginBottom: "4px" }}>M.H. Mohamed Niyas</h3>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--primary-color) !important", margin: 0 }}>Chairman</p>
            </div>
            <div className="col-lg-7">
              <span className="section-label">Chairman&apos;s Message</span>
              <h2 style={{ fontSize: "34px", fontWeight: 800, margin: "10px 0 28px", lineHeight: "1.25" }}>
                A Word from Our Chairman
              </h2>
              <div style={{ position: "relative", paddingLeft: "24px", borderLeft: "3px solid var(--primary-color)" }}>
                <p style={{ fontSize: "17px", lineHeight: "1.9", marginBottom: "20px" }}>
                  Sri Lanka has a rich source of talented manpower to be utilized in every aspect of the industry, from hospitality to manufacturing, processing, marketing, healthcare, FMCG, etc. Statistically, Sri Lankans have topped Asia&apos;s literacy rates and have proven time and again their commitment and reliability in the areas of their job details.
                </p>
                <p style={{ fontSize: "17px", lineHeight: "1.9", marginBottom: "20px" }}>
                  As an overseas employment company operating from Sri Lanka, AL-FALAH TRAVELS & TOURS provides the best options and compromise between recruitment cost, timely service, and worker reliability. Our solutions are carefully tailored, combining expertise and technology in a way that achieves real business results.
                </p>
                <p style={{ fontSize: "17px", lineHeight: "1.9", fontWeight: 600, color: "var(--primary-color) !important", margin: 0 }}>
                  &ldquo;We believe in keeping our customers happy and satisfied by providing the best services with complete reliability and accountability. It will be our pleasure to serve you and an honor to be associated with you.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-color-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-label">Recognition</span>
            <h2 style={{ fontSize: "42px", fontWeight: 800, margin: "10px 0 0", letterSpacing: "-0.5px" }}>
              Awards & Accreditations
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6" style={{ marginBottom: "30px" }}>
              <div className="glass-card" style={{ padding: "48px 36px", textAlign: "center", height: "100%" }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px", fontSize: "30px",
                  boxShadow: "0 8px 25px rgba(255,170,0,0.25)"
                }}><i className="fas fa-award" style={{ color: "#fff" }}></i></div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>SLBFE 3-Star Golden Award</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                  Awarded in March 2023 for outstanding performance and excellence in foreign recruitment consultancy during the year 2023/2022.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6" style={{ marginBottom: "30px" }}>
              <div className="glass-card" style={{ padding: "48px 36px", textAlign: "center", height: "100%" }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #0066cc 0%, #00a3e0 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px", fontSize: "30px",
                  boxShadow: "0 8px 25px rgba(0,102,204,0.25)"
                }}><i className="fas fa-file-signature" style={{ color: "#fff" }}></i></div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Government Approved Agency</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                  Officially licensed by the Sri Lanka Bureau of Foreign Employment (SLBFE). License Number: <strong>2888</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        padding: "100px 0", textAlign: "center",
        background: "linear-gradient(135deg, #003366 0%, #0066cc 50%, #00a3e0 100%)"
      }}>
        <div className="container">
          <h2 style={{ fontSize: "38px", fontWeight: 800, color: "#fff", marginBottom: "20px" }}>
            Ready to Partner With Us?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8) !important", maxWidth: "550px", margin: "0 auto 40px", lineHeight: "1.7" }}>
            Whether you&apos;re a company looking for top talent or a job seeker searching for opportunities abroad, we&apos;re here to help.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-modern" style={{ background: "#fff", color: "var(--primary-color) !important", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
              Contact Us Today
            </Link>
            <Link href="/jobs" className="btn-modern" style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", boxShadow: "none" }}>
              Browse Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
