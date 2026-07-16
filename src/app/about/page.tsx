"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import RecruitmentProcess from "@/components/RecruitmentProcess";
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
                  Global Manpower <span className={styles.textBlueAlt}>Recruitment</span><br/>
                  <span className={styles.textBlueAlt}>Agency</span> in Sri Lanka.
                </h2>
              </div>
              <p className={styles.descAlt}>
                AL-FALAH TRAVELS & TOURS is one of the fastest-growing recruitment agencies, providing unrivaled human resource and talent management solutions to meet overseas recruitment needs. It offers a flexible recruitment service that can be availed on both a retained and non-retained basis.
              </p>
              
              <div className={styles.tabsArea}>
                <div className={styles.tabsList}>
                  <div className={`${styles.tabItem} ${activeTab === 1 ? styles.tabActive : ''}`} onClick={() => setActiveTab(1)}>01. Our Mission</div>
                  <div className={`${styles.tabItem} ${activeTab === 2 ? styles.tabActive : ''}`} onClick={() => setActiveTab(2)}>02. Our Vision</div>
                  <div className={`${styles.tabItem} ${activeTab === 3 ? styles.tabActive : ''}`} onClick={() => setActiveTab(3)}>03. Our Expertise</div>
                </div>
                <div className={styles.tabContentPanel}>
                  {activeTab === 1 && (
                    <>
                      <p>We will achieve our vision by partnering with our clients to recruit, manage and retain their workforce using our outstanding knowledge.</p>
                      <ul className={styles.checkList}>
                        <li><i className="fas fa-check"></i> Source the most talented candidates</li>
                        <li><i className="fas fa-check"></i> Outstanding industry knowledge</li>
                      </ul>
                    </>
                  )}
                  {activeTab === 2 && (
                    <>
                      <p>We work hard to achieve our goals together as a team with a clear shared purpose. We adapt to our clients changing needs as well as changes in the market.</p>
                      <ul className={styles.checkList}>
                        <li><i className="fas fa-check"></i> Shared team purpose and goals</li>
                        <li><i className="fas fa-check"></i> Business of growth and success</li>
                      </ul>
                    </>
                  )}
                  {activeTab === 3 && (
                    <>
                      <p>Thanks to extensive industry experience, our recruiters are adept at finding the right candidate for your organization—someone who possesses the right skill set.</p>
                      <ul className={styles.checkList}>
                        <li><i className="fas fa-check"></i> Extensive industry experience</li>
                        <li><i className="fas fa-check"></i> Aligns with your company's culture</li>
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
                    <span className={styles.contactValue}>alfalah.overseas@gmail.com</span>
                  </div>
                </div>
                <div className={styles.contactBlock}>
                  <div className={styles.contactIcon}><i className="fas fa-phone-volume"></i></div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>Call Us</span>
                    <span className={styles.contactValue}>+94 112 669 489</span>
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
            <span className={styles.subtitleAlt} style={{ display: 'inline-block', marginBottom: '15px' }}>/ RECOGNITION /</span>
            <h2 className={styles.titleAlt} style={{ fontSize: '54px', marginBottom: '25px', lineHeight: '1.2' }}>
              SLBFE 3-Star <br/><span className={styles.textBlueAlt}>Golden Award</span>
            </h2>
            <p className={styles.descAlt} style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '15px' }}>
              Proud recipient of the prestigious SLBFE 3-Star Golden Award for outstanding performance and excellence in foreign recruitment consultancy during the year 2023/2022. This reflects our dedication to maintaining the highest standards.
            </p>
            <div className={styles.btnGroupCenter}>
              <Link href="/contact" className={styles.btnPrimary}>Get Consult <i className="fas fa-location-arrow" style={{ transform: 'rotate(45deg)', fontSize: '12px' }}></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Recruitment Process Component */}
      <RecruitmentProcess />

      {/* 5. Why Choose Us (Center Image Layout) */}
      <section className={styles.whyChooseUsCenter}>
        <div className="container">
          
          <div className={`${styles.sectionHeaderCentered} ${styles.whyChooseHeader}`}>
            <span className={styles.subtitleAlt} style={{ display: 'inline-block', marginBottom: '15px' }}>/ WHY CHOOSE US? /</span>
            <h2 className={`${styles.titleAlt} ${styles.whyChooseTitle}`}>
              Why Choose Al Falah Travels & Tours?
            </h2>
          </div>

          <div className="row align-items-center">
            
            {/* Left Features */}
            <div className="col-lg-4">
              <div className={styles.featureItemLeft}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Government-Approved</h4>
                  <p className={styles.featDescBox}>We are a fully licensed and Government-Approved Recruitment Agency.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-file-contract"></i></div>
              </div>
              <div className={styles.featureItemLeft}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Fast & Transparent</h4>
                  <p className={styles.featDescBox}>Experience a fast, transparent, and hassle-free hiring process.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-bolt"></i></div>
              </div>
              <div className={styles.featureItemLeft}>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Skilled Candidates</h4>
                  <p className={styles.featDescBox}>We source highly skilled and thoroughly verified candidates for your roles.</p>
                </div>
                <div className={styles.featIconBox}><i className="fas fa-user-check"></i></div>
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
                <div className={styles.featIconBox}><i className="fas fa-hand-holding-usd"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Cost-Effective</h4>
                  <p className={styles.featDescBox}>We offer highly competitive and cost-effective recruitment packages.</p>
                </div>
              </div>
              <div className={styles.featureItemRight}>
                <div className={styles.featIconBox}><i className="fas fa-globe-asia"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Strong Network</h4>
                  <p className={styles.featDescBox}>Benefit from our massive and strong network across the Middle East.</p>
                </div>
              </div>
              <div className={styles.featureItemRight}>
                <div className={styles.featIconBox}><i className="fas fa-history"></i></div>
                <div className={styles.featTextBox}>
                  <h4 className={styles.featTitleBox}>Decades of Experience</h4>
                  <p className={styles.featDescBox}>Leveraging decades of extensive experience in overseas placement.</p>
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
              <h2 className={`${styles.titleAlt} ${styles.feedbackTitle}`}>
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
