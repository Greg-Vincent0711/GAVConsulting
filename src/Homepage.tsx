

import bannerImage from "./images/bannerImage.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full">
      <div className="w-full h-full sm:h-auto flex items-center justify-center">
        <img
          src={bannerImage}
          className="w-full h-full sm:h-auto object-contain"
          alt="Banner"
        />
      </div>

      <div className="max-w-3xl px-6 py-12">
        <p className="text-3xl md:text-4xl leading-relaxed mt-5">
          G.A.V. Consulting provides a variety of services necessary to improve
          our client's business relative to their specific goals. Regardless of
          whether said client is government-affiliated, a non-profit or
          for-profit, we have the skills to help their organization achieve
          their goals - whether they be financial, performance-based, or
          otherwise. This statement is backed by a 17-year long track record in
          this field improving the overall well-being of companies across New
          York State.
        </p>
        <ul className="text-xl md:text-2xl px-6 pt-10 mt-5 text-center">
          <p className="text-3xl md:text-4xl mt-4 text-center mb-5 font-semibold">
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
  );
};

export default HomePage;
