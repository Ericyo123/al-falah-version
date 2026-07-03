"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./jobs.module.css";

// Mock Database of Jobs
const JOBS_DB = [
  {
    id: "1",
    title: "Senior Electrical & PLC Technician",
    company: "Al-Rashed Contracting Co.",
    location: "Riyadh, Saudi Arabia",
    type: "Full-Time",
    category: "technical",
    salary: "3,200 - 4,000 SAR / Mo.",
    desc: "Oversee commercial electrical panel boards, installation, diagnostics, and PLC troubleshooting on-site.",
  },
  {
    id: "2",
    title: "Executive Chef / F&B Kitchen Lead",
    company: "Hilton Plaza Hotels",
    location: "Doha, Qatar",
    type: "Full-Time",
    category: "hospitality",
    salary: "5,500 - 7,000 QAR / Mo.",
    desc: "Supervise production of high-end international culinary dishes, menu design, and kitchen staff schedules.",
  },
  {
    id: "3",
    title: "HVAC Maintenance Technician",
    company: "Gulf Infra Services",
    location: "Dubai, UAE",
    type: "Full-Time",
    category: "technical",
    salary: "2,500 - 3,200 AED / Mo.",
    desc: "Perform preventative maintenance, compressor repair, and system diagnostics for central AC plants.",
  },
  {
    id: "4",
    title: "Heavy Crane & Rigging Operator",
    company: "Kuwait Oilfield Services",
    location: "Kuwait City, Kuwait",
    type: "Full-Time",
    category: "logistics",
    salary: "320 - 380 KWD / Mo.",
    desc: "Safely operate heavy cranes, rigging systems, and load transport machinery in oil & gas facilities.",
  },
  {
    id: "5",
    title: "Clinical Nursing Assistant",
    company: "Al-Amal Medical Group",
    location: "Abu Dhabi, UAE",
    type: "Full-Time",
    category: "healthcare",
    salary: "4,500 - 5,500 AED / Mo.",
    desc: "Assist registered staff in patient check-in, bedside care, records management, and ward coordination.",
  },
  {
    id: "6",
    title: "Civil Site Surveyor",
    company: "Bahrain Development Group",
    location: "Manama, Bahrain",
    type: "Full-Time",
    category: "engineering",
    salary: "400 - 500 BHD / Mo.",
    desc: "Lead geographical mapping, surveying, site leveling, and coordination with lead project architects.",
  },
];

function JobsListContent() {
  const searchParams = useSearchParams();
  const initialKeyword = searchParams.get("keyword") || "";
  const initialLocation = searchParams.get("location") || "";

  const [keyword, setKeyword] = useState(initialKeyword);
  const [location, setLocation] = useState(initialLocation);
  const [category, setCategory] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [filteredJobs, setFilteredJobs] = useState(JOBS_DB);

  useEffect(() => {
    let results = JOBS_DB;

    // Filter by keyword
    if (keyword) {
      const kw = keyword.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(kw) ||
          job.company.toLowerCase().includes(kw) ||
          job.desc.toLowerCase().includes(kw)
      );
    }

    // Filter by location
    if (location) {
      const loc = location.toLowerCase();
      results = results.filter((job) =>
        job.location.toLowerCase().includes(loc)
      );
    }

    // Filter by category
    if (category !== "all") {
      results = results.filter((job) => job.category === category);
    }

    // Filter by type
    if (jobType !== "all") {
      results = results.filter((job) => job.type === jobType);
    }

    setFilteredJobs(results);
  }, [keyword, location, category, jobType]);

  return (
    <div className={`container ${styles.layout}`}>
      {/* Sidebar Filter Panel */}
      <aside className={styles.sidebar}>
        <div className={styles.filterGroup}>
          <h3>Search Jobs</h3>
          <input
            type="text"
            placeholder="Keywords (e.g. React)..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.filterGroup}>
          <h3>Industry</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
          >
            <option value="all">All Industries</option>
            <option value="engineering">Engineering & Civil</option>
            <option value="technical">Technical & Trades</option>
            <option value="hospitality">Hospitality & Culinary</option>
            <option value="logistics">Logistics & Heavy Ops</option>
            <option value="healthcare">Healthcare & Nursing</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <h3>Job Type</h3>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className={styles.select}
          >
            <option value="all">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </aside>

      {/* Listings Section */}
      <main className={styles.listings}>
        <div className={styles.resultsMeta}>
          <p>
            Showing <strong>{filteredJobs.length}</strong> Jobs
          </p>
        </div>

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobDetails}>
                <h2 className={styles.jobTitle}>{job.title}</h2>
                <div className={styles.jobMeta}>
                  <span className="d-inline-flex align-items-center gap-1">
                    <i className="far fa-building" style={{ color: "var(--pbmit-xhyre-global-color)" }}></i> {job.company}
                  </span>
                  <span className="d-inline-flex align-items-center gap-1">
                    <i className="pbmit-base-icon-location" style={{ color: "var(--pbmit-xhyre-global-color)" }}></i> {job.location}
                  </span>
                  <span className="d-inline-flex align-items-center gap-1">
                    <i className="pbmit-base-icon-dollar" style={{ color: "var(--pbmit-xhyre-global-color)" }}></i> {job.salary}
                  </span>
                </div>
                <p style={{ marginTop: "10px", fontSize: "15px" }}>{job.desc}</p>
                <div className={styles.jobTags}>
                  <span className={`${styles.tag} ${styles.tagPrimary}`}>{job.type}</span>
                  <span className={styles.tag}>{job.category}</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-outline">
                Apply Now
              </Link>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            <span className={styles.noResultsIcon}>
              <i className="pbmit-base-icon-search-2" style={{ fontSize: "50px", color: "var(--pbmit-xhyre-global-color)" }}></i>
            </span>
            <h3>No Jobs Found</h3>
            <p style={{ marginTop: "8px" }}>Try adjusting your keyword filters or locations.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default function JobsPage() {
  return (
    <>
      {/* Titlebar Banner */}
      <section className={styles.titlebar}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.7)" }}>Careers</span>
          <h1>Explore Job Opportunities</h1>
          <div className={styles.breadcrumb}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <strong style={{ color: "#fff" }}>Jobs</strong>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.contentArea}>
        <Suspense fallback={
          <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
            <p>Loading open opportunities...</p>
          </div>
        }>
          <JobsListContent />
        </Suspense>
      </section>
    </>
  );
}
