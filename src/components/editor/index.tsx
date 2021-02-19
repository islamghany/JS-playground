import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel'
import {useRef} from 'react';
// import codeShift from 'jscodeshift';
// import Highlighter from 'monaco-jsx-highlighter';
import styled from 'styled-components'

const EditorContainer=styled.div`	
  position: relative;
  height: 90vh;
  width: calc(100% - 10px);
 .button-format {
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
	
`
interface Props {
	initialValue?: string;
	onChange?:(value: string)=> void;
}
const Editor: React.FC<Props> = ({ initialValue='', onChange=()=>{} }) => {
	 const editorRef = useRef<any>();

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    // const highlighter = new Highlighter(
    //   // @ts-ignore
    //   window.monaco,
    //   codeShift,
    //   monacoEditor
    // );
    // highlighter.highLightOnDidChangeModelContent(
    //   () => {},
    //   () => {},
    //   undefined,
    //   () => {}
    // );
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
		<button className="button-format" onClick={onFormatClick}>format</button>
		<MonacoEditor
			editorDidMount={onEditorDidMount}
			value={initialValue}
			language="javascript"
			theme="dark"
			height="100%"
			options={{
				wordWrap: "on",
				minimap: { enabled: false },
				showUnused: false,
				folding: false,
				lineNumbersMinChars: 3,
				fontSize: 16,
				scrollBeyondLastLine: false,
				automaticLayout: true,
			}}
		/>
		</EditorContainer>
	);
};

export default Editor;