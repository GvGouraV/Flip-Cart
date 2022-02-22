import React, { Component } from "react";
import Navbar from "./navbar";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../App.css';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import http from "../services/http";
import Details from "./details";
class Home extends Component {

    state = {
        slideImages: [
            {
                url: 'https://i.ibb.co/qxHzVsp/30d7dffe1a1eae09.jpg',
                caption: 'Slide 3'
            },
            {
                url: 'https://i.ibb.co/tq9j6V7/4dfdf0c59f26c4a1.jpg',
                caption: 'Slide 2'
            },
            {
                url: 'https://i.ibb.co/vQZhcvT/68af1ae7331acd1c.jpg',
                caption: 'Slide 3'
            },
        ],
        dealsData: [],
        startindex: 0,
        endIndex: 4
    }
    async componentDidMount() {
        let response = await http.get("/deals")
        let { data } = response
        this.setState({ dealsData: data })
    }

    nextDeals = () => {
        let s1 = { ...this.state }
        s1.startindex = s1.startindex + 5
        s1.endIndex = s1.endIndex + 5
        this.setState(s1)
    }
    prevDeals = () => {
        let s1 = { ...this.state }
        s1.startindex = s1.startindex - 5
        s1.endIndex = s1.endIndex - 5
        this.setState(s1)
    }

    render() {
        let { slideImages, dealsData, startindex, endIndex } = this.state
        let arr = dealsData.filter((op, index) => startindex <= index && endIndex >= index)
        console.log(arr)

        return (<React.Fragment>
            <Navbar />
            <div className="slide-container ">
                <Zoom scale={0.4}>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-fade mx-4" key={index}>
                            <img src={slideImage.url} height="250px" width="1320px" />

                        </div>
                    ))}
                </Zoom >
            </div>
            <div className="row">
                <div className="col-9">
                    <h6 className="m-3 mx-4">Deals Of The day</h6><hr />
                    <div className="row">
                        <div className="col-1 text-center" style={{ marginTop: "70px" }}>
                            {startindex != 0 && <AiOutlineDoubleLeft onClick={() => this.prevDeals()} />}
                        </div>
                        {arr.map(op => (
                            <div className="col-2 text-center">
                                <img src={op.img} width="100px" height="190px" onClick={()=>this.props.history.push(`/home/Mobiles/${op.brand}/${op.id}`)}></img><br />
                                <p style={{ overflow: "hidden", whiteSpace: "nowrap", fontSize: "12px", width: "150px" }}>{op.name}...</p>
                                <p style={{ fontSize: "12px", color: "green" }}>{op.discount}%</p>
                            </div>
                        ))}
                        <div className="col-1" style={{ marginTop: "70px" }}>
                            {endIndex != 14 && <AiOutlineDoubleRight onClick={() => this.nextDeals()} />}
                        </div>
                    </div>
                </div>
                <div className="col-2" >
                    <img src="https://i.ibb.co/1GBrRnn/fa04c5362949d9f1.jpg" width="210px" height="330px"></img>
                </div>
                <div className="col-1" style={{ backgroundColor: "lightgray" }}>
                </div>
            </div>
            <div className="row " style={{ backgroundColor: "lightgray" }}>
                <div className="col-4 mx-3">
                    <img src="https://i.ibb.co/dPVHZGW/d5db30a716f82657.jpg" width="430px"></img>
                </div>
                <div className="col-4">
                    <img src="https://i.ibb.co/Lzz36zB/31efaad41a3e4208.jpg" width="430px"></img>
                </div>
                <div className="col-3">
                    <img src="https://i.ibb.co/fGX7sFh/4e219998fadcbc70.jpg" width="380px"></img>
                </div>
            </div>
            <div className="mx-4 mt-2" style={{ color: "gray" }}>
                <h6>Flipkart: The One-stop Shopping Destination</h6>
                <p>
                    E-commerce is revolutionizing the way we all shop in India.
                    Why do you want to hop from one store to another in search of the latest phone when you can f
                    ind it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly
                    imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue
                    fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining
                    tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder
                    juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses
                    and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured
                    about finding them all here. For those of you with erratic working hours, Flipkart is your best bet.
                    Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down
                </p>
                <h6>Flipkart Plus</h6>
                <p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more! What's more, you can even use the Flipkart supercoins for a number of exciting services, like: An annual Zomato Gold membership An annual Hotstar Premium membership 6 months Gaana plus subscription Rupees 550 instant discount on flights on ixigo Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.</p>
                <h6>No Cost EMI</h6>
                <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
            </div>
            <Details/>
        </React.Fragment>
        )

    }
} export default Home;