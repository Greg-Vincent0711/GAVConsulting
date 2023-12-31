import { ChangeEvent, useState, useEffect, useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const formSection = useRef<HTMLDivElement>(null);
  const [formVisible, setFormVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((observerEntries) => {
      const formEntry = observerEntries[0];
      setFormVisible(formEntry.isIntersecting);
    }, { root: null, rootMargin: "-5%" });
    formSection.current && observer.observe(formSection.current)   
  });
  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    emailjs
      .send(
        "service_ws12bso",
        "template_n5ha26l",
        formData,
        "r1g8aSoJnPNfHCGw8"
      )
      .then(
        (result) => {
          console.log(
            "Successfully send email. Result status is: " + result.text
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({ email: "", message: "" });
  };
  const sharedStyles =
    "w-full h-full p-5 m-2 text-sky-600 text-2xl border border-black placeholder:text-2xl placeholder:text-sky-600 rounded-md resize-none";
  return (
    <div ref={formSection} className={[
      "w-full max-w-md mx-auto p-4 flex flex-col items-center justify-center",
      formVisible ? "formVisible" : "formInvisible",
    ].join(" ")} >
      <form
      onSubmit={(event) => sendEmail(event)}
    >
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        className={sharedStyles}
        onChange={(
          event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setFormData({ ...formData, email: event.target.value })}
      />
      <textarea
        placeholder="Send us an Inquiry"
        value={formData.message}
        className={[sharedStyles, "placeHolder:pt-1 !h-36"].join(" ")}
        onChange={(
          event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setFormData({ ...formData, message: event.target.value })}
      />
      <button className={[sharedStyles,"hover:bg-sky-600 hover:text-white font-bold py-4 px-8 !rounded-full"].join(" ")}>
        Send
      </button>
    </form>
    </div>
  );
};
export default ContactForm;