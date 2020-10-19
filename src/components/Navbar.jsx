import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import { Menu, Segment, Image, Button } from "semantic-ui-react";

const Navbar = () => {
  const [showWhySolarOptions, setWhySolarOptions] = useState(false);

  return (
    <Segment id="segment">
      <Menu id="navbar" text>
        <Image
          data-cy="logo"
          src="/images/dummylogo.png"
          alt="capybara-logo"
          as={Link}
          to={{ pathname: "/" }}
          circular
          size="tiny"
        />
        <Menu.Item
          position="right"
          content="Why solar"
          data-cy="button"
          onClick={() => setWhySolarOptions(!showWhySolarOptions)}
        />
        {showWhySolarOptions ? (
          <div>
            <SubNavbar />
          </div>
        ) : (
          ""
        )}
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/aboutus" }}
          content="About us"
          data-cy="button"
        />
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/faqs" }}
          content="FAQs"
          data-cy="button"
        />
        <Menu.Item
          position="right"
          as={Link}
          to={{ pathname: "/quotes" }}
          content="Get up to three quotes"
          data-cy="button"
        >
          <Button id="navbarButton">Get up to three quotes</Button>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Navbar;