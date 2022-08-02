// import Sec1 from '../imgs/sec1.png'
// import axios from 'axios' ;
// import { useEffect, useState } from 'react';
const Section1 = (props)=>{
    return(
        <>
                <div className="container" >
            <div className="sec1  ">
                <div className='sec1sub1 '>
                    <a href="/" style={{color:"#096FFA"}} className="Montbold" >{props.item.stories_list[0].industry_details[0].name}</a>
                    <h2 className="Mont" style={{marginTop : "20px"}}>{props.item.stories_list[0].title}</h2>
                    <p className="MontReg sec1para" style={{marginTop : "20px"}}>{props.item.stories_list[0].summary}</p>
                      <ul className = "MontMed cardulsec1">
                      <li>{props.item.stories_list[0].publish}</li>
                        <li>{props.item.stories_list[0].author_details[0].name}</li>
                      </ul>
                      <div>
                      <button className="buttonSec1 Montbold hide" width = "100%" style={{marginTop : "10px"}}><a href = "/" style={{color:"#FFFFFF"}}>READ MORE</a></button>
                      </div>
                </div>
                <div className='sec1img'>
                    <img  src={props.item.stories_list[0].file_url} width = "100%" className = "sec1img1" alt ="sec1 img"/>
                </div>
              </div>
          </div> 
            
         
        </>
    )
}

export default Section1