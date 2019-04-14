import React, {Component} from 'react';

class InformationFlights extends Component {

    render() {
        const { data } = this.props;
        return (
            <div className="row">
                <div className="col">
                   <ul>
                       <li>{data.name}</li>
                       <li>{data.lengthRoute}</li>
                       <li>{data.startTime}</li>
                       <li>{data.startEnd}</li>
                       <li>{data.speed}</li>
                       <li>{data.name}</li>
                       <li>{data.name}</li>
                       <li>{data.name}</li>
                       <li>{data.name}</li>
                       <li>{data.name}</li>

                   </ul>

                </div>

            </div>
        );
    }
}

export default InformationFlights;