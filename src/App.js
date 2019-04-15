import React, {Component} from 'react';
import './App.css';
import InformationFlights from "./components/listItems/informationFlights";
import Map from "./components/map/mapFlight";
import EnterUrl from "./components/downolad_url/enterUrl";

class App extends Component {
    state = {
        data: {
            pilot: "",
            date: "",
            lengthRoute: "",
            startHeight: "",
            endHeight: "",
            startTime: "",
            startEnd: "",
            speed: "",
            routeTime: "",
            task: "",
            statusCode: "",
            coordinates: [
                {
                    lat: "",
                    lng: ""
                }
            ]
        },
    };

    downloadUrlFromInput = url => {
        fetch("http://localhost:8080/downloadUrl", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({url: url})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                });
            })
    };

    render() {
        return (
            <div className="container">
                <EnterUrl downloadUrlFromInput={this.downloadUrlFromInput}/>
                <div className="row heightDiv">
                    <div className="col-10 mx-auto col-lg-4 my-5">
                        <InformationFlights data={this.state.data}/>
                    </div>
                    <div className="col-10 mx-auto col-lg-8 heightDiv my-5">
                        <Map data={this.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
