import React from 'react';

const ServiceMarquee = () => {
  return (
    <div>
<div className="w-full bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient-x text-white rounded-bottom-lg shadow-lg p-8 max-w-100vw mx-auto">
      <h2 className="text-2xl font-bold text-center">
        We are constantly evolving and innovating
      </h2>
      <marquee className="max-w-xl block mx-auto mt-4 text-base font-italic" behavior="scroll" direction="left" scrollamount="3">
        Always pushing boundaries, never settling, always creating the future.
      </marquee>
    </div>
    </div>
  )
}

export default ServiceMarquee;