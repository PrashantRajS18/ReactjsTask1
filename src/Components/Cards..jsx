import React from 'react'

function Cards(props) {
//   const date = new Date("2020-07-22T13:22:10.2566789+00:00")
// const formattedDate = date.toLocaleDateString("en-GB", {
//   day: "numeric",
//   month: "long",
//   year: "numeric"
// })

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

export default Cards