import { useCallback, useState } from "react";

export  function useThrottle(fn, delayMs = 3000) {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledFn = useCallback(
    (...args) => {
      if (!isThrottled) {
        setIsThrottled(true);
        fn(...args);
        setTimeout(() => {
          setIsThrottled(false);
        }, delayMs);
      }
    },
    [fn, isThrottled, delayMs]
  );

  return throttledFn;
}