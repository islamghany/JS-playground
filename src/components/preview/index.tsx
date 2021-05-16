import { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
//import LogsContainer from "../console";
//import Resizable from "../resizable/index";
import { useError, usePreview, useListen } from "../../hooks/playground";

const PreviewContainer = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  iframe {
    width: 100%;
    border: 0;
    background: ${({ theme }) => theme.colors.bg};
    flex: 1;
  }

  .react-draggable-transparent-selection &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
  .preview-error {
    position: absolute;
    top: 10px;
    left: 10px;
    color: red;
  }
`;

const html = (bg = "#fff", color = "#222") => `
    <html>
      <head>
        <style>html{background:${bg};color:${color};}</style>
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

const circAnim = keyframes`
from {
   transform: rotate(0);
 }
 to {
   transform: rotate(360deg);
 }
`;
const LoadingContainer = styled.div`
  position: absolute;
  z-index: 10;
  right: 0.6rem;
  top: 0.4rem;
  .circonf {
    $size: 2em;
    $speed: 0.7s;
    margin: 1em;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 4px solid silver;
    animation: ${circAnim} 0.7s linear infinite;
    border-color: grey;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
`;
const Loading = () => {
  const { data } = useListen("building");
  if (data)
    return (
      <LoadingContainer>
        <div class="circonf"></div>
      </LoadingContainer>
    );
  return null;
};

const RenderFrame = () => {
  const { data } = usePreview();
  const theme = useListen("theme");
  const iframe = useRef<any>();
  useEffect(() => {
    iframe.current.srcdoc = html(
      theme.data === "on" ? "#fafafa" : "#222",
      theme.data === "on" ? "#222" : "#fff"
    );
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(data, "*");
    }, 50);
  }, [data, theme.data]);
  return (
    <iframe
      title="preview"
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={html}
    />
  );
};

const RenderError = () => {
  const { data } = useError();

  if (data) return <div className="preview-error">{data}</div>;
  return null;
};
const Preview: React.FC = () => {
  return (
    <PreviewContainer>
      <Loading />
      <RenderFrame />
      <RenderError />
    </PreviewContainer>
  );
};
/* <Resizable direction="vertical">
      <LogsContainer />
    </Resizable>*/
export default Preview;
