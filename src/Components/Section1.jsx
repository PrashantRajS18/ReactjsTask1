import moment from "moment";
const Section1 = (props) => {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container">
          <div className="sec1" key={props.item.stories_list[0].feid}>
            <div className="sec1sub1  ">
              <a
                href={props.item.stories_list[0].industry_details[0].slug}
                style={{ color: "#096FFA" }}
                className="Montbold"
              >
                {props.item.stories_list[0].industry_details[0].name}
              </a>
              <a href={props.item.stories_list[0].slug}>
                <h2 className="Mont" style={{ marginTop: "20px" }}>
                  {props.item.stories_list[0].title}
                </h2>
              </a>
              <p className="MontReg sec1para" style={{ marginTop: "20px" }}>
                {props.item.stories_list[0].summary}
              </p>
              <ul className="MontMed cardulsec1">
                <li>
                  {moment(props.item.stories_list[0].publish).format(
                    "Do MMMM YYYY"
                  )}
                </li>
                <li>
                  <a href={props.item.stories_list[0].author_details[0].slug}>
                    {props.item.stories_list[0].author_details[0].name}
                  </a>
                </li>
              </ul>
              <div>
                <button
                  className="buttonSec1 Montbold hide"
                  width="100%"
                  style={{ marginTop: "10px" }}
                >
                  <a href="/" style={{ color: "#FFFFFF" }}>
                    READ MORE
                  </a>
                </button>
              </div>
            </div>
            <div className="sec1img">
              <a href={props.item.stories_list[0].slug}>
                <img
                  src={props.item.stories_list[0].file_url}
                  width="100%"
                  className="sec1img1"
                  alt="sec1 img"
                />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Section1;
