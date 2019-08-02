import React from "react";
import { Form, Input as AntInput, Icon } from "antd";

const { Item } = Form;

export const Input = ({
  getFieldDecorator,
  name,
  required,
  message,
  placeholder,
  icon,
  type
}) => {
  return (
    <Item>
      {getFieldDecorator(name, {
        rules: [{ required, message }]
      })(
        <AntInput
          prefix={<Icon type={icon} />}
          type={type}
          placeholder={placeholder}
        />
      )}
    </Item>
  );
};
