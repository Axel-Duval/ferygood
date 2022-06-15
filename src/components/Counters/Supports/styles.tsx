import { styled } from "../../../theme";

export const Badge = styled.span`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  background: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  top: -20px;
  right: -20px;
  transition: all 0.3s;

  &:hover {
    transform: scale(0.9);
  }
`;
Badge.displayName = "Badge";

export const Content = styled.span`
  font-family: ${(props) => props.theme.font.family.primary}, sans-serif;
  font-weight: ${(props) => props.theme.font.weight.semibold};
  font-size: ${(props) => props.theme.font.size.md};
  color: ${(props) => props.theme.color.black};
`;
Content.displayName = "ButtonContent";

export const BubblesButton = styled.button`
  @keyframes topBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  @keyframes bottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  -webkit-appearance: none;
  appearance: none;
  padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.md};
  border: solid 2px ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
    background-color: ${(props) => props.theme.color.black};
    ${Content} {
      color: ${(props) => props.theme.color.white};
    }
  }

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${(props) => props.theme.color.black} 20%,
        transparent 30%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 10%,
        ${(props) => props.theme.color.black} 15%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      );
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
    background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 85% 30%;
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 10%,
        ${(props) => props.theme.color.black} 15%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => props.theme.color.black} 20%,
        transparent 20%
      );
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  &:active {
    transform: scale(0.9);
    ${Badge} {
      transition: all 0.3s;
      transform: scale(1.2);
    }
  }

  &.animate {
    &:before {
      display: block;
      animation: topBubbles ease-in-out 1s forwards;
    }
    &:after {
      display: block;
      animation: bottomBubbles ease-in-out 1s forwards;
    }
  }
`;
BubblesButton.displayName = "Button";

export const Img = styled.img`
  width: 70%;
`;
Img.displayName = "Image";
