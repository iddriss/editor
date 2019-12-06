import React from 'react';
import './App.css';
import Editor from './pages/editor';
import Topbar from './components/topbar';

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Editor />
    </React.Fragment>
  );
}

export default App;