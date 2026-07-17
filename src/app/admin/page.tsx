"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";

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
  createdAt?: string;
}

interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  experience: string;
  message: string;
  status: string;
  submittedAt: string;
}

const EMPTY_JOB: Omit<Job, "id"> = {
  title: "",
  company: "",
  location: "",
  type: "Full-Time",
  category: "technical",
  salary: "",
  desc: "",
};

const CATEGORIES = [
  { value: "engineering", label: "Engineering & Civil" },
  { value: "technical", label: "Technical & Trades" },
  { value: "hospitality", label: "Hospitality & Culinary" },
  { value: "logistics", label: "Logistics & Heavy Ops" },
  { value: "healthcare", label: "Healthcare & Nursing" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"jobs" | "applications">("jobs");

  // Jobs state
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [showJobModal, setShowJobModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobForm, setJobForm] = useState(EMPTY_JOB);
  const [jobSaving, setJobSaving] = useState(false);

  // Applications state
  const [applications, setApplications] = useState<Application[]>([]);
  const [appsLoading, setAppsLoading] = useState(true);

  // Delete confirmation
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // ── Auth Check ──
  useEffect(() => {
    const storedToken = localStorage.getItem("admin_token");
    if (!storedToken) {
      router.push("/admin/login");
      return;
    }
    setToken(storedToken);
  }, [router]);

  // ── Fetch Jobs ──
  const fetchJobs = useCallback(async () => {
    if (!token) return;
    setJobsLoading(true);
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch {
      showToast("Failed to load jobs", "error");
    } finally {
      setJobsLoading(false);
    }
  }, [token]);

  // ── Fetch Applications ──
  const fetchApplications = useCallback(async () => {
    if (!token) return;
    setAppsLoading(true);
    try {
      const res = await fetch("/api/applications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setApplications(data.applications || []);
    } catch {
      showToast("Failed to load applications", "error");
    } finally {
      setAppsLoading(false);
    }
  }, [token, router]);

  useEffect(() => {
    if (token) {
      fetchJobs();
      fetchApplications();
    }
  }, [token, fetchJobs, fetchApplications]);

  // ── Toast ──
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Job CRUD ──
  const openAddJob = () => {
    setEditingJob(null);
    setJobForm(EMPTY_JOB);
    setShowJobModal(true);
  };

  const openEditJob = (job: Job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      category: job.category,
      salary: job.salary,
      desc: job.desc,
    });
    setShowJobModal(true);
  };

  const saveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobSaving(true);

    try {
      const url = editingJob ? `/api/jobs/${editingJob.id}` : "/api/jobs";
      const method = editingJob ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobForm),
      });

      if (res.status === 401) {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        showToast(data.error || "Failed to save job", "error");
        return;
      }

      showToast(
        editingJob ? "Job updated successfully" : "Job created successfully",
        "success"
      );
      setShowJobModal(false);
      fetchJobs();
    } catch {
      showToast("Network error", "error");
    } finally {
      setJobSaving(false);
    }
  };

  const deleteJob = async (id: string) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
        return;
      }

      if (!res.ok) {
        showToast("Failed to delete job", "error");
        return;
      }

      showToast("Job deleted", "success");
      setDeletingId(null);
      fetchJobs();
    } catch {
      showToast("Network error", "error");
    }
  };

  // ── Logout ──
  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };

  if (!token) return null;

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Admin Panel</span>
        </div>

        <nav className={styles.sidebarNav}>
          <button
            className={`${styles.navItem} ${activeTab === "jobs" ? styles.navActive : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Manage Jobs
          </button>
          <button
            className={`${styles.navItem} ${activeTab === "applications" ? styles.navActive : ""}`}
            onClick={() => setActiveTab("applications")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Applications
            {applications.filter((a) => a.status === "new").length > 0 && (
              <span className={styles.badge}>
                {applications.filter((a) => a.status === "new").length}
              </span>
            )}
          </button>
        </nav>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.topBar}>
          <div>
            <h1 className={styles.pageTitle}>
              {activeTab === "jobs" ? "Manage Jobs" : "Job Applications"}
            </h1>
            <p className={styles.pageSubtitle}>
              {activeTab === "jobs"
                ? `${jobs.length} job${jobs.length !== 1 ? "s" : ""} listed`
                : `${applications.length} application${applications.length !== 1 ? "s" : ""} received`}
            </p>
          </div>
          {activeTab === "jobs" && (
            <button className={styles.addBtn} onClick={openAddJob}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add New Job
            </button>
          )}
        </header>

        {/* Jobs Tab */}
        {activeTab === "jobs" && (
          <div className={styles.contentArea}>
            {jobsLoading ? (
              <div className={styles.loadingState}>
                <div className={styles.spinner} />
                <p>Loading jobs...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div className={styles.emptyState}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <h3>No jobs yet</h3>
                <p>Click &ldquo;Add New Job&rdquo; to create your first job listing.</p>
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Job Title</th>
                      <th>Company</th>
                      <th>Location</th>
                      <th>Category</th>
                      <th>Type</th>
                      <th>Salary</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id}>
                        <td className={styles.titleCell}>{job.title}</td>
                        <td>{job.company}</td>
                        <td>{job.location}</td>
                        <td>
                          <span className={styles.categoryBadge}>
                            {CATEGORIES.find((c) => c.value === job.category)?.label || job.category}
                          </span>
                        </td>
                        <td>{job.type}</td>
                        <td className={styles.salaryCell}>{job.salary}</td>
                        <td>
                          <div className={styles.actions}>
                            <button
                              className={styles.editBtn}
                              onClick={() => openEditJob(job)}
                              title="Edit"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                            </button>
                            <button
                              className={styles.deleteBtn}
                              onClick={() => setDeletingId(job.id)}
                              title="Delete"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className={styles.contentArea}>
            {appsLoading ? (
              <div className={styles.loadingState}>
                <div className={styles.spinner} />
                <p>Loading applications...</p>
              </div>
            ) : applications.length === 0 ? (
              <div className={styles.emptyState}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                </svg>
                <h3>No applications yet</h3>
                <p>When job seekers apply, their applications will appear here.</p>
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Applicant</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Job Applied For</th>
                      <th>Nationality</th>
                      <th>Experience</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.id}>
                        <td className={styles.titleCell}>{app.fullName}</td>
                        <td>
                          <a href={`mailto:${app.email}`} className={styles.emailLink}>
                            {app.email}
                          </a>
                        </td>
                        <td>{app.phone}</td>
                        <td>
                          <span className={styles.categoryBadge}>{app.jobTitle}</span>
                        </td>
                        <td>{app.nationality || "—"}</td>
                        <td>{app.experience || "—"}</td>
                        <td>
                          <span
                            className={`${styles.statusBadge} ${
                              app.status === "new" ? styles.statusNew : styles.statusReviewed
                            }`}
                          >
                            {app.status === "new" ? "New" : "Reviewed"}
                          </span>
                        </td>
                        <td className={styles.dateCell}>
                          {new Date(app.submittedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Add/Edit Job Modal */}
      {showJobModal && (
        <div className={styles.modalOverlay} onClick={() => setShowJobModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{editingJob ? "Edit Job" : "Add New Job"}</h2>
              <button className={styles.modalClose} onClick={() => setShowJobModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <form onSubmit={saveJob} className={styles.modalForm}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Job Title *</label>
                  <input
                    type="text"
                    value={jobForm.title}
                    onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                    placeholder="e.g. Senior Electrical Technician"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Company *</label>
                  <input
                    type="text"
                    value={jobForm.company}
                    onChange={(e) => setJobForm({ ...jobForm, company: e.target.value })}
                    placeholder="e.g. Al-Rashed Contracting Co."
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Location *</label>
                  <input
                    type="text"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                    placeholder="e.g. Riyadh, Saudi Arabia"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Salary *</label>
                  <input
                    type="text"
                    value={jobForm.salary}
                    onChange={(e) => setJobForm({ ...jobForm, salary: e.target.value })}
                    placeholder="e.g. 3,200 - 4,000 SAR / Mo."
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Category *</label>
                  <select
                    value={jobForm.category}
                    onChange={(e) => setJobForm({ ...jobForm, category: e.target.value })}
                    required
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Job Type *</label>
                  <select
                    value={jobForm.type}
                    onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                    required
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroupFull}>
                <label>Description *</label>
                <textarea
                  value={jobForm.desc}
                  onChange={(e) => setJobForm({ ...jobForm, desc: e.target.value })}
                  placeholder="Describe the job responsibilities, requirements, and benefits..."
                  rows={4}
                  required
                />
              </div>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowJobModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.saveBtn}
                  disabled={jobSaving}
                >
                  {jobSaving ? (
                    <span className={styles.loginSpinner} />
                  ) : editingJob ? (
                    "Update Job"
                  ) : (
                    "Create Job"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingId && (
        <div className={styles.modalOverlay} onClick={() => setDeletingId(null)}>
          <div className={styles.confirmModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.confirmIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h3>Delete This Job?</h3>
            <p>This action cannot be undone. The job listing will be permanently removed.</p>
            <div className={styles.confirmActions}>
              <button className={styles.cancelBtn} onClick={() => setDeletingId(null)}>
                Cancel
              </button>
              <button className={styles.deleteBtnConfirm} onClick={() => deleteJob(deletingId)}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className={`${styles.toast} ${toast.type === "error" ? styles.toastError : styles.toastSuccess}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
