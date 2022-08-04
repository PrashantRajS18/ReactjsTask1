import React from "react";
import Cards from "../Components/Cards.";
import Premium from "./Premium";

function CardFlex(props) {
  return (
    <>
      {props.item.stories_list ? (
        <div className="container Cardflex" key={props.item.stories_list.feid}>
          <div className=" row">
            {props.item.stories_list.map((item, index) => {
              if (index === 0 ) return null;
              return (
                <>
                  <div className="col-3 postion">
                    <Cards
                      className="cardflx"
                      src={item.file_url}
                      wth = "Cardimg"
                      width ="100%"
                      slug = {item.industry_details[0].slug}
                      title={item.industry_details[0].name}
                      slug2 ={item.slug}
                      body={item.title}
                      publish={item.publish}
                      authorslug = {item.author_details[0].slug}
                      author={item.author_details[0].name}
                    />
                    { item.premium === "1" ?  <Premium className="Montbold Premiumtag1-3" /> : null}
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

export default CardFlex;