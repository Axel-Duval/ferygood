import { styled } from "../../theme";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.space.xxxl} 0;
`;
List.displayName = "List";

export const ListItem = styled.li`
  margin: ${(props) => props.theme.space.xxl} 0;
  width: min(90%, 600px);
`;
ListItem.displayName = "ListItem";

export const Title = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 2rem;
`;
Title.displayName = "ValueTitle";

export const Text = styled.p`
  font-weight: 300;
  font-size: 15px;
  text-align: justify;
  line-height: 1.7rem;
  margin: ${(props) => props.theme.space.sm} 0;
  background-position: 0 27px;
  background-size: 27px 27px;
  background-image: repeating-linear-gradient(
    0deg,
    #cdcdcd,
    #cdcdcd 1px,
    #ffffff 1px,
    #ffffff
  );
`;
Text.displayName = "ValueText";
