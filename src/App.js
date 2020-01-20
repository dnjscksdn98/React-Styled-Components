import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color};
//   border-radius: 50%;

//   /* it's impossible to use another props inside so add 'css' if necessary */
//   ${props =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

// color theme
const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
};

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
  };
  const onCancel = () => {
    setDialog(false);
  };

  return (
    // provide themes
    // it must have only one element inside
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button color="gray" size="small">
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="pink" size="large">
              BUTTON
            </Button>
            <Button color="pink">BUTTON</Button>
            <Button color="pink" size="small">
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button outline>BUTTON</Button>
            <Button color="gray" outline>
              BUTTON
            </Button>
            <Button color="pink" outline>
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button fullWidth size="large">
              BUTTON
            </Button>
            <Button color="gray" fullWidth size="large">
              BUTTON
            </Button>
            <Button color="pink" fullWidth size="large">
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button fullWidth size="large" onClick={onClick}>
              CLICK
            </Button>
          </ButtonGroup>
        </AppBlock>

        <Dialog
          title="정말로 삭제하시겠습니까"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
