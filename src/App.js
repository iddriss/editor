import React, { useState } from 'react';
import './App.css';
import Editor from './pages/editor';
import Topbar from './components/topbar';

function App() {

  const stateData = {
    ids: [],
  };

  const [state, setState] = useState(stateData);



  const handleIdUpdate = e => {
    if (state.ids !== e) {
      setState({ids: e});
    }
  };

  const getNodeData = () => {
    return state.ids.map(id => document.getElementById(id)).filter(node => node !== null).map(node => { return { [node.id]: node.innerHTML }; })

  };

  const getAuthor = () => document.getElementById('author').value;

  const getTitle = () => document.getElementById('title_0').innerHTML;


  const createFinalData = () => {

    const author = getAuthor();
    const title = getTitle();
    const nodes = getNodeData();

    const finalData = {
      author,
      title,
      nodes,
    }

    return finalData;


  };

  const exportData = () => {
    const data = createFinalData();

    console.log(data);

  };

  return (
    <React.Fragment>
      <Topbar exportFunc={exportData} />
      <Editor onUpdateIds={handleIdUpdate} />
    </React.Fragment>
  );
}

export default App;