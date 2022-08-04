import React from "react";
import Cardflex2 from "./Cardflex2";
import { Adv } from "./Adv";
import Premium from "./Premium";

import Adv2 from "../imgs/adv2.png";
function Stories(props) {
  return (
    <>
       {props.item.stories_list[0] ? (
         <div className="container" key={props.item.stories_list[0].feid}>

         <h1>{props.item.section_name}</h1>
        <div className="row">
        {props.item.stories_list.map((item,index)=>{
          return(
            <>
            <div className="col-6 postion">
            <Cardflex2
              className="flex mt-10"
              src={item.file_url}
              width="30%"
              slug = {item.industry_details[0].slug}
              title={item.industry_details[0].name}
              slug2={item.slug}
              body={item.title}
              publish={item.publish}
              author={item.author_details[0].name}
            />
            { item.premium === "1" ?  <Premium className="Montbold Premiumtag1-2" /> : null}
          </div>
            </>
          )
        })

        }
         
        </div>
      </div> ) : null }
     
    </>
  );
}

export default Stories;
