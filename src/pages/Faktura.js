import React from 'react'

function Faktura(props) {

  

  const {my_company,my_adres,my_nip,buyer_company,buyer_adres,buyer_nip,allProduct,platnosc,product,price,pieces,sum } = props
  
  
  return (
    <div className='faktura-container'>

      <div className='faktura_dane'>
      <h3>Faktura vat nr ____________         z dnia  _______________  </h3>
      <h3>Data wystawienia : {platnosc}</h3>
      <h3>Płatne do : {platnosc} </h3>
      </div>


    
      <div className='dane_gora'>
          <div className='sprzedawca'>
            <h2 className='sprzedawca_nabywca'>Sprzedawca</h2>
            <p>{my_company}</p>
            <p>{my_adres}</p>
            <p>Nip : {my_nip}</p>
          </div>

          <div className='nabywca'>
            <h2 className='sprzedawca_nabywca'>Nabywca</h2>
            <p>{buyer_company}</p>
            <p>{buyer_adres}</p>
            <p>Nip : {buyer_nip}</p>
        </div>
      </div>

      <div className='produkty'>
         <table>
         <tr className='produkty_gora'>
                    <th>Lp.</th>
                    <th>Nazwa</th>
                    <th>Ilosc</th>
                    <th>jm.</th>
                   
                    <th>Cena jednostkowa Brutto</th>
                    <th>Cena jednostkowa Netto</th>
                    <th>Kwota Vat</th>
                    <th>Wartosc Brutto</th>
                  </tr>
          {allProduct.map( (item,index) => {


            return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.product}</td>
                    <td>{item.pieces}</td>
                    <td>szt</td>
                    
                    <td>{item.price}</td>
                    <td>{item.price-(item.price*0.23).toFixed(2)}</td>
                    <td>{(item.sum*0.23).toFixed(2)}</td>
                    <td>{item.sum} Pln</td>
                  </tr>             
          
            )

            
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{ (allProduct.reduce( (prev, current) => prev + current.sum*0.23 , 0)).toFixed(2)}</td>
            <td>{sum} PLN</td>
          </tr>

</table>

            <div className='do_zaplaty'>
              <h2>Wartość brutto : {sum} Pln</h2>
            </div>


          <div className='podpisy'>
              <div>
              <p>Podpis osoby</p>
              <p>upoważnionej do wystawienia faktury</p>
            </div>

            
            <div>
              <p>Podpis osoby</p>
              <p>upoważnionej do odbioru faktury</p>
            </div>
          </div>
          

      </div>
    </div>


  )
}

export default Faktura