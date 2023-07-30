// import ContactForm from "./ContactForm";
import ContactForm from "./ContactForm";
import HomePage from "./Homepage";

export default function App() {
  return (
    <div className = "flex flex-1 flex-col items-center text-sky-600 bg-white">
      <HomePage/>
      <ContactForm/>
    </div>
  )
}