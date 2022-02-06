import React from 'react';

export default function CardBody({ description }) {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
}
