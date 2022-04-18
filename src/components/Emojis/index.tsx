import { useParallax } from "react-scroll-parallax";
import { Brand, Circle, Emoji, Wrapper } from "./styles";

export const Emojis = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [180, 520],
  });
  return (
    <Wrapper>
      <Circle ref={parallax.ref}>
        <Emoji>🧇</Emoji>
        <Emoji>🍫</Emoji>
        <Emoji>🌱</Emoji>
        <Emoji>☀️</Emoji>
        <Brand>Ferygood</Brand>
      </Circle>
    </Wrapper>
  );
};
