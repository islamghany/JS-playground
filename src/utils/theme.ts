
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
		bg: "#222529",
		primary: "#6333ff",
		secondary: "#272A2E",
		mainText: "#eef5f8",
		subText: "rgba(255,255,255,.5)",
		border: "rgb(255 255 255 / 23%)",
		gradient: "linear-gradient(181.81deg,#6333ff 25%,#441ebf 75%)",
		gradient2: "linear-gradient(90deg,#f4bd82,#fe9e9a 30%,#e47ac8)",
		white: "#fff",
	}
}