import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Hero = () => {
  return (
    <section>
      <ul>
        <li>
          <Link href="https://linkedin.com/in/jan-riemenschneider">
            <FaLinkedin
              style={{ width: "23px", height: "21px", color: "black" }}
            />
          </Link>
          <Link href="https://github.com/jan-riemenschneider">
            <FaGithub
              style={{ width: "23px", height: "21px", color: "black" }}
            />
          </Link>
          <Link href="mailto:jan-riemenschneider@outlook.de">
            <IoMail style={{ width: "23px", height: "21px", color: "black" }} />
          </Link>
        </li>
      </ul>
      <h1>
        HEY, I'M JAN! I'm a web developer in training – I love creating both
        creative and functiond!
      </h1>
      <Image
        src="/Users/janriemenschneider/neuefische/projects/personal-website/public/images/4653eebe.jpeg"
        alt="Jan Riemenschneider"
        width={230}
        height={220}
      />
    </section>
  );
};

export default Hero;
