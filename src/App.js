import "./App.css";
import React from 'react';
import requests from './requests';
import Row from './components/Row';
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
       <Row title="TRENDING" fetchUrl={requests.fetchTrending}/>
       <Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
