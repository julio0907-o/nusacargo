"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/shipments", label: "Pengiriman" },
  { href: "/analytics", label: "Analitik" },
  { href: "/settings", label: "Pengaturan" },
];

export function NavLinks() {
  const pathname = usePathname(); // Hook ini hanya bisa jalan di Client Component

  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => {
        // Cek apakah URL saat ini cocok atau diawali dengan href menu
        const isActive = pathname.startsWith(item.href); 
        
        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`rounded-md px-3 py-2 text-sm transition-colors ${
              isActive 
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-medium" 
                : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}