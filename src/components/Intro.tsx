import Image from "next/image";
import Link from "next/link";
import React from "react";

function Intro() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="rounded-full shadow-lg border-[10px] border-double p-5 border-slate-200"
        src={"/logo.jpg"}
        alt="Logo"
        width={300}
        height={300}
      />
      <h1 className="pt-5 pb-2 text-4xl font-bold">Shivendra Hada</h1>
      <h2 className="p-2 text-lg font-semibold">
        Senior Full Stack Developer | Next.js | React.js | Node.js | Python | 2x
        AWS Certified
      </h2>
      <p className="p-2 text-md text-center">
        A full-stack JavaScript developer with a strong background in end-to-end
        application development. My expertise lies in understanding the complex
        aspects of developing, managing, and deploying cloud-native
        applications. I also possess a solid understanding of the AWS Cloud
        Platform, enabling me to design, develop, deploy, and manage cloud-based
        applications efficiently and cost-effectively. With my AWS certification
        and extensive full-stack development experience, I can create robust,
        secure, and cost-efficient solutions.
      </p>
      <h3 className="p-5 text-lg">
        Let&apos;s Connect:{" "}
        <span>
          <Link
            href="https://www.linkedin.com/in/shivendrahada"
            target="_blank"
            className="underline underline-offset-4 decoration-1 text-purple-800"
          >
            LinkedIn
          </Link>
        </span>{" "}
        |{" "}
        <span>
          <Link
            href="https://www.github.com/shivendrahada"
            target="_blank"
            className="underline underline-offset-4 decoration-1 text-purple-800"
          >
            GitHub
          </Link>
        </span>
      </h3>
    </div>
  );
}

export default Intro;
