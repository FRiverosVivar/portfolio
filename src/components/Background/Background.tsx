import React from "react";

const Background = ({ src }: { src: string }) => (
  <img src={src} alt="background" className="absolute left-0 -z-10 w-full" />
);

export default Background;
