import React from "react";
import Cards from "./Cards.";

import Cardflex2 from "./Cardflex2";
import Premium from "./Premium";

import Adv3 from "../imgs/adv3.png";
function Editor(props) {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container row" key={props.item.stories_list[0].feid}>
          <div style={{ marginTop: "30px" }}>
            <h2>{props.item.section_name}</h2>
          </div>
          <div className="col-4 mt-10">
            <div className="postion">
              <Cards
                src={props.item.stories_list[0].file_url}
                width="100% !important"
                slug={props.item.stories_list[0].industry_details[0].slug}
                title={props.item.stories_list[0].industry_details[0].name}
                slug2={props.item.section_slug}
                body={props.item.stories_list[0].title}
                publish={props.item.stories_list[0].publish}
                authorslug = {props.item.stories_list[0].author_details[0].slug}
                author={props.item.stories_list[0].author_details[0].name}
              />
              {props.item.stories_list[0].premium === "1" ? (
                <Premium className="Montbold Premiumtag1-1" />
              ) : null}
            </div>
          </div>
          <div className="col-4  ">
            {props.item.stories_list.map((item, index) => {
              if (index === 0) return null;
              return (
                <>
                  <div className="postion">
                    <Cardflex2
                      className="flex mt-10 "
                      src={item.file_url}
                      width="40%"
                      slug={item.industry_details[0].slug}
                      title={item.industry_details[0].name}
                      slug2={item.slug}
                      body={item.title}
                      publish={item.publish}
                      authorslug = {item.author_details[0].slug}
                      author={item.author_details[0].name}
                    />
                    {item.premium === "1" ? (
                      <Premium className="Montbold Premiumtag1-2" />
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-1 ">
            <hr className="vrt"></hr>
          </div>
          <div className="col-3">
            <div className="adv3">
              <p className="adtxt Mont">Advertisement</p>
              <div style={{ textAlign: "center" }}>
                <img
                  src={Adv3}
                  className="adimg3"
                  height=""
                  width="100%"
                  alt="add 1"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Editor;
