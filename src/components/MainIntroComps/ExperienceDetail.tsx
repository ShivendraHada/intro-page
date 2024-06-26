import Link from "next/link";
import React, { memo } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ExperienceDetail = memo(({ company }: { company: CompanyProps }) => {
  return (
    <div className="my-2 p-2">
      <h4 className="text-xl mt-2 font-semibold primary-text-color">
        # <span>{company.designation}</span>
      </h4>
      <div className="md:ml-5">
        <div className="flex flex-row text-base justify-between w-full primary-text-color font-medium">
          <span>{company.name}</span>
          <span>{company.fromTo}</span>
        </div>
        <span className="py-2 mb-1 text-sm text-medium block">
          {company.about}
        </span>
        <ul className="flex flex-col text-sm my-1 text-justify">
          {company.responsibilities.map((res) => {
            return (
              <li key={res} className="inline-flex items-baseline">
                <FaLongArrowAltRight className="mr-2 text-xs min-w-[10px]" />
                <span>{res}</span>
              </li>
            );
          })}
        </ul>
        <h5 className="text-sm my-3 ">
          <span className="font-semibold">Tech Stack:</span> {company.skills}
        </h5>
      </div>
    </div>
  );
});

ExperienceDetail.displayName = "Experience";

export default ExperienceDetail;
