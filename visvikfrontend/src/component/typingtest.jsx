import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  useEffect(() => {
    setDisplayedText("");
    setIsTypingDone(false);
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="">
      {displayedText}
      {!isTypingDone && <span className="blink-dot ml-1 text-2xl">...</span>}
    </div>
  );
};

export default TypingText;
