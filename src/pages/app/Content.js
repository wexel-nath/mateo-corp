import React from "react";
import { Layout, PageHeader } from "antd";

import LoginForm from "../../components/login/LoginForm";

const Content = () => {
  return (
    <Layout.Content>
      <PageHeader title="Meat Night" subTitle="Who's up this week?" />
      <LoginForm />
    </Layout.Content>
  );
};

export default Content;
