import styled from "styled-components";
import Header from "./components/header/index";
import Preview from "./components/preview/index";
import Resizable from "./components/resizable/index";
import Editor from "./components/editor/index";

import { useState, useEffect, useRef } from "react";

import LogsContainer from "./components/console";
import {update} from '../../hooks/playground'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
const PlaygroungWrapper = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	.react-resizable-handle {
		display: block;
		background-color: #37414b;
		background-repeat: no-repeat;
		background-position: 50%;
	}

	.resize-horizontal {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
	.resize-vertical {
		display: flex;
		flex-direction:column;
		width:100%;
		position: relative;
       
	}

	.react-resizable-handle-n {

		top:0;
		left:0;
		height: 10px;
		width: 100%;
		cursor: row-resize;
		    background: transparent;
    position: absolute;
    height: 40px;
	}

	.react-resizable-handle-e {
		width: 10px;
		min-width: 10px;
		height: 100%;	
		cursor: col-resize;
		background: ${({theme})=>theme.colors.bg};
	}
`;

const App = () => {
	// 	const ref = useRef<any>();
	// 	const [code, setCode] = useState("");
	// 	const [input, setInput] = useState("");
	//   const [err, setErr] = useState('');

	// 	const startService = async () => {
	// 		ref.current = await esbuild.startService({
	// 			worker: true,
	// 			wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
	// 		});
	// 	};
	// 	useEffect(() => {
	// 		startService();
	// 	}, []);

	// 	const onClick = async () => {
	// 		if (!ref.current) {
	// 			return;
	// 		}

	// 		const output = await bundle(input);
	//       setCode(output.code);
	//       setErr(output.err);
	// 	};
	return (
		<Container>
			<Header />
			<PlaygroungWrapper>
				<Resizable direction="horizontal">
					<Editor initialValue="let myVar = 1;"  />	
				</Resizable>
				<Preview />
			</PlaygroungWrapper>
		</Container>
	);
};
/*<div>
						<button>Submit</button>
					</div>*/
export default App;