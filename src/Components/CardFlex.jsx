import React from 'react'
// import Cards from '../Components/Cards.';
import Premium from './Premium';

function CardFlex(props) {
  return (
    <>
    <div className='container Cardflex'>
    <div className=' row'>
    <div className='col-3 postion'>
    <div>
    <div>
        <div> 
            <img src= {props.item.stories_list[1].file_url}  className='Cardimg'  alt = "cardimg" />
        </div>
        </div>
        <div className='crdbdy'>
        <div className='cardtitle'>
        <a href="/" style={{color:"#096FFA"}} className="Montbold">{props.item.stories_list[1].industry_details[0].name}</a>
        </div>
        <div className='cardbody cardpara MontMed'>
         <p>{props.item.stories_list[1].title}</p>
        </div>
        <ul className = " cardul MontMed ">
           <li>{props.item.stories_list[1].publish}</li>
           <li>{props.item.stories_list[1].author_details[0].name}</li>
        </ul>
        </div>
    </div>
        {/* <Premium
        className ="Montbold premium"
         /> */}
    </div>
    <div className='col-3 postion'>
    <div>
    <div>
        <div> 
            <img src= {props.item.stories_list[2].file_url}  className='Cardimg'  alt = "cardimg" />
        </div>
        </div>
        <div className='crdbdy'>
        <div className='cardtitle'>
        <a href="/" style={{color:"#096FFA"}} className="Montbold">{props.item.stories_list[2].industry_details[0].name}</a>
        </div>
        <div className='cardbody cardpara MontMed'>
         <p>{props.item.stories_list[2].title}</p>
        </div>
        <ul className = " cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
        </div>
    </div>
          <Premium
        className ="Montbold Premiumtag"
         />
    </div>
    <div className='col-3 postion'>
    <div>
    <div>
        <div> 
            <img src= {props.item.stories_list[3].file_url}  className='Cardimg'  alt = "cardimg" />
        </div>
        </div>
        <div className='crdbdy'>
        <div className='cardtitle'>
        <a href="/" style={{color:"#096FFA"}} className="Montbold">{props.item.stories_list[3].industry_details[0].name}</a>
        </div>
        <div className='cardbody cardpara MontMed'>
         <p>{props.item.stories_list[3].title}</p>
        </div>
        <ul className = " cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
        </div>
    </div>
          {/* <Premium
        className ="Montbold Premiumtag"
         /> */}
    </div>
    <div className='col-3 '>
    <div>
    <div>
        <div> 
            <img src= {props.item.stories_list[4].file_url}  className='Cardimg'  alt = "cardimg" />
        </div>
        </div>
        <div className='crdbdy'>
        <div className='cardtitle'>
        <a href="/" style={{color:"#096FFA"}} className="Montbold">{props.item.stories_list[4].industry_details[0].name}</a>
        </div>
        <div className='cardbody cardpara MontMed'>
         <p>{props.item.stories_list[4].title}</p>
        </div>
        <ul className = " cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
        </div>
    </div>
         
    </div>
    
       
        </div>
        </div>
    </>
  )
}

export default CardFlex