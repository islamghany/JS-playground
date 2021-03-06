import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { useRef, useEffect } from "react";
import codeShift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";
import styled from "styled-components";
import Button from "../button/index";
import { update, useListen } from "../../hooks/playground";
const download = require("downloadjs");
const showFunc = `
    import _React from 'react'
    import _ReactDOM from 'react-dom';
    import Inspector from 'react-inspector'
    let ___outputs=[];
    var show = (value) => {
      let React = _React;
      const root = document.querySelector('#root');
      if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
          _ReactDOM.render(value, root);
          // _ReactDOM.render(<div>
          //   <Inspector data={value} />
          //   </div>,root);
        } else {
            // var node = document.createElement('div')
            // node.innerHTML = '<Inspector data={{name:1}} />'
            // root.appendChild(node);
            ___outputs.push(value);
            _ReactDOM.render(<div>
              {___outputs.map(data=> <Inspector theme="chromeDark" data={data} />)}
              </div>, root);
        }


      } else {
          // var node = document.createElement("div");
          // node.innerHTML = value;
          // root.appendChild(node);
          ___outputs.push(value);
          _ReactDOM.render(<div style={{fontSize:'16px !important'}}>
            {___outputs.map(data=> <Inspector theme="chromeDark" data={data} />)}
            </div>, root);
          //_ReactDOM.render(<ObjectRootLabel theme="chromeDark" data={value} />,root);
      }
    };
  `;
const EditorContainer = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 10px);
  overflow: hidden;
  .button-format {
    font-size: 1.6rem;
    line-height: 1.6;
    background: #fff;
    color: ${({ theme }) => theme.colors.bg};
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
    outline: none;
    &:hover {
      background: #f8f8f8;
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
  .view-lines.monaco-mouse-cursor-text {
    padding-left: 10px;
    font-family: MonoLisa !important;
  }
`;
interface Props {
  initialValue?: string;
  light?: boolean;
}
let t = false,
  t2 = false;
const Editor: React.FC<Props> = ({ initialValue = "", light }) => {
  const isSync = useListen("save");
  const isMiniMap = useListen("minimap");
  const beutify = useListen("beutify");
  const downloadData = useListen("download");
  const editorRef = useRef<any>();
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      update("code", showFunc + getValue());
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
  const onFormatClick = () => {
    const code = editorRef.current.getModel().getValue();
    const formatedCode = prettier
      .format(code, {
        parser: "babel",
        plugins: [parser],
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
      })
      .replace(/\n$/, "");
    // chnage
    editorRef.current.setValue(formatedCode);
  };
  const onDownload = () => {
    download(
      editorRef.current.getModel().getValue(),
      "playground.js",
      "text/javascript"
    );
  };
  useEffect(() => {
    if (!t) {
      t = true;
      return;
    }
    onFormatClick();
  }, [beutify.data]);
  useEffect(() => {
    if (!t2) {
      t2 = true;
      return;
    }
    onDownload();
  }, [downloadData.data]);
  return (
    <EditorContainer>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
        theme={light ? "light" : "dark"}
        height="100%"
        options={{
          wordWrap: "on",
          minimap: { enabled: isMiniMap.data === "on" ? true : false },
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
