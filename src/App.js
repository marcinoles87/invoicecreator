
import './App.css';
import {useState} from 'react'

function App() {

  let [weight , setWeight] = useState('0'); 
  let [height , setHeight] = useState('0');
  const [bmi , setBmi ] = useState('');

  const handleSubmit = () => {

    if(weight > 0){
      setBmi(weight/(height*height))
        console.log(bmi)    
    }else{
      alert('weight 0 please enter your weight')
    }
   
  }


  return (
    <div className="app-container">
      <div className='header'>
        <h1>BMI CALCULATOR</h1>
      </div>

      <div className='inputs'>
        <input type="number" placeholder='weight' onChange={ (e) => setWeight(e.target.value)}></input>
        <input type="number" placeholder='height' onChange={ (e) => setHeight(e.target.value)}></input>

        <p> Example : 70kg /  (1.70m * 1.70m) * 2 </p>
      </div>

      <div className='submit'>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className='bmi'>
        <p>{bmi}</p>

      </div>
    

      
    </div>
  );
}

export default App;
