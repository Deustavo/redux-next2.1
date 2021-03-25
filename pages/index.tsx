import React from 'react';
import { Provider } from 'react-redux';

import store from '../store'
import AboutUs from '../components/AboutUs/AboutUs';
import Home from '../components/Home/Home';

const App: React.FC = () => {
  return(
    <div>
      <Provider store={store}>
        <div style={{ padding: '16px 10%', borderBottom: '1px solid rgba(0, 0, 0, 0.2)'}}>
          <h1>Gestão de alunos matriculados ACCENTURE 2.1</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 10% 0 10%'}}>
          <Home />
          <AboutUs />
        </div>
      </Provider>
    </div>
  );
}

export default App;