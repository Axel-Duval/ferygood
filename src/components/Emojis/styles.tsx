import { styled } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 35px 0;
  margin-bottom: 150px;
`;
Wrapper.displayName = "Wrapper";

export const Circle = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  border: solid 2px #f4f4f4;
`;
Circle.displayName = "Circle";

export const Brand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${(props) => props.theme.font.family.secondary}, cursive;
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: ${(props) => props.theme.font.size.lg};
`;
Brand.displayName = "Brand";

export const Emoji = styled.p`
  position: absolute;
  font-size: 45px;
  padding: 10px;
  border-radius: 4px;

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 2px #ff8800;
    background-color: #fff2e3;
  }
  &:nth-child(2) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    border: solid 2px #ff3700;
    background-color: #fce5de;
  }
  &:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border: solid 2px #20c000;
    background-color: #edffe9;
  }
  &:nth-child(4) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    border: solid 2px #ffd106;
    background-color: #fffbea;
  }
`;
Emoji.displayName = "Emoji";
