import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

class MapFlight extends Component {

    render() {
        const {data} = this.props;
        const coordinates = data.coordinates;
        if (data.statusCode === 200) {
            return (
                <Map
                    google={this.props.google}
                    zoom={13}
                    center={{lat: coordinates[0].lat, lng: coordinates[0].lng}}
                >
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div></div>
                    </InfoWindow>

                    <Marker
                        title={'Początek lotu'}
                        name={'Start'}
                        position={{lat: coordinates[0].lat, lng: coordinates[0].lng}}/>
                    <Marker
                        title={'Koniec lotu'}
                        name={'End'}
                        position={{
                            lat: coordinates[coordinates.length - 1].lat,
                            lng: coordinates[coordinates.length - 1].lng
                        }}/>

                    <Polyline
                        path={coordinates}
                        geodesic={true}
                        options={{
                            strokeColor: "#1E90FF",
                            strokeOpacity: 0.75,
                            strokeWeight: 2
                        }}
                    />
                </Map>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDeY2a_UI4c8TNlgb-Cv2yiBSOYnmCK3KY")
})(MapFlight)