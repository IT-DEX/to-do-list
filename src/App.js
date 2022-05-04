import './App.css';
import clock from './time.jpg';
import { Plan } from './Plan';

function App() {
  return (
    <div className='main'>
      
      <div className='container'>
        <div className='header'>
          <p className='headingOne'>TO-DO-LIST</p>
          <p className='headingTwo'>Enter your plans for today</p>
        </div>

        <div className='headerTwo'>
          
        </div>

        <div>
           <Plan/>
        </div>
       

        <div className='image'>
          <img src = {clock} width="300px" alt="clock" />
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
