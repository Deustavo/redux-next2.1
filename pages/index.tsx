import React from 'react';
import { Provider } from 'react-redux';

import store from '../store'
import AboutUs from '../components/AboutUs';
import Home from '../components/Home';

const App: React.FC = () => {
  return(
    <div style={{ padding: '0 10%'}}>
      <Provider store={store}>
        <h1 style={{ marginBottom: 16}}>Gestão de alunos matriculados ACCENTURE 2.1</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <Home />
          <AboutUs />
        </div>
      </Provider>
    </div>
  );
}

export default App;