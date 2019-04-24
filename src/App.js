import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyFormLite from './components/MyFormLite';

function App() {
  return (
    <div className="container"
    style={{'marginTop':40}}>
      <MyFormLite/>
    </div>
  );
}

export default App;
