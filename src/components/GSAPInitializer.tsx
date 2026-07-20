"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger and clear existing instances on route change to prevent memory leaks
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 1. Slide Up + Fade In (Subtle, professional scroll reveal)
    gsap.utils.toArray(".gsap-reveal-up").forEach((el: any) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // 2. Fade In Only
    gsap.utils.toArray(".gsap-reveal-in").forEach((el: any) => {
      gsap.fromTo(el, 
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.9, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // 3. Stagger Grid Items
    gsap.utils.toArray(".gsap-stagger-container").forEach((container: any) => {
      const items = container.querySelectorAll(".gsap-stagger-item");
      if (items.length > 0) {
        gsap.fromTo(items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    // Trigger a refresh after a tiny delay to ensure proper scroll heights
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
