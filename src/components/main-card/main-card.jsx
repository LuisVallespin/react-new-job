import React from 'react';
import CardBody from '../card-body/card-body';
import CardHeader from '../card-header/card-header';
import './main-card.css';

export default function MainCard({ job }) {
  return (
    <div className="max-w-md overflow-hidden overflow-y-auto rounded-xl shadow-2xl">
      <div className="card w-full px-8 py-4">
        <CardHeader
          job={job.name}
          company={job.company.name}
          photo={job.company.logo}
        />
        <div className="py-4">
          <CardBody description={job.description} />
        </div>
      </div>
    </div>
  );
}
