// TypingAnimation.js
import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState('Starting...');
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const startTyping = () => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    };

    const typingInterval = setInterval(startTyping, 100); // Adjust the typing speed by changing the interval value

    return () => {
      clearInterval(typingInterval); // Clean up the interval on unmount
    };
  });

  // Use a setTimeout to restart the animation after a delay
  // useEffect(() => {
  //   if (loop) {
  //     const restartAnimation = () => {
  //       setTypedText('I');
  //       setCurrentIndex(1);
  //     };

  //     const loopTimeout = setTimeout(restartAnimation, 1000); // Adjust the delay before restarting the animation
  //     return () => clearTimeout(loopTimeout); // Clean up the timeout on unmount
  //   }
  // }, [loop]);

  return <div className="typing-animation">{typedText}</div>;
};

export default TypingAnimation;
