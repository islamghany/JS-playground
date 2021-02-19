import styled from "styled-components";
import Header from "./components/header/index";
import Preview from "./components/preview/index";
import Resizable from "./components/resizable/index";
import Editor from "./components/editor/index";
import { unpkgPathPlugin } from "./bundle/plugins/unpkg-path-plugin";
import { fetchPlugin } from "./bundle/plugins/fetch-plugin";
import { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import bundle from './bundle/index';
import LogsContainer from './components/console';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
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

	.react-resizable-handle-s {
		height: 10px;
		width: 100%;
		cursor: row-resize;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
	}

	.react-resizable-handle-e {
		width: 10px;
		min-width: 10px;
		height: 100%;
		cursor: col-resize;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==");
	}
`;
const Code = styled.div`
	height: 100%;
	flex: 1;
	background: ${({ theme }) => theme.colors.gradient2};
`;
const App = () => {
	const ref = useRef<any>();
	const [code, setCode] = useState("");
	const [input, setInput] = useState("");
  const [err, setErr] = useState('');

	const startService = async () => {
		ref.current = await esbuild.startService({
			worker: true,
			wasmURL: "https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm",
		});
	};
	useEffect(() => {
		startService();
	}, []);

	const onClick = async () => {
		if (!ref.current) {
			return;
		}

		const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
	};
	return (
		<Container>
			<Header />
			<PlaygroungWrapper>
				<Resizable direction="horizontal">
					<Editor 
					 initialValue="const a = 1;"
            onChange={(value) => setInput(value)}
					/>
					     <div>
         <button onClick={onClick}>Submit</button>
       </div>
				</Resizable>
				<Preview code={code} err={err} />
			</PlaygroungWrapper>
			<LogsContainer />
		</Container>
	);
};
export default App;