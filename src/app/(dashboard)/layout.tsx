import type { ReactNode } from "react";
import { NavLinks } from "@/components/ui/nav-links";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4">
        <p className="mb-6 text-sm font-bold tracking-tight">NusaCargo Control Tower</p>
        
        {/* Panggil komponen Client di dalam Server Component */}
        <NavLinks />
        
      </aside>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}