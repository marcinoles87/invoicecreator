
import './App.css';
import {useState} from 'react'

function App() {

  const [product , setProduct] = useState('');
  const [price , setPrice] = useState('');
  const [pieces , setPieces] = useState('');


  const addProduct = () => {
    
  }

  const handleSubmit = () => {

    
   
  }


  return (
    <div className="app-container">
      <div className='header'>
        <h1>Invoice Creator</h1>
      </div>

      <div className='inputs'>
        <input type="text" placeholder='product' onChange={ (e) => setProduct(e.target.value)}></input>
        <input type="number" placeholder='price' onChange={ (e) => setPrice(e.target.value)}></input>
        <input type="number" placeholder='pieces' onChange={ (e) => setPieces(e.target.value)}></input>

      </div>

      <button onClick={addProduct}>Add product</button>

      <div className='submit'>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className='bmi'>
        

      </div>
    

      
    </div>
  );
}

export default App;
