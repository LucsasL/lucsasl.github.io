"use client";

import React, { useEffect, useState } from 'react';

function Scrollbar() {
  // Thumb position
  const [thumbPosition, setThumbPosition] = useState<number | string>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setThumbPosition(window.scrollY / 85 + "%");
    });
  });

  return (
    <>
      <div className="scrollbar">
        <div className="thumb" style={{ top: thumbPosition }}></div>
      </div>
    </>
  );
}

export default Scrollbar;