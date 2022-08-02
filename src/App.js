import './App.css';
import './font.css';
import './grid.css';
import {Nav , Footer} from './Components/Nav';
import {Adv , Social} from './Components/Adv';
import Section1 from './Components/Section1';
import CardFlex from './Components/CardFlex';
import Editor from './Components/Editor';
// import Editorimg1 from '../imgs/editorimg1.png'
import Adv1 from './imgs/adv1.png';
import Adv2  from  './imgs/adv2.png';
import Adv3  from  './imgs/adv3.png';
// import Cards from './Components/Cards.';
import Mostpop from './Components/Mostpop';
import Vcc from './Components/Vcc';
import InptSection from './Components/InptSection';
import Stories from './Components/Stories';
import {Slider1  } from './Components/Slider1';
import VccSlide from './Components/VccSlide';
import Upcome from './Components/Upcome';
import {Carouseldata , Carouseldata2 ,Carouseldata3,Carouseldata4,Carouseldata5,Carouseldata6} from './Carousel1data'
import { useState , useEffect } from 'react';
import axios from 'axios' ;
function App() {
  const[State,setState] = useState([])
  
  useEffect(()=>{
    axios.get(`https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185`)
    .then((response) =>{
      console.log(response)
      setState(response.data.section_list)
      
      // console.log(response.data.section_list[0].stories_list[0].title);

    })
  },[])
  return (
   <>
   <Nav /> 
   <Adv  className ="adv2  hide" src ={Adv1} width = "90%"/>
   {
    State.map((item,key) =>{
      {/* console.log(item) */}
     if(key === 0) return(
      <>
      <Section1   item = {item}/>
      <CardFlex   item = {item}/>
      </>
     )
     if(key === 1 ) return(
      <>
      <Editor 
      item = {item}
      
      />
      </>

     )
    })
   }
   <Adv className ="adv1 hide "  src ={Adv2} width = "80%" />
{/* <Nav /> */}
{/* <hr className='hr boxshdw hrmargin'></hr> */}
{/* <Adv className ="adv2  hide" src ={Adv1} width = "90%"/>
<Section1/>
<Adv className ="adv3 none "  src ={Adv3} width = "80%" />
<CardFlex />
<Adv className ="adv1 hide "  src ={Adv2} width = "80%" />
<Adv className ="adv3 none "  src ={Adv3} width = "80%" />
<Editor 
  title = "Editor's Pick"
/>
<Social />
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Slider1 
className = "blrrelate hide  "
  maintitle = "Limited Partner"
  c2 = {Carouseldata6}
/>
<Adv className ="adv1  hide"  src ={Adv2} width = "80%" />
<VccSlide 
  className = "blrrelate2 hide "
/>
<Upcome 
maintitle = "Upcoming Events"
/>
<div className='container'>
  <hr className='hr mt-50' ></hr>
  </div>
<Adv className ="adv1 hide "  src ={Adv2} width = "80%" />
<Adv className ="adv3 none "  src ={Adv3} width = "80%" />
<div className='container'>
 <hr className='hr mt-50' ></hr>
 </div>
<Slider1 
className = "blrrelate hide "
  maintitle = "Founders"
  c2 = {Carouseldata5}
/>
<Mostpop />
<Adv className ="adv1 hide" src ={Adv2} width = "80%" />
<Vcc />
<Slider1 
className = "blrrelate hide "
  maintitle = "TMT"
  c2 = {Carouseldata4}
/>
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<InptSection />
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Slider1 
className = "blrrelate hide "
  maintitle = "TechCircle"
  c2 = {Carouseldata3}
/>
<Adv className ="adv1 hide " src ={Adv2} width = "80%" />
<Adv className ="adv3 none "  src ={Adv3} width = "80%" />
<Slider1 
className = "blrrelate hide "
  maintitle = "Mergers & Acquisitions"
c2 = {Carouseldata2}
/>
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Slider1 
className = "blrrelate hide "
  maintitle = "Financials"
  c2 = {Carouseldata}
/>
<div className='container'>
        <hr className='hr mt-50' ></hr>
        </div>
<Stories />

<Footer /> */}
   </>
  );
}


export default App;
