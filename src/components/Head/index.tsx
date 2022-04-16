import { ParallaxBanner } from "react-scroll-parallax";
import { Def, Flex, Subtitle, Title, Wrapper } from "./styles";

export const Head = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "./pictures/header4.jpg",
          speed: 10,
        },
        {
          children: (
            <Flex>
              <Wrapper>
                <Def>[made in montpellier]</Def>
                <Title>The blur.</Title>
                <Subtitle>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit sequi, odio debitis, architecto, atque quisquam sapiente
                  animi reprehenderit voluptatibus voluptates delectus nihil id
                  rerum alias aperiam cupiditate possimus officiis molestias?
                </Subtitle>
              </Wrapper>
            </Flex>
          ),
          speed: -20,
        },
      ]}
      style={{ width: "auto", height: "700px" }}
    />
  );
};
