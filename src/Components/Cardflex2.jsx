import React from 'react'
function Cardflex2(props) {
  return (
    <>
    <h1>{props.sectitle}</h1>
<div className={props.className}>
             
        <div> 
            <img src={props.src}   className='Cardeditor' width={props.width} height={props.height} alt = "cardimg" />
        </div>
        <div style={{padding:"10px"}}>
        <div className='cardtitle  p-20' style={{marginTop :"5px"}}>
        <a href="/" style={{color:"#096FFA"}} className="Montbold">{props.title}</a>
        </div>
        <div className='cardbody cardpara mt-10 p-20 MontMed'>
         <p className='fz'>{props.body}</p>
        </div>
        <ul className = " carduled mt-10 p-20 MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Cardflex2