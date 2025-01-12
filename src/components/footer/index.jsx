import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-slate-400 relative w-full mb-0 shadow-md dark:bg-slate-900 text-slate-900 dark:text-slate-200">
      <div className="w-full mt-4 px-8 mx-auto max-w-7xl">        
        <p className="flex justify-center items-center gap-2 mb-4 text-sm text-center text-slate-500 md:mb-0">
          Copyright © 2025
          <a href="https://www.linkedin.com/in/tianosouza">Cristiano Souza</a>. All rights reserved.
        </p>       
      </div>
    </footer>
  );
};
