import BrandPanel from "./BrandPanel";
import Services from "./Services";
import ContactForm from "./ContactForm";


export default function App() {
  return (
    <div className="min-h-screen bg-ink md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div className="px-6 py-10 sm:px-10 md:py-12 md:pl-16">
        <BrandPanel />
        <div className="mt-8 max-w-2xl">
          <Services />
        </div>
      </div>

      <aside className="border-t border-ink-line md:border-l md:border-t-0">
        <div className="px-6 py-10 sm:px-10 md:sticky md:top-0 md:py-12 md:pr-16">
          <ContactForm />
        </div>
      </aside>

      <footer className="border-t border-ink-line px-6 py-6 text-sm text-slate-400 sm:px-10 md:col-span-2 md:pl-16">
        © {new Date().getFullYear()} G.A.V. Consulting. All rights reserved.
      </footer>
    </div>
  );
}
