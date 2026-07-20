"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Reset scroll positions immediately across all document containers (fail-safe reset)
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    // Delayed reset for React mount / Next.js layout transitions
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }, 100);

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger and clear existing instances on route change to prevent duplicate triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Helper to check if an element is already in the viewport on load
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight;
    };

    // 1. Slide Up + Fade In (Subtle, professional scroll reveal)
    gsap.utils.toArray(".gsap-reveal-up").forEach((el: any) => {
      if (isInViewport(el)) {
        gsap.fromTo(el, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out",
            delay: 0.05
          }
        );
      } else {
        gsap.fromTo(el, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    // 2. Fade In / Zoom In (Subtle)
    gsap.utils.toArray(".gsap-reveal-in").forEach((el: any) => {
      if (isInViewport(el)) {
        gsap.fromTo(el, 
          { opacity: 0, scale: 0.96 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.9, 
            ease: "power2.out",
            delay: 0.05
          }
        );
      } else {
        gsap.fromTo(el, 
          { opacity: 0, scale: 0.96 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.9, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    // 3. Stagger Grid Items
    gsap.utils.toArray(".gsap-stagger-container").forEach((container: any) => {
      const items = container.querySelectorAll(".gsap-stagger-item");
      if (items.length > 0) {
        if (isInViewport(container)) {
          gsap.fromTo(items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              delay: 0.1
            }
          );
        } else {
          gsap.fromTo(items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 88%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      }
    });

    // Trigger a refresh after DOM settles
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
