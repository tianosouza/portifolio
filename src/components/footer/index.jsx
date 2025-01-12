import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-slate-400 relative w-full mb-0 shadow-md dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <div className="w-full mt-4 px-8 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center w-full py-4 md:flex-row md:justify-between">
          <p className="flex gap-2 mb-4 text-sm text-center text-slate-500 md:mb-0">
            Copyright © 2025
            <a href="https://www.linkedin.com/in/tianosouza">Cristiano Souza</a>. All rights reserved.
          </p>
          <div className="flex gap-4 text-slate-600 sm:justify-center">
            <a href="https://www.facebook.com/ltianosouzal" className="block transition-opacity text-inherit hover:opacity-80">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/tianosouza" className="block transition-opacity text-inherit hover:opacity-80">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/tianosouza" className="block transition-opacity text-inherit hover:opacity-80">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/ltianosouzal" className="block transition-opacity text-inherit hover:opacity-80">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
