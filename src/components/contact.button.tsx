import React from "react";

interface ContactButtonProps {
  mailTo: string;
  name: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ mailTo, name }) => {
  return (
    <a
      href={mailTo}
      className="inline-block rounded-md bg-yellow-400 px-6 py-3 text-xl font-extrabold uppercase tracking-wider text-black shadow-[6px_6px_0px_black] transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-500 hover:shadow-[8px_8px_0px_black] active:scale-95"
      style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
    >
      {name}
    </a>
  );
};

export default ContactButton;
