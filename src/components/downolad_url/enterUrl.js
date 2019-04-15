import React, {Component} from 'react';
import './enterUrl.css'
class EnterUrl extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: '',
            errorMessage: 'dziala'

        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.props.downloadUrlFromInput(this.state.value).statusCode === 200){
            this.setState({
                errorMessage:"dziala"
            })
        }else {
            this.setState({
                errorMessage:"niedziala"
            })
        }

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
                         <label>{this.state.errorMessage}</label>
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

export default EnterUrl;