import React from 'react';

const CallToAction = () => {
  return (
    <div className="w-full flex flex-col items-center h-48 justify-center space-y-8">
      <p className="text-xl font-semibold">Ready to empower your business?</p>
      <a
        href="tel:8132033638"
        className="bg-material-blue animate-bounce capitalize font-medium px-4 py-2 rounded-lg shadow-lg w-48 text-center text-lg"
      >
        Give me a call
      </a>
    </div>
  );
};

export default CallToAction;
