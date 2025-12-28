import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center p-8 md:p-16 border-b border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <img 
                src="/images/hero-abstract.png" 
                alt="Abstract Geometric Composition" 
                className="w-full h-full object-cover mix-blend-multiply grayscale contrast-125"
             />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              Vision & Profile
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-primary">
              The bizScoutR <br/>
              <span className="font-serif font-normal italic text-4xl md:text-6xl text-muted-foreground">Brain Dump</span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed text-primary/90 font-serif mb-12 max-w-xl">
              Bringing calm, buyer-grade thinking into conversations about ownership, acquisition, and running real businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg font-sans tracking-tight">
                  Start Assessment
                </Button>
              </Link>
              <Link href="/brain-dump">
                <Button variant="outline" className="border-primary text-primary hover:bg-secondary rounded-none px-8 py-6 text-lg font-sans tracking-tight">
                  Read The Brain Dump
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
          <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-border bg-secondary/30">
            <h3 className="font-sans text-2xl font-bold mb-6">What It Is</h3>
            <ul className="space-y-4 font-serif text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1.5 text-xs">■</span>
                <span>A weekly set of notes on ownership, acquisition, and exit readiness.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1.5 text-xs">■</span>
                <span>Written as working thoughts, not finished theories.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1.5 text-xs">■</span>
                <span>Calm, dry, occasionally contrarian.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1.5 text-xs">■</span>
                <span>Written from the position of a European industry outsider.</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 md:p-16">
            <h3 className="font-sans text-2xl font-bold mb-6">What It Is Not</h3>
            <ul className="space-y-4 font-serif text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5 text-xs">□</span>
                <span>Not ETA hype.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5 text-xs">□</span>
                <span>Not personal branding theatre.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5 text-xs">□</span>
                <span>Not deal porn.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1.5 text-xs">□</span>
                <span>Not advice dressed as inspiration.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Point of View */}
        <section className="p-8 md:p-16 bg-background">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8 block">
              Point of View
            </span>
            
            <div className="space-y-12">
              <div className="group">
                <h4 className="text-3xl font-sans font-bold mb-2 group-hover:text-accent transition-colors duration-300">01.</h4>
                <p className="text-2xl font-serif text-primary">Most businesses don’t fail — they become hard to understand.</p>
              </div>
              
              <div className="w-full h-px bg-border" />
              
              <div className="group">
                <h4 className="text-3xl font-sans font-bold mb-2 group-hover:text-accent transition-colors duration-300">02.</h4>
                <p className="text-2xl font-serif text-primary">Exit readiness is about friction removal, not timing.</p>
              </div>
              
              <div className="w-full h-px bg-border" />
              
              <div className="group">
                <h4 className="text-3xl font-sans font-bold mb-2 group-hover:text-accent transition-colors duration-300">03.</h4>
                <p className="text-2xl font-serif text-primary">Buyers are polite; their concerns are not.</p>
              </div>

              <div className="w-full h-px bg-border" />
              
              <div className="group">
                <h4 className="text-3xl font-sans font-bold mb-2 group-hover:text-accent transition-colors duration-300">04.</h4>
                <p className="text-2xl font-serif text-primary">Owner dependency is usually invisible until it’s fatal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="p-8 md:p-16 bg-primary text-primary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-sans text-2xl font-bold mb-6 text-white">Written For</h3>
              <ul className="space-y-4 font-serif text-lg text-primary-foreground/80">
                <li className="border-l-2 border-accent pl-4">Owner-operators of real businesses</li>
                <li className="border-l-2 border-accent pl-4">Thoughtful acquirers and capital allocators</li>
                <li className="border-l-2 border-accent pl-4">Advisors who quietly know the difference between theory and practice</li>
              </ul>
            </div>
            
            <div className="opacity-60">
              <h3 className="font-sans text-2xl font-bold mb-6 text-white">Not For</h3>
              <ul className="space-y-4 font-serif text-lg">
                <li>First-time Twitter experts</li>
                <li>Urgency merchants</li>
                <li>People optimizing for “reach”</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
