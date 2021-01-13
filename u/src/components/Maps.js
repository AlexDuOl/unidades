import React, { Component } from 'react';
import { Map, Polyline, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            positions: [
                { lat: 20.633848, lng: -103.43243 },
                { lat: 20.634493, lng: -103.425846 },
                { lat: 20.6366266, lng: -103.4225952 },
                { lat: 20.6379632, lng: -103.4200849 },
            ]
        }
    }

    displayMarkers = () => {
        return this.state.positions.map(({lat,lng}) => {
        return <Marker position={{lat,lng}} />
        })
    }

    render() {
        return (
            <div id="map" className="ui segment" style={{width: '430px', height: '430px', align: 'center'}}>
                <Map
                    style={{ width: '400px', height: '400px' }}
                    google={this.props.google}
                    zoom={15}
                    initialCenter={{ lat: 20.633848, lng: -103.43243 }}
                    >
                    {this.displayMarkers()}
                    <Polyline
                        path={this.state.positions}
                        geodesic={true}
                        options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.0,
                        strokeWeight: 2,

                        }}
                    />
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBfi7VNKtBAGPFAa43c_CEsLSlA0d32M9g'
})(Maps, Marker);