import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

const VerticalSidebar = ({ animatio, visible }) => (
  <Sidebar
    as={Menu}
    animation="unConver"
    direction="left"
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

export const CustomSidebar = ({ visible }) => {
  return (
    <div>
      <VerticalSidebar animation="uncover" visible={visible} />
    </div>
  );
};
