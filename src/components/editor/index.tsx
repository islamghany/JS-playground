import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel'
import {useRef} from 'react';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';
import styled from 'styled-components'
import Button from '../button/index'
import { update,useListen } from "../../hooks/playground";

const  showFunc = `
    import _React from 'react';
    import _ReactDOM from 'react-dom';
    var show = (value) => {
      const root = document.querySelector('#root');
      if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
          _ReactDOM.render(value, root);
        } else {
          var node = document.createElement("div");
          node.innerHTML = JSON.stringify(value);                 
          root.appendChild(node);
        }
      } else {
          var node = document.createElement("div");
          node.innerHTML = value;                 
          root.appendChild(node);
      }
    };
  `;
const EditorContainer=styled.div`	
  position: relative;
  height: 100%;
  width: calc(100% - 10px);
  overflow: hidden;
 .button-format {
   font-size: 1.6rem;
  line-height: 1.6;
  background: #fff;
  color:${({ theme }) => theme.colors.bg};;
  border-radius: 0.6rem;
  padding: 0 1.6rem 0;
  height: 3.8rem;
  min-width: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  font-family: "Avenir";
  letter-spacing: 0.02rem;
  cursor: pointer;
  outline:none;
   &:hover {
      background: #f8f8f8 ;
    }
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.3s;
}

&:hover .button-format {
  opacity: 1;
}
	.view-lines.monaco-mouse-cursor-text{
    padding-left: 10px;
    
  }
  
`
interface Props {
	initialValue?: string;
  light?:boolean;
}
const Editor: React.FC<Props> = ({ initialValue='',light }) => {
   const isSync = useListen('save');
   const isMiniMap = useListen('minimap');
	 const editorRef = useRef<any>();
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      update('code',showFunc + getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 4 });

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };
	const onFormatClick = ()=>{
      const code = editorRef.current.getModel().getValue();
	  const formatedCode = prettier.format(code,{
	  	parser:'babel',
	  	plugins:[parser],
	  	printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "always",
	  }).replace(/\n$/,'');	
	  // chnage 
	  editorRef.current.setValue(formatedCode)
	}
	return (
		<EditorContainer>
		<button className="button-format" onClick={onFormatClick}>Format</button>
		<MonacoEditor
			editorDidMount={onEditorDidMount}
			value={initialValue}
			language="javascript"
			theme={light ? 'light' : 'dark'}
			height="100%"
			options={{   
				wordWrap: "on",
				minimap: { enabled: isMiniMap.data === 'on' ? true : false },
				showUnused: false,
				folding: false,
				lineNumbersMinChars: 3,
				fontSize: 14,
				scrollBeyondLastLine: false,
				automaticLayout: true,
			}}
		/>
		</EditorContainer>
	);
};

export default Editor;