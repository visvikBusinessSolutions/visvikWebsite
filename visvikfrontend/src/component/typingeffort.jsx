import { useEffect } from "react";
import gsap from "gsap";

const useTypewriterEffect = (containerRef, options = {}) => {
  const {
    stagger = 0.05,
    ease = "none",
    from = { opacity: 0 },
    to = { opacity: 1 },
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".letter");
    gsap.set(letters, from);
    gsap.to(letters, { ...to, stagger, ease });
  }, [containerRef, stagger, ease, from, to]);
};

export default useTypewriterEffect;
