import React, { useEffect, useState } from 'react';

function Scrollbar() {
  // Thumb position
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setThumbPosition(window.scrollY / 74 + "%");
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