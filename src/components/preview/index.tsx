import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import LogsContainer from "../console";
import Resizable from "../resizable/index";

const PreviewContainer = styled.div`
  position: relative;
  height:calc(100vh - 4rem);
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
interface PreviewProps {
  code?: string;
  err?:string
}

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

const Preview: React.FC<PreviewProps> = ({ code='',err=null }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <PreviewContainer>
    <iframe
      title="preview"
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={html}
    />
    {err && <div className="preview-error">{err}</div>}
    <Resizable direction="vertical">
      <LogsContainer />
    </Resizable>
  </PreviewContainer>
  );
};

export default Preview;