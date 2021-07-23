import './App.css';
import React from 'react';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="TRENDING" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
