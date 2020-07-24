import React from 'react';
import { List, Avatar, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import AddPublisher from './publishersComponents/AddPublisher';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const Publishers = () => {
  return (
    <>
      <Alert
        message="Warning"
        description="When entering publisher information, do not reveal sensitive information."
        type="warning"
        showIcon
        closable
      />
      <div>
        <AddPublisher />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: 'lightBlue' }} icon={<UserOutlined />} />}
              title={item.title}
              description="Publisher info here. Placeholder text here. Something here."
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default Publishers;