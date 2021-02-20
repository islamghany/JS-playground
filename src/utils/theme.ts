
export interface Theme{
	colors:{
		bg:string,
		secondary:string,
		primary:string,
		mainText:string,
		subText: string,
		border: string,
		gradient: string,
		gradient2:string,
		white:string,	
	}

}

export const theme:Theme={
	colors:{
		bg: "#2F2F2F",
		primary: '#212121',
		secondary: "#212121",
		mainText: "#ebebeb",
		subText: "rgb(235, 235, 235,.7)",
		border: "#3b3b3b",
		gradient: "linear-gradient(181.81deg,#6333ff 25%,#441ebf 75%)",
		gradient2: "linear-gradient(90deg,#f4bd82,#fe9e9a 30%,#e47ac8)",
		white: "#fff",
	}
}