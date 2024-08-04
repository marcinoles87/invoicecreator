import React from 'react'

function Faktura(props) {

  console.log(props)
  
  return (
    <div className='faktura-container'>
      <div className='faktura-dane'>
        <h2>Sprzedawca</h2>
        <p>{}</p>
      </div>

    </div>
  )
}

export default Faktura