"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roleType: "seeker",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Titlebar Banner */}
      <section className={styles.titlebar}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="accent-pill-label text-white-force" style={{ marginBottom: "16px", display: "inline-block" }}>Get In Touch</span>
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* Contact Content Area */}
      <section className={styles.section}>
        <div className={`container ${styles.layout}`}>
          {/* Info Column */}
          <div className={styles.infoColumn}>
            <div>
              <h2>Let&apos;s Start a Conversation</h2>
              <p>Have a question about job positions or need recruitment solutions for your enterprise? Our team is ready to help.</p>
            </div>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-map-marker-alt" style={{ color: "var(--primary-color)" }}></i>
                </div>
                <div className={styles.infoDetails}>
                  <h4>Our Headquarters</h4>
                  <p>501, 2nd Division, Maradana, Colombo 10, Sri Lanka</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-phone-alt" style={{ color: "var(--primary-color)" }}></i>
                </div>
                <div className={styles.infoDetails}>
                  <h4>Call Us</h4>
                  <p>+94 112 669 489<br/>+94 114 724481</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-envelope" style={{ color: "var(--primary-color)" }}></i>
                </div>
                <div className={styles.infoDetails}>
                  <h4>Email Address</h4>
                  <p>alfalah.overseas@gmail.com</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-clock" style={{ color: "var(--primary-color)" }}></i>
                </div>
                <div className={styles.infoDetails}>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form Column */}
          <div className={styles.formColumn}>
            {!submitted ? (
              <>
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name" className={styles.label}>Full Name</label>
                      <input type="text" id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.label}>Email Address</label>
                      <input type="email" id="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone" className={styles.label}>Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="+94 77 123 4567" value={formData.phone} onChange={handleChange} className={styles.input} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="roleType" className={styles.label}>I am a:</label>
                      <select id="roleType" name="roleType" value={formData.roleType} onChange={handleChange} className={styles.select}>
                        <option value="seeker">Job Seeker</option>
                        <option value="employer">Employer / Company Partner</option>
                      </select>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
                      <label htmlFor="subject" className={styles.label}>Subject</label>
                      <input type="text" id="subject" name="subject" required placeholder="How can we help?" value={formData.subject} onChange={handleChange} className={styles.input} />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
                      <label htmlFor="message" className={styles.label}>Message</label>
                      <textarea id="message" name="message" required placeholder="Tell us about your needs..." value={formData.message} onChange={handleChange} className={styles.textarea} />
                    </div>
                  </div>
                  <button type="submit" className="btn-modern" style={{ width: "100%", padding: "16px", fontSize: "16px" }}>
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <span className={styles.successIcon} style={{ fontSize: "36px", color: "var(--primary-color)" }}>
                  <i className="fas fa-check-circle"></i>
                </span>
                <h3 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "12px" }}>Message Sent!</h3>
                <p style={{ marginTop: "8px", fontSize: "16px", lineHeight: "1.7" }}>
                  Thank you, <strong>{formData.name}</strong>. A recruitment advisor will get in touch with you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-modern-outline" style={{ marginTop: "24px" }}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full-width Map Section */}
      <section className={styles.mapSection}>
        <iframe
          src="https://maps.google.com/maps?q=501,%202nd%20Division,%20Maradana,%20Colombo%2010,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="600"
          style={{ border: 0, display: "block" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Al-Falah Travels & Tours Location Map"
        ></iframe>
      </section>
    </>
  );
}
