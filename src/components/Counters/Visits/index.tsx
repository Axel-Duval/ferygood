import React from "react";
import CountUp from "react-countup";
import { data } from "../../../index";
import { CountWrapper, Suffix, Wrapper } from "../styles";

export const VisitsCounter = () => {
  const [count, setCount] = React.useState<number | null>(null);
  const [animate, setAnimate] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 700);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [animate]);

  React.useEffect(() => {
    const getXhr = new XMLHttpRequest();
    getXhr.open(
      "GET",
      `${process.env.REACT_APP_COUNT_API_BURL}hit/${process.env.REACT_APP_COUNT_API_NAMESPACE}/${process.env.REACT_APP_COUNT_API_KEY_VISITS}`
    );
    getXhr.responseType = "json";
    getXhr.onload = function () {
      setCount(this.response.value);
    };
    getXhr.send();
  }, []);

  if (count === null) return null;
  return (
    <Wrapper>
      <CountWrapper>
        <CountUp end={count} preserveValue={true} />
        <Suffix>{data.counters.views.suffix}</Suffix>
      </CountWrapper>
    </Wrapper>
  );
};
