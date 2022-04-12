import { Flex, H2, Subtitle, Wrapper } from "./styles";

interface IProps {
  id?: string;
  name: string;
  description: string;
  color: string;
}

export const Title = ({ id, name, description, color }: IProps) => {
  return (
    <Flex id={id}>
      <Wrapper overlay={color}>
        <H2>{name}</H2>
        <Subtitle>{description}</Subtitle>
      </Wrapper>
    </Flex>
  );
};
