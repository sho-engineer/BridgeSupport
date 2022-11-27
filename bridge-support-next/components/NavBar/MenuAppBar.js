import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
// import BridgeSupportLogo from "./BridgeSupportLogo.js";

export default function MenuAppBar() {
  return (
    <Layout>
      <Navbar isBordered variant="static">
        {/* <Navbar.Brand> */}
          {/* <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand> */}
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">ホーム</Navbar.Link>
          <Navbar.Link href="#">スケジュール</Navbar.Link>
          <Navbar.Link href="#">ビデオ会議</Navbar.Link>
          <Navbar.Link href="#">チャット</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>  
    </Layout>
  )
}
