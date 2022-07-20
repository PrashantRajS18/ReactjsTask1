import React from 'react'
import {useRef} from 'react';
import '../App.css'

function Slider1(props ) {
  const ref = useRef(null);

  const  scroll = (scrollOffset)=> {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
    <div className='container postion  '>
    <div className='relate'>
    <button  onClick={() => scroll(290)} className='round'><img src='../imgs/slideicon.png' alt='icon' /></button>
    </div>
    {/* <div className='relateryt'>
    <button  onClick={() => scroll(-280)} className='round'><img src='../imgs/slideicon.png' className='sIcon' alt='icon' /></button>
    </div> */}
    <div className='slideflex'>
    <h1 className='Mont mt-40' >{props.maintitle}</h1>
    <p className='MontMed mt-40'>View More <img src='../imgs/rytarow.png' alt='arrow' /> </p>
    </div>
    <div className={props.className}></div>
    <div ref={ref} className=' mediascroller postion' >
    
    {props.c2.map((items) =>{
      return  <div className='Cards postion '>
      
      <div > 
            <img src={items.src}   className='Cardimg' alt = "cardimg" />
        <div className='cardbody  MontMed'>
        
         <p className='cardpara'>{items.body}</p>
         <ul className = " cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
         </div>
        </div>
      
    </div>
    })}
    </div>
    </div>
    </>
  )
}


export { Slider1}