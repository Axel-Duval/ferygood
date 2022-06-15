import { data } from "../..";
import { Content, Img, Text, Wrapper } from "./styles";

export const Team = () => (
  <Wrapper>
    <Content>
      <Img src={data.team.body.img} />
    </Content>
    <Content>
      <Text>{data.team.body.text}</Text>
    </Content>
  </Wrapper>
);
