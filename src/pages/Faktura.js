import React from 'react'

function Faktura(props) {

  console.log(props)

  const {my_company,my_adres,my_nip,buyer_company,buyer_adres,buyer_nip,allProduct,product,price,pieces,sum } = props
  
 
  
  return (
    <div className='faktura-container'>
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

      <h2>Faktura vat nr ____________         z dnia  _______________  </h2>

      <div className='produkty'>
         <table>
         <tr>
                    <td>Produkt</td>
                    <td>Cena jednostkowa</td>
                    <td>Ilosc</td>
                    <td>Wartosc</td>
                  </tr>
          {allProduct.map( (item) => {
            return(
              <div className='produkt'>
               
                  
                  <tr>
                    <td><p>{item.product}</p></td>
                    <td><p>{item.price}</p></td>
                    <td><p>{item.pieces}</p></td>
                    <td> <p>{item.sum}</p></td>
                  </tr>             
              </div>
            )
          })}

</table>


            <h2>Do zapłaty : {sum}</h2>

      </div>
    </div>


  )
}

export default Faktura