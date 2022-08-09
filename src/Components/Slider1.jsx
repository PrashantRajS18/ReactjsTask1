import React from "react";
import { useRef , useState } from "react";
import Cards from "./Cards.";
import Premium from "./Premium";
import "../App.css";
import { Link } from "react-router-dom";

function Slider1(props) {
  const ref = useRef(null);
  // const [counter, setCounter] = useState(0)

  // function count(){
  //   setCounter(counter+1)
  // }

// setCounter(prev => prev+1)

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
            <Link to={props.item.section_slug}>
              <h1 className="Mont mt-40">{props.item.section_name}</h1>
            </Link>
            <p className="MontMed mt-40">
              View More <img src="../imgs/rytarow.png" alt="arrow" />{" "}
            </p>
          </div>
          {/* <div className="blrrelate"></div> */}
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
                      imgslug = {item.slug}
                      wth ="roundcard"
                      src={
                        item.file_url !== ""
                          ? item.file_url
                          : "../imgs/slide3.1.png"
                      }
                      width="100%"
                     
                      slug2 = {item.slug}
                      cardpara = "cardpara"
                      body={item.title}
                      publish={item.publish}
                      authorslug = {item.author_details[0].slug}
                      tooltip = {item.author_details.length >1 ? "tooltip" : ""}
                      author={item.author_details[0].name}
                      author2 = {item.author_details.length > 1 ? item.author_details[1].name : " "}
                      secondname = {item.author_details.length > 1 ?  "+1" : " "}
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
