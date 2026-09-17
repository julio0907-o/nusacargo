export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 w-1/4 rounded-md bg-slate-200 dark:bg-slate-700"></div>
      
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 rounded-xl bg-slate-200 dark:bg-slate-700"></div>
        ))}
      </div>
      
      <div className="h-64 rounded-xl bg-slate-200 dark:bg-slate-700"></div>
    </div>
  );
}