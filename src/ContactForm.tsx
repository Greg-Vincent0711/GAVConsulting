import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_SUBJECT } from "./content";

const inputStyles =
  "w-full rounded-none border-0 border-b border-ink-line bg-transparent px-1 py-2.5 " +
  "text-slate-100 placeholder:text-slate-400 " +
  "transition-colors focus:border-accent focus:ring-0";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(CONTACT_SUBJECT)}` +
    `&body=${encodeURIComponent(message.trim())}`;

  return (
    <section aria-labelledby="contact-heading" id="contact" className="space-y-6">
      <h2
        id="contact-heading"
        className="text-2xl font-bold text-slate-100 sm:text-3xl"
      >
        Send us an inquiry
      </h2>

      <form className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Your email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            className={inputStyles}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us about your organization and goals."
            className={`${inputStyles} resize-none`}
          />
        </div>

        <a
          href={mailtoHref}
          className="
            inline-flex items-center justify-center rounded-full
            bg-accent px-8 py-3 font-semibold text-ink
            transition-colors hover:bg-accent-hover
          "
        >
          Open in email app
        </a>

        <p className="text-sm text-slate-400">
          This opens a pre-filled draft in your email program. Prefer to write
          directly?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </form>
    </section>
  );
};

export default ContactForm;