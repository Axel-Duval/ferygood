import { data } from "../..";
import {
  Def,
  Flex,
  Slogan,
  StyledParallaxBanner,
  Subtitle,
  SubtitleItem,
  Title,
  Wrapper,
} from "./styles";

export const Head = () => {
  return (
    <StyledParallaxBanner
      layers={[
        {
          image: data.header.img,
          speed: 1,
        },
        {
          children: (
            <Flex>
              <Wrapper>
                <Def>{data.header.def}</Def>
                <Title>{data.header.title}</Title>
                <Subtitle>
                  {data.header.subtitle.map((s) => (
                    <SubtitleItem>{s}</SubtitleItem>
                  ))}
                  <Slogan>{data.header.slogan}</Slogan>
                </Subtitle>
              </Wrapper>
            </Flex>
          ),
          speed: -20,
        },
      ]}
    />
  );
};
