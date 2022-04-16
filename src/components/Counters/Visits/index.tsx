import React from "react";
import CountUp from "react-countup";

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `${process.env.REACT_APP_COUNT_API_BURL}hit/${process.env.REACT_APP_COUNT_API_NAMESPACE}/${process.env.REACT_APP_COUNT_API_KEY_VISITS}`
);
xhr.responseType = "json";

export const VisitsCounter = () => {
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    xhr.onload = function () {
      setCount(this.response.value);
    };
    xhr.send();
  }, []);

  if (count === null) return null;
  return <CountUp end={count} />;
};
