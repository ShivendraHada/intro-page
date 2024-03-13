import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div>
      <h2 className="text-3xl mb-8 font-bold text-center">Projects</h2>
      <div className="my-10 p-2">
        <Link href="https://to-do.thetechhub.app" target="_blank">
          <h4 className="text-xl my-2 font-semibold text-purple-900">
            #{" "}
            <span className="hover:underline hover:underline-offset-4 hover:decoration-1">
              Seamless Task Management: Your To-Do List, Any Device, Anytime!
            </span>
          </h4>
          <p className="text-md my-1 md:ml-5 text-justify">
            A dynamic To-Do app designed for seamless task management. Easily
            transition tasks from &apos;To Do&apos; to &apos;In Progress&apos;
            and finally &apos;Done.&apos; The app ensures flexibility by
            allowing users to effortlessly switch task statuses. Featuring a
            search bar for quick task retrieval, the app enhances accessibility.
            Additionally, users can enrich task details by attaching images and
            videos. As a Progressive Web Application (PWA), it offers
            device-specific installations, enabling users to create a tailored
            app experience. With full responsiveness, our To-Do app adapts to
            various devices for optimal usability. Streamline your task
            management experience with our intuitive and versatile application.
          </p>
          <h5 className="text-md my-2 ml-5">
            <span className="font-semibold">Tech Stack:</span> Next.js, Tailwind
            CSS, Appwrite, Zustand, Typescript{" "}
          </h5>
        </Link>
      </div>
      <div className="my-5 p-2">
        <h4 className="text-xl my-2 font-semibold">
          # Streamlining Daily Standup and EOD Updates with Node.js Slackbot on
          AWS ECS
        </h4>
        <p className="text-md my-1 md:ml-5 text-justify">
          The Standup/EOD Slackbot was developed as a solution to streamline the
          process of collecting daily standup and End-of-Day (EOD) updates from
          employees. The application was independently created using the node.js
          programming language, and subsequently deployed on Amazon Web Services
          (AWS) using the AWS lambda. Its primary aim is to simplify the
          communication and collaboration between team members by automating the
          task of collecting status updates, thus saving valuable time and
          increasing productivity.
        </p>
        <h5 className="text-md my-2 ml-5">
          <span className="font-semibold">Tech Stack:</span> Node.js, Slack, AWS
          Elastic beanstalk, and AWS Lambda
        </h5>
      </div>
      <div className="my-5 p-2">
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-[2px] my-8 bg-purple-200 border-0 rounded-full dark:bg-purple-700" />
          <span className="absolute px-3 font-medium text-purple-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-purple-900">
            More! Coming Soon...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
