import { useParallax } from "react-scroll-parallax";
import { Circle, Emoji, Wrapper } from "./styles";

export const Emojis = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [180, 520],
  });
  return (
    <Wrapper>
      <Circle ref={parallax.ref}>
        <Emoji src="./pictures/waffle.png" alt="Waffle emoji" />
        <Emoji src="./pictures/chocolate_bar.png" alt="Chocolate bar emoji" />
        <Emoji src="./pictures/seedling.png" alt="Seedling emoji" />
        <Emoji src="./pictures/sunny.png" alt="Sunny emoji" />
        <Emoji src="./pictures/heart_eyes.png" alt="Heart eyes emoji" />
      </Circle>
    </Wrapper>
  );
};
