import { useEffect, useState } from "react";

const container = "mx-auto w-[min(1200px,92vw)]";

const navLinks = [
  { id: "categories", label: "Packages" },
  { id: "highlights", label: "Featured" },
  { id: "web", label: "Websites" },
  { id: "apps", label: "Apps & Systems" },
  { id: "security", label: "Security" },
  { id: "cloud", label: "Cloud" },
  { id: "growth", label: "Growth" },
  { id: "contact", label: "Contact" },
];

const categories = [
  "Business Websites",
  "E-commerce Stores",
  "Landing Pages",
  "Custom Web Apps",
  "Mobile Apps",
  "SaaS MVP",
  "Business Systems",
  "UI/UX Design",
  "Cloud & DevOps",
  "Cybersecurity",
  "Automation",
  "Support & Maintenance",
];

const highlights = [
  {
    name: "Business Website Package",
    category: "Websites",
    original: "KSh 15,000.00",
    price: "KSh 12,000.00",
    discount: "-20%",
    hot: true,
  },
  {
    name: "E-commerce Starter",
    category: "E-commerce",
    original: "KSh 40,000.00",
    price: "KSh 30,000.00",
    discount: "-25%",
    hot: true,
  },
  {
    name: "Mobile App MVP",
    category: "Mobile Apps",
    price: "KSh 50,000.00",
    action: "Book consult",
    hot: true,
  },
  {
    name: "Brand Identity + UI Kit",
    category: "Design",
    price: "KSh 25,000.00",
    action: "Get started",
  },
];

const websites = [
  {
    name: "Starter Website (5 pages)",
    category: "Websites",
    price: "KSh 12,000.00",
    action: "Get started",
  },
  {
    name: "Business Pro Website",
    category: "Websites",
    price: "KSh 25,000.00",
    action: "Request quote",
  },
  {
    name: "Conversion Landing Page",
    category: "Landing Pages",
    price: "KSh 8,000.00",
    action: "Launch now",
  },
  {
    name: "E-commerce Growth Store",
    category: "E-commerce",
    price: "KSh 30,000.00",
    action: "Request quote",
  },
];

const appsSystems = [
  {
    name: "Custom Web Application",
    category: "Web Apps",
    price: "From KSh 50,000.00",
    action: "Scope project",
  },
  {
    name: "Mobile App (iOS + Android)",
    category: "Mobile Apps",
    price: "KSh 50,000.00",
    action: "Scope project",
  },
  {
    name: "School Management System",
    category: "Business Systems",
    price: "From KSh 85,000.00",
    action: "Request demo",
  },
  {
    name: "Inventory & POS Suite",
    category: "Business Systems",
    price: "From KSh 65,000.00",
    action: "Request demo",
  },
];

const security = [
  {
    name: "Security Audit & Hardening",
    category: "Cybersecurity",
    price: "From KSh 30,000.00",
    action: "Book audit",
    hot: true,
  },
  {
    name: "Vulnerability Assessment",
    category: "Cybersecurity",
    price: "From KSh 20,000.00",
    action: "Request report",
  },
  {
    name: "Secure Hosting Setup",
    category: "Cybersecurity",
    price: "From KSh 15,000.00",
    action: "Get started",
  },
  {
    name: "Security Monitoring",
    category: "Cybersecurity",
    price: "From KSh 8,000.00/month",
    action: "Subscribe",
  },
];

const cloud = [
  {
    name: "Cloud Migration",
    category: "Cloud & DevOps",
    price: "From KSh 80,000.00",
    action: "Plan migration",
  },
  {
    name: "CI/CD Pipeline Setup",
    category: "Cloud & DevOps",
    price: "From KSh 35,000.00",
    action: "Optimize delivery",
  },
  {
    name: "Infrastructure Monitoring",
    category: "Cloud & DevOps",
    price: "From KSh 10,000.00/month",
    action: "Get monitoring",
  },
  {
    name: "Performance Optimization",
    category: "Cloud & DevOps",
    price: "From KSh 25,000.00",
    action: "Boost speed",
  },
];

const growth = [
  {
    name: "Website Care Plan",
    category: "Support & Maintenance",
    price: "From KSh 5,000.00/month",
    action: "Subscribe",
  },
  {
    name: "SEO + Analytics Setup",
    category: "Growth",
    price: "KSh 12,000.00",
    action: "Get started",
  },
  {
    name: "Automation Workflows",
    category: "Automation",
    price: "From KSh 18,000.00",
    action: "Automate",
  },
  {
    name: "WhatsApp & SMS Integrations",
    category: "Automation",
    price: "From KSh 15,000.00",
    action: "Integrate",
  },
];

const productSections = [
  { id: "highlights", title: "Featured Packages", items: highlights },
  { id: "web", title: "Websites & E-commerce", items: websites },
  { id: "apps", title: "Apps & Business Systems", items: appsSystems },
  { id: "security", title: "Cybersecurity", items: security },
  { id: "cloud", title: "Cloud & DevOps", items: cloud },
  { id: "growth", title: "Growth & Support", items: growth },
];

function ProductCard({ item }) {
  const actionLabel = item.action ?? "Request quote";

  return (
    <article className="card-surface flex h-full flex-col gap-4 p-5 reveal">
      <div className="flex items-start justify-between gap-2">
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
          {item.category}
        </span>
        {item.hot ? (
          <span className="rounded-full bg-white/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white">
            Hot
          </span>
        ) : null}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
      </div>
      {item.price ? (
        <div className="space-y-1">
          {item.original ? (
            <p className="text-sm text-slate-500 line-through">{item.original}</p>
          ) : null}
          <p className="text-xl font-semibold text-white">{item.price}</p>
        </div>
      ) : (
        <p className="text-sm text-slate-400">Request pricing</p>
      )}
      <div className="mt-auto flex items-center justify-between">
        {item.discount ? (
          <span className="rounded-full border border-white/30 px-2 py-1 text-xs text-white">
            {item.discount}
          </span>
        ) : (
          <span />
        )}
        <button className="btn btn-ghost text-sm" type="button">
          {actionLabel}
        </button>
      </div>
    </article>
  );
}

function Section({ id, title, items }) {
  return (
    <section id={id} className="py-20">
      <div className={container}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 reveal">
          <div>
            <p className="tag-pill">Packages</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
          </div>
          <button className="btn btn-ghost text-sm" type="button">
            See all packages
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <ProductCard key={`${id}-${item.name}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="bg-orbit" aria-hidden="true" />
      <div className="bg-milkyway" aria-hidden="true" />
      <div className="bg-stars" aria-hidden="true" />
      <div className="bg-moon" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="shooting-stars" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={`star-${index}`} className="shooting-star" />
        ))}
      </div>

      <div className="border-b border-white/10 bg-black/70 text-xs uppercase tracking-[0.2em] text-slate-300">
        <div className={`${container} flex flex-wrap items-center justify-between gap-2 py-2`}>
          <span>Now Booking</span>
          <span>Free project discovery call</span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className={`${container} flex items-center justify-between py-4`}>
          <a className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]" href="#top">
            <img
              src="/arc-logo.png"
              alt="ARC Technology logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-slate-300">Technology</span>
          </a>
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute right-[5vw] top-16 flex-col gap-4 rounded-2xl border border-white/10 bg-black/95 p-5 text-sm text-slate-300 shadow-soft md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="flex flex-col gap-1.5 md:hidden"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="py-20 md:py-28">
          <div className={`${container} grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
            <div>
              <span className="tag-pill">Software Engineering Company</span>
              <h1 className="mt-6 text-4xl md:text-6xl">ARC TECHNOLOGY</h1>
              <p className="mt-5 text-lg text-slate-200">
                We build websites, apps, and custom systems that scale with your growth.
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">
                Imagine. Build. Grow.
              </p>
              <p className="mt-3 text-slate-400">Remote delivery, onsite setup, and long-term support.</p>
              <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-[2fr_1fr_auto]">
                <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Search packages
                  <input type="search" placeholder="Search packages" />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Category
                  <select defaultValue="All Packages">
                    <option>All Packages</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </label>
                <button className="btn btn-primary w-full md:w-auto" type="button">
                  Get Quote
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {categories.slice(0, 6).map((category) => (
                  <span key={category} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-surface p-6 reveal">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Delivery</p>
              <h3 className="mt-3 text-2xl">Launch-ready in weeks</h3>
              <p className="mt-3 text-slate-300">
                Start with discovery, then move into design and development sprints. We ship fast
                without sacrificing reliability.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">2-4</p>
                  <p className="text-sm text-slate-400">Weeks to MVP</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold">24/7</p>
                  <p className="text-sm text-slate-400">Support options</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="py-20">
          <div className={container}>
            <div className="mb-10 reveal">
              <p className="tag-pill">Explore Packages</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Popular Categories</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category} className="card-surface flex items-center justify-between p-5 reveal">
                  <span className="text-sm text-slate-200">{category}</span>
                  <span className="text-xs text-slate-500">Browse</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {productSections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} items={section.items} />
        ))}

        <section id="contact" className="py-20">
          <div className={`${container} grid gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
            <div className="reveal">
              <p className="tag-pill">Contact</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Ready to build?</h2>
              <p className="mt-4 text-slate-300">
                Share your project goals and timeline. We respond within 2 business days.
              </p>
            </div>
            <form className="card-surface grid gap-5 p-8 reveal">
              <label className="grid gap-2 text-sm text-slate-300">
                Full name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Project details
                <textarea name="details" rows="5" placeholder="Tell us what you are building" />
              </label>
              <button className="btn btn-primary w-full" type="submit">
                Send inquiry
              </button>
              <p className="text-sm text-slate-400">
                Prefer email or phone? Reach us at {" "}
                <a className="font-semibold text-white" href="mailto:arc.technology.000@gmail.com">
                  arc.technology.000@gmail.com
                </a>
                {" "}or{" "}
                <a className="font-semibold text-white" href="tel:+254112905060">
                  0112905060
                </a>
                . WhatsApp:{" "}
                <a
                  className="font-semibold text-white"
                  href="https://wa.me/254112905060"
                  target="_blank"
                  rel="noopener"
                >
                  Chat with ARC
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-16 text-sm text-slate-400">
        <div className={`${container} grid gap-8 md:grid-cols-4`}>
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/arc-logo.png"
                alt="ARC Technology logo"
                className="h-10 w-auto object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">ARC TECHNOLOGY</p>
            </div>
            <p className="mt-3">Design. Build. Scale.</p>
          </div>
          <div className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white">Connect</p>
            <a href="https://x.com/ArcTechnology_" target="_blank" rel="noopener">
              X - @ArcTechnology_
            </a>
            <a href="https://www.youtube.com/@arctechnology_000" target="_blank" rel="noopener">
              YouTube - @arctechnology_000
            </a>
            <a href="https://www.linkedin.com/company/arc-technology/" target="_blank" rel="noopener">
              LinkedIn - ARC TECHNOLOGY
            </a>
            <a href="https://www.tiktok.com/@arctechnology_" target="_blank" rel="noopener">
              TikTok - @arctechnology_
            </a>
            <a href="https://www.instagram.com/arc.technology_/" target="_blank" rel="noopener">
              Instagram - @arc.technology_
            </a>
          </div>
          <div className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white">Packages</p>
            <a href="#categories">Categories</a>
            <a href="#highlights">Featured</a>
            <a href="#web">Websites</a>
            <a href="#apps">Apps & Systems</a>
          </div>
          <div className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white">Contact</p>
            <a href="mailto:arc.technology.000@gmail.com">arc.technology.000@gmail.com</a>
            <a href="tel:+254112905060">0112905060</a>
            <a href="https://wa.me/254112905060" target="_blank" rel="noopener">
              WhatsApp: Chat with ARC
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          Copyright 2026 - ARC TECHNOLOGY. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
