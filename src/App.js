
import './App.css';
import {useEffect, useState} from 'react'

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

  const [confirm , setConfirm] = useState(false)

  const [date , setDate] = useState('');

  const [sum , setSum] = useState('');

  const [allProduct , setAllProduct] = useState([]);


  // useEffect( () => {
  //   setSum( prev => [...allProduct])
  // } , [sum])
 


  const addProduct = (e,index) => {
    // e.preventDefault()
  

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

    const inp = document.querySelector('.item');
    inp.value=''

    setSum( allProduct.reduce( (prev, current) => prev + current.sum , 0)) 

  }

  const handlePodsumowanie = () => {
     setSum( allProduct.reduce( (prev, current) => prev + current.sum , 0)) 
   }
  

  const handleSubmit = () => {
    setConfirm(true)
  }



  return (
    <div className="app-container">
      <div className='header'>
        <h1>Invoice Creator</h1>
      </div>

      <div className='inputs'>

      <h2>Sprzedawca</h2>
      <input type="text" placeholder='company' onChange={ (e) => setMyCompany(e.target.value)}></input>
        <input type="number" placeholder='nip' onChange={ (e) => setMyNip(e.target.value)}></input>
        <input type="text" placeholder='adress' onChange={ (e) => setMyAdres(e.target.value)}></input>
      

      <h2>Nabywca</h2>
      <input type="text" placeholder='company' onChange={ (e) => setBuyerCompany(e.target.value)}></input>
        <input type="number" placeholder='nip' onChange={ (e) => setBuyerNip(e.target.value)}></input>
        <input type="text" placeholder='adress' onChange={ (e) => setBuyerAdres(e.target.value)}></input>

        <h2>Data wykonania usługi</h2>
        <input type='date' onChange={ (e) => setDate(e.target.value)}></input>

      <h2>Add item to invoices</h2>
        <input className='item' type="text" placeholder='product' onChange={ (e) => setProduct(e.target.value)}></input>
        <input className='item' type="number" placeholder='price' onChange={ (e) => setPrice(e.target.value)}></input>
        <input className='item' type="number" placeholder='pieces' onChange={ (e) => setPieces(e.target.value)}></input>

        <button onClick={addProduct}>Add product</button> 

      </div>
        <div> 
         </div>
      

   


      <div className='allproduct'>
        {allProduct.map( (item) => {
          return(
            <>
              <p>{item.product} , cena/szt : {item.price} , sztuk : {item.pieces} , do zapłaty :  {item.sum}</p>
              
              
            </>
          )
        })}


        <div className='suma'>
          <button onClick={handlePodsumowanie}>Podsumowanie</button>
          Podsumowanie : {sum}
        </div>

       
      </div>

      <div className='submit'>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        {confirm ?
          <>
            <p>Sprzedawca</p>
            <p>{my_company} , {my_adres} , Nip : {my_nip}</p>
            <p>Kupujacy</p>
            <p>{buyer_company} , {buyer_adres} , Nip : {my_nip}</p>
            <h2>Data sprzedaży : {date}</h2>
            <p>{allProduct.map( (item) => {
              return(
                <>
                 <p>{item.product} , cena/szt : {item.price} , sztuk : {item.pieces} , do zapłaty :  {item.sum}</p>
                 
                </>
              )
            })}</p>

              <h2>Do zapłaty : {sum}</h2>
          </>

        
          : '--'}
        

      </div>
    

      
    </div>
  );
}

export default App;
