import React from 'react'
// import vcc1 from '../imgs/vcc1.png';
function Vcc() {
  return (
    <>
        <div className='container vcc'>
        <div className='vcc1'>
            <h1 className='Mont'>VCC TV</h1>
            <p className='MontMed mt-40'>View More <img src='../imgs/rytarow.png' alt='arrow' /> </p>
        </div>
         <div className='row'>
         <div className='col-6'>
 {/* <img src={vcc1} width ="100%" alt='' /> */}
 <iframe
      width="100%"
      height="300px"
      src="https://www.youtube.com/embed/SLfhMt5OUPI"
      
      title="Embedded youtube"
      className='iframe'
    />

         </div>
         <div className='col-6'>
          <div>
            <a href='/' style={{color:"#096FFA"}} className="Montbold"><p>HEALTHCARE</p></a> 
          </div>
          <div className='mt-20'>
            <p className='Montbold' style={{fontSize:"24px"}}>
            How can we harness data for healthcare and safegaurd ourselves from cyber threats?
            </p>
          </div>
          <div className='mt-20'>
            <p className='MontReg' style={{fontSize:"14px"}}>The global healthcare data is expected to grow at a CAGR of 36% by 2025. 
            To make healthcare more equitable, affordable and accessible, there is a need to find
              ways to unite and generate actionable insights from data. How collaborations and strategic 
            partnerships can harness the data to tackle the issues faced by the sector?</p>
          </div>
          <div>
          <ul className = " cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
          </div>
         </div>

         </div>
        </div>
        <div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
    </>
  )
}

export default Vcc