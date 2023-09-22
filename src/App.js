import MainHeader from './component/MainHeader.js'
import Home from './component/Home.js'

import './App.css';

function App() {
let time=30;

  return (
   <> 
    <div className='main'>
      <MainHeader />
      <Home time={time} />
    </div>
   </>
  );
}

export default App;