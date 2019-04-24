import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="container"
    style={{'marginTop':40}}>
      <Myform/>
    </div>
  );
}

export default App;
