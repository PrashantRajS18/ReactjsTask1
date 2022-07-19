import React from 'react'

function Cards(props) {
  return (
    <>
    <div className={props.className}>
    <div>
        <div> 
            <img src={props.src}   className='Cardimg' width={props.width} height ={props.height} alt = "cardimg" />
        </div>
        </div>
        <div className='crdbdy'>
        <div className='cardtitle'>
        <a href="/" style={{color:"#096FFA"}} className="Montbold">{props.title}</a>
        </div>
        <div className='cardbody cardpara MontMed'>
         <p>{props.body}</p>
        </div>
        <ul className = " cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
        </div>
    </div>
      
    </>
  )
}

export default Cards