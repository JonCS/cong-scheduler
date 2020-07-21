import React, { useState } from 'react';

import { PageHeader, Button, Descriptions, Switch } from 'antd';

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
          <Button key="1">Operation 1</Button>
        ]}
      >
        
      </PageHeader>
    </>
  );
}

export default HeaderInfo;