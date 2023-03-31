import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import './episodes.css';

export default function Episodes() {
  var [episodes, setEpisodes] = useState([]);
  const [showE, setShowEpisode] = useState(false);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
       fetchEpisodes();
  }, []);

  async function fetchEpisodes() {
    const eps = await allEpisodes();
    setEpisodes(eps);
  }

  async function getEpisode(url) {
    var getE = null;
        await axios
        .get(url)
        .then( response  => {
          getE =  response.data;  
          // console.log(response.data);  
          // console.log(getE);  
              })
        .catch(error => console.log(error)); 
       
        // console.log(url);
        //console.log(getE);  
        return getE;
  }

  async function allEpisodes() {
    var eps = [];
    for (const epUrl of data.episode) {
      const epi = await getEpisode(epUrl);
      eps.push(epi);
    }
    console.log('line 47', eps);
    return eps;
  }

  const showEps = episodes.map((ep) => {
    console.log('Rendering episode:', ep);
    return (
      <div key={ep.id} className='divep' >
        <ul className='infoep' >
          <li>Episode: {ep.episode}</li>
          <li>Episode Name: {ep.name}</li>
          <li>Episode airdate: {ep.air_date}</li>
        </ul>
      </div>
    );
  });

  return (
    <div className='div-container' >
      <Link to="/">Go home</Link>
      <h1 className='htitle'  >{data.name}: all episodes</h1>
      {episodes.length > 0 && showEps}
    </div>
  );
}


