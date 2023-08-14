import { useState, useRef, useEffect } from "react";
import HPImage from "./HPImage.jpeg";
const HomePage = () => {
  const firstRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const styleObserver = new IntersectionObserver(((observerEntries) => {
      const hpEntry = observerEntries[0];
      styleObserver.observe(hpEntry.target)
      setVisible(hpEntry.isIntersecting)
    }), {root: null,rootMargin: "0%", threshold: 0})
  
  }, []);

  return (
    <>
      <div className="z-40 absolute flex flex-col items-center justify-center text-white last:justify-end mt-8 sm:mt-0">
        <h1 className="text-[3rem] sm:text-[10rem] md:whitespace-nowrap ">GAV Consulting</h1>
        <h1 className="text-2xl md:text-[3rem] md:whitespace-nowrap px-2">
          Taking your business to new heights
        </h1>
      </div> 
      <div className="flex flex-col items-center justify-center min-h-screen w-screen">
        <img src={HPImage} className="w-screen h-screen z-30 object-cover" />
        <div className={[visible ? "opacity-100" : "opacity-0", "fade"].join("") } ref={firstRef}> 
          <p className="text-3xl md:text-4xl leading-relaxed mt-5 max-w-[80vw] pl-10">
          G.A.V. Consulting offers a range of services aimed at enhancing our clients' businesses based on their unique objectives. 
          Whether our clients are associated with government, non-profit, or for-profit entities, we possess the expertise required to assist their organizations in attaining various goals. 
          These goals may involve financial improvements, performance enhancements, or other objectives.
          </p>
          <ul className="text-2xl md:text-2xl px-6 pt-10 mt-5 text-center">
            <p className="mt-4 mb-5 font-semibold text-6xl md:text-5xl">
              Our Services:
            </p>
            <li>Business Process Management</li>
            <li>Business Process Consultation</li>
            <li>Information Technology Planning</li>
            <li>Strategic Plan Development</li>
            <li>General Project Management</li>
            <li>Process Re-Engineering</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
//divide-y divide-orange-700
