import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Assessment() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Header */}
        <section className="p-8 md:p-16 border-b border-border bg-secondary/20">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              The Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-primary">
              Exit Readiness Assessment
            </h1>
            <p className="text-xl font-serif text-muted-foreground leading-relaxed">
              A structured reality check. Not a pitch deck factory. Not a motivational exercise.
            </p>
          </div>
        </section>

        {/* Core Value Prop */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-border">
            <h3 className="font-sans text-xl font-bold mb-8 uppercase tracking-wide">It Looks At</h3>
            <ul className="space-y-6">
              {[
                "How the business actually makes money",
                "Where decisions really sit",
                "What breaks when the owner steps back",
                "What would quietly worry a buyer"
              ].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <span className="font-mono text-xs mr-4 mt-1.5 text-muted-foreground group-hover:text-accent transition-colors">0{i+1}</span>
                  <span className="font-serif text-lg text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 md:p-16 bg-muted/30">
            <h3 className="font-sans text-xl font-bold mb-8 uppercase tracking-wide text-muted-foreground">It Does Not Look At</h3>
            <ul className="space-y-6 opacity-60">
              {[
                "Your vision board",
                "Market multiples on Twitter",
                "“Strategic optionality” slides"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="font-mono text-xs mr-4 mt-1.5">NO.</span>
                  <span className="font-serif text-lg line-through decoration-accent/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Deliverables */}
        <section className="p-8 md:p-16 bg-background relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
             <img 
                src="/images/assessment-bg.png" 
                alt="Texture" 
                className="w-full h-full object-cover"
             />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl font-bold mb-12">What You Get</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="border border-border p-6 bg-white shadow-sm">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-mono text-xs mb-4">A</div>
                <h4 className="font-bold mb-2">Scouting Report</h4>
                <p className="text-sm text-muted-foreground font-serif">Short, written, clear observations.</p>
              </div>
              
              <div className="border border-border p-6 bg-white shadow-sm">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-mono text-xs mb-4">B</div>
                <h4 className="font-bold mb-2">Reality Check</h4>
                <p className="text-sm text-muted-foreground font-serif">Not recommendations cosplay.</p>
              </div>
              
              <div className="border border-border p-6 bg-white shadow-sm">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-mono text-xs mb-4">C</div>
                <h4 className="font-bold mb-2">Action Plan</h4>
                <p className="text-sm text-muted-foreground font-serif">Fix now. Fix later. Don't touch.</p>
              </div>
            </div>

            <div className="bg-secondary p-8 border-l-4 border-accent">
              <p className="font-serif text-xl italic text-primary mb-4">
                "The goal isn’t to prepare you to sell. It’s to make sure you *could* — without discovering surprises at the worst moment."
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 md:p-16 bg-primary text-primary-foreground text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Curious? Mildly Skeptical?</h2>
            <p className="text-lg font-serif opacity-80 mb-12">
              It’s low-commitment, moderately uncomfortable, and usually clarifying.
            </p>
            
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-12 py-8 text-xl font-sans tracking-tight w-full md:w-auto">
              Take the Exit Readiness Assessment
            </Button>
            
            <p className="mt-6 font-mono text-xs opacity-50 uppercase tracking-widest">
              (You will survive.)
            </p>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-sm font-serif opacity-60 max-w-md mx-auto">
              <p>Small print, for honesty: The assessment is selective. If it’s not useful for your situation, you’ll be told early.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
