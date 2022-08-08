import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
function Cards(props) {
  return (
    <>
     <Link to={props?.slug2 || " "}> 
      <div className={props.className}>
        <img
          src={props.src}
          className={props.wth}
          width={props.width}
          height={props.height}
          alt="cardimg"
        />
        <div className="crdbdy">
          <div className="cardtitle">
            {props.slug ? (
              <Link
                to={props?.slug || " "}
                style={{ color: "#096FFA" }}
                className="Montbold"
              >
                {props.title}
              </Link>
            ) : null}
          </div>
          <div className="cardbody cardpara MontMed ">
            {props.slug2 ? (
              <Link to={props?.slug2 || " "}>
                <p className={props.cardpara}>{props.body}</p>
              </Link>
            ) : " "}
          
          </div>
         
        </div>
        <div className="cardfoot">
        <ul className=" cardul MontMed " >
            <li>{moment(props.publish).format("Do MMMM YYYY")}</li>
            <li  >
            
            {props.authorslug ?<Link to={props?.authorslug || ""}>{props.author} </Link>: ""}
            

            </li>
            <li style={{paddingLeft : "10px"}}>
            <p className={props.tooltip}>
              {props.secondname}
              <span class="tooltiptext">{props.author2} </span>
           </p>
            </li>
           
          </ul>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Cards;
