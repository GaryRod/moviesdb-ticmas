import './App.css';
import React from 'react';
import Content from './components/Content';

function App() {
  return (
    <React.Fragment>
      <div className='h-100 w-100 bg-dark bg-gradient'>
        <Content></Content>
      </div>
    </React.Fragment>
  );
}

export default App;
