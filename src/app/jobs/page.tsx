"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./jobs.module.css";

// ── Types ──
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  desc: string;
}

// ── Fallback jobs (shown if API is not configured yet) ──
const FALLBACK_JOBS: Job[] = [
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
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  // Apply Modal State
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    experience: "",
    message: "",
    cvBase64: "",
    cvName: "",
  });
  const [applySubmitting, setApplySubmitting] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("CV file size must be less than 1MB. Please compress your PDF or upload a smaller file.");
      e.target.value = ""; // Reset
      setApplyForm((prev) => ({
        ...prev,
        cvBase64: "",
        cvName: ""
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setApplyForm((prev) => ({
        ...prev,
        cvBase64: reader.result as string,
        cvName: file.name
      }));
    };
    reader.readAsDataURL(file);
  };

  // ── Fetch jobs from API ──
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data = await res.json();
          if (data.jobs && data.jobs.length > 0) {
            setAllJobs(data.jobs);
          } else {
            // API connected but no jobs in database yet — use fallback
            setAllJobs(FALLBACK_JOBS);
          }
        } else {
          // API not configured — use fallback
          setAllJobs(FALLBACK_JOBS);
        }
      } catch {
        // API error — use fallback
        setAllJobs(FALLBACK_JOBS);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // ── Filter logic ──
  const filterJobs = useCallback(() => {
    let results = allJobs;

    if (keyword) {
      const kw = keyword.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(kw) ||
          job.company.toLowerCase().includes(kw) ||
          job.desc.toLowerCase().includes(kw)
      );
    }

    if (location) {
      const loc = location.toLowerCase();
      results = results.filter((job) =>
        job.location.toLowerCase().includes(loc)
      );
    }

    if (category !== "all") {
      results = results.filter((job) => job.category === category);
    }

    if (jobType !== "all") {
      results = results.filter((job) => job.type === jobType);
    }

    setFilteredJobs(results);
  }, [allJobs, keyword, location, category, jobType]);

  useEffect(() => {
    filterJobs();
  }, [filterJobs]);

  // ── Apply Handlers ──
  const openApplyModal = (job: Job) => {
    setApplyingJob(job);
    setApplyForm({
      fullName: "",
      email: "",
      phone: "",
      nationality: "",
      experience: "",
      message: "",
      cvBase64: "",
      cvName: "",
    });
    setApplySuccess(false);
    setShowApplyModal(true);
  };

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob) return;
    setApplySubmitting(true);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: applyingJob.id,
          jobTitle: applyingJob.title,
          ...applyForm,
        }),
      });

      if (res.ok) {
        setApplySuccess(true);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setApplySubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={`container ${styles.layout}`}>
        <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "80px 0" }}>
          <p>Loading open opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`container ${styles.layout}`}>
        {/* Sidebar Filter Panel */}
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterHeading}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Search Jobs
            </h3>
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
            <h3 className={styles.filterHeading}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Industry
            </h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.select}
            >
              <option value="all">All Industries</option>
              <option value="engineering">Engineering &amp; Civil</option>
              <option value="technical">Technical &amp; Trades</option>
              <option value="hospitality">Hospitality &amp; Culinary</option>
              <option value="logistics">Logistics &amp; Heavy Ops</option>
              <option value="healthcare">Healthcare &amp; Nursing</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <h3 className={styles.filterHeading}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Job Type
            </h3>
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
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      {job.company}
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {job.location}
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      {job.salary}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "15px" }}>{job.desc}</p>
                  <div className={styles.jobTags}>
                    <span className={`${styles.tag} ${styles.tagPrimary}`}>{job.type}</span>
                    <span className={styles.tag}>{job.category}</span>
                  </div>
                </div>
                <button onClick={() => openApplyModal(job)} className="btn-modern-outline">Apply Now</button>
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

      {/* Apply Now Modal */}
      {showApplyModal && applyingJob && (
        <div className={styles.applyOverlay} onClick={() => setShowApplyModal(false)}>
          <div className={styles.applyModal} onClick={(e) => e.stopPropagation()}>
            {!applySuccess ? (
              <>
                <div className={styles.applyHeader}>
                  <div>
                    <h2>Apply for this Position</h2>
                    <p className={styles.applyJobTitle}>{applyingJob.title}</p>
                    <p className={styles.applyJobCompany}>{applyingJob.company} — {applyingJob.location}</p>
                  </div>
                  <button className={styles.applyClose} onClick={() => setShowApplyModal(false)} style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                    ✕
                  </button>
                </div>
                <form onSubmit={submitApplication} className={styles.applyForm}>
                  <div className={styles.applyGrid}>
                    <div className={styles.applyField}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={applyForm.fullName}
                        onChange={(e) => setApplyForm({ ...applyForm, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className={styles.applyField}>
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className={styles.applyFieldFull}>
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+94 77 123 4567"
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.applyFieldFull} style={{ marginBottom: '24px' }}>
                    <label>Upload CV / Resume (PDF or Doc - Max 1MB) *</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      style={{ padding: '8px 12px' }}
                    />
                    {applyForm.cvName && (
                      <div style={{ color: '#059669', fontSize: '13px', marginTop: '6px', fontWeight: '500' }}>
                        ✓ Selected: {applyForm.cvName}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={styles.applySubmitBtn}
                    disabled={applySubmitting}
                  >
                    {applySubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.applySuccessState}>
                <div className={styles.applySuccessIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Application Submitted!</h3>
                <p>Thank you for applying to <strong>{applyingJob.title}</strong>. Our recruitment team will review your application and get in touch shortly.</p>
                <button
                  className={styles.applySubmitBtn}
                  onClick={() => setShowApplyModal(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function JobsPage() {
  return (
    <>
      {/* Titlebar Banner */}
      <section className={styles.titlebar}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="accent-pill-label text-white-force" style={{ marginBottom: "16px", display: "inline-block" }}>Find Jobs</span>
          <h1>Explore Job<br />Opportunities</h1>
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
