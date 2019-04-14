import React, {Component} from 'react';
import './InformationItemStyle.css';

class InformationItem extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h1>Hello</h1>
                </div>
                <div className="col-6">
                    <h1>Hello2</h1>
                </div>

            </div>
        );
    }
}

export default InformationItem;