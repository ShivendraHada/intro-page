import Link from "next/link";
import {
  FaLinkedin,
  FaLongArrowAltRight,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="section-style !pt-0">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Shivendra Hada</h1>
        <div className="flex items-center">
          <span>
            <Link
              href="https://www.linkedin.com/in/shivendrahada"
              target="_blank"
              className="text-xl"
            >
              <FaLinkedin />
            </Link>
          </span>
          <span className="m-2 text-xl font-normal">|</span>
          <span>
            <Link
              href="https://www.github.com/shivendrahada"
              target="_blank"
              className="text-xl"
            >
              <FaGithub />
            </Link>
          </span>
          <span className="m-2 text-xl font-normal">|</span>
          <span>
            <Link
              href="https://www.github.com/shivendrahada"
              target="_blank"
              className="text-xl"
            >
              <FaEnvelope />
            </Link>
          </span>
        </div>
      </div>
      <ul className="list-disc list-inside marker:text-green-600 marker:text-xl marker:mr-2 mb-4">
        <li>6.8 years of experience</li>
      </ul>
      <ul className="p-2 text-sm font-light text-justify">
        <li className="inline-flex items-baseline">
          <FaLongArrowAltRight className="mr-2 text-xs" /> Seasoned full-stack
          JavaScript developer with over 7 years of experience
        </li>
        <li className="inline-flex items-baseline">
          <FaLongArrowAltRight className="mr-2 text-xs" />
          Expertise in building robust, scalable, and maintainable web
          applications
        </li>
        <li className="inline-flex items-baseline">
          <FaLongArrowAltRight className="mr-2 text-xs" />
          Proficient in leveraging JavaScript on both the front-end (Next.js,
          React.js) and back-end (Node.js)
        </li>
        <li className="inline-flex items-baseline">
          <FaLongArrowAltRight className="mr-2 text-xs" />
          AWS-certified cloud professional, adept at designing and deploying
          cost-effective, highly available, and secure cloud-based solutions
        </li>
        <li className="inline-flex items-baseline">
          <FaLongArrowAltRight className="mr-2 text-xs" />
          Passionate about leveraging technology to deliver custom software
          solutions that help clients achieve their goals
        </li>
        <li className="inline-flex items-baseline">
          <FaLongArrowAltRight className="mr-2 text-xs" />
          Known for a customer-centric approach and willingness to go the extra
          mile
        </li>
      </ul>
    </section>
  );
}