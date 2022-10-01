import React from 'react';
import Category from './components/Category';
import GroupCard from './components/GroupCard';
import ImageOverlay from './components/ImageOverlay';


function App() {
  return (
    <div className="App">
    <ImageOverlay/>
    <GroupCard/>
    <Category/>
    </div>
  );
}

export default App;
