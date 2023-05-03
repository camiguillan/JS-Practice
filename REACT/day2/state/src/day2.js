import './day2.css';
import LocalVariable from './local-variable';
import Usestate from './use-state';

function App() {
  //Using state 

  return (
    <div className="App">
        <LocalVariable></LocalVariable>
        <Usestate></Usestate>

    </div>
  );
}




// function ButIncrease(funct){
//   return <button className='but' onClick={funct}> increase</button>
// }

// function ButDecrease(funct){
//   return <button className='but' onClick={funct}> decrease</button>
// }


export default App;