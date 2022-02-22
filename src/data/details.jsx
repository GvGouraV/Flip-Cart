import React from "react";
import {BsFillHandbagFill,BsFillBookmarkStarFill,BsFillGiftFill} from 'react-icons/bs';
import {MdHelp} from 'react-icons/md';
function Details(){
 
    return(<React.Fragment>
         <div className="mx-4 mt-1">
                <div className="row " style={{ fontSize: "13px",backgroundColor:"#18191a" ,color:"white"}}>
                    <div className="col-1 mx-5 mt-5">
                        <span style={{ color: "gray" }}>About</span><br /><br/>
                        Contact Us<br />
                        About Us<br />
                        Careers<br />
                        Flipkart Stories<br />
                        Press<br />
                        Flipkart Wholesale<br />
                    </div>
                    <div className="col-1 mx-4 mt-5">
                        <span style={{ color: "gray" }}>HELP</span><br /><br/>
                        Payments<br />
                        Shipping<br />
                        Cancellation & Returns<br />
                        FAQ<br />
                        Report Infringement<br />
                    </div>
                    <div className="col-1 mx-3 mt-5">
                        <span style={{ color: "gray" }}>POLICY</span><br /><br/>
                        Return Policy<br />
                        Terms Of Use<br />
                        Security<br />
                        Privacy<br />
                        Sitemap<br />
                        EPR Compliance<br />
                    </div>
                    <div className="col-1 mx-3 mt-5">
                        <span style={{ color: "gray" }}>SOCIAL</span><br /><br/>
                        Facebook<br />
                        Twitter<br />
                        YouTube<br />
                    </div>
                    <div className="col-1 mt-5" style={{ borderLeft: "2px solid gray", height: "200px", marginLeft: "80px" }} >

                    </div>
                    <div className="col-2 mt-5">
                        <span style={{ color: "gray" }}> Mail Us:</span><br /><br/>
                        Flipkart Internet Private Limited,<br />
                        Buildings Alyssa, Begonia &<br />
                        Clove Embassy Tech Village,<br />
                        Outer Ring Road, Devarabeesanahalli Village,<br />
                        Bengaluru, 560103,<br />
                        Karnataka, India<br />
                    </div>
                    <div className="col-2 mt-5">
                        <span style={{ color: "gray" }}> Registered Office Address:</span><br /><br/>
                        Flipkart Internet Private Limited,<br />
                        Buildings Alyssa, Begonia &<br />
                        Clove Embassy Tech Village,<br />
                        Outer Ring Road, Devarabeesanahalli Village,<br />
                        Bengaluru, 560103,<br />
                        Karnataka, India<br />
                        CIN : U51109KA2012PTC066107<br />
                        Telephone: 1800 202 9898<br />
                    </div><br/><br/>
                  <hr/>
                  <div className="row mt-2" style={{fontSize:"15px",height:"40px"}}>
                       <div className="col-2"><BsFillHandbagFill className="text-warning"/> Sell On FlipCart</div>
                      <div className="col-2"><BsFillBookmarkStarFill className="text-warning"/>  Advertise</div>
                      <div className="col-2"><BsFillGiftFill className="text-warning"/>  Gift Cards</div>
                      <div className="col-2"><MdHelp className="text-warning"/>  Help Center</div>
                      <div className="col-4">
                      <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"/>
                      </div>
                  </div>
                 
                </div>
            </div>
    </React.Fragment>)

}
export default Details;