import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-color-primary-light dark:bg-color-primary-dark relative w-full shadow-md text-slate-300 text-opacity-50">
      <div className="w-full mt-4 px-8 mx-auto max-w-7xl mb-2">        
        <span className="flex text-xs justify-center items-center gap-2 mb-4 md:text-sm text-center md:mb-0">
          <p>All rights reserved</p>
          <a href="https://www.linkedin.com/in/tianosouza">Cristiano Souza</a>
        </span>       
      </div>
    </footer>
  );
};
