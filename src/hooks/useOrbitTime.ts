import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

const FRAME_MS = 40;
const CLOCK_START = Date.now();

const elapsedSeconds = () => (Date.now() - CLOCK_START) / 1000;

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduced);
    const subscription = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduced);
    return () => subscription.remove();
  }, []);

  return reduced;
}

export function useOrbitTime() {
  const reduced = useReducedMotion();
  const [seconds, setSeconds] = useState(elapsedSeconds);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setSeconds(elapsedSeconds()), FRAME_MS);
    return () => clearInterval(id);
  }, [reduced]);

  return reduced ? 0 : seconds;
}
