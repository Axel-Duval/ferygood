import { Parallax } from "react-scroll-parallax";
import { Flex, H2, Subtitle, Wrapper } from "./styles";

interface IProps {
  id?: string;
  name: string;
  description: string;
  color: string;
}

export const Title = ({ id, name, description, color }: IProps) => (
  <Flex id={id}>
    <Parallax scale={[0.9, 1]} speed={-3}>
      <Wrapper overlay={color}>
        <H2>{name}</H2>
        <Parallax scale={[1, 0.8]}>
          <Subtitle>{description}</Subtitle>
        </Parallax>
      </Wrapper>
    </Parallax>
  </Flex>
);
