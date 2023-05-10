import React from 'react'
import './components-styles.css';

export default function Components() {
  return (
    <div className='cont'>
        <h1>An interesting app</h1>
        <div className='comps'> 
            <p>Hello </p>
            <p>World</p>
            <p>!</p>
        </div>   
        <div className='events'>
            <input class="red-input" value="I'll be red when focused." />
            
          
            <div className='yes-no'>
              <input type="radio" name="my-input" id="yes" value="yes" />
              <label for="yes">Yes</label>

              <input type="radio" name="my-input" id="no" value="no" />
              <label for="no">No</label>
            </div>

            <div className='check'>
              <input type="checkbox" name="my-checkbox" id="opt-in" />
              <label for="opt-in">Check me!</label>
            </div>

      

        </div>         
    </div>
  )
}
