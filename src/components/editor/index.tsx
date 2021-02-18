import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel'
import {useRef} from 'react';
// import Highlighter from 'monaco-jsx-highlighter';
// import codeShift from 'jscodeshift'

interface Props {
	initialValue: string;
	onChange(value: string): void;
}
const Editor: React.FC<Props> = ({ initialValue }) => {
	const ref = useRef<any>(null);
	const onEditorDidMount:EditorDidMount = (getValue,editor) => {
		ref.current = editor;
		editor.onDidChangeModelContent(()=>{
			console.log(getValue())
		})
		editor.getModel()?.updateOptions({tabSize:2});
		
	   // const highlighter = new Highlighter(
    //     // @ts-ignore
	   // 	window.monaco,
	   // 	codeShift,
	   // 	editor
	   // 	);	
    //     highlighter.highLightOnDidChangeModelContent(
    //        ()=>{},
    //        ()=>{},
    //        undefined,
    //        ()=>{}
    //     );
	};
	const onFormatClick = ()=>{
      const code = ref.current.getModel().getValue();
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
	  ref.current.setValue(formatedCode)
	}
	return (
		<div>
		<button onClick={onFormatClick}>format</button>
		<MonacoEditor
			editorDidMount={onEditorDidMount}
			value={initialValue}
			language="javascript"
			theme="dark"
			height="500px"
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
		</div>
	);
};

export default Editor;