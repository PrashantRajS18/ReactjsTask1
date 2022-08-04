import React from "react";
import { useRef } from "react";
import Premium from "./Premium";
import Vcccards from "./Vcccards";
function VccSlide(props) {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="Vccslide postion ">
          <div className="container"  key={props.item.stories_list[0].feid}>
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
            <div className={props.className}></div>
            <div ref={ref} className=" mediascroller">
              <div className="relate">
                <button onClick={() => scroll(300)} className="round">
                  <img src="../imgs/slideicon.png" alt="icon" />
                </button>
              </div>
              <div className='relateryt2'>
    <button  onClick={() => scroll(-300)} className='round'><img src='../imgs/slideicon.png' className='sIcon' alt='icon' /></button>
    </div>
    {props.item.stories_list.map((item, index) => {
            return (
              <>
              <div className="postion">
                <Vcccards
                  className=" Vcccard mt-10"
                  src={item.file_url}
                  width="100%"
                  slug = {item.industry_details[0].slug}
                  title={item.industry_details[0].name}
                  slug2 = {item.slug}
                  body={item.title}
                  publish={item.publish}
                  authorslug={item.author_details[0].slug}
                  author={item.author_details[0].name}
                />
                 { item.premium === "1" ?  <Premium className="Montbold Premiumtag" /> : null}
                 </div>
              </>
            );
          })}     
            </div>
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