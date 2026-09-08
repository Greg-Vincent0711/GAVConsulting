import { INTRO, SERVICES } from "./content";
const Services: React.FC = () => (
  <section aria-labelledby="services-heading" className="space-y-6">
    <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{INTRO}</p>

    {/*
      Off-white panel with the palette inverted: on the dark page the services
      read as a bright, editorial block — blue type, black markers, white chips.
    */}
    <div className="rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-paper-line sm:p-8">
      <h2
        id="services-heading"
        className="text-xl font-bold text-ink sm:text-2xl"
      >
        Our Services
      </h2>

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <li
            key={service}
            className="
              flex items-center gap-3 rounded-lg border border-paper-line
              bg-white px-4 py-2.5 text-sm text-ink sm:text-base
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
