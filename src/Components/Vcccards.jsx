import React from 'react'

function Vcccards(props) {
  return (
    <>
        <div className={props.className}>
    <div>
        <div> 
            <img src={props.src}   className='Vccimg ' width={props.width} height ={props.height} alt = "cardimg" />
        </div>
        </div>
        <div className='Vccbody'>
        <div className='Vcccardtitle'>
        <a href={props.slug} style={{color:"#096FFA"}} className="Montbold">{props.title}</a>
        </div>
        <div className='Vcccardbody cardpara MontMed '>
         <a href={props.slug2}>
         <p>{props.body}</p>
         </a>
        </div>
        <ul className = " cardul MontMed ">
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

export default Vcccards