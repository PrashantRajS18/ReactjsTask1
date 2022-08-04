import React from 'react'
// import vcc1 from '../imgs/vcc1.png';
function Vcc(props) {
  return (
    <>
        <div className='container'>
        <div className='vcc'>
        <div className='vcc1'>
            <h1 className='Mont'>VCC TV</h1>
            <p className='MontMed mt-40'>View More <img src='../imgs/rytarow.png' alt='arrow' /> </p>
        </div>
         <div className='row'>
         <div className='col-6'>
 {/* <iframe
      width="100%"
      height="300px"
      src="https://www.youtube.com/embed/SLfhMt5OUPI"
      
      title="Embedded youtube"
      className='iframe'
    /> */}
    <img  src={props.item.stories_list[0].file_url} className ="" width= "100%"  alt= " card img"  />

         </div>
         <div className='col-6'>
          <div>
            <a href={props.item.stories_list[0].industry_details[0].slug} style={{color:"#096FFA"}} className="Montbold"><p>{props.item.stories_list[0].industry_details[0].name}</p></a> 
          </div>
          <div className='mt-20'>
          <a href={props.item.stories_list[0].slug}>
          <p className='Montbold' style={{fontSize:"24px"}}>
           {props.item.stories_list[0].title}
            </p>
          </a>
           
          </div>
          <div className='mt-20'>
            <p>
              {props.item.stories_list[0].summary}
            </p>
          </div>
          <div>
          <ul className = " cardul MontMed ">
           <li>{props.item.stories_list[0].publish}</li>
           <li>{props.item.stories_list[0].author_details[0].name}</li>
        </ul>
          </div>
         </div>

         </div>
        </div>
        
        </div>
        
    </>
  )
}

export default Vcc