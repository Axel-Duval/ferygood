import { useParallax } from "react-scroll-parallax";
import { Circle, Emoji, Wrapper } from "./styles";

export const Emojis = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [180, 520],
  });
  return (
    <Wrapper>
      <Circle ref={parallax.ref}>
        <Emoji src="./emojis/waffle.png" alt="Waffle emoji" />
        <Emoji src="./emojis/chocolate_bar.png" alt="Chocolate bar emoji" />
        <Emoji src="./emojis/seedling.png" alt="Seedling emoji" />
        <Emoji src="./emojis/sunny.png" alt="Sunny emoji" />
        <Emoji src="./emojis/heart_eyes.png" alt="Heart eyes emoji" />
      </Circle>
    </Wrapper>
  );
};
