import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/home">Information Board</Link>
        </Menu.Item>
        <SubMenu 
          title="Weekday Meeting (週中聚會)"
          onTitleClick={handleNavigation}
          key="weekdayOption1"
          icon={<DownOutlined />}
        >
          <Menu.Item key="weekdayOption1">
            <Link to="/weekdayOption1">Option 1</Link>
          </Menu.Item>
          <Menu.Item key="weekdayComment">
            <Link to="/weekdayComment">SBCC Comment Signup</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu 
          title="Weekend Meeting (週末聚會)"
          onTitleClick={handleNavigation}
          key="weekendOption1"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item key="weekendOption">
            <Link to="/weekendOption2">Option 2</Link>
          </Menu.Item>
          <Menu.Item key="weekendComment">
            <Link to="/weekendComment">SBCC Comment Signup</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="publisherInfo" icon={<TeamOutlined />}>
          <Link to="/publishers">Publishers</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Navigation;