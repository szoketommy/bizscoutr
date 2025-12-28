import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Vision" },
    { href: "/assessment", label: "Assessment" },
    { href: "/brain-dump", label: "The Brain Dump" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground overflow-hidden">
      {/* Left Rail - Fixed Navigation */}
      <aside className="w-full md:w-1/4 md:h-screen md:fixed md:left-0 border-b md:border-b-0 md:border-r border-border p-6 flex flex-col justify-between z-10 bg-background">
        <div>
          <div className="mb-12">
            <Link href="/">
              <h1 className="text-2xl font-bold tracking-tight cursor-pointer">
                bizScoutR
                <span className="text-accent text-4xl leading-none ml-1">.</span>
              </h1>
            </Link>
            <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              EST. 2025 — EU/US
            </p>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "group flex items-center py-2 cursor-pointer transition-colors duration-200",
                    location === item.href
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <span className="font-mono text-xs mr-3 opacity-50">
                    0{navItems.indexOf(item) + 1}
                  </span>
                  <span className="text-lg font-sans tracking-tight">
                    {item.label}
                  </span>
                  {location === item.href && (
                    <span className="ml-auto w-1.5 h-1.5 bg-accent rounded-full" />
                  )}
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="w-12 h-1 bg-primary mb-6" />
          <p className="text-sm text-muted-foreground leading-relaxed font-serif italic">
            "To help owners think clearly before clarity becomes expensive."
          </p>
          
          <div className="mt-8 pt-8 border-t border-border">
             <div className="flex items-center gap-4">
                <img src="/images/scout-icon.png" alt="Scout Icon" className="w-8 h-8 opacity-80 mix-blend-multiply" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Buyer-Grade Thinking
                </span>
             </div>
          </div>
        </div>
      </aside>

      {/* Right Pane - Scrolling Content */}
      <main className="w-full md:w-3/4 md:ml-[25%] min-h-screen bg-background">
        <div className="max-w-4xl mx-auto">
            {children}
        </div>
      </main>
    </div>
  );
}
