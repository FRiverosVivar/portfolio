import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex justify-center mt-10 gap-16 lg:ms-24">
      <Link
        href="https://github.com/FRiverosVivar"
        className="hover:scale-150 transition-transform duration-300"
      >
        <FontAwesomeIcon icon={faGithub} className="size-6 text-gray-50" />
      </Link>
      <Link
        href="https://wa.me/+56931968013"
        className="hover:scale-150 transition-transform duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="size-6 text-gray-50" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/franco-riveros-vivar-6759a1179/"
        className="hover:scale-150 transition-transform duration-300"
      >
        <FontAwesomeIcon icon={faLinkedin} className="size-6 text-gray-50" />
      </Link>
      <Link
        href="https://www.instagram.com/zkrwave/"
        className="hover:scale-150 transition-transform duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} className="size-6 text-gray-50" />
      </Link>
      <Link
        href="mailto:francoriverosvivar@gmail.com"
        className="group/link hover:scale-150 transition-transform duration-300 flex justify-center align-middle gap-3"
      >
        <FontAwesomeIcon icon={faAt} className="size-6 text-gray-50" />
        <span className="hidden sm:hidden md:hidden lg:block lg:visible group/chat lg:opacity-0 group-hover/link:opacity-100 lg:w-20 text-gray-50 italic ">
          Lets Chat!
        </span>
      </Link>
    </div>
  );
};
export default Socials;
