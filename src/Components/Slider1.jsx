import React from "react";
// import Carousel from 'react-grid-carousel'
import Cards from "./Cards.";
// import "../slider.css";
import Premium from "./Premium";
import "../App.css";
import Carousel, {
  arrowsPlugin,
  slidesToScrollPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Slider1(props) {
  
  return (
    
    <>
     {props.item.stories_list[0] ? (
       <div className="container  rel">
        <div className="blr"></div>
        <div className='slideflex'>
    <h1 className='Mont mt-40' >{props.item.section_name}</h1>
    <p className='MontMed mt-40'>View More <img src='../imgs/rytarow.png' alt='arrow' /> </p>
    </div>
        <Carousel
          draggable={true}
         
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
            {
              resolve: slidesToScrollPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
            // {
            //   resolve: arrowsPlugin,
            //   options: {
            //     arrowLeft: (
            //       <button className="round1">
            //         <img src="../imgs/slideicon.png" alt="icon" />
            //       </button>
            //     ),
            //     arrowLeftDisabled: (
            //       <button className="round1 dis">
            //         <img src="../imgs/slideicon.png" alt="icon" />
            //       </button>
            //     ),
            //     arrowRight: (
            //       <button className="round2">
            //         <img src="../imgs/slideicon.png" alt="icon" />
            //       </button>
            //     ),
            //     arrowRightDisabled: (
            //       <button className="round2 dis">
            //         <img src="../imgs/slideicon.png" alt="icon" />
            //       </button>
            //     ),
            //     addArrowClickHandler: true,
            //   },
            // },
          ]}
          //  offset = {30}
          breakpoints={{
            1000: {
              plugins: [
                // 'arrows',
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1.5,
                  },
                },
              ],
            },
            500: {
              plugins: [
                // 'arrows',
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1.25,
                  },
                },
              ],
            },
          }}
        >
          {props.item.stories_list.map((item, index) => {
            return (
              <>
              <div className="postion">
                <Cards
                  className="Cards cardpara mt-10"
                  src = {item.file_url != "" ? item.file_url : "../imgs/slide3.1.png"}
                  width="100%"
                  slug = {item.industry_details[0].slug}
                  // title={item.industry_details[0].name}
                  slug2 ={item.slug}
                  body={item.title}
                  publish={item.publish}
                  authorslug = {item.author_details[0].slug}
                  author={item.author_details[0].name}
                />
                { item.premium === "1" ?  <Premium className="Montbold Premiumtag1-1" /> : null}
                </div>
              </>
            );
          })}
         
        </Carousel>
      </div>) : null }
    </>
  );
}

export default Slider1;