export function MetricCards() {
  const metrics = [
    { title: "Total Pengiriman", value: "1,280", change: "+12% dari kemarin" },
    { title: "Ketepatan Waktu", value: "94.2%", change: "Target: >90%" },
    { title: "Jumlah Tertunda", value: "18", change: "Perlu perhatian segera" },
  ];

  return (
    // Menggunakan grid responsif: 1 kolom di ponsel (360px), 2 kolom di tablet (768px), 3/4 kolom di layar lebar (1440px)
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((item, index) => (
        <div 
          key={index}
          className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-all"
        >
          <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">{item.value}</p>
          <p className="mt-1 text-xs text-muted">{item.change}</p>
        </div>
      ))}
    </div>
  );
}