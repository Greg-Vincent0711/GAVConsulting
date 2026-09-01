/**
 * Site copy in one place so it is easy to review and edit without touching markup.
 */

export const TAGLINE = "Taking your business to new heights";

export const INTRO =
  "G.A.V. Consulting offers a range of services aimed at enhancing our clients' " +
  "businesses based on their unique objectives. Whether our clients are associated " +
  "with government, non-profit, or for-profit entities, we have the expertise to " +
  "help their organizations reach their goals — financial improvements, performance " +
  "enhancements, and beyond.";

export const SERVICES = [
  "Business Process Management",
  "Business Process Consultation",
  "Information Technology Planning",
  "Strategic Plan Development",
  "General Project Management",
  "Process Re-Engineering",
] as const;

/**
 * Address the "Send us an inquiry" button opens a draft to.
 * TODO: replace with the real GAV Consulting inbox.
 */
export const CONTACT_EMAIL = "contact@gavconsulting.com";

export const CONTACT_SUBJECT = "Website inquiry — GAV Consulting";

/**
 * EmailJS configuration — kept for reference in case we switch back to sending
 * mail directly from the browser instead of opening the visitor's mail client.
 * Access is restricted by allowed origins in the EmailJS dashboard.
 */
// export const EMAILJS = {
//   serviceId: "service_ws12bso",
//   templateId: "template_n5ha26l",
//   publicKey: "r1g8aSoJnPNfHCGw8",
// } as const;
