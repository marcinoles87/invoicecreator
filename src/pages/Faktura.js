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
                    <th>Nazwa towaru / usługi</th>
                    <th>Ilosc</th>
                    <th>jm.</th>
                   
                    <th>Cena Brutto</th>
                    <th>Cena Netto</th>
                    <th>Stawka VAT</th>
                    <th>Kwota VAT</th>
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
                    <td>{(item.price-(item.sum/(1+0.23)*0.23)).toFixed(2)}</td>
                    <td>23%</td>
                    <td>{(item.sum/(1+0.23)*0.23).toFixed(2)}</td>
                    <td>{item.sum} PLN</td>
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
            <td></td>
            <td>{ (allProduct.reduce( (prev, current) => prev + (current.sum/(1+0.23)*0.23) , 0).toFixed(2))}</td>
            <td>{(sum).toFixed(2)} PLN</td>
          </tr>

</table>

            <div className='do_zaplaty'>
              <p>Razem do zapłaty : <b>{sum} PLN</b> </p>
              <p>Sposób zapłaty : <b>Przelew</b></p>
              <p>Numer rachunku bankowego : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
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