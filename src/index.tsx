import React from 'react';
import ReactDOM from 'react-dom';

import darkTheme from '@ant-design/dark-theme';

const App = () => {

  function toggleTheme() {
    // TODO: Implement darkmode
  }

  return (
    <React.StrictMode>
      Hello!
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('#root'));