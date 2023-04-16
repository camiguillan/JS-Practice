import React, { useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import '../styless/episodes-style.scss';
import { Oval } from  'react-loader-spinner';
import { useQuery} from "react-query";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);  
  const [isloading, setIsLoading] = useState(true);
  const charId = useParams();
  const navigate = useNavigate();
  // const [currentC, setCurrentC] = useState({
  //   id:'',
  //   name:'',
  //   status:'',
  //   species:'',
  //   type:'', 
  //   gender:'',
  //   image: '',
  //   location:{},
  //   origin:{},
  //   episode: []
  // });

  const url = "https://rickandmortyapi.com/api/character/" + charId.id;
  const {data: currentCharData, status: currentCharStatus} = useQuery("currentChar", () => getData(url));

  useEffect(() => {
    if (currentCharData && currentCharData.episode && currentCharData.episode.length > 0) {
      fetchEpisodes(currentCharData.episode);
    
    }
    // else {
    //   setIsLoading(false);
    // }
  }, [currentCharData]);

  async function getData(url) {
    try {
      const response = await axios.get(url);
      return {
        id: response.data.id,
        name: response.data.name,
        status: response.data.status,
        species: response.data.species,
        type: response.data.type, 
        gender: response.data.gender,
        location: {
          name: response.data.location.name
        },
        origin: {
          name: response.data.origin.name
        }, 
        image: response.data.image,
        episode: response.data.episode
      };
    }
    catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  async function fetchEpisodes(episodeUrls) {
    const episodeIds = episodeUrls.map(url => url.split('/').pop());
    const url =  "https://rickandmortyapi.com/api/episode/" + episodeIds.join();
    try {
      const response = await axios.get(url);
      setEpisodes(response.data);
      setIsLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  const showEps = episodes.map(ep => {    
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
    <>
      {isloading ? (
        <div className='ovaldiv'> 
          <Oval className='oval' />
        </div>
      ) : (
        <div className='div-container' >
          <h1 className='htitle'  >{currentCharData.name}: All episodes</h1>
          {showEps.length > 0 && showEps}
          <div className='divlink'>
            <button className='linkChar' onClick={()=> navigate("/") }> Go Home </button>
            <button className='linkChar' onClick={()=> navigate("/characters/" + currentCharData.id) }>  Go Back </button>
          </div>
        </div>
      )}
    </>
  );
      }
