import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/sandaruwagachchi", icon: <FaGithub /> },
  { href: "https://x.com/SPWagachchi", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/@sandaruwagachchi4353", icon: <FaYoutube /> },
 
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#000000] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Sandaru Wagachchi 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;