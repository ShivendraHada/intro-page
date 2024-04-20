import Link from "next/link";
import React, { memo } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ExperienceDetail = memo(({ company }: { company: CompanyProps }) => {
  return (
    <div className="my-2 p-2">
      <h4 className="text-lg mt-2 font-semibold primary-text-color">
        # <span>{company.designation}</span>
      </h4>
      <div className="md:ml-5">
        <div className="flex flex-row text-md justify-between w-full primary-text-color font-medium">
          <span className="">{company.name}</span>
          <span className="">{company.fromTo}</span>
        </div>
        <span className="py-2 mb-3 text-sm text-medium block">
          {company.about}
        </span>
        <p className="text-sm my-1 text-justify ">
          <ul>
            {company.responsibilities.map((res) => {
              return (
                <li className="inline-flex items-baseline">
                  <FaLongArrowAltRight className="mr-2 text-xs" />
                  {res}
                </li>
              );
            })}
          </ul>
        </p>
        <h5 className="text-sm my-3 ">
          <span className="font-semibold">Tech Stack:</span> {company.skills}
        </h5>
      </div>
    </div>
  );
});

ExperienceDetail.displayName = "Experience";

export default ExperienceDetail;
