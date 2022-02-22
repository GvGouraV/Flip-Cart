import React, { Component } from "react";
import '../App.css';
import http from "../services/http";
import { Link } from "react-router-dom";
import Details from "./details";
import NavBar from "./navbar";
import { BsCart3,BsCheckCircleFill, BsLightningFill, BsStarFill, BsInfoCircle, BsFillStarFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
class ShowMob extends Component {

    state = {
        mobilesData: {},
        brandImg: {},
        start: 1,
        end: 3,
        img:"",
        reviews:{}
    }
    async fetchData() {
        let { id, brand } = this.props.match.params
        let response = await http.get(`/products/mobiles/${id}`)
        let response1 = await http.get(`/${brand}`)
        let response2 = await http.get(`/reviews/${id}/${this.state.start}/${this.state.end}`)
        let { data } = response
        let img = data.img
        console.log(response2.data)
        this.setState({ mobilesData: data, brandImg: response1.data,reviews:response2.data ,img:img})
    }
    componentDidMount() {
        this.fetchData();
      }  
      componentDidUpdate(prevProps, prevState) {
        
        if (prevProps !== this.props) this.fetchData();
        
      }
    changePageReviw = (val) =>{
       let s1 = {...this.state}
       s1.start=val
       s1.end=val+2
       console.log(val)
       this.setState(s1)
       this.fetchData()
    }
    changeImg =(val) =>{
        let s1 = {...this.state}
        s1.img = val
        this.setState(s1)
    }


    render() {
        let { img, name, discount, details = [], offers = [], rating, ratingDesc, prevPrice, price } = this.state.mobilesData
        let { imgList = [], brandImg } = this.state.brandImg
        let {list=[],pageinfo={}}= this.state.reviews
        let totalPagesNums = []
        for(let i=1;i<=pageinfo.numOfPages;i++){
            totalPagesNums.push(i)
        }
    console.log(pageinfo)
        return (<React.Fragment>
            <NavBar />
            <div className="row">
                <div className="col-5">
                    <div className="row">
                        <div className="col-2  mx-3">
                            {imgList.map(op => (
                                <img onClick={()=>this.changeImg(op)} className="border mt-2" src={op} width="50px" height="80px" />
                            ))}

                        </div>
                        <div className="col-8 text-center border">
                            <img src={this.state.img} height="420px" /><br />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-warning mx-2 text-light" style={{ backgroundColor: "#ff9f00", width: "270px", height: "55px" }}>
                                    <BsCart3 />ADD TO CART
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-warning mx-3 text-light" style={{ backgroundColor: "#fb641b", width: "270px", height: "55px" }}>
                                    <BsLightningFill />BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6 ">
                    <h5>{name}</h5>
                    <span className="bg-success text-light mx-4"  style={{paddingLeft:"7px",paddingRight:"7px",borderRadius:"5px" }}>{rating} <BsStarFill style={{fontSize:"11px"}} /></span>
                    <span className="text-secondary">{ratingDesc}</span><br />
                    <span style={{ fontSize: "30px" }}><BiRupee />{price}</span>
                    <span className="text-secondary mx-4"><s>{prevPrice}</s></span>
                    <span className="text-success mx-4">{discount}% <span className="text-dark"><BsInfoCircle /></span></span><br />
                    <span style={{ fontSize: "20px" }}>Available Offers</span><br />
                    <div className="row">
                        <div className="col-2">
                            <span className="text-secondary">Delivery</span>
                        </div>
                        <div className="col-6">
                            <svg width="12" height="12" viewBox="0 0 9 12" class="_1kbGNj" xmlns="http://www.w3.org/2000/svg"><path fill="#2874f0" class="_6xm1dD" d="M4.2 5.7c-.828 0-1.5-.672-1.5-1.5 0-.398.158-.78.44-1.06.28-.282.662-.44 1.06-.44.828 0 1.5.672 1.5 1.5 0 .398-.158.78-.44 1.06-.28.282-.662.44-1.06.44zm0-5.7C1.88 0 0 1.88 0 4.2 0 7.35 4.2 12 4.2 12s4.2-4.65 4.2-7.8C8.4 1.88 6.52 0 4.2 0z" fill-rule="evenodd"></path></svg>
                            <input className="input-search" type="search" id="pincode" name="pincode" placeholder="Search for pincode" value="" />
                            <span style={{ marginLeft: "60px", color: "#3a85e8" }}>Check</span>
                            <hr style={{ marginTop: "0px", color: "#3a85e8", height: "2px" }} />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-dark" style={{ fontSize: "11px", width: "150px", height: "30px" }}>CheckPincode</button>
                        </div>
                    </div>
                    {offers.map(p => (
                        <div key={p.img}>
                            <img src={p.img} width="20px" height="20px" />
                            <span style={{ fontSize: "16px" }}>{p.type}</span><span> </span>
                            <span style={{ fontSize: "14px" }}>{p.detail}</span>
                        </div>
                    ))}
                    <div ><img className="border mt-2" src={brandImg} width="50px" height="30px" />
                        <span style={{ fontSize: "15px", marginLeft: "15px" }}>Brand Warranty of 1 Year Available for Mobile and 6 Months for</span>
                    </div>
                    <div className="row">
                        <div className="col-1 mt-5 text-secondary">
                            Highights
                        </div>
                        <div className="col-4 mx-4">
                            <span className="mx-4" >Accessories</span>
                            <ul className="mt-2">
                                {details.map(p => (
                                    <li style={{ fontSize: "15px" }}>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-1 mt-5 text-secondary">Easy Payment Options</div>
                        <div className="col-5">
                            <span className="mx-4">   </span>
                            <ul className="mt-1">
                                <li style={{ fontSize: "15px" }}>    No cost EMI/month</li>
                                <li style={{ fontSize: "15px" }}> Debit/Flipkart EMI available</li>
                                <li style={{ fontSize: "15px" }}>Cash on Delivery</li>
                                <li style={{ fontSize: "15px" }}>Net Banking & Credit/Debit/ATM Card</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Seller</span>
                        <span style={{ color: "blue", marginLeft: "19px" }}>SuperComNet</span>
                        <span style={{ backgroundColor: "#2874f0", borderRadius: "4px", color: "white", marginLeft:"20px", paddingLeft:"5px",paddingRight:"5px" }}>4.2 <BsFillStarFill style={{fontSize:"11px"}} className="text-light" /></span>
                        <ul className="mx-5">
                            <li>10 Day Replacement</li>
                        </ul>
                        <img src="https://i.ibb.co/j8CMRbn/CCO-PP-2019-07-14.png" width="400px" />
                    </div>
                    <div className="border" style={{fontSize:"15px"}}>
                        <h4>Rating & Reviews</h4>
                        {list.map(op=>(
                           <div className="border">
                           <span className="bg-success mx-3 text-light" style={{borderRadius:"3px",paddingLeft:"5px",paddingRight:"5px"}}>{op.star}<BsFillStarFill style={{fontSize:"10px"}}/></span>
                           <span className="h6 mx-4">{op.title}</span><br/>
                           <p className="mx-4 mt-2 " >{op.description}</p>
                           <span className="text-secondary "style={{marginTop:"20px"}}>{op.author}</span>
                           <span className="text-secondary m-3"><BsCheckCircleFill/>Certified Buyer</span>
                        </div>
                        ))}
                    </div>
                    <span className="m-3">Page {pageinfo.page} of {pageinfo.numOfPages}</span><br/>
                    <span style={{color:"#2874f0"}}  onClick={()=>this.changePageReviw(pageinfo.page-1)}>
                    {pageinfo.page>1&&"Previous"}
                    </span>
                         {totalPagesNums.map(op=>(
                           <span onClick={()=>this.changePageReviw(op)} className="mx-2"
                              style={op==pageinfo.page?{borderRadius:"20px",backgroundColor:"#2874f0",color:"white",padding: "5px",width:"50px"}:{}}>
                                  {op}
                             </span>
                         ))}
                         <span style={{color:"#2874f0"}}  onClick={()=>this.changePageReviw(pageinfo.page+1)}>
                         {pageinfo.page!=pageinfo.numOfPages&&"Next"}
                    </span>
                </div>

            </div>
            <Details />

        </React.Fragment>)


    }
}
export default ShowMob;