import React, { useState } from 'react';
import { PageHeader, Button, Descriptions, Switch } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import links from '../../data/links.json';

interface PageHeaderProps {
  congregationName: string,
  subtitle: string,
  description: string,
  address: string
}

const HeaderInfo = (props: PageHeaderProps) => {
  // const [theme, setTheme] = useState<string>('light');

  // const changeTheme = (value: any) => {
  //   value ? setTheme('dark') : setTheme('light');
  // }

  return (
    <>
      <PageHeader
        title={props.subtitle}
        subTitle={props.congregationName}
        extra={[
          // <Switch onChange={changeTheme} />,
          <Button key="2">Operation 2</Button>,
        <Button 
          icon={<GoogleOutlined />}
          key="1"
          href={links.informationBoard}
          target="_blank"
        >
          Information Board
        </Button>
        ]}
      >
        
      </PageHeader>
    </>
  );
}

export default HeaderInfo;