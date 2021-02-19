//import * as esbuild from 'esbuild-wasm';
//import  { useState, useEffect, useRef } from 'react';
import {render} from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from './utils/theme';
import GlobalStyle from './utils/style'
import App from './App'
// import { unpkgPathPlugin } from './bundle/plugins/unpkg-path-plugin';
// import { fetchPlugin } from './bundle/plugins/fetch-plugin';
// import Editor from './components/editor/';
// import Preview from './components/preview';

const Root=()=>{
  //const ref = useRef<any>();
  // const [code, setCode] = useState('');
  // const [input, setInput] = useState('');

  // const startService = async () => {
  //   ref.current = await esbuild.startService({
  //     worker: true,
  //     wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
  //   });
  // };
  // useEffect(() => {
  //   startService();
  // }, []);

  // const onClick = async () => {
  //   if (!ref.current) {
  //     return;
  //   }

  //   const result = await ref.current.build({
  //     entryPoints: ['index.js'],
  //     bundle: true,
  //     write: false,
  //     plugins: [unpkgPathPlugin(), fetchPlugin(input)],
  //     define: {
  //       'process.env.NODE_ENV': '"production"',
  //       global: 'window',
  //     },
  //   });

  //   setCode(result.outputFiles[0].text);
  // };

  // return (
  //   <div>
  //     <Editor
  //       initialValue="const a = 1;"
  //       onChange={(value) => setInput(value)}
  //     />
  //     <div>
  //       <button onClick={onClick}>Submit</button>
  //     </div>
  //     <Preview code={code} />
  //   </div>
  // );
  return <ThemeProvider theme={theme}>
  <GlobalStyle />
  <App/>
  </ThemeProvider>
};

render(<Root />,document.querySelector('#root'));