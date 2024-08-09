
import './App.css';
import {useEffect, useState} from 'react'
import {Routes , Route, Link} from 'react-router-dom'
import Faktura from './pages/Faktura';

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
  const [platnosc , setPlatnosc] = useState('')

  const [sum , setSum] = useState('');

  const [allProduct , setAllProduct] = useState([]);




  const addProduct = (e,index) => {
    // e.preventDefault()
  
    if(my_company.length<1 || my_adres.length<1 || my_nip.length<1 || buyer_adres.length<1 || buyer_company.length<1 || buyer_nip<1 || date.length<1){
      alert('prosze wypełnic puste pola')
    }else{

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
    const inp2 = document.querySelector('.item2');
    const inp3 = document.querySelector('.item3');
    inp.value=''
    inp2.value=''
    inp3.value=''

    console.log(inp)

    setSum( allProduct.reduce( (prev, current) => prev + current.sum , 0)) 

  }
}

  const handlePodsumowanie = () => {
     setSum( allProduct.reduce( (prev, current) => prev + current.sum , 0)) 
   }
  

  const handleSubmit = () => {
    
    setConfirm(true)
  }



  return (

    <Routes>
    <Route path='*' element={
         <div className="app-container">
         <div className='header'>
           <h1>Kreator Faktur</h1>
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

           <h2>Termin płatności</h2>
           <input type="date" onChange={ (e) => setPlatnosc(e.target.value)}></input>
   
         <h2>Dodaj produkt do faktury</h2>
           <input className='item' type="text" placeholder='product' onChange={ (e) => setProduct(e.target.value)}></input>
           <input className='item2' type="number" placeholder='price' onChange={ (e) => setPrice(e.target.value)}></input>
           <input className='item3' type="number" placeholder='pieces' onChange={ (e) => setPieces(e.target.value)}></input>
   
           <button onClick={addProduct}>Add product</button> 
   
         </div>
           <div> 
            </div>
         
   
      
   
   
         <div className='allproduct'>
           {allProduct.map( (item , index) => {
             return(
               <>
                 <p>{index+1}.{item.product} , cena/szt : {item.price} , sztuk : {item.pieces} , do zapłaty :  {item.sum}</p>
                 
                 
               </>
             )
           })}
   
   
           <div className='suma'>
             <button onClick={handlePodsumowanie}>Podsumowanie</button>
             Podsumowanie : {sum}
           </div>
   
          
         </div>
   
         <div className='submit'>
           <button onClick={handleSubmit}>Zapisz</button>
           <Link to={'/faktura'}>Pokaz fakture</Link>
         </div>
   
         <div>
           {confirm ?
             <>
               <h3>Sprzedawca</h3>
               <p>{my_company} , {my_adres} , Nip : {my_nip}</p>
               <h3>Nabywca</h3>
               <p>{buyer_company} , {buyer_adres} , Nip : {my_nip}</p>
               <p>Data sprzedaży : {date}</p>
               <h3>Produkty</h3>
               <p>{allProduct.map( (item) => {
                 return(
                   <>
                    <p>{item.product} , cena/szt : {item.price} , sztuk : {item.pieces} , do zapłaty :  {item.sum}</p>
                    
                   </>
                 )
               })}</p>
   
                 <h2>Suma do zapłaty : {sum}</h2>
             </>
   
           
             : '--'}
           
   
         </div>
           </div>
    }>
   
      </Route>

    
        <Route path='/faktura' element={ 
          
          <Faktura
              my_company={my_company}
              my_adres={my_adres}
              my_nip={my_nip}
              
              buyer_company={buyer_company}
              buyer_adres={buyer_adres}
              buyer_nip={buyer_nip}

              allProduct={allProduct}

              platnosc={platnosc}

              product={product}
              price={price}
              pieces={pieces}
              sum={sum}
        
            ></Faktura>}></Route>
      </Routes>
    

      
    
  );
}

export default App;
