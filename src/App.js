import React, {Component} from 'react';
import './App.css';
import InformationFlights from "./components/ListItems/InformationFlights";

class App extends Component {
    state = {
        data: [],
        url: ''
    };


    componentDidMount = () => {
        fetch("http://localhost:8080/downloadUrl")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                });
            });
    };

    // downloadDataAboutFlihter = async () => {
    //     try {
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState(state => {
    //             return {data: jsonData.data}
    //         })
    //     } catch (e) {
    //         console.log(e);
    //     }
    //
    //
    // }


    render() {
        return (
            <div className="container">
                <InformationFlights data = {this.state.data} />
            </div>
        );
    }
}

export default App;
