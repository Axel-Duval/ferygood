import { styled } from "../../theme";

const SCROLLBAR_HEIGHT = "7px";

export const Bar = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: ${SCROLLBAR_HEIGHT};
  width: 100%;
  background: ${(props) => props.theme.color.yellow};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.color.green} 0%,
    ${(props) => props.theme.color.yellow} 50%,
    ${(props) => props.theme.color.orange} 100%
  );

  @media (min-width: 700px) {
    display: none;
  }
`;
Bar.displayName = "Bar";
