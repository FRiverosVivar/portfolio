import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Avatar = ({ frontSrc }: { frontSrc: string }) => {
  return (
    <div className="w-full flex justify-center mb-9 mt-12">
      <div className="w-64 h-64 rounded-full">
        <img src={frontSrc} alt="" className="rounded-full h-full w-full" />
      </div>
    </div>
  );
};

export default Avatar;
