import ThemeToggle from "../toggle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <header className="bg-slate-400 dark:bg-slate-950 text-base-content shadow z-10 h-10 items-center flex justify-center p-3 gap-3">     
      <a href="https://github.com/tianosouza">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/tianosouza/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <ThemeToggle />
    </header>
  );
}