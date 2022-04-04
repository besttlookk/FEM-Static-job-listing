import React from "react";

const Footer = () => {
  return (
    <footer className="w-90w mx-auto max-w-5xl md:px-6 mt-4 text-cyan-gray-dark text-center pb-8">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className="font-bold text-primary hover:underline underline-offset-1 "
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/besttlookk"
        target="_blank"
        rel="noreferrer"
        className="font-bold text-primary hover:underline underline-offset-1 "
      >
        Prabhash Ranjan
      </a>
      .
    </footer>
  );
};

export default Footer;
