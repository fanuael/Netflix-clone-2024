import React from 'react';
import Row from '../Row/Row'; // Correct path to Row.js
import requests from '../../../utils/requests'; // Adjust the path to match the correct location


const RowList = () => {
  return (
    <div className="rowList">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default RowList;
