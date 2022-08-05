import React from "react";
import { useRef } from "react";
import Cards from "./Cards.";
import Premium from "./Premium";
import "../App.css";

function Slider1(props) {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      {props.item.stories_list[0] ? (
        <div
          className="container postion  "
          key={props.item.stories_list[0].feid}
        >
          <div className="relate">
            <button onClick={() => scroll(290)} className="round">
              <img src="../imgs/slideicon.png" alt="icon" />
            </button>
          </div>
          <div className="relateryt">
            <button onClick={() => scroll(-290)} className="round">
              <img src="../imgs/slideicon.png" className="sIcon" alt="icon" />
            </button>
          </div>
          <div className="slideflex">
            <a href={props.item.section_slug}>
              <h1 className="Mont mt-40">{props.item.section_name}</h1>
            </a>
            <p className="MontMed mt-40">
              View More <img src="../imgs/rytarow.png" alt="arrow" />{" "}
            </p>
          </div>
          <div className="blrrelate"></div>
          <div ref={ref} className=" mediascroller postion">
            {props.item.stories_list.map((item) => {
              return (
                <>
                  <div
                    className="Cards postion "
                    key={props.item.stories_list[0].feid}
                  >
                    <Cards
                      className=" mt-10"
                      wth ="roundcard"
                      src={
                        item.file_url !== ""
                          ? item.file_url
                          : "../imgs/slide3.1.png"
                      }
                      width="100%"
                      // title={item.industry_details[0].name}
                      body={item.title}
                      publish={item.publish}
                      author={item.author_details[0].name}
                    />
                    {item.premium === "1" ? (
                      <Premium className="Montbold Premiumtag" />
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Slider1;
