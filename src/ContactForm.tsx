import { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const sharedStyles =
    "w-full h-full p-5 m-2 text-sky-600 text-2xl border border-black placeholder:text-2xl  placeholder:text-sky-600 rounded-md resize-none";
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
          console.log("Successfully send email. Result status is: " + result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setFormData({email: "", message: ""})
  };

  return ( 
    <form onSubmit={(event) => sendEmail(event)} className="w-full max-w-md mx-auto p-4 flex flex-col items-center">
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
        className={
          "w-full h-36 p-5 m-2 text-2xl placeholder:text-2xl placeholder:text-sky-600 border border-black rounded-md resize-none placeholder:pt-1"
        }
        onChange={(
          event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setFormData({ ...formData, message: event.target.value })}
      />
      <button
        className="mt-4 w-full h-full bg-transparent text-sky-600 border border-black hover:bg-sky-700 hover:text-white font-bold py-4 px-8 rounded-full text-xl"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
