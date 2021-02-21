import { useRef, useEffect } from 'react';
import styled from 'styled-components';
//import LogsContainer from "../console";
//import Resizable from "../resizable/index";
import { useError,usePreview } from "../../hooks/playground";

const PreviewContainer = styled.div`
  position: relative;
  height:100%;
  flex: 1;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
 
 iframe {
  width: 100%;
  border:0;
  background:#fff;
  flex:1
}

.react-draggable-transparent-selection &:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}
.preview-error{
   position: absolute;
  top: 10px;
  left: 10px;
  color: red;
}
`


const html = `
    <html>
      <head>
        <style>html { background-color: white; }</style>
      </head>
      <body>
        <div id="root"></div>
        <script>
          const handleError = (err) => {
            const root = document.querySelector('#root');
            root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
            console.error(err);
          };

          window.addEventListener('error', (event) => {
            event.preventDefault();
            handleError(event.error);
          });

          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;


const RenderFrame = ()=>{
  const {data} = usePreview()

  const iframe = useRef<any>();
  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(data, '*');
    }, 50);
  }, [data]);
  return <iframe
      title="preview"
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={html}
    />
}

const RenderError = ()=>{
  const {data} = useError()

  if(data) return  <div className="preview-error">{err}</div>
  return null
}
const Preview: React.FC = () => {
  return (
    <PreviewContainer>
    <RenderFrame />
    <RenderError />
   
  </PreviewContainer>
  );
};
/* <Resizable direction="vertical">
      <LogsContainer />
    </Resizable>*/
export default Preview;