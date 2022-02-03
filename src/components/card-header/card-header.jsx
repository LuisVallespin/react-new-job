import React from 'react';
import Logo from '../logo/logo';

function CardHeader({ company, photo, job }) {
  return (
    <div className="flex items-center justify-between text-xl font-bold">
      <Logo photo={photo} className="mr-4" />
      <div className="flex flex-col text-right">
        <span className="text-sm font-semibold text-neutral-500">
          {company}
        </span>
        <h2 className=" font-bold text-neutral-600">{job}</h2>
      </div>
    </div>
  );
}
export default CardHeader;
