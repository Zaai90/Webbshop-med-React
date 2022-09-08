import { useEffect, useState } from "react";

export default function useDetectScroll() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    console.log({ scrolling }, { scrollTop });
    if (scrollTop > 64) console.log("past header!");

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return [scrolling, scrollTop];
}
