import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
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
        {props.slug ?<Link to={props.slug} style={{color:"#096FFA"}} className="Montbold">{props.title}</Link> : ""}
        </div>
        <div className='Vcccardbody cardpara MontMed '>
         {props.slug2 ? <Link to={props.slug2}>
         <p>{props.body}</p>
         </Link> : ""}
        </div>
        <ul className = " cardul MontMed ">
           <li>{moment(props.publish).format('Do MMMM YYYY')}</li>
           <li>
          {props.authorslug ? <Link to={props.authorslug}>
           {props.author}
           </Link>:""}
           </li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Vcccards