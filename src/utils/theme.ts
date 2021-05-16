export interface Theme {
  colors: {
    bg: string;
    secondary: string;
    primary: string;
    mainText: string;
    subText: string;
    border: string;
    gradient: string;
    gradient2: string;
    white: string;
    bar: string;
  };
}

export const light: Theme = {
  colors: {
    bg: "#fff",
    primary: "rgb(62, 85, 204)",
    secondary: "#202124",
    mainText: "#212121",
    subText: "rgb(235, 235, 235,.7)",
    border: "1px solid rgb(226 226 234)",
    gradient: "linear-gradient(181.81deg,#6333ff 25%,#441ebf 75%)",
    gradient2: "linear-gradient(90deg,#f4bd82,#fe9e9a 30%,#e47ac8)",
    white: "#fff",
    bar: "#212121",
  },
};
export const dark: Theme = {
  colors: {
    bg: "#161B22",
    primary: "rgb(62, 85, 204)",
    secondary: "#202124",
    mainText: "#ebebeb",
    subText: "rgb(235, 235, 235,.7)",
    border: "1px solid rgb(235, 235, 235,0.7)",
    gradient: "linear-gradient(181.81deg,#6333ff 25%,#441ebf 75%)",
    gradient2: "linear-gradient(90deg,#f4bd82,#fe9e9a 30%,#e47ac8)",
    white: "#fff",
    bar: "#fafafa",
  },
};
