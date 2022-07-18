import React from 'react';
import {useRef} from 'react';
import { Carouseldata7 } from '../Carousel1data'
import Premium from './Premium'
function VccSlide(props) {

  const ref = useRef(null);

  const  scroll = (scrollOffset)=> {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
        <div className='Vccslide postion '>
        <div className='container'>
        <div className='slideflex container mt-40'>
        <div className='Vccpre'>
        <h1 className='Mont  ' style={{color:"#FFFFFF"}}>VCCircle Premium <img src='../imgs/crown.png'  alt ="crown"/></h1>
        </div>
   <div className='hide'>
   <button className="buttonVcc Montbold" ><a href = "/" style={{color:"#FFFFFF"}}>Subscribe</a></button>
   </div>
    </div>
    <div className={props.className}></div>
          <div ref={ref} className=' mediascroller'>
          <div className='relate'>
    <button  onClick={() => scroll(300)} className='round'><img src='../imgs/slideicon.png' alt='icon' /></button>
    </div>
    {/* <div className='relateryt2'>
    <button  onClick={() => scroll(-300)} className='round'><img src='../imgs/slideicon.png' className='sIcon' alt='icon' /></button>
    </div> */}
            {Carouseldata7.map((item)=>
            {
             return <div className='VccCard postion'>
             <Premium className=" Montbold PremiumtagVcc" />
               <div className=''>
               
                <img src={item.src} alt ="cardimg" width="100%"/>
                
                
               
               <div className='cardtitle p-10'>
                <a href="/" style={{color:"#096FFA"}} className="Montbold">{item.title}</a>
                </div>
                <div className='cardbody p-10 MontMed'>
         <p>{item.body}</p>
        </div>
        <ul className = "p-10 cardul MontMed ">
           <li>30 September</li>
           <li>Madhurima Nandy</li>
        </ul>
        </div>
              </div>
            })}
          </div>
          <div className='none vccbtn2' >
   <button className="buttonVcc Montbold" ><a href = "/" style={{color:"#FFFFFF"}}>Subscribe</a></button>
   </div>
          </div>
          </div>
    </>
  )
}

export default VccSlide