import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
// import darkTheme from '@ant-design/dark-theme';
import Navigation from './modules/Header/Navigation';
import HeadingInfo from './modules/Header/HeaderInfo';
import FourZeroFour from './modules/FourZeroFour';
import Homepage from './modules/Homepage';

import 'antd/dist/antd.css'

// TODO: Remove this later
const headerProps = {
  congregationName: 'Cupertino',
  subtitle: 'Information Board',
  description: 'For managing congregation assignments and duties',
  address: 'McClellan Rd, Cupertino CA'
}

const App = () => {
  const [current, setCurrent] = useState<string>('home')

  const handleNavigation = (e: any) => {
    setCurrent(e.key);
    console.log('click ', e.key);
  }

  return (
    <>
      <HeadingInfo {...headerProps} />
      <Navigation {...{ handleNavigation, current }} />
      <Router>
        <Switch>
          <Route path={"/" || "/home"} component={Homepage} />
          <Route component={FourZeroFour} />
        </Switch>
      </Router>
    </>
  );
}

export default App;