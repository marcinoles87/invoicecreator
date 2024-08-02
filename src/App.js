
import './App.css';
import {useState} from 'react'

function App() {

  const [my_company , setMyCompany] = useState('');
  const [my_nip , setMyNip] = useState('');
  const [my_adres , setMyAdres] = useState('');

  const [buyer_company , setBuyerCompany] = useState('');
  const [buyer_nip , setBuyerNip] = useState('');
  const [buyer_adres , setBuyerAdres] = useState('')

  const [product , setProduct] = useState('');
  const [price , setPrice] = useState('');
  const [pieces , setPieces] = useState('');

  const [sum , setSum] = useState('');

  const [allProduct , setAllProduct] = useState([]);

 
  const total = () => {
     const totall = allProduct.reduce( (prev, current) => prev + current.sum , 0);
    return <p> Total : {totall} </p>
  }

  const addProduct = (e,index) => {
    e.preventDefault()
  

    const element = {
        product : product ,
        price : price ,
        pieces : pieces ,
        sum : (price * pieces)
      }

    setAllProduct([...allProduct,element])

    setProduct('');
    setPrice('');
    setPieces('');

    const inp = document.querySelectorAll('.item');
    inp.value=''

    setSum(
      total()
    )

    console.log(sum)

  }

  console.log(allProduct)

  const handleSubmit = () => {

    
   
  }

  


  return (
    <div className="app-container">
      <div className='header'>
        <h1>Invoice Creator</h1>
      </div>

      <div className='inputs'>

      <h2>Add your company data</h2>
      <input type="text" placeholder='company' onChange={ (e) => setMyCompany(e.target.value)}></input>
        <input type="number" placeholder='nip' onChange={ (e) => setMyNip(e.target.value)}></input>
        <input type="number" placeholder='adress' onChange={ (e) => setMyAdres(e.target.value)}></input>

      <h2>Buyer</h2>
      <input type="text" placeholder='company' onChange={ (e) => setBuyerCompany(e.target.value)}></input>
        <input type="number" placeholder='nip' onChange={ (e) => setBuyerNip(e.target.value)}></input>
        <input type="number" placeholder='adress' onChange={ (e) => setBuyerAdres(e.target.value)}></input>

      <h2>Add item to invoices</h2>
        <input className='item' type="text" placeholder='product' onChange={ (e) => setProduct(e.target.value)}></input>
        <input className='item' type="number" placeholder='price' onChange={ (e) => setPrice(e.target.value)}></input>
        <input className='item' type="number" placeholder='pieces' onChange={ (e) => setPieces(e.target.value)}></input>

      </div>

      <button onClick={addProduct}>Add product</button>


      <div className='allproduct'>
        {allProduct.map( (item) => {
          return(
            <>
              <p>{item.product} , cena/szt : {item.price} , sztuk : {item.pieces} , do zapłaty : {(item.sum)}</p>
              
              
            </>
          )
        })}

        {sum}

      </div>

      <div className='submit'>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div className='bmi'>
        

      </div>
    

      
    </div>
  );
}

export default App;
