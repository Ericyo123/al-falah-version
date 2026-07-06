"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./about.module.css";

export default function AboutPage() {
  const [experience, setExperience] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  const counterRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    const autoScroll = () => {
      if (scrollRef.current && setRef.current && !isHovered.current) {
        scrollRef.current.scrollLeft += 1; 
        
        const setWidth = setRef.current.offsetWidth + 20; // exact width of one group + gap
        if (scrollRef.current.scrollLeft >= setWidth) {
          scrollRef.current.scrollLeft -= setWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    autoScroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setExperience(count);
          if (count >= 12) clearInterval(interval);
        }, 80); // Speed of counter
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Page Header */}
      <section className={styles.pageHeader}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.7)" }}>About Us</span>
          <h1>About Our Company</h1>
          <div className={styles.breadcrumb}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <strong style={{ color: "#fff" }}>About Us</strong>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className={styles.whoWeAre}>
        <div className="container">
          <div className="row align-items-center g-5">
            
            {/* LEFT SIDE: Image Grid */}
            <div className="col-lg-6">
               <div className={styles.imageGridMasonry}>
                 <div className={styles.gridColLeft}>
                   <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/about02-img-01.jpg" alt="Team Discussion" className={styles.gridImgTall} />
                   <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/about02-img-03.jpg" alt="Reviewing Resume" className={styles.gridImgShort} />
                 </div>
                 <div className={styles.gridColRight}>
                   <div className={styles.experienceBox} ref={counterRef}>
                     <div className={styles.expNumberBlock}>
                       <div className={styles.expNumber}>{experience}</div>
                       <div className={styles.expPlus}>+</div>
                     </div>
                     <div className={styles.expText}>Years of<br/>experience</div>
                   </div>
                   <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/about02-img-02.jpg" alt="Professional Woman" className={styles.gridImgTallest} />
                 </div>
               </div>
            </div>

            {/* RIGHT SIDE: Content */}
            <div className="col-lg-6">
              <div className={styles.sectionHeaderAlt}>
                <span className={styles.subtitleAlt}>/ WHO ARE WE /</span>
                <h2 className={styles.titleAlt}>
                  Building Success <span className={styles.textBlueAlt}>Together,</span><br/>
                  <span className={styles.textBlueAlt}>hr Solution</span> at Time.
                </h2>
              </div>
              <p className={styles.descAlt}>
                The Candidate Experience process is simple and our research team guide you along the way, then receive full access to all their data and the data in each region where they participate via secure login access to our technology
              </p>
              
              <div className={styles.tabsArea}>
                <div className={styles.tabsList}>
                  <div className={`${styles.tabItem} ${activeTab === 1 ? styles.tabActive : ''}`} onClick={() => setActiveTab(1)}>01. The Great Mission</div>
                  <div className={`${styles.tabItem} ${activeTab === 2 ? styles.tabActive : ''}`} onClick={() => setActiveTab(2)}>02. Amazing Vision</div>
                  <div className={`${styles.tabItem} ${activeTab === 3 ? styles.tabActive : ''}`} onClick={() => setActiveTab(3)}>03. Our Destination</div>
                </div>
                <div className={styles.tabContentPanel}>
                  {activeTab === 1 && (
                    <>
                      <p>Portfolio management for accelerators integrated in one platform to track progress, manage deal flow.</p>
                      <ul className={styles.checkList}>
                        <li><i className="fas fa-check"></i> Explore job roles based of your study</li>
                        <li><i className="fas fa-check"></i> Get job recommendations directly</li>
                      </ul>
                    </>
                  )}
                  {activeTab === 2 && (
                    <>
                      <p>Shine through the noise with thought leadership content and prestigious and well-recognized awards.</p>
                      <ul className={styles.checkList}>
                        <li><i className="fas fa-check"></i> Cultures of recognition and wellbeing</li>
                        <li><i className="fas fa-check"></i> Improving workplace with leadership</li>
                      </ul>
                    </>
                  )}
                  {activeTab === 3 && (
                    <>
                      <p>Our innovative platform processes and improves overall organizational performance see the difference.</p>
                      <ul className={styles.checkList}>
                        <li><i className="fas fa-check"></i> Get job recommendations directly</li>
                        <li><i className="fas fa-check"></i> Cultures of recognition and wellbeing</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.contactRow}>
                <div className={styles.contactBlock}>
                  <div className={styles.contactIcon}><i className="fas fa-paper-plane"></i></div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>Email Us</span>
                    <span className={styles.contactValue}>info@example.com</span>
                  </div>
                </div>
                <div className={styles.contactBlock}>
                  <div className={styles.contactIcon}><i className="fas fa-phone-volume"></i></div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>Have question?</span>
                    <span className={styles.contactValue}>Explore our faq section</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2.5. Flowing Marquee Section */}
      <section className={styles.marqueeSection}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            <span className={styles.marqueeItem}>Employee Training</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Consultation</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Leadership</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Human Resources</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Business Planning</span>
            <span className={styles.marqueeIcon}>✦</span>
            
            {/* Duplicate for seamless infinite loop */}
            <span className={styles.marqueeItem}>Employee Training</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Consultation</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Leadership</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Human Resources</span>
            <span className={styles.marqueeIcon}>✦</span>
            <span className={styles.marqueeItem}>Business Planning</span>
            <span className={styles.marqueeIcon}>✦</span>
          </div>
        </div>
      </section>

      {/* 3. Our Team of Experts Section (Orbital Layout) */}
      <section className={styles.orbitalTeam}>
        <div className={styles.orbitalContainer}>
          {/* Orbital rings */}
          <div className={styles.ring} style={{ width: '600px', height: '600px' }}></div>
          <div className={styles.ring} style={{ width: '1000px', height: '1000px' }}></div>
          <div className={styles.ring} style={{ width: '1400px', height: '1400px' }}></div>

          {/* Floating Avatars */}
          <div className={`${styles.avatar} ${styles.avatar1}`}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" />
          </div>
          <div className={`${styles.avatar} ${styles.avatar2}`}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" />
          </div>
          <div className={`${styles.avatar} ${styles.avatar3}`}>
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team member" />
          </div>
          <div className={`${styles.avatar} ${styles.avatar4}`}>
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Team member" />
          </div>
          <div className={`${styles.avatar} ${styles.avatar5}`}>
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Team member" />
          </div>
          <div className={`${styles.avatar} ${styles.avatar6}`}>
            <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="Team member" />
          </div>

          {/* Center Content */}
          <div className={styles.orbitalCenter}>
            <span className={styles.subtitleAlt} style={{ display: 'inline-block', marginBottom: '15px' }}>/ LEADERSHIP /</span>
            <h2 className={styles.titleAlt} style={{ fontSize: '54px', marginBottom: '25px', lineHeight: '1.2' }}>
              Our Team of <span className={styles.textBlueAlt}>Experts is</span><br/>
              <span className={styles.textBlueAlt}>Toady</span> to Assist You
            </h2>
            <p className={styles.descAlt} style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '15px' }}>
              Recruitment services, often provided by specialized agencies or firms, offer organizations assistance in identifying, attracting, and hiring suitable candidates for their job openings.
            </p>
            <div className={styles.btnGroupCenter}>
              <Link href="/contact" className={styles.btnPrimary}>Get Consult <i className="fas fa-location-arrow" style={{ transform: 'rotate(45deg)', fontSize: '12px' }}></i></Link>
              <Link href="/team" className={styles.btnText}>Meet Our Team <i className="fas fa-location-arrow" style={{ transform: 'rotate(45deg)', fontSize: '12px' }}></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.subtitle}>how it works</span>
            <h2 className={styles.title}>Steps of Recruitment Process</h2>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>01</div>
                <h3 className={styles.stepTitle}>Identifying the Needs</h3>
                <p className={styles.stepDesc}>Hear from industry leading HR professionals and solution providers in different Needs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>02</div>
                <h3 className={styles.stepTitle}>Preparing a Job Description</h3>
                <p className={styles.stepDesc}>Access to all of your candidate responses and against global aggregate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>03</div>
                <h3 className={styles.stepTitle}>Find a Talented Candidate</h3>
                <p className={styles.stepDesc}>Companies are backing up their strategic decisions with informed and insightful research</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>04</div>
                <h3 className={styles.stepTitle}>Screening and Shortlisting</h3>
                <p className={styles.stepDesc}>Make smart decisions with our guide to solution and service an expert Knowledge Advisor through</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (Center Image Layout) */}
      <section className={styles.whyChooseUsCenter}>
        <div className="container">
          
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: '60px' }}>
            <span className={styles.subtitleAlt} style={{ display: 'inline-block', marginBottom: '15px' }}>/ WHY CHOOSE US? /</span>
            <h2 className={styles.titleAlt} style={{ fontSize: '42px', margin: '0', lineHeight: '1.2' }}>
              We choose a human resources?
            </h2>
          </div>

          <div className="row align-items-center">
            
            {/* Left Features */}
            <div className="col-lg-4">
              <div className={styles.featureItemLeft}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Corporate Programs</h4>
                  <p className={styles.featDescBox}>Insights by consulting an expert Knowledge Advisor through call, email or chat.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-users-cog"></i></div>
              </div>
              <div className={styles.featureItemLeft}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Deeper Talent Pools</h4>
                  <p className={styles.featDescBox}>Analysis emphasizing HR’s pivotal and strategic significance development resources.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-id-badge"></i></div>
              </div>
              <div className={styles.featureItemLeft}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Leadership Training</h4>
                  <p className={styles.featDescBox}>Empower your future leaders with our targeted training sessions, designed to build critical skills.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-user-tie"></i></div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-4">
              <div className={styles.centerImageWrapper}>
                <div className={styles.bgShape1}></div>
                <div className={styles.bgShape2}></div>
                <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/about02-img-03.jpg" alt="Center Human Resources" className={styles.centerImg} />
              </div>
            </div>

            {/* Right Features */}
            <div className="col-lg-4">
              <div className={styles.featureItemRight}>
                <div className={styles.featIconBox}><i className="fas fa-chart-line"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Increase Efficiencies</h4>
                  <p className={styles.featDescBox}>Build your skill set and advance your career with award-winning programs Efficiencies.</p>
                </div>
              </div>
              <div className={styles.featureItemRight}>
                <div className={styles.featIconBox}><i className="fas fa-user-shield"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Onboarding Support</h4>
                  <p className={styles.featDescBox}>Access essential tool your day-to-day efforts and give you a professional edge, from handbook.</p>
                </div>
              </div>
              <div className={styles.featureItemRight}>
                <div className={styles.featIconBox}><i className="fas fa-search"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Recruitment Solutions</h4>
                  <p className={styles.featDescBox}>We tap into deeper, global talent pools to find the exact specialized candidates you need.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials (Slider Cards) */}
      <section className={styles.testimonialsSection}>
        {/* Decorative Background Elements */}
        <div className={styles.testiBgShape1}>
           <i className="fas fa-quote-right"></i>
        </div>
        <div className={styles.testiBgShape2}></div>
        
        <div className="container" style={{ marginBottom: '40px', position: 'relative', zIndex: 2 }}>
          <div className={styles.sectionHeaderFlex}>
            <div>
              <span className={styles.subtitleAlt} style={{ display: 'inline-block', marginBottom: '15px' }}>/ FEEDBACK /</span>
              <h2 className={styles.titleAlt} style={{ fontSize: '42px', margin: '0', lineHeight: '1.2' }}>
                What Our Happy <span className={styles.textBlueAlt}>Client</span> Say<br/> About Us
              </h2>
            </div>
          </div>
        </div>
        
        {/* Slider Track for Cards */}
        <div 
          className={styles.testimonialMarqueeContainer} 
          ref={scrollRef}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <div className={styles.testimonialMarqueeTrack}>
            
            {/* Set 1 (Tracked for exact width) */}
            <div className={styles.marqueeSet} ref={setRef}>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "The recruitment process was seamless. They understood our requirements perfectly and found the right match. We are extremely pleased with the outcome and the quality of hires."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-01.jpg" alt="Client 1" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Evangeline Lee</h5>
                    <span className={styles.tRole}>HR Manager</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "Highly professional team. They provided us with top-tier candidates and exceptional consultation services. They took the time to understand our culture and business needs."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-02.jpg" alt="Client 2" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Adeline Wood</h5>
                    <span className={styles.tRole}>CEO, TechCorp</span>
                  </div>
                </div>
              </div>

              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "As a busy professional, I needed a program that would accommodate my schedule and provide relevant knowledge. This delivered on all fronts. The service was well-structured."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-03.jpg" alt="Client 3" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Naomi Violet</h5>
                    <span className={styles.tRole}>Satisfied Client</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Set 2 (Duplicate) */}
            <div className={styles.marqueeSet}>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "The recruitment process was seamless. They understood our requirements perfectly and found the right match. We are extremely pleased with the outcome and the quality of hires."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-01.jpg" alt="Client 1" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Evangeline Lee</h5>
                    <span className={styles.tRole}>HR Manager</span>
                  </div>
                </div>
              </div>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "Highly professional team. They provided us with top-tier candidates and exceptional consultation services. They took the time to understand our culture and business needs."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-02.jpg" alt="Client 2" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Adeline Wood</h5>
                    <span className={styles.tRole}>CEO, TechCorp</span>
                  </div>
                </div>
              </div>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "As a busy professional, I needed a program that would accommodate my schedule and provide relevant knowledge. This delivered on all fronts. The service was well-structured."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-03.jpg" alt="Client 3" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Naomi Violet</h5>
                    <span className={styles.tRole}>Satisfied Client</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Set 3 (Duplicate for deep infinite runway) */}
            <div className={styles.marqueeSet}>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "The recruitment process was seamless. They understood our requirements perfectly and found the right match. We are extremely pleased with the outcome and the quality of hires."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-01.jpg" alt="Client 1" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Evangeline Lee</h5>
                    <span className={styles.tRole}>HR Manager</span>
                  </div>
                </div>
              </div>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "Highly professional team. They provided us with top-tier candidates and exceptional consultation services. They took the time to understand our culture and business needs."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-02.jpg" alt="Client 2" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Adeline Wood</h5>
                    <span className={styles.tRole}>CEO, TechCorp</span>
                  </div>
                </div>
              </div>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "As a busy professional, I needed a program that would accommodate my schedule and provide relevant knowledge. This delivered on all fronts. The service was well-structured."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-03.jpg" alt="Client 3" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Naomi Violet</h5>
                    <span className={styles.tRole}>Satisfied Client</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Set 4 (Duplicate for deep infinite runway) */}
            <div className={styles.marqueeSet}>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "The recruitment process was seamless. They understood our requirements perfectly and found the right match. We are extremely pleased with the outcome and the quality of hires."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-01.jpg" alt="Client 1" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Evangeline Lee</h5>
                    <span className={styles.tRole}>HR Manager</span>
                  </div>
                </div>
              </div>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "Highly professional team. They provided us with top-tier candidates and exceptional consultation services. They took the time to understand our culture and business needs."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-02.jpg" alt="Client 2" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Adeline Wood</h5>
                    <span className={styles.tRole}>CEO, TechCorp</span>
                  </div>
                </div>
              </div>
              <div className={styles.tCardFlow}>
                <div className={styles.quoteIconBlue}><i className="fas fa-quote-left"></i></div>
                <p className={styles.tTextFlow}>
                  "As a busy professional, I needed a program that would accommodate my schedule and provide relevant knowledge. This delivered on all fronts. The service was well-structured."
                </p>
                <div className={styles.tClientFlex}>
                  <img src="https://xhyre-demo.pbminfotech.com/demo3/wp-content/uploads/sites/5/2024/11/testimonial-img-03.jpg" alt="Client 3" className={styles.tClientAvatar} />
                  <div className={styles.tClientMetaFlex}>
                    <h5 className={styles.tName}>Naomi Violet</h5>
                    <span className={styles.tRole}>Satisfied Client</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
