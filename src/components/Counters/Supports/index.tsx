import _ from "lodash";
import React from "react";
import CountUp from "react-countup";
import { data } from "../../..";
import { CountWrapper, Suffix, Wrapper } from "../styles";
import { Badge, BubblesButton, Content, Img } from "./styles";

const contents = data.counters.supports.button.labels;
const emojis = data.counters.supports.button.emojis;

export const SupportsCounter = () => {
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
      `${process.env.REACT_APP_COUNT_API_BURL}get/${process.env.REACT_APP_COUNT_API_NAMESPACE}/${process.env.REACT_APP_COUNT_API_KEY_SUPPORTS}`
    );
    getXhr.responseType = "json";
    getXhr.onload = function () {
      setCount(this.response.value);
    };
    getXhr.send();
  }, []);

  const hit = () => {
    setCount((c) => (c ? c + 1 : c));
    const hitXhr = new XMLHttpRequest();
    hitXhr.open(
      "GET",
      `${process.env.REACT_APP_COUNT_API_BURL}hit/${process.env.REACT_APP_COUNT_API_NAMESPACE}/${process.env.REACT_APP_COUNT_API_KEY_SUPPORTS}`
    );
    hitXhr.responseType = "json";
    hitXhr.onerror = function () {
      setCount((c) => (c ? c - 1 : c));
    };
    hitXhr.send();
  };

  const throttledHandler = React.useMemo(() => {
    const handleClick = () => {
      setAnimate(true);
      hit();
    };
    return _.throttle(handleClick, 15000);
  }, []);

  if (count === null) return null;
  return (
    <Wrapper>
      <CountWrapper>
        <CountUp end={count} preserveValue={true} />
        <Suffix>{data.counters.supports.suffix}</Suffix>
      </CountWrapper>
      <BubblesButton
        className={animate ? "animate" : ""}
        onClick={throttledHandler}
      >
        <Content>{contents[count % contents.length]}</Content>
        <Badge>
          <Img src={emojis[count % emojis.length]} alt="Emoji" />
        </Badge>
      </BubblesButton>
    </Wrapper>
  );
};
