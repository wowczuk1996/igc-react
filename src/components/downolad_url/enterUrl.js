import React, {Component} from 'react';

class Url extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: ''

        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        this.props.downloadUrlFromInput(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h1>Zobacz trasę swojego lotu</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                   className="form-control "
                                   placeholder="podaj link do pliku igc"
                                   value={this.state.value}
                                   onChange={this.handleChange}
                            />
                            <div className="col-6 mx-auto">
                                <button type="submit"
                                        className={'btn btn-block btn-success mt-3'}>
                                    Wyślij
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Url;