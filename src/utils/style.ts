
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
    	padding:0;
    	margin:0;
    	box-sizing: border-box;
    }
	html{
		font-size:62.5%;
		@media (max-width:  56.25em){
			font-size: 50%;
		}
		@media (max-width: : 75em){
			 font-size: 56.25%;
		}
		@media (min-width:112.5em){
			font-size:75%;	
		}
	}
	body{
		color: ${({theme})=>theme.colors.mainText};
		font-size:1.6rem;
		background: ${({theme})=>theme.colors.bg};
		font-family: -apple-system, BlinkMacSystemFont, Avenir, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
`