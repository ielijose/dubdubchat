import { useState, useRef, useEffect } from "react";

export const useVisibleScreen = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let observer;
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        if (isIntersecting !== show) {
          setShow(isIntersecting);
        }
      });
      observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [ref, show]);

  return [show, ref];
};
