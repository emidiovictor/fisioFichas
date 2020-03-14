import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { CustomSidebar } from "./pages/CustomSidebar";
import {
  Sidebar,
  Segment,
  Button,
  Header,
  Image,
  Container
} from "semantic-ui-react";
import { Routes } from "./routes";

function App() {
  const [state, setState] = useState({
    visible: true
  });

  const handleAnimationChange = () => setState({ visible: !state.visible });

  return (
    <>
      <Button onClick={handleAnimationChange}>Push</Button>
      <Sidebar.Pushable as={Segment}>
        <CustomSidebar {...state} />

        <Sidebar.Pusher>
          <Container>
            <Segment basic>
              <Routes />
            </Segment>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default App;
