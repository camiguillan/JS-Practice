import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
//import './App.css';

function PhotoSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [rawphotos, setRawPhotos] = useState([]);
  const [showT, setShowTitle] = useState(false);
  const [butText, setButText] = useState('Show Titles');
 
  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    const trimmedSearchQuery = searchQuery.trim();
    if (trimmedSearchQuery) {
      const filteredPhotos = rawphotos.filter(photo => photo.title.includes(trimmedSearchQuery));
      setPhotos(filteredPhotos);
      setSearchQuery('');
    }
  }

  function searchAllPhotos(){
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => response.json())
    .then(data => {        
      setRawPhotos(data);
      console.log(rawphotos[1].title);
    })
    .catch(error => console.error(error));
  }

  

  const photoListItems = photos.map(photo =>
    <li key={photo.id}><img src={photo.url} alt={photo.title} /></li>
  );

  

  function getTitles(){
    const titles = []
    var title;
    searchAllPhotos();
    for(var i=0; i<= 10 ; i++){
      if(rawphotos[i] != undefined){
        title = rawphotos[i].title;   
        titles.push(title);   
      }      
    }
    
    return titles;

  }

  const showTitles =  getTitles().map(title => <p> {title} </p>); 

  function handleButClick(){
    setShowTitle(!showT)
    if(!showT){
      setButText('Hide Titles');
    }
    else{
      setButText('Show Titles');
    }
  }

  return (

    <div>   
    <div className="container">
      <h1>Search JSON Placeholder Photos by Title</h1>

      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Enter a title..." />
        <button type="submit" >Search</button>
      </form>
      
      <button onClick={handleButClick}  className='but'> {butText}</button>
      { showT && <div className='container-titles'> {showTitles} </div>}
      <ul className="photo-list">{photoListItems}</ul>
      
    </div>

    
    
    </div>
  );
}

export default PhotoSearch;