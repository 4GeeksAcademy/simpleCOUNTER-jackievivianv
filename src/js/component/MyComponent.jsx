import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faClock} className="text-center bg-dark text-white m-2 p-3 fs-1" />
    </div>
  );
};

export default MyComponent;
