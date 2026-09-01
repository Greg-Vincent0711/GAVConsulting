import Logo from "./Logo";
import { TAGLINE } from "./content";
const BrandPanel = () => (
  <header className="flex flex-col gap-5">
    <Logo className="w-64 max-w-full text-slate-100 sm:w-80" />

    <p className="max-w-sm text-lg font-medium text-slate-300 sm:text-xl">
      {TAGLINE}
    </p>
  </header>
);

export default BrandPanel;
