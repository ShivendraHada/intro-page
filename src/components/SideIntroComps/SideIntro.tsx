import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

export default function SideIntro() {
  return (
    <div className="flex flex-col justify-start flex-none md:w-[25%]">
      <div className="p-8">
        <Image
          className="rounded-full shadow-lg border-[10px] border-double p-5 border-slate-200"
          src={"/logo.jpg"}
          alt="Logo"
          width={300}
          height={300}
        />
      </div>
      <section>
        <h2 className="sideintro-heading">Profile Basics</h2>
        <span className="inline-flex items-center text-sm font-medium">
          <FaMapMarkerAlt className="mr-2" /> Bhopal, India
        </span>
        <span className="inline-flex items-center text-sm font-medium">
          <IoMdCall className="mr-2" /> +91-92002-50030 (India)
        </span>
        <span className="inline-flex items-center text-sm font-medium">
          <IoMdCall className="mr-2 " /> +44-74549-48154 (UK)
        </span>
      </section>
      <section>
        <h2 className="sideintro-heading">Technical Skills</h2>
        <span className="text-sm font-medium">
          NextJS, ReactJS, NodeJS, AWS, Serverless, GraphQL, REST, Javascript,
          Typescript, Python
        </span>
      </section>
      <section>
        <h2 className="sideintro-heading">Additional Skills</h2>
        <span className="text-sm font-medium">
          CI/CD Piplelines, Docker, ExpressJS, MySQL, AI/ML, PostgreSQL, Redis,
          MongoDB
        </span>
      </section>
      <section>
        <h2 className="sideintro-heading">Education</h2>
        <span className="font-medium text-sm">
          Sagar Institute of Research and Technology, Bhopal
        </span>
        <br />
        <span className="text-xs">
          Bachelor of Engineering, Computer Science
          <br />
          2013-2017 &nbsp;&nbsp;&nbsp;&nbsp; Grade: 7.71
        </span>
      </section>
    </div>
  );
}
