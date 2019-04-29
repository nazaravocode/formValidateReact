import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FormForTests from './components/FormForTests';

function App() {
  return (
    <div className="container"
    style={{'marginTop':40}}>
      <FormForTests/>
    </div>
  );
}

export default App;
