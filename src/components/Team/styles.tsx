import { styled } from "../../theme";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${(props) => props.theme.space.xxl};
  padding: ${(props) => props.theme.space.xxxl};

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: ${(props) => props.theme.space.xxxl}
      ${(props) => props.theme.space.md};
  }
`;
Wrapper.displayName = "Wrapper";

export const Content = styled.li`
  flex: 1;
  position: relative;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
  line-height: 1.7rem;
  text-align: justify;

  &:nth-child(1) {
    &:after {
      content: "";
      position: absolute;
      top: -3%;
      left: -3%;
      width: 106%;
      height: 106%;
      border-width: 3px;
      border-style: solid;
      border-image: linear-gradient(
          to left,
          ${(props) => props.theme.color.green},
          ${(props) => props.theme.color.yellow},
          ${(props) => props.theme.color.orange}
        )
        10% 10% 10%;
      transform: rotate(2deg);
    }
    &:before {
      content: "";
      position: absolute;
      top: -4%;
      left: -6%;
      width: 108%;
      height: 108%;
      border: solid 2px ${(props) => props.theme.color.muted};
      transform: rotate(-2deg);
    }
  }
`;
Content.displayName = "Content";

export const Img = styled.img`
  width: 100%;
  position: relative;
  z-index: 10;
  cursor: pointer;
  filter: grayscale(1);
  transition: all 0.5s ease-in-out;
  transform: rotate(2deg);

  &:hover {
    filter: none;
    transform: rotate(0deg);
  }
`;
Img.displayName = "Image";

export const Text = styled.p`
  padding: ${(props) => props.theme.space.xxl};
  border: solid 2px white;

  @media (max-width: 1200px) {
    padding: ${(props) => props.theme.space.sm};
  }
  @media (max-width: 1000px) {
    padding: 0;
  }
`;
