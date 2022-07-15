import Sec1 from '../imgs/sec1.png'
const Section1 = ()=>{
    return(
        <>
          <div className="container">
            <div className="sec1  ">
                <div className='sec1sub1 '>
                    <a href="/" style={{color:"#096FFA"}} className="Montbold">MANUFACTURING</a>
                    <h2 className="Mont" style={{marginTop : "20px"}}>Warburg Pincus set to acquire majority stake in auto parts maker</h2>
                    <p className="MontReg" style={{marginTop : "20px"}}>Private equity firm TPG, which is reportedly heading towards a public listing,
                     said on Thursday it had appointed long-time company executive Todd Sisitsky as president,
                      effective immediately.</p>
                      <ul className = "MontMed">
                      <li>30 September</li>
                        <li>Madhurima Nandy</li>
                      </ul>
                      <div>
                      <button className="buttonSec1 Montbold" width = "100%" style={{marginTop : "10px"}}><a href = "/" style={{color:"#FFFFFF"}}>READ MORE</a></button>
                      </div>
                </div>
                <div className='sec1img'>
                    <img  src={Sec1} className = "sec1img1" alt ="sec1 img"/>
                </div>
              </div>
          </div>
        </>
    )
}

export default Section1