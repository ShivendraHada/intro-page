import React from "react";
import ExperienceDetail from "./ExperienceDetail";
import companies from "../../../public/data/experience";

export default function Experience() {
  return (
    <section className="section-style">
      <h2 className="main-heading">Experience</h2>
      <hr className="hr-style" />
      {companies.map((company) => (
        <ExperienceDetail key={company.name} company={company} />
      ))}
    </section>
  );
}
