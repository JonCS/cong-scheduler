import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import AddPublisherForm from './AddPublisherForm';

const AddPublisher = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<UserAddOutlined/>} >
        Add New Publisher 
      </Button>
      <Modal
        visible={visible}
        title="Publisher Information"
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
            </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
            Submit
            </Button>,
        ]}
      >
        <AddPublisherForm />
      </Modal>
    </>
  );
}

export default AddPublisher;