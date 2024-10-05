import React from "react";

const Section_Title = ({heading, description}) => {
  return (
    <div className="text-center py-10 space-y-2 bg-[#f5f5f7]">
      <h1 className="text-4xl font-semibold">{heading}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Section_Title;
