import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function BrainDump() {
  const articles = [
    {
      id: 1,
      title: "Most businesses don’t fail to sell. They fail to look understandable.",
      date: "OCT 24, 2025",
      category: "EXIT READINESS",
      excerpt: "Not because they’re bad businesses — but because too much lives in the owner’s head, the numbers mean different things to different people, and the story changes depending on who’s asking."
    },
    {
      id: 2,
      title: "I know I’m foolish. But when I look around, I gain courage.",
      date: "OCT 17, 2025",
      category: "OWNERSHIP",
      excerpt: "Observations on the state of the market and why the 'smart money' often looks just as confused as everyone else."
    },
    {
      id: 3,
      title: "Europe and the US operate under different unspoken rules",
      date: "OCT 10, 2025",
      category: "FIELD NOTES",
      excerpt: "Why importing American frameworks for acquisition often fails in the European context. Cultural friction is a real cost."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <section className="p-8 md:p-16 border-b border-border">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
            Editorial Output
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-primary">
            The Brain Dump
          </h1>
          <div className="flex flex-wrap gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground border-t border-border pt-8">
            <span>Scouting Notes</span>
            <span>Curated Lists</span>
            <span>EU vs US Field Notes</span>
          </div>
        </section>

        {/* Articles List */}
        <section>
          {articles.map((article) => (
            <article key={article.id} className="group border-b border-border hover:bg-secondary/20 transition-colors duration-300">
              <Link href={`/brain-dump/${article.id}`}>
                <div className="p-8 md:p-16 cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider min-w-[120px]">
                      {article.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {article.date}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary/80 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-xl font-serif text-muted-foreground max-w-3xl leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Read Note <span className="ml-2 text-accent">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        {/* Newsletter / Subscribe */}
        <section className="p-8 md:p-16 bg-primary text-primary-foreground">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Weekly (but not performative) notes.</h3>
            <p className="font-serif text-lg opacity-80 mb-8">
              Calm, dry, occasionally contrarian. No hype. No deal porn.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border border-white/30 text-white placeholder:text-white/40 px-6 py-4 w-full focus:outline-none focus:border-accent font-mono text-sm"
              />
              <button className="bg-white text-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}
