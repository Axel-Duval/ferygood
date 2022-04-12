import { Theme } from "../theme";

export const colorFromTheme = (key: string, theme: Theme) => {
  switch (key.trim().toLowerCase()) {
    case "yellow":
    case "y":
      return theme.color.yellow;
    case "orange":
    case "o":
      return theme.color.orange;
    case "green":
    case "g":
      return theme.color.green;
    default:
      return theme.color.black;
  }
};

export const randomColorFromTheme = (colorTheme : Theme['color']) => {
  const main =  [colorTheme.yellow, colorTheme.orange, colorTheme.green]
  return main[Math.floor(Math.random() * main.length)];
}