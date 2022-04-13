import { data } from "../../index";
import {
  Flex,
  List,
  RowData,
  RowHeader,
  Table,
  TableBody,
  TableRow,
  Type,
} from "./styles";

const handleClick = (value: string | string[]) =>
  navigator.clipboard.writeText(
    typeof value === "string" ? value : value.join(" <> ")
  );

export const Ingredients = () => {
  return (
    <Flex>
      {data.ingredients.items.map((i, n) => (
        <div key={n}>
          <Type>{i.type}</Type>
          <Table>
            <TableBody>
              {i.table.map((e, i) => (
                <TableRow key={i}>
                  <RowHeader
                    onClick={() => {
                      handleClick(e.value);
                    }}
                  >
                    {e.key}
                  </RowHeader>
                  <RowData>
                    {typeof e.value === "string" ? (
                      e.value
                    ) : (
                      <List>
                        {e.value.map((v, i) => (
                          <li key={i}>{v}</li>
                        ))}
                      </List>
                    )}
                  </RowData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </Flex>
  );
};
