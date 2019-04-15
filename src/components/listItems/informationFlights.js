import React, {Component} from 'react';
import './informationFlightsStyle.css';

class InformationFlights extends Component {
    render() {
        const {data} = this.props;
        if (data.statusCode === 200) {
            return (
                <div className="row">
                    <div className="col class">
                        <h1>{data.pilot}</h1>
                        <h4>{data.date}</h4>
                        <ul className="list">
                            <li><span>Długość trasy: </span>{data.lengthRoute}</li>
                            <li><span>Wysokość startu: </span> {data.startHeight}</li>
                            <li><span>Wysokość londowania: </span>{data.endHeight}</li>
                            <li><span>Czas startu: </span>{data.startTime}</li>
                            <li><span>Czas londowania: </span>{data.startEnd}</li>
                            <li><span>Średnia pirędkość: </span> {data.speed} km/h</li>
                            <li><span>Czas trasy: </span>{data.routeTime}</li>
                            <li><span>Zadanie: </span>{data.task}</li>
                        </ul>
                    </div>
                </div>
            );
        }else{
            return (
                <div><h5 className="error">Zapytanie nie jest prawidłowe</h5></div>
            );
        }
    }
}
export default InformationFlights;