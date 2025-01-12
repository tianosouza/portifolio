import ThemeToggle from "../toggle"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-400 shadow-md font-semibold dark:bg-slate-900 text-base-content z-10 h-10 items-center flex justify-center p-3 gap-3">
      <ThemeToggle />
      <Link to="/" className="hover:underline-offset-1">Home</Link>
      <Link to="/projects" className="hover:underline-offset-1">Projects</Link>
      <Link to="/contact" className="hover:underline-offset-1">Contact</Link>       
    </header>
  );
}
