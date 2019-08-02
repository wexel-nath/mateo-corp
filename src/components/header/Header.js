import React from "react";
import { Layout, Menu } from "antd";

import "./Header.css";
import logo from "../../img/mateo_corp_grey_text.png";

const { Item } = Menu;
const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <img className="logo header-logo" src={logo} alt="Mateo Corp Logo" />
      <Menu className="header-menu" theme="dark" mode="horizontal">
        <Item>Meat Night</Item>
        <Item>Greatest Athlete</Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
