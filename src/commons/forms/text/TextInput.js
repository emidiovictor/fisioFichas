import React from "react";
import { Form } from "semantic-ui-react";

export const TextInput = ({ label, context, field, form, ...props }) => {
  return (
    <>
      <Form.Input
        {...props}
        {...field}
        placeholder={label}
        label={label}
        type={props.type}
        width={props.width}
        error={
          form.touch &&
          form.error && {
            content: form.error
          }
        }
      />
    </>
  );
};
