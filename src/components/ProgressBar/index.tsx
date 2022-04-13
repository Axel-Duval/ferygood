import React from "react";
import { Bar } from "./styles";

export const ProgressBar = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const scrollHeight = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight || document.body.scrollHeight;
      setWidth((scrollTop / (scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  if (window.innerWidth > 700) return null;
  return <Bar style={{ transform: `translateX(${width - 100}%)` }} />;
};
