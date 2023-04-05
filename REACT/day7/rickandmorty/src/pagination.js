import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import CharacterCards from './coponents/characterCards';
import axios from 'axios';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function Pagination() {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  //const [charPerPage, setCharsPerPage] = useState(0);
  const [pageInfo, setPageInfo] = useState({});
  var charPerPage = 4;

  //20 characters per page -> info provided by the api
  const url = "https://rickandmortyapi.com/api/character";


  async function getPages(){
    await axios
         .get(url)
         .then(response => {
           setPageInfo(response.data.info);
           //setIsLoading(false);
           
  
         })
         .catch(error => console.log(error));  
    
    //setPageInfo(Math.ceil(pageInfo.count / pageInfo.pages ) );
        // setPageInfo(20);

    //charPerPage = Math.ceil(pageInfo.count / pageInfo.pages);
   }



   
 


  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + charPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / charPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * charPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}



