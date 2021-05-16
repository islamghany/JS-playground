import styled from "styled-components";
import Header from "./components/header/index";
import Preview from "./components/preview/index";
import Resizable from "./components/resizable/index";
import Editor from "./components/editor/index";

import { useListen } from "./hooks/playground";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./utils/theme";
import GlobalStyle from "./utils/style";
import Loader from "./components/loader";
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
    flex-direction: column;
    width: 100%;
    position: relative;
  }

  .react-resizable-handle-n {
    top: 0;
    left: 0;
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
    background: ${({ theme }) => theme.colors.bar};
  }
`;
const Footer = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border-top: ${({ theme }) => theme.colors.border};
  p {
    height: 2rem;
    color: ${({ theme }) => theme.colors.mainText};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: ${({ theme }) => theme.colors.primary};
      display: inline-block;
      margin-left: 0.6rem;
    }
  }
`;
const App = () => {
  const { data } = useListen("theme");
  return (
    <ThemeProvider theme={data === "on" ? light : dark}>
      <GlobalStyle />
      <Container>
        <Header />
        <Loader />
        <PlaygroungWrapper>
          <Resizable direction="horizontal">
            <Editor light={data === "on" ? true : false} initialValue="" />
          </Resizable>
          <Preview />
        </PlaygroungWrapper>
        <Footer>
          <p>
            <span>made with &#10084;&#65039; by</span>
            <a target="_blank" href="https://github.com/islamghany">
              islamghany
            </a>
          </p>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};
/*<div>
						<button>Submit</button>
					</div>*/
export default App;
