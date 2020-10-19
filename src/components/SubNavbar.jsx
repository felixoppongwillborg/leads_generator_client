import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";


const SubNavbar = () => {
  return (
    <Segment id="segment">
      <Menu id="navbar" text>
        <Menu.Item
           position="right"
           as={Link}
           to={{ pathname: "/environment" }}
           content="Help the environment"
           data-cy="button"
        />
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/economics" }}
          content="Benefit your wallet"
          data-cy="button"
        />
      </Menu>
    </Segment>
  );
};

export default SubNavbar;
