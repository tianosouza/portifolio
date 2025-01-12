import ThemeToggle from "../toggle"

export default function Header() {
  return (
    <header className="bg-slate-400 shadow-md dark:bg-slate-900 text-base-content z-10 h-10 items-center flex justify-center p-3 gap-3">
      <ThemeToggle />
    </header>
  );
}