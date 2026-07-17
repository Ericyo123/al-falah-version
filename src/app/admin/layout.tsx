"use client";

import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hide the main site header and footer when in admin pages
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      // Restore header/footer when leaving admin pages
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return <>{children}</>;
}
