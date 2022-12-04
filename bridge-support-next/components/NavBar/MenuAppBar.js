import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { BridgeSupportLogo } from "./BridgeSupportLogo.js";

export default function MenuAppBar({children}) {
  return (
    <Layout>
      <Navbar shouldHideOnScroll isBordered variant="sticky">
        <BridgeSupportLogo />
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/">ホーム</Navbar.Link>
          <Navbar.Link href="schedule">スケジュール</Navbar.Link>
          <Navbar.Link href="video">ビデオ会議</Navbar.Link>
          <Navbar.Link href="#">チャット</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="accounts/login">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>  
      { children }
    </Layout>
  )
}
