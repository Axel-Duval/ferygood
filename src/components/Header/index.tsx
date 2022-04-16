import { Parallax } from "react-scroll-parallax";
import { Div, Quote, Text, Title, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <Parallax speed={-5}>
        <Div>
          <Title>M</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nisi?
            Possimus optio nesciunt nisi eum perferendis officia asperiores,
            delectus, in nulla molestiae cum quam porro odio aut illum, ratione
            pariatur.
          </Text>
          <Quote>
            <span>Un acheté, un au fer</span>
          </Quote>
        </Div>
      </Parallax>
    </Wrapper>
  );
};
