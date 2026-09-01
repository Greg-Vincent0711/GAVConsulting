import { INTRO, SERVICES } from "./content";
const Services: React.FC = () => (
  <section aria-labelledby="services-heading" className="space-y-6">
    <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{INTRO}</p>

    <div>
      <h2
        id="services-heading"
        className="text-xl font-bold text-slate-100 sm:text-2xl"
      >
        Our Services
      </h2>

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <li
            key={service}
            className="
              flex items-start gap-3 rounded-lg border border-ink-line
              bg-ink-soft px-4 py-2.5 text-sm text-slate-200 sm:text-base
            "
          >
            <span aria-hidden="true" className="mt-1 text-accent">
              &#9656;
            </span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
