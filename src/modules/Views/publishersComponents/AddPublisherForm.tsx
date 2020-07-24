import React, { useState } from 'react';
import { Form, Input, Radio, Select } from 'antd';

const { Option } = Select;

const AddPublisherForm = () => {

  const publisherTypes = [
    'Elder',
    'Ministerial Servant',
    'Publisher',
    'Unbaptized Publisher'
  ];

  const selectOptions = publisherTypes.map((type) =>
    <Select.Option value={type}>{type}</Select.Option>
  );

  return (
    <>
      <Form>
        <Form.Item label="Full Name">
          <Input.Group compact>
            <Select defaultValue="Brother">
              <Option value="Brother">Brother</Option>
              <Option value="Sister">Sister</Option>
            </Select>
            <Input />
          </Input.Group>
        </Form.Item>
        <Form.Item label="Publisher Type(s)">
          <Select mode="multiple" defaultValue={["Publisher"]}>
            {selectOptions}
          </Select>
        </Form.Item>

      </Form>
    </>
  );
}

export default AddPublisherForm;