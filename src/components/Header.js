import React from "react";
import { Layout, Menu } from "antd";

import "./Header.css";
import logo from "../img/mateo_corp_grey_text.png";

const Header = () => {
  return (
    <Layout.Header>
      <img className="logo header-logo" src={logo} alt="Mateo Corp Logo" />
      <Menu className="header-menu" theme="dark" mode="horizontal">
        <Menu.Item key="1">Meat Night</Menu.Item>
        <Menu.Item key="2">Greatest Athlete</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
