import React from 'react'
import Cards from '../Components/Cards.';
import Premium from './Premium';
import Cardimg1 from '../imgs/cardimg1.png';
import Cardimg2 from '../imgs/paytm.png';
import Cardimg3 from '../imgs/cardimg3.png';
import Cardimg4 from '../imgs/cardimg4.png';
function CardFlex() {
  return (
    <>
    <div className='container Cardflex'>
    <div className=' row'>
    <div className='col-3 postion'>
    <Cards 
    className = "cardflx"
         src = {Cardimg1}
         width= "100%"
         title = "ECONOMY"
         body = "Indian shares snap 5-day rally on weak global cues, post weekly gain"
        />
        <Premium
        className ="Montbold premium"
         />
    </div>
    <div className='col-3 postion'>
    <Cards 
    className = "cardflx "
         src = {Cardimg2}
         width= "100%"
         title = "FINANCE"
         body = "Paytm to shut Canada B2C app amid eroding market capitalisation"
        />
          <Premium
        className ="Montbold Premiumtag"
         />
    </div>
    <div className='col-3 postion'>
    <Cards 
    className = "cardflx "
         src = {Cardimg3}
         width= "100%"
         title = "CONSUMER"
         body = "Exclusive:PE-backed sauce maker Wingreen Capital-backed cereal maker"
        />
          {/* <Premium
        className ="Montbold Premiumtag"
         /> */}
    </div>
    <div className='col-3 '>
    <Cards 
    className = "cardflx"
         src = {Cardimg4}
         width= "100%"
         title = "ECONOMY"
         body = "GLOBAL MARKETS-European shares in the red after hawkish Fed comments"
        />
         
    </div>
    
       
        </div>
        </div>
    </>
  )
}

export default CardFlex