import { IoMdMail } from "react-icons/io";

interface ContactButtonProps {
  mailTo: string;
  name: string;
}

const ContactButton = ({ mailTo, name }: ContactButtonProps) => {
  return (
    <a
      href={mailTo}
      className="inline-flex items-center gap-2 font-mono font-semibold text-gray-500 underline hover:text-gray-700"
    >
      {name}
      <IoMdMail />
    </a>
  );
};

export default ContactButton;
