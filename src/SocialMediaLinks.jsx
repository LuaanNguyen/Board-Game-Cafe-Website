import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa6";

const socialMediaLinks = [
  { href: "https://sipnplaynyc.com", icon: <CgWebsite /> },
  { href: "https://www.instagram.com/sipnplaynyc/", icon: <RiInstagramFill /> },
  { href: "https://www.facebook.com/sipnplaynyc/", icon: <FaFacebookSquare /> },
];

export default function SocialMediaLinks() {
  return (
    <section className="social-media-links">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
}
