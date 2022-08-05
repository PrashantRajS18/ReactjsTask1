import React from 'react'
import moment from 'moment';
function Cards(props) {


  return (
    <>
    <div className={props.className}>
        
            <img src={props.src}   className={props.wth} width={props.width} height ={props.height} alt = "cardimg" />
        
        <div className='crdbdy'>
        <div className='cardtitle'>
        <a href={props.slug} style={{color:"#096FFA"}} className="Montbold">{props.title}</a>
        </div>
        <div className='cardbody cardpara MontMed '>
         <a href={props.slug2}>
         <p>{props.body}</p>
         </a>
        </div>
        <ul className = " cardul MontMed ">
           <li>{moment(props.publish).format('Do MMMM YYYY')}</li>
          <li><a href={props.authorslug}>
          {props.author}
          </a></li>
        </ul>
        </div>
    </div>
      
    </>
  )
}

export default Cards