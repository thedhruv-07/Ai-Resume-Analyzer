import { useState, useEffect } from "react";

export const useFreeTrial = (toolName) => {
  const [remaining, setRemaining] = useState(3);
  const [isLimitReached, setIsLimitReached] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`${toolName}_analyses`);
    const count = stored ? parseInt(stored) : 0;
    const remainingTries = Math.max(0, 3 - count);
    setRemaining(remainingTries);
    setIsLimitReached(count >= 3);
  }, [toolName]);

  const useAnalysis = () => {
    const stored = localStorage.getItem(`${toolName}_analyses`);
    const count = stored ? parseInt(stored) : 0;
    const newCount = count + 1;
    localStorage.setItem(`${toolName}_analyses`, newCount.toString());
    
    const remainingTries = Math.max(0, 3 - newCount);
    setRemaining(remainingTries);
    setIsLimitReached(newCount >= 3);
    
    return remainingTries;
  };

  const resetTrial = () => {
    localStorage.removeItem(`${toolName}_analyses`);
    setRemaining(3);
    setIsLimitReached(false);
  };

  return { remaining, isLimitReached, useAnalysis, resetTrial };
};
