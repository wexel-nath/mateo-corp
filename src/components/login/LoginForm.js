import React from "react";
import { Form, Button } from "antd";

import { Input } from "../helper/formHelpers";

import "./LoginForm.css";

const { Item } = Form;

const LoginForm = ({ form: { validateFields, getFieldDecorator } }) => {
  const handleSubmit = event => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Input
        getFieldDecorator={getFieldDecorator}
        name="username"
        required
        message="Enter a username"
        placeholder="Username"
        icon="user"
        type="text"
      />
      <Input
        getFieldDecorator={getFieldDecorator}
        name="password"
        required
        message="Enter a password"
        placeholder="Password"
        icon="lock"
        type="password"
      />
      <Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Item>
    </Form>
  );
};

export default Form.create({ name: "login" })(LoginForm);
