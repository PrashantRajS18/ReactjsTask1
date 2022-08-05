import React from "react";

import "../App.css";
import Carousel, {
  arrowsPlugin,
  slidesToScrollPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Premium from "./Premium";
import Vcccards from "./Vcccards";
function VccSlide(props) {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="Vccslide postion ">
          <div className="container" key={props.item.stories_list[0].feid}>
            <div className="slideflex container mt-40">
              <div className="Vccpre">
                <a href={props.item.section_slug}>
                  <h1 className="Mont  " style={{ color: "#FFFFFF" }}>
                    {props.item.section_name}{" "}
                    <img src="../imgs/crown.png" alt="crown" />
                  </h1>
                </a>
              </div>
              <div className="hide">
                <button className="buttonVcc Montbold">
                  <a href="/" style={{ color: "#FFFFFF" }}>
                    Subscribe
                  </a>
                </button>
              </div>
            </div>
            <div className="blrrelate2"></div>
            <Carousel
            className="scrollsnap"
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
                    
                      <Vcccards
                        className=" Vcccard mt-10"
                        src={item.file_url}
                        width="100%"
                        slug={item.industry_details[0].slug}
                        title={item.industry_details[0].name}
                        slug2={item.slug}
                        body={item.title}
                        publish={item.publish}
                        authorslug={item.author_details[0].slug}
                        author={item.author_details[0].name}
                      />
                      {item.premium === "1" ? (
                        <Premium className="Montbold Premiumtag" />
                      ) : null}
                    </div>
                  </>
                );
              })}
            </Carousel>
            <div className="none vccbtn2">
              <button className="buttonVcc Montbold">
                <a href="/" style={{ color: "#FFFFFF" }}>
                  Subscribe
                </a>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default VccSlide;
