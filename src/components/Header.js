import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faAngellist,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div class="flex justify-between content-center my-8 py-1 border-gray-50 border-b-2">
      <Link to="/">
        <div class="font-extrabold"> Albert Gozzi </div>
      </Link>
      <div class="flex space-x-3 content-center">
        <a href="https://github.com/albertgozzi">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/albert.gozzi/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com/albertgozzi">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/albertgozzi">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://angel.co/p/albert-gozzi">
          <FontAwesomeIcon icon={faAngellist} />
        </a>
        <a href="https://twitter.com/albertgozzi">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Header;
