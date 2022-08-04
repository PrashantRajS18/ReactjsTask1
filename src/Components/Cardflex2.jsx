import React from 'react'
function Cardflex2(props) {
  return (
    <>
    <h1>{props.sectitle}</h1>
<div className={props.className}>
             
            <img src={props.src}   className='Cardeditor' width={props.width} height={props.height} alt = "cardimg" />
        <div>
        <div className='cardtitle  p-20' style={{marginTop :"5px"}}>
        <a href={props.slug} style={{color:"#096FFA"}} className="Montbold">{props.title}</a>
        </div>
        <div className='cardbody cardpara mt-10 p-20 MontMed'>
        <a href={props.slug2}><p className='fz'>{props.body}</p></a>
        </div>
        <ul className = " carduled mt-10 p-20 MontMed ">
        <li>{props.publish}</li>
           <li><a href={props.authorslug}>
            {props.author}
           </a></li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Cardflex2