import './App.css';
import List from './components/List'
import ItemEdit from './components/ItemEdit';
import Filter from './components/Filter';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ItemEdit/>
      <Filter/>
      <List/>
    </React.Fragment>
  );
}

export default App;
