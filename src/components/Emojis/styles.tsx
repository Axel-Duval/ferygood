import { styled } from "../../theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  overflow: hidden;
  padding: ${(props) => props.theme.space.xxxl} 0;
  margin-bottom: ${(props) => props.theme.space.xxxl};
`;
Wrapper.displayName = "Wrapper";

export const Circle = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: solid 2px #f4f4f4;
`;
Circle.displayName = "Circle";

export const Emoji = styled.img`
  position: absolute;
  width: 35px;
  height: 35px;
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
  &:nth-child(5) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
Emoji.displayName = "Emoji";
