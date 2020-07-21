import React, { useState } from 'react';

import { Menu } from 'antd';
import { HomeOutlined, TeamOutlined, DownOutlined, CaretDownOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Navigation = ({ handleNavigation, current }: any) => {
  // const [current, setCurrent] = useState<string>('home')

  // const handleNavigation = (e: any) => {
  //   setCurrent(e);
  //   console.log('click ', e);
  // }

  return (
    <>
      <Menu onClick={handleNavigation} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="infoBoard" icon={<HomeOutlined />}>
          Information Board
        </Menu.Item>
        <SubMenu 
          title="Weekday Meeting (週中聚會)"
          onTitleClick={handleNavigation}
          key="weekdayOption1"
          icon={<DownOutlined />}
        >
          <Menu.Item key="weekdayOption1">Option 1</Menu.Item>
          <Menu.Item key="weekdayComment">SBCC Comment Signup</Menu.Item>
        </SubMenu>
        <SubMenu 
          title="Weekend Meeting (週末聚會)"
          onTitleClick={handleNavigation}
          key="weekendOption1"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item key="weekendOption">Option 1</Menu.Item>
          <Menu.Item key="weekendComment">SBCC Comment Signup</Menu.Item>
        </SubMenu>
        <Menu.Item key="publisherInfo" icon={<TeamOutlined />}>
          Publishers
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Navigation;