import React, { Component } from "react";
import http from "./http"
class MainComp extends Component {

    state = {
        empData: []
    }

    async componentDidMount() {
        let response = await http.get("/getUser")
        let { data } = response
        console.log(data)
        this.setState({ empData: data })
    }

    render() {
        let { empData } = this.state

        return (<div className="container">
            <div className="row">
                {empData.map(op => (
                    <div className="col-3">
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src="..." alt={op.id} />
                            <div class="card-body">
                                <h5 class="card-title">{op.name}</h5>
                                <p class="card-text">{op.company}</p>
                                <h5 class="card-title">{op.age}</h5>
                                <a href="#" class="btn btn-primary">Check</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
    }
};
export default MainComp;