import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FormStyledComp from './components/formComponent';
import Articles from './components/Articles';

function App() {
  return (
    <div className="container"
    style={{'marginTop':40}}>
      <FormStyledComp/>
      <Articles/>
    </div>
  );
}

export default App;


