import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import About from "../MainIntroComps/About";

export default function SideIntro() {
  return (
    <div className="flex flex-col md:justify-start md:items-start items-center flex-none md:w-[25%]">
      <div className="p-8">
        <Image
          className="rounded-full shadow-lg border-[10px] border-double p-5 border-slate-200"
          src={"/logo.jpg"}
          alt="Logo"
          width={300}
          height={300}
        />
      </div>
      <div className="md:hidden block">
        <About />
      </div>
      <section className="md:text-left text-center">
        <h2 className="sideintro-heading">Profile Basics</h2>
        <div className="flex flex-col md:items-start items-center">
          <span className="inline-flex items-center text-sm font-medium">
            <FaMapMarkerAlt className="mr-2" /> Bhopal, India
          </span>
          <Link
            href="tel:+919200250030"
            className="inline-flex items-center text-sm font-medium py-1 hover:underline"
          >
            <IoMdCall className="mr-2" /> +91-92002-50030 (India)
          </Link>
          <Link
            href="tel:+447454948154"
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            <IoMdCall className="mr-2" /> +44-74549-48154 (UK)
          </Link>
        </div>
      </section>
      <section className="md:text-left text-center">
        <h2 className="sideintro-heading">Technical Skills</h2>
        <span className="text-sm font-medium">
          NextJS, ReactJS, NodeJS, AWS, Serverless, GraphQL, REST, Javascript,
          Typescript, Python
        </span>
      </section>
      <section className="md:text-left text-center">
        <h2 className="sideintro-heading">Additional Skills</h2>
        <span className="text-sm font-medium">
          CI/CD Piplelines, Docker, ExpressJS, MySQL, AI/ML, PostgreSQL, Redis,
          MongoDB
        </span>
      </section>
      <section className="md:text-left text-center">
        <h2 className="sideintro-heading">Education</h2>
        <span className="font-medium text-sm block leading-5">
          Sagar Institute of Research and Technology, Bhopal
        </span>
        <span className="text-xs block leading-5">
          Bachelor of Engineering, Computer Science
          <br />
          2013-2017 &nbsp;&nbsp;&nbsp;&nbsp; Grade: 7.71
        </span>
      </section>
    </div>
  );
}
