import { data } from "../..";
import { List, ListItem, Text, Title } from "./styles";

export const Explanations = () => {
  return (
    <List>
      {data.explainations.body.items.map((i) => (
        <ListItem>
          <Title>{i.title}</Title>
          {i.description.map((d) => (
            <Text>{d}</Text>
          ))}
        </ListItem>
      ))}
    </List>
  );
};
