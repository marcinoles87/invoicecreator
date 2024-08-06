import React from 'react'

function Faktura(props) {

  console.log(props)

  const {my_company,my_adres,my_nip,buyer_company,buyer_adres,buyer_nip,allProduct,platnosc,product,price,pieces,sum } = props
  
 
  
  return (
    <div className='faktura-container'>

      
    <h2>Faktura vat nr ____________         z dnia  _______________  </h2>
    
      <div className='dane_gora'>
          <div className='sprzedawca'>
            <h2>Sprzedawca</h2>
            <p>{my_company}</p>
            <p>{my_adres}</p>
            <p>{my_nip}</p>
          </div>

          <div className='nabywca'>
            <h2>Nabywca</h2>
            <p>{buyer_company}</p>
            <p>{buyer_adres}</p>
            <p>{buyer_nip}</p>
        </div>
      </div>

      
      <h2> Termin płatności do : {platnosc}</h2>

      <div className='produkty'>
         <table>
         <tr>
                    <th>Lp.</th>
                    <th>Nazwa</th>
                    <th>Cena jednostkowa</th>
                    <th>Ilosc</th>
                    <th>Wartosc</th>
                  </tr>
          {allProduct.map( (item,index) => {

            
            return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.product}</td>
                    <td>{item.price} Pln</td>
                    <td>{item.pieces}</td>
                    <td>{item.sum} Pln</td>
                  </tr>             
          
            )
          })}

</table>


            <h2>Do zapłaty : {sum} Pln</h2>

      </div>
    </div>


  )
}

export default Faktura