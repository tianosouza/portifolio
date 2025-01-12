import ThemeToggle from "../toggle"
import Dropdown from "../dropdown"
import { Link } from 'react-router-dom';

const items = [
  { label: 'Profile' },
  { label: 'Settings' },
  { label: 'Logout' },
];

export default function Header() {
  return (
    <header className="bg-slate-400 shadow-md font-semibold dark:bg-slate-900 text-base-content z-10 h-10 items-center flex justify-center p-3 gap-3">
      <ThemeToggle />
      <Link to="/projects" className="hover:underline-offset-1">Projects</Link>
      <Dropdown 
        items={items} 
        buttonColor="bg-slate-400 dark:bg-slate-900" 
        iconColor="text-base-content dark:text-base"
      />
      Home
    </header>
  );
}
